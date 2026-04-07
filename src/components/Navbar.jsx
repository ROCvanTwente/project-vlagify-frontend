import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ShoppingCart, User, Menu, X, Globe, DollarSign } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLocalization } from '../context/LocalizationContext';
import { useTranslation } from 'react-i18next';
import logo from '/logo.png';

export const Navbar = () => {
    const { cartItemCount, user } = useApp();
    const { language, setLanguage, currency, setCurrency, measurementSystem, setMeasurementSystem } = useLocalization();
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Vlagify Logo" className="h-24 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
                            {t('navbar.home')}
                        </Link>
                        <Link to="/producten" className="text-gray-700 hover:text-blue-600 transition">
                            {t('navbar.products') || 'Producten'}
                        </Link>
                        <Link to="/vlaginstructies" className="text-gray-700 hover:text-blue-600 transition">
                            {t('navbar.flagGuide') || 'Vlaginstructies'}
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
                            {t('navbar.contact')}
                        </Link>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center space-x-6">
                        {/* Language/Currency Settings */}
                        <div className="relative">
                            <button
                                onClick={() => setSettingsOpen(!settingsOpen)}
                                className="text-gray-700 hover:text-blue-600 transition hidden md:block"
                                aria-label="Settings"
                            >
                                <Globe className="h-6 w-6" />
                            </button>
                            {settingsOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setSettingsOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50">
                                        <h3 className="font-semibold mb-3">{t('navbar.language')}</h3>
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            {(['nl', 'en', 'de', 'fr']).map((lang) => (
                                                <button
                                                    key={lang}
                                                    onClick={() => setLanguage(lang)}
                                                    className={`px-3 py-2 rounded-lg transition ${language === lang
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {lang.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>

                                        <h3 className="font-semibold mb-3">{t('navbar.currency')}</h3>
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {(['EUR', 'USD', 'GBP']).map((curr) => (
                                                <button
                                                    key={curr}
                                                    onClick={() => setCurrency(curr)}
                                                    className={`px-3 py-2 rounded-lg transition ${currency === curr
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {curr}
                                                </button>
                                            ))}
                                        </div>

                                        <h3 className="font-semibold mb-3">{t('navbar.measurementSystem')}</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={() => setMeasurementSystem('metric')}
                                                className={`px-3 py-2 rounded-lg transition ${measurementSystem === 'metric'
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {t('navbar.metric')}
                                            </button>
                                            <button
                                                onClick={() => setMeasurementSystem('imperial')}
                                                className={`px-3 py-2 rounded-lg transition ${measurementSystem === 'imperial'
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                            >
                                                {t('navbar.imperial')}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => navigate(user ? '/profiel' : '/inloggen')}
                            className="text-gray-700 hover:text-blue-600 transition"
                            aria-label="Account"
                        >
                            <User className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => navigate('/winkelwagen')}
                            className="relative text-gray-700 hover:text-blue-600 transition"
                            aria-label="Winkelwagen"
                        >
                            <ShoppingCart className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-700"
                            aria-label="Menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 border-t">
                        <nav className="flex flex-col space-y-2 pt-4">
                            <Link
                                to="/"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navbar.home')}
                            </Link>
                            <Link
                                to="/producten"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navbar.products') || 'Producten'}
                            </Link>
                            <Link
                                to="/vlaginstructies"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navbar.flagGuide') || 'Vlaginstructies'}
                            </Link>
                            <Link
                                to="/contact"
                                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('navbar.contact')}
                            </Link>

                            {/* Mobile Settings */}
                            <div className="px-4 py-2 text-gray-900 font-medium border-t mt-2 pt-4">{t('navbar.language')}</div>
                            <div className="px-4 grid grid-cols-4 gap-2">
                                {(['nl', 'en', 'de', 'fr']).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={`px-2 py-1 rounded text-sm ${language === lang
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <div className="px-4 py-2 text-gray-900 font-medium">{t('navbar.currency')}</div>
                            <div className="px-4 grid grid-cols-3 gap-2">
                                {(['EUR', 'USD', 'GBP']).map((curr) => (
                                    <button
                                        key={curr}
                                        onClick={() => setCurrency(curr)}
                                        className={`px-2 py-1 rounded text-sm ${currency === curr
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {curr}
                                    </button>
                                ))}
                            </div>
                            <div className="px-4 py-2 text-gray-900 font-medium">{t('navbar.measurementSystem')}</div>
                            <div className="px-4 grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setMeasurementSystem('metric')}
                                    className={`px-2 py-1 rounded text-sm ${measurementSystem === 'metric'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {t('navbar.metric')}
                                </button>
                                <button
                                    onClick={() => setMeasurementSystem('imperial')}
                                    className={`px-2 py-1 rounded text-sm ${measurementSystem === 'imperial'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {t('navbar.imperial')}
                                </button>
                            </div>

                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};