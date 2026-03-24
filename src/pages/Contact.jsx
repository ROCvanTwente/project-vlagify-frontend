import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '../context/LocalizationContext';

export const ContactPage = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const getText = (key) => {
    const texts = {
      pageTitle: {
        nl: 'Neem Contact Op',
        en: 'Contact Us',
        de: 'Kontaktieren Sie Uns',
        fr: 'Contactez-Nous'
      },
      pageSubtitle: {
        nl: 'Wij staan voor u klaar om al uw vragen te beantwoorden',
        en: 'We are here to answer all your questions',
        de: 'Wir sind hier, um alle Ihre Fragen zu beantworten',
        fr: 'Nous sommes là pour répondre à toutes vos questions'
      },
      contactInfo: {
        nl: 'Contact Informatie',
        en: 'Contact Information',
        de: 'Kontakt Informationen',
        fr: 'Informations de Contact'
      },
      address: {
        nl: 'Adres',
        en: 'Address',
        de: 'Adresse',
        fr: 'Adresse'
      },
      phone: {
        nl: 'Telefoon',
        en: 'Phone',
        de: 'Telefon',
        fr: 'Téléphone'
      },
      email: {
        nl: 'E-mail',
        en: 'Email',
        de: 'E-Mail',
        fr: 'E-mail'
      },
      openingHours: {
        nl: 'Openingstijden',
        en: 'Opening Hours',
        de: 'Öffnungszeiten',
        fr: "Heures d'Ouverture"
      },
      mondayFriday: {
        nl: 'Maandag - Vrijdag: 9:00 - 17:00',
        en: 'Monday - Friday: 9:00 - 17:00',
        de: 'Montag - Freitag: 9:00 - 17:00',
        fr: 'Lundi - Vendredi: 9:00 - 17:00'
      },
      saturday: {
        nl: 'Zaterdag: 10:00 - 16:00',
        en: 'Saturday: 10:00 - 16:00',
        de: 'Samstag: 10:00 - 16:00',
        fr: 'Samedi: 10:00 - 16:00'
      },
      sunday: {
        nl: 'Zondag: Gesloten',
        en: 'Sunday: Closed',
        de: 'Sonntag: Geschlossen',
        fr: 'Dimanche: Fermé'
      },
      faqTitle: {
        nl: 'Veelgestelde Vragen',
        en: 'Frequently Asked Questions',
        de: 'Häufig Gestellte Fragen',
        fr: 'Questions Fréquemment Posées'
      },
      faqDescription: {
        nl: 'Bekijk onze FAQ voor snelle antwoorden op veelgestelde vragen over verzending, retourneren en meer.',
        en: 'Check our FAQ for quick answers to frequently asked questions about shipping, returns and more.',
        de: 'Sehen Sie sich unsere FAQ für schnelle Antworten auf häufig gestellte Fragen zu Versand, Rücksendungen und mehr an.',
        fr: 'Consultez notre FAQ pour des réponses rapides aux questions fréquemment posées sur la livraison, les retours et plus encore.'
      },
      viewFAQ: {
        nl: 'Bekijk FAQ →',
        en: 'View FAQ →',
        de: 'FAQ Ansehen →',
        fr: 'Voir FAQ →'
      },
      sendMessage: {
        nl: 'Stuur ons een bericht',
        en: 'Send us a message',
        de: 'Senden Sie uns eine Nachricht',
        fr: 'Envoyez-nous un message'
      },
      name: {
        nl: 'Naam',
        en: 'Name',
        de: 'Name',
        fr: 'Nom'
      },
      namePlaceholder: {
        nl: 'Uw naam',
        en: 'Your name',
        de: 'Ihr Name',
        fr: 'Votre nom'
      },
      emailAddress: {
        nl: 'E-mailadres',
        en: 'Email Address',
        de: 'E-Mail-Adresse',
        fr: 'Adresse E-mail'
      },
      emailPlaceholder: {
        nl: 'uw@email.nl',
        en: 'your@email.com',
        de: 'ihre@email.de',
        fr: 'votre@email.fr'
      },
      phoneNumber: {
        nl: 'Telefoonnummer',
        en: 'Phone Number',
        de: 'Telefonnummer',
        fr: 'Numéro de Téléphone'
      },
      subject: {
        nl: 'Onderwerp',
        en: 'Subject',
        de: 'Betreff',
        fr: 'Sujet'
      },
      selectSubject: {
        nl: 'Selecteer een onderwerp',
        en: 'Select a subject',
        de: 'Wählen Sie ein Thema',
        fr: 'Sélectionnez un sujet'
      },
      generalQuestion: {
        nl: 'Algemene vraag',
        en: 'General question',
        de: 'Allgemeine Frage',
        fr: 'Question générale'
      },
      orderQuestion: {
        nl: 'Vraag over bestelling',
        en: 'Question about order',
        de: 'Frage zur Bestellung',
        fr: 'Question sur la commande'
      },
      productInfo: {
        nl: 'Productinformatie',
        en: 'Product information',
        de: 'Produktinformationen',
        fr: 'Informations sur le produit'
      },
      customRequest: {
        nl: 'Maatwerk aanvraag',
        en: 'Custom request',
        de: 'Maßanfrage',
        fr: 'Demande personnalisée'
      },
      complaint: {
        nl: 'Klacht',
        en: 'Complaint',
        de: 'Beschwerde',
        fr: 'Plainte'
      },
      other: {
        nl: 'Anders',
        en: 'Other',
        de: 'Andere',
        fr: 'Autre'
      },
      message: {
        nl: 'Bericht',
        en: 'Message',
        de: 'Nachricht',
        fr: 'Message'
      },
      messagePlaceholder: {
        nl: 'Typ hier uw bericht...',
        en: 'Type your message here...',
        de: 'Geben Sie hier Ihre Nachricht ein...',
        fr: 'Tapez votre message ici...'
      },
      sendButton: {
        nl: 'Verstuur Bericht',
        en: 'Send Message',
        de: 'Nachricht Senden',
        fr: 'Envoyer le Message'
      },
      wholesaleTitle: {
        nl: 'Groothandel & Maatwerk',
        en: 'Wholesale & Custom',
        de: 'Großhandel & Maßanfertigung',
        fr: 'Gros & Sur Mesure'
      },
      wholesaleDescription: {
        nl: 'Heeft u interesse in groothandel prijzen of maatwerk vlaggen? Neem contact met ons op voor een vrijblijvende offerte.',
        en: 'Interested in wholesale prices or custom flags? Contact us for a non-binding quote.',
        de: 'Interessiert an Großhandelspreisen oder maßgeschneiderten Flaggen? Kontaktieren Sie uns für ein unverbindliches Angebot.',
        fr: 'Intéressé par les prix de gros ou les drapeaux personnalisés? Contactez-nous pour un devis sans engagement.'
      },
      customerServiceTitle: {
        nl: 'Klantenservice',
        en: 'Customer Service',
        de: 'Kundenservice',
        fr: 'Service Client'
      },
      customerServiceDescription: {
        nl: 'Ons klantenservice team staat voor u klaar. Bel of mail ons voor directe hulp bij uw vragen.',
        en: 'Our customer service team is ready to help you. Call or email us for immediate assistance with your questions.',
        de: 'Unser Kundenservice-Team steht Ihnen zur Verfügung. Rufen Sie uns an oder senden Sie uns eine E-Mail für sofortige Hilfe bei Ihren Fragen.',
        fr: 'Notre équipe de service client est prête à vous aider. Appelez-nous ou envoyez-nous un e-mail pour une aide immédiate avec vos questions.'
      },
      successMessage: {
        nl: 'Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.',
        en: 'Thank you for your message! We will contact you as soon as possible.',
        de: 'Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen.',
        fr: 'Merci pour votre message! Nous vous contacterons dès que possible.'
      }
    };

    return texts[key]?.[language] || texts[key]?.nl || key;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(getText('successMessage'));

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
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{getText('pageTitle')}</h1>
          <p className="text-xl">
            {getText('pageSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-6">{getText('contactInfo')}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{getText('address')}</h3>
                    <p className="text-gray-600">
                      Hoofdstraat 123<br />
                      1234 AB Amsterdam<br />
                      Nederland
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{getText('phone')}</h3>
                    <p className="text-gray-600">020-1234567</p>
                    <p className="text-sm text-gray-500 mt-1">Ma-vr: 9:00 - 17:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{getText('email')}</h3>
                    <p className="text-gray-600">info@vlagify.nl</p>
                    <p className="text-gray-600">verkoop@vlagify.nl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{getText('openingHours')}</h3>
                    <p className="text-gray-600">
                      {getText('mondayFriday')}<br />
                      {getText('saturday')}<br />
                      {getText('sunday')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Suggestion */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold mb-2">{getText('faqTitle')}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {getText('faqDescription')}
              </p>
              <button 
                onClick={() => navigate('/faq')}
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                {getText('viewFAQ')}
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="text-2xl font-bold mb-6">{getText('sendMessage')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-semibold mb-2">
                      {getText('name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={getText('namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold mb-2">
                      {getText('emailAddress')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={getText('emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2">
                      {getText('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="06-12345678"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-semibold mb-2">
                      {getText('subject')} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{getText('selectSubject')}</option>
                      <option value="general">{getText('generalQuestion')}</option>
                      <option value="order">{getText('orderQuestion')}</option>
                      <option value="product">{getText('productInfo')}</option>
                      <option value="custom">{getText('customRequest')}</option>
                      <option value="complaint">{getText('complaint')}</option>
                      <option value="other">{getText('other')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">
                    {getText('message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder={getText('messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {getText('sendButton')}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold mb-3">{getText('wholesaleTitle')}</h3>
                <p className="text-sm text-gray-700 mb-3">
                  {getText('wholesaleDescription')}
                </p>
                <a href="mailto:verkoop@vlagify.nl" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  verkoop@vlagify.nl →
                </a>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold mb-3">{getText('customerServiceTitle')}</h3>
                <p className="text-sm text-gray-700 mb-3">
                  {getText('customerServiceDescription')}
                </p>
                <a href="tel:0201234567" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  020-1234567 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};