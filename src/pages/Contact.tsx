import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
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

      <Section className="bg-white">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <h2 className="text-fluid-3xl font-bold text-ink-900 mb-6">
              {t('contact.eyebrow')}
            </h2>

            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-all hover:border-brand-blue-200 hover:shadow-soft"
                >
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-ink-500 font-semibold">
                      {info.label}
                    </p>
                    <p className="mt-1 text-ink-900 font-medium break-words">{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-8 rounded-3xl border border-brand-green-200 bg-brand-green-50/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-glow-green">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-ink-900">{t('contact.directWa')}</h3>
              </div>
              <p className="text-sm text-ink-700 mb-4">{t('contact.directWaText')}</p>
              <a
                href="https://wa.me/237696372245?text=Bonjour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-green transition-all hover:shadow-floating"
              >
                <MessageCircle className="h-4 w-4" />
                {t('contact.openWa')}
              </a>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-4xl border border-ink-100 bg-white p-7 lg:p-10 shadow-elevated">
              <h3 className="text-fluid-2xl font-bold text-ink-900 mb-6">
                {t('contact.formTitle')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-ink-800 mb-2">
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
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink-800 mb-2">
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
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-ink-800 mb-2"
                    >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-ink-800 mb-2"
                  >
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
                    <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-ink-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary btn-lg w-full"
                >
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
      <Section className="bg-ink-50/40">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-fluid-3xl font-bold text-ink-900">{t('contact.mapTitle')}</h2>
          <p className="mt-3 text-ink-600">{t('contact.mapSubtitle')}</p>
        </div>

        <div className="relative aspect-[16/8] sm:aspect-[16/7] rounded-4xl overflow-hidden border border-ink-100 shadow-elevated bg-ink-100">
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
