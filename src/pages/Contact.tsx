import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  User,
  MessageSquare,
  Loader2,
} from 'lucide-react';
import { supabase } from '../supabaseClient';
import PageHero from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import PageTransition from '../components/ui/PageTransition';
import Toast, { ToastVariant } from '../components/ui/Toast';
import { WHATSAPP_URL } from '../lib/links';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  /* `?subject=` pre-fills the subject (e.g. links from the Learning Lab page). */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: (searchParams.get('subject') ?? '').slice(0, 120),
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    variant: ToastVariant;
    title: string;
    description?: string;
  }>({ open: false, variant: 'success', title: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('enmkit_contact').insert([formData]);
    setLoading(false);

    if (error) {
      setToast({
        open: true,
        variant: 'error',
        title: t('contact.form.errorPrefix') + ' ' + error.message,
      });
      return;
    }
    setToast({
      open: true,
      variant: 'success',
      title: t('contact.form.successTitle'),
      description: t('contact.form.successText'),
    });
    setFormData({ name: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: MapPin, label: t('contact.labels.address'), value: t('contact.address') },
    { icon: Phone, label: t('contact.labels.phone'), value: t('contact.phone') },
    { icon: Mail, label: t('contact.labels.email'), value: t('contact.email') },
    {
      icon: MessageCircle,
      label: t('contact.labels.whatsapp'),
      value: t('contact.phone'),
    },
  ];

  return (
    <PageTransition>
      <PageHero
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <Section className="bg-canvas">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-fluid-2xl font-bold tracking-tighter text-fg">
              {t('contact.eyebrow')}
            </h2>
            <div className="rule-brand mt-4" aria-hidden="true" />

            <ul className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {contactInfo.map((info) => (
                <li
                  key={info.label}
                  className="flex items-start gap-3.5 bg-surface p-4 transition-colors hover:bg-surface-hover"
                >
                  <span className="icon-tile h-10 w-10 shrink-0">
                    <info.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-fg-subtle">
                      {info.label}
                    </p>
                    <p className="mt-1 break-words text-[14px] font-medium text-fg">
                      {info.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp */}
            <div className="mt-6 rounded-xl border border-brand-green-200 bg-brand-green-50 p-5 dark:border-brand-green-500/25 dark:bg-brand-green-500/10">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500 text-white">
                  <MessageCircle className="h-[18px] w-[18px]" />
                </span>
                <h3 className="text-[15px] font-bold text-fg">{t('contact.directWa')}</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-fg-muted text-just">
                {t('contact.directWaText')}
              </p>
              <a
                href={`${WHATSAPP_URL}?text=Bonjour`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-md mt-4"
              >
                <MessageCircle className="h-4 w-4" />
                {t('contact.openWa')}
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-line bg-surface p-6 shadow-soft lg:p-8">
              <h3 className="text-fluid-xl font-bold tracking-tighter text-fg">
                {t('contact.formTitle')}
              </h3>
              <div className="hairline my-6" aria-hidden="true" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="field-label">
                    {t('contact.form.name')}
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="input-base input-with-icon"
                    />
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="field-label">
                      {t('contact.form.phone')}
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="input-base input-with-icon"
                      />
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-subtle" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="field-label">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.form.subjectPlaceholder')}
                      className="input-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="field-label">
                    {t('contact.form.message')}
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="input-base input-with-icon resize-none"
                    />
                    <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-fg-subtle" />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="btn-primary btn-lg w-full">
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{t('contact.form.send')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-surface-sunken">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-fluid-2xl font-bold tracking-tighter text-fg">
            {t('contact.mapTitle')}
          </h2>
          <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
            {t('contact.mapSubtitle')}
          </p>
        </div>

        <div className="aspect-[16/9] overflow-hidden rounded-xl border border-line bg-surface shadow-soft sm:aspect-[16/7]">
          <iframe
            title="Bafoussam map"
            src="https://www.google.com/maps?q=Mairie+de+Bafoussam,+Cameroun&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
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

export default Contact;
