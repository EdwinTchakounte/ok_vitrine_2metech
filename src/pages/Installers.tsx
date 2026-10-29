import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  Briefcase,
  Upload,
  FileText,
  CreditCard,
  Send,
  CheckCircle2,
  Users,
  Award,
  Zap,
  Loader2,
  ArrowRight,
} from 'lucide-react';
import { InstallerApplication } from '../types';
import { supabase } from '../supabaseClient';
import PageHero from '../components/ui/PageHero';
import { Section, SectionHeader } from '../components/ui/Section';
import PageTransition from '../components/ui/PageTransition';
import Toast, { ToastVariant } from '../components/ui/Toast';
import { ButtonLink } from '../components/ui/Button';
import { cn } from '../lib/cn';

const ZONES = [
  'Adamaoua',
  'Centre',
  'Est',
  'Extrême-Nord',
  'Littoral',
  'Nord',
  'Nord-Ouest',
  'Ouest',
  'Sud',
  'Sud-Ouest',
];

const Installers: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<InstallerApplication>({
    name: '',
    email: '',
    phone: '',
    profession: '',
    type: 'individual',
    company: '',
    zone: '',
    experience: '',
    motivation: '',
    id: Date.now(),
  });

  const [files, setFiles] = useState<{ cni?: File; cv?: File; document?: File }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    variant: ToastVariant;
    title: string;
    description?: string;
  }>({ open: false, variant: 'success', title: '' });

  const benefits = [
    { key: 'network', icon: Users },
    { key: 'training', icon: Award },
    { key: 'support', icon: Zap },
  ] as const;

  const showError = (msg: string) =>
    setToast({ open: true, variant: 'error', title: msg });

  const uploadFile = async (
    file: File | undefined,
    fileType: 'cni' | 'cv' | 'document',
    applicantId: string,
  ): Promise<string | null> => {
    if (!file) return null;
    const fileExtension = file.name.split('.').pop();
    const fileName = `${applicantId}_${fileType}_${Date.now()}.${fileExtension}`;
    const filePath = `installers/${fileName}`;
    const { error } = await supabase.storage
      .from('installer-documents')
      .upload(filePath, file, { cacheControl: '3600', upsert: false });
    if (error) throw error;
    const { data } = supabase.storage.from('installer-documents').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value } as InstallerApplication));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: 'cni' | 'cv' | 'document',
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showError(t('installers.errors.fileSize'));
      return;
    }
    const allowed = [
      'application/pdf',
      'image/jpeg',
      'image/png',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!allowed.includes(file.type)) {
      showError(t('installers.errors.fileType'));
      return;
    }
    setFiles((p) => ({ ...p, [fileType]: file }));
  };

  const validate = (): boolean => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.profession ||
      !formData.zone
    ) {
      showError(t('installers.errors.required'));
      return false;
    }
    if (formData.type === 'company' && !formData.company) {
      showError(t('installers.errors.company'));
      return false;
    }
    if (!files.cni) {
      showError(t('installers.errors.cni'));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showError(t('installers.errors.email'));
      return false;
    }
    if (!/^(\+237|237)?[26][0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      showError(t('installers.errors.phone'));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const applicantId = `installer_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;

      const cniUrl = await uploadFile(files.cni, 'cni', applicantId);
      const cvUrl = files.cv ? await uploadFile(files.cv, 'cv', applicantId) : null;
      const documentUrl = files.document
        ? await uploadFile(files.document, 'document', applicantId)
        : null;

      if (!cniUrl) throw new Error(t('installers.errors.upload'));

      const application = {
        id: applicantId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        profession: formData.profession,
        type: formData.type,
        company: formData.company || null,
        zone: formData.zone,
        experience: formData.experience,
        motivation: formData.motivation,
        cni_url: cniUrl,
        cv_url: cvUrl,
        document_url: documentUrl || null,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from('enmkit_installateur')
        .insert([application])
        .select()
        .single();
      if (error) throw new Error(error.message);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        profession: '',
        type: 'individual',
        company: '',
        zone: '',
        experience: '',
        motivation: '',
        id: Date.now(),
      });
      setFiles({});
    } catch (err: unknown) {
      showError((err instanceof Error && err.message) || t('installers.errors.generic'));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <PageTransition>
        <Section className="flex min-h-[80svh] items-center bg-canvas">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-lg rounded-xl border border-line bg-surface p-10 text-center shadow-soft lg:p-12"
          >
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg border border-brand-green-200 bg-brand-green-50 text-brand-green-600 dark:border-brand-green-500/25 dark:bg-brand-green-500/10 dark:text-brand-green-300">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="mt-6 text-fluid-2xl font-bold tracking-tighter text-fg">
              {t('installers.successTitle')}
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
              {t('installers.successText')}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-primary btn-md"
              >
                {t('installers.newApplication')}
              </button>
              <ButtonLink to="/" variant="outline" size="md">
                {t('common.back')}
              </ButtonLink>
            </div>
          </motion.div>
        </Section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('installers.eyebrow')}
        title={t('installers.title')}
        subtitle={t('installers.subtitle')}
      />

      {/* Benefits */}
      <Section className="bg-canvas">
        <SectionHeader
          title={t('installers.benefitsTitle')}
          subtitle={t('installers.benefitsSubtitle')}
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface p-6 text-center transition-colors duration-300 hover:bg-surface-hover lg:p-7"
            >
              <span className="icon-tile mx-auto h-11 w-11">
                <b.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-fg">
                {t(`installers.benefits.${b.key}.title`)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {t(`installers.benefits.${b.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section className="bg-surface-sunken">
        <div className="absolute inset-0 -z-10 bg-grid mask-fade-y" aria-hidden="true" />

        <SectionHeader
          title={t('installers.formTitle')}
          subtitle={t('installers.formSubtitle')}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-10 rounded-xl border border-line bg-surface p-6 shadow-soft lg:p-9"
          >
            {/* Personal info */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-[15px] font-bold text-fg">
                <User className="h-4 w-4 text-brand-blue-600 dark:text-brand-blue-300" />
                {t('installers.sections.personal')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label={t('installers.fields.name')}
                  required
                  icon={<User className="h-4 w-4" />}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.name')}
                  disabled={loading}
                />
                <Field
                  label={t('installers.fields.email')}
                  type="email"
                  required
                  icon={<Mail className="h-4 w-4" />}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.email')}
                  disabled={loading}
                />
                <Field
                  label={t('installers.fields.phone')}
                  type="tel"
                  required
                  icon={<Phone className="h-4 w-4" />}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.phone')}
                  disabled={loading}
                />
                <Field
                  label={t('installers.fields.profession')}
                  required
                  icon={<Briefcase className="h-4 w-4" />}
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.profession')}
                  disabled={loading}
                />
              </div>
            </div>

            {/* Professional info */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-[15px] font-bold text-fg">
                <Building2 className="h-4 w-4 text-brand-blue-600 dark:text-brand-blue-300" />
                {t('installers.sections.professional')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="type" className="field-label">
                    {t('installers.fields.type')}
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="input-base"
                  >
                    <option value="individual">{t('installers.fields.individual')}</option>
                    <option value="company">{t('installers.fields.company')}</option>
                  </select>
                </div>

                {formData.type === 'company' && (
                  <Field
                    label={t('installers.fields.companyName')}
                    required
                    icon={<Building2 className="h-4 w-4" />}
                    name="company"
                    value={formData.company || ''}
                    onChange={handleInputChange}
                    placeholder={t('installers.placeholders.company')}
                    disabled={loading}
                  />
                )}

                <div className={formData.type !== 'company' ? 'sm:col-span-1' : ''}>
                  <label htmlFor="zone" className="field-label">
                    {t('installers.fields.zone')}{' '}
                    <span className="text-brand-blue-600 dark:text-brand-blue-300">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="zone"
                      name="zone"
                      value={formData.zone}
                      onChange={handleInputChange}
                      required
                      disabled={loading}
                      className="input-base input-with-icon"
                    >
                      <option value="">{t('installers.zones.choose')}</option>
                      {ZONES.map((z) => (
                        <option key={z} value={z}>
                          {z}
                        </option>
                      ))}
                    </select>
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
                  </div>
                </div>

                <TextArea
                  label={t('installers.fields.experience')}
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.experience')}
                  disabled={loading}
                  className="sm:col-span-2"
                />
                <TextArea
                  label={t('installers.fields.motivation')}
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder={t('installers.placeholders.motivation')}
                  disabled={loading}
                  className="sm:col-span-2"
                />
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="mb-5 flex items-center gap-2.5 text-[15px] font-bold text-fg">
                <Upload className="h-4 w-4 text-brand-blue-600 dark:text-brand-blue-300" />
                {t('installers.sections.documents')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <FileDrop
                  id="cni-upload"
                  label={t('installers.fields.cni')}
                  required
                  icon={<CreditCard className="h-6 w-6" />}
                  accept=".pdf,.jpg,.jpeg,.png"
                  file={files.cni}
                  disabled={loading}
                  onChange={(e) => handleFileChange(e, 'cni')}
                />
                <FileDrop
                  id="cv-upload"
                  label={t('installers.fields.cv')}
                  icon={<FileText className="h-6 w-6" />}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={files.cv}
                  disabled={loading}
                  onChange={(e) => handleFileChange(e, 'cv')}
                />
                <FileDrop
                  id="document-upload"
                  label={t('installers.fields.document')}
                  icon={<FileText className="h-6 w-6" />}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={files.document}
                  disabled={loading}
                  onChange={(e) => handleFileChange(e, 'document')}
                  className="sm:col-span-2"
                />
              </div>
            </div>

            <div className="border-t border-line pt-8 text-center">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary btn-lg w-full sm:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{t('installers.submitting')}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>{t('installers.submit')}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </Section>

      <Toast
        open={toast.open}
        variant={toast.variant}
        title={toast.title}
        description={toast.description}
        onClose={() => setToast((s) => ({ ...s, open: false }))}
      />
    </PageTransition>
  );
};

interface FieldProps {
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  name: string;
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
}
const Field: React.FC<FieldProps> = ({
  label,
  required,
  icon,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled,
}) => (
  <div>
    <label htmlFor={name} className="field-label">
      {label}{' '}
      {required && <span className="text-brand-blue-600 dark:text-brand-blue-300">*</span>}
    </label>
    <div className="relative">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={cn('input-base', icon ? 'input-with-icon' : null)}
      />
      {icon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle">
          {icon}
        </span>
      )}
    </div>
  </div>
);

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled,
  className,
}) => (
  <div className={className}>
    <label htmlFor={name} className="field-label">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      rows={4}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="input-base resize-none"
    />
  </div>
);

interface FileDropProps {
  id: string;
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  accept: string;
  file?: File;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
const FileDrop: React.FC<FileDropProps> = ({
  id,
  label,
  required,
  icon,
  accept,
  file,
  disabled,
  onChange,
  className,
}) => (
  <div className={className}>
    <label htmlFor={id} className="field-label">
      {label}{' '}
      {required && <span className="text-brand-blue-600 dark:text-brand-blue-300">*</span>}
    </label>
    <label
      htmlFor={id}
      className={cn(
        'group relative flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-md border border-dashed bg-surface p-6 text-center transition-colors duration-200',
        disabled
          ? 'cursor-not-allowed border-line bg-surface-sunken'
          : 'border-line-strong hover:border-brand-blue-400 hover:bg-surface-hover',
        file && 'border-brand-green-400 bg-brand-green-50 dark:bg-brand-green-500/10',
      )}
    >
      <span
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-md border',
          file
            ? 'border-brand-green-300 bg-brand-green-100 text-brand-green-700 dark:border-brand-green-500/30 dark:bg-brand-green-500/15 dark:text-brand-green-300'
            : 'border-line bg-surface-sunken text-fg-subtle group-hover:text-brand-blue-600',
        )}
      >
        {file ? <CheckCircle2 className="h-5 w-5" /> : icon}
      </span>
      <p className="max-w-full truncate text-[13px] font-medium text-fg">
        {file ? file.name : 'PDF, JPG, PNG · 5MB'}
      </p>
      <input
        id={id}
        type="file"
        accept={accept}
        onChange={onChange}
        disabled={disabled}
        className="hidden"
      />
    </label>
  </div>
);

export default Installers;
