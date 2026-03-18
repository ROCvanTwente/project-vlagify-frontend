import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Vlagify</h3>
            <p className="text-sm mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/producten" className="hover:text-white transition">
                  {t('footer.allProducts')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/profiel" className="hover:text-white transition">
                    {t('footer.myAccount')}
                </Link>
              </li>
              <li>
                <Link to="/vlaginstructies" className="hover:text-white transition">
                  {t('footer.flagInstructions')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/producten?category=vlaggen" className="hover:text-white transition">
                  Vlaggen
                </Link>
              </li>
              <li>
                <Link to="/producten?category=wimpels" className="hover:text-white transition">
                  Wimpels
                </Link>
              </li>
              <li>
                <Link to="/producten?category=vlaggenmasten" className="hover:text-white transition">
                  Vlaggenmasten
                </Link>
              </li>
              <li>
                <Link to="/producten?category=vlaggenstokken" className="hover:text-white transition">
                  Vlaggenstokken
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Hoofdstraat 123<br />1234 AB Amsterdam</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>020-1234567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@vlagify.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Vlagify. {t('footer.copyright')}.</p>
        </div>
      </div>
    </footer>
  );
};