import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(t('contact.successMessage'));

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    navigate('/bedankt');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {t('contact.pageTitle')}
        </h1>
        <p className="text-xl">
          {t('contact.pageSubtitle')}
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-6">
              {t('contact.contactInfo')}
            </h2>

            <div className="space-y-4">

              <div className="flex">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                  <h3 className="font-semibold">{t('contact.address')}</h3>
                  <p className='text-gray-500'>
                    Hoofdstraat 123<br />
                    1234 AB Amsterdam<br />
                    Nederland
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                  </div>                <div>
                  <h3 className="font-semibold">{t('contact.phone')}</h3>
                  <p className='text-gray-500'>020-1234567</p>
                  <p className="text-sm text-gray-500 mt-1">Ma-vr: 9:00 - 17:00</p>

                </div>
              </div>

              <div className="flex">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                  </div>                <div>
                  <h3 className="font-semibold">{t('contact.email')}</h3>
                  <p className='text-gray-500'>info@vlagify.nl</p>
                  <p className='text-gray-500'>verkoop@vlagify.nl</p>
                </div>
              </div>

              <div className="flex">
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                  <h3 className="font-semibold">{t('contact.openingHours')}</h3>
                  <p className='text-gray-500'>
                    {t('contact.mondayFriday')}<br />
                    {t('contact.saturday')}<br />
                    {t('contact.sunday')}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FAQ */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-bold mb-2">
              {t('faq.title')}
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              {t('Bekijk onze FAQ voor snelle antwoorden op veelgestelde vragen over verzending, retourneren en meer.')}
            </p>
            <button
              onClick={() => navigate('/faq')}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              {t('Bekijk FAQ →')}
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* FORM */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">
              {t('contact.sendMessage')}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

<div>
  <label className="block font-semibold mb-1">
    {t('contact.name')} *
  </label>
  <input
    type="text"
    name="name"
    placeholder={t('contact.namePlaceholder')}
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  />
</div>

<div>
  <label className="block font-semibold mb-1">
    {t('contact.email')} *
  </label>
  <input
    type="email"
    name="email"
    placeholder={t('contact.emailPlaceholder')}
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  />
</div>
              </div>

<div>
  <label className="block font-semibold mb-1">
    {t('contact.phone')}
  </label>
  <input
    type="tel"
    name="phone"
    placeholder={t('contact.phoneNumber')}
    value={formData.phone}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  />
</div>

<div>
  <label className="block font-semibold mb-1">
    {t('contact.subject')} *
  </label>
  <select
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  >
    <option value="">{t('contact.selectSubject')}</option>
    <option value="general">{t('contact.generalQuestion')}</option>
    <option value="order">{t('contact.orderQuestion')}</option>
    <option value="product">{t('contact.productInfo')}</option>
    <option value="custom">{t('contact.customRequest')}</option>
    <option value="complaint">{t('contact.complaint')}</option>
    <option value="other">{t('contact.other')}</option>
  </select>
</div>

<div>
  <label className="block font-semibold mb-1">
    {t('contact.message')} *
  </label>
  <textarea
    name="message"
    placeholder={t('contact.messagePlaceholder')}
    value={formData.message}
    onChange={handleChange}
    required
    rows="5"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
  />
</div>

              <button
                type="submit"
                className="bg-blue-600 text-white p-4 w-full flex items-center justify-center rounded-lg hover:bg-blue-700 transition"
              >
                <Send className="mr-2 h-5 w-5" />
                {t('contact.sendButton')}
              </button>

            </form>
          </div>

          {/* EXTRA INFO */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-3">
                {t('contact.wholesaleTitle')}
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('contact.wholesaleDescription')}
              </p>
              <a
                href="mailto:verkoop@vlagify.nl"
                className="text-blue-600 font-semibold text-sm"
              >
                verkoop@vlagify.nl →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold mb-3">
                {t('contact.customerServiceTitle')}
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                {t('contact.customerServiceDescription')}
              </p>
              <a
                href="tel:0201234567"
                className="text-blue-600 font-semibold text-sm"
              >
                020-1234567 →
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};