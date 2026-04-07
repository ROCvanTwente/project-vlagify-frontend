import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useApp } from '../context/AppContext';
import { Lock, ArrowLeft, Save } from 'lucide-react';
import { toast } from 'sonner';
import { changePassword } from '../services/api';

export const ChangePasswordPage = () => {
  const { user } = useApp();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!user) {
      navigate('/inloggen');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleSave = async () => {
    setError('');
    setIsLoading(true);

    try {
      if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmNewPassword) {
        setError(t('profile.fillAllFields'));
        setIsLoading(false);
        return;
      }

      if (passwordData.newPassword !== passwordData.confirmNewPassword) {
        setError(t('profile.passwordMismatch'));
        setIsLoading(false);
        return;
      }

      if (passwordData.newPassword.length < 6) {
        setError(t('profile.passwordTooShort'));
        setIsLoading(false);
        return;
      }

      await changePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
        confirmNewPassword: passwordData.confirmNewPassword
      });
      toast.success(t('profile.passwordUpdated'));
      navigate('/profiel');
    } catch (err) {
      console.error('Password change error:', err);
      
      let errorMessage = t('login.registerError') || 'Password change failed';
      
      // Handle API errors
      if (err.response?.data) {
        const serverErrors = err.response.data;
        
        // Check for message field first
        if (serverErrors.message) {
          errorMessage = serverErrors.message;
        } else if (typeof serverErrors === 'object') {
          // Handle .NET Identity errors (array of error objects)
          const errorMessages = Object.values(serverErrors).flat().join(", ");
          errorMessage = errorMessages || errorMessage;
        } else if (typeof serverErrors === 'string') {
          errorMessage = serverErrors;
        }
      }
      
      setError(errorMessage);
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/profiel')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t('profile.backToProfile')}
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t('profile.changePassword')}</h1>
          <p className="text-gray-600">{t('profile.changePasswordSubtitle')}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}
            <div>
              <label htmlFor="currentPassword" className="flex items-center font-semibold mb-2">
                <Lock className="h-4 w-4 mr-2" />
                {t('profile.currentPassword')}
              </label>
              <input
                id="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="flex items-center font-semibold mb-2">
                <Lock className="h-4 w-4 mr-2" />
                {t('profile.newPassword')}
              </label>
              <input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                minLength={6}
              />
              <p className="text-sm text-gray-500 mt-1">{t('profile.passwordRequirements')}</p>
            </div>

            <div>
              <label htmlFor="confirmNewPassword" className="flex items-center font-semibold mb-2">
                <Lock className="h-4 w-4 mr-2" />
                {t('profile.confirmNewPassword')}
              </label>
              <input
                id="confirmNewPassword"
                type="password"
                value={passwordData.confirmNewPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmNewPassword: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  passwordData.newPassword && passwordData.confirmNewPassword && passwordData.newPassword !== passwordData.confirmNewPassword
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="••••••••"
                minLength={6}
              />
              {passwordData.newPassword && passwordData.confirmNewPassword && passwordData.newPassword !== passwordData.confirmNewPassword && (
                <p className="text-red-500 text-sm mt-1">{t('profile.passwordMismatch')}</p>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => navigate('/profiel')}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                {t('profile.cancel')}
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading || (passwordData.newPassword && passwordData.confirmNewPassword && passwordData.newPassword !== passwordData.confirmNewPassword)}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center disabled:bg-gray-400"
              >
                <Save className="h-5 w-5 mr-2" />
                {t('profile.savePassword')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};