import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useApp } from '../context/AppContext';
import { User, Mail, Phone, MapPin, Edit2, Save, LogOut, Package, Flag, Scissors, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { useCurrency } from '../context/LocalizationContext';
import { fetchProfile, updateProfile as updateProfileAPI } from '@/services/api';
import { CountryDropdown } from '@/components/ui/country-dropdown';
import { countries } from 'country-data-list';

export const ProfilePage = () => {
  const { user, logout, updateProfile } = useApp();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { formatPrice } = useCurrency();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: ''
  });
  const [originalFormData, setOriginalFormData] = useState(null);

  React.useEffect(() => {
    if (!user) {
      navigate('/inloggen');
    }
  }, [user, navigate]);

  React.useEffect(() => {
    if (user) {
      fetchProfile()
        .then((profile) => {
          // Find the full country object by alpha3 code
          const countryObj = countries.all.find(c => c.alpha3 === profile.country) || null;
          
          setFormData({
            firstName: profile.firstName || '',
            middleName: profile.infix || '',
            lastName: profile.lastName || '',
            email: profile.email || '',
            phone: profile.phoneNumber || '',
            address: profile.address || '',
            postalCode: profile.postalCode || '',
            city: profile.city || '',
            country: countryObj,
          });
        })
        .catch((error) => {
          console.error('Failed to fetch profile:', error);
        });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const handleEdit = () => {
    setOriginalFormData(JSON.parse(JSON.stringify(formData)));
    setIsEditing(true);
  };

  const handleCancel = () => {
    if (originalFormData) {
      setFormData(originalFormData);
      setOriginalFormData(null);
    }
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      await updateProfileAPI({
        firstName: formData.firstName,
        infix: formData.middleName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        address: formData.address,
        postalCode: formData.postalCode,
        city: formData.city,
        country: formData.country?.alpha3 || ''
      });
      setOriginalFormData(JSON.parse(JSON.stringify(formData)));
      setIsEditing(false);
      toast.success(t('profile.profileUpdated'));
    } catch (error) {
      console.error('Failed to save profile:', error);
      toast.error(t('profile.profileUpdateFailed') || 'Failed to save profile');
    }
  };

  const handleLogout = () => {
    logout();
    toast.success(t('profile.loggedOut'));
    navigate('/');
  };

  const mockOrders = [
    {
      id: '1001',
      date: '2026-02-05',
      status: 'delivered',
      total: 74.85,
      items: 3
    },
    {
      id: '1002',
      date: '2026-01-28',
      status: 'shipped',
      total: 249.95,
      items: 1
    }
  ];

  const statusLabels = {
    pending: t('profile.pending'),
    processing: t('profile.processing'),
    shipped: t('profile.shipped'),
    delivered: t('profile.delivered')
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t('profile.myProfile')}</h1>
          <p className="text-gray-600">{t('profile.profileSubtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">{t('profile.accountDetails')}</h2>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <Edit2 className="h-4 w-4 mr-1" />
                    {t('profile.edit')}
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 text-gray-600 hover:text-gray-900"
                    >
                      {t('profile.cancel')}
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      {t('profile.save')}
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center font-semibold mb-2">
                    <User className="h-4 w-4 mr-2" />
                    {t('profile.name')}
                  </label>
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder={t('profile.firstName')}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder={t('profile.middleName')}
                        value={formData.middleName}
                        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder={t('profile.lastName')}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ) : (
                    formData.middleName ? (
                      <p className="text-gray-700 ml-6">{formData.firstName} {formData.middleName} {formData.lastName}</p>
                    ) : (
                      <p className="text-gray-700 ml-6">{formData.firstName} {formData.lastName}</p>
                    )
                  )}
                </div>

                <div>
                  <label className="flex items-center font-semibold mb-2">
                    <Mail className="h-4 w-4 mr-2" />
                    {t('profile.emailAddress')}
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-700 ml-6">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center font-semibold mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    {t('profile.phoneNumber')}
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-700 ml-6">{formData.phone || t('profile.notFilled')}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center font-semibold mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {t('profile.address')}
                  </label>
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder={t('profile.streetAndNumber')}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder={t('profile.postalCode')}
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder={t('profile.city')}
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-700 ml-6">
                      {formData.address || formData.postalCode || formData.city ? (
                        <>
                          {formData.address && <p>{formData.address}</p>}
                          {(formData.postalCode || formData.city) && (
                            <p>{formData.postalCode} {formData.city}</p>
                          )}
                        </>
                      ) : (
                        <p>{t('profile.notFilled')}</p>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center font-semibold mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {t('profile.country')}
                  </label>
                  {isEditing ? (
                    <CountryDropdown
                        defaultValue={formData.country?.alpha3 || ''}
                        onChange={(country) => setFormData({ ...formData, country })}
                    />
                  ) : (
                    <p className="text-gray-700 ml-6">{formData.country?.name || t('profile.notFilled')}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Order History */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-6">{t('profile.orderHistory')}</h2>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold">{t('profile.order')} #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[order.status]
                        }`}
                      >
                        {statusLabels[order.status]}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-600">
                        {order.items} {order.items === 1 ? t('profile.product') : t('profile.products')}
                      </p>
                      <p className="font-bold text-blue-600">{formatPrice(order.total)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* User Card */}
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-1">
                {formData.firstName} {formData.middleName && `${formData.middleName} `}{formData.lastName}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{user.email}</p>
              {Array.isArray(user.roles) && user.roles.includes('Admin') && (
                <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {t('profile.administrator')}
                </span>
              )}
              {Array.isArray(user.roles) && user.roles.includes('medewerker') && (
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {t('profile.employee')}
                </span>
              )}
            </div>

            {/* Admin Links */}
            {Array.isArray(user.roles) && user.roles.includes('Admin') && (
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold mb-4">{t('profile.management')}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => navigate('/admin/producten')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                  >
                    <Package className="h-4 w-4 mr-2" />
                    {t('profile.productManagement')}
                  </button>
                  <button
                    onClick={() => navigate('/admin/gebruikers')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                  >
                    <User className="h-4 w-4 mr-2" />
                    {t('profile.userManagement')}
                  </button>
                  <button
                    onClick={() => navigate('/admin/vlagprotocollen')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    {t('profile.flagInstructions')}
                  </button>
                  <button
                    onClick={() => navigate('/admin/materialen')}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                  >
                    <Scissors className="h-4 w-4 mr-2" />
                    {t('profile.maintenanceInstructions')}
                  </button>
                </div>
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center"
            >
              <LogOut className="h-5 w-5 mr-2" />
              {t('profile.logout')}
            </button>

            {/* Change Password Button */}
            <button
              onClick={() => navigate('/wachtwoord-wijzigen')}
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition flex items-center justify-center"
            >
              <Lock className="h-5 w-5 mr-2" />
              {t('profile.changePassword')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};