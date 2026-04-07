import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronDown, ChevronUp, Search, HelpCircle, Package, Truck, RotateCcw, CreditCard, Flag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import faqData from './data/faqData';

export const FAQ = () => {
  const navigate = useNavigate();
const { t, i18n } = useTranslation();
const language = i18n.language;

  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('all'), icon: HelpCircle },
    { id: 'ordering', label: t('Ordering'), icon: Package },
    { id: 'shipping', label: t('shipping'), icon: Truck },
    { id: 'returns', label: t('returns'), icon: RotateCcw },
    { id: 'payment', label: t('payment'), icon: CreditCard },
    { id: 'products', label: t('products'), icon: Flag }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;

    const matchesSearch =
      faq.question[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer[language].toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <HelpCircle className="h-16 w-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">{t('faq.title')}</h1>
        <p className="text-xl">{t('faq.subtitle')}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('faq.search')}
            className="w-full pl-12 pr-4 py-4 border rounded-lg"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center px-5 py-2 rounded-lg ${
                  selectedCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-white'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between px-6 py-4"
                >
                  {faq.question[language]}
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-4 border-t">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center p-8 bg-white rounded-lg">
              {t('faq.noResults')}
            </div>
          )}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">{t('faq.contactText')}</h3>

          <button
            onClick={() => navigate('/contact')}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            {t('contact.pageTitle')}
          </button>
        </div>

      </div>
    </div>
  );
};