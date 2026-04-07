import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router';
import { useApp } from '../context/AppContext';
import { LogIn, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { CountryDropdown } from '../components/ui/country-dropdown';

export const LoginPage = () => {
  const { login, register, user } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [registerError, setRegisterError] = useState('');

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'NLD',
    password: '',
    confirmPassword: ''
  });

  React.useEffect(() => {
    if (user) {
      navigate('/profiel');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);

    try {
      if (loginData.email.trim() === '' || loginData.password.trim() === '') {
        setLoginError(t('login.fillAllFields') || 'Vul alle vereiste velden in');
        setIsLoading(false);
        return;
      }

      const result = await login(loginData.email, loginData.password);
      
      if (result.success) {
        // Redirect to previous page or profiel
        const previousPath = location.state?.from?.pathname || '/profiel';
        navigate(previousPath);
      } else {
        // Display specific error message from API or fallback to generic error
        const errorMessage = result.error || t('login.loginError');
        setLoginError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Login error:', error);
      
      let errorMessage = t('login.loginError') || 'Login failed';
      
      // Handle .NET Identity errors
      if (error.response?.data) {
        const serverErrors = error.response.data;
        if (typeof serverErrors === 'object') {
          const errorMessages = Object.values(serverErrors).flat().join(", ");
          errorMessage = errorMessages || errorMessage;
        } else if (typeof serverErrors === 'string') {
          errorMessage = serverErrors;
        }
      }
      
      setLoginError(errorMessage);
      toast.error(errorMessage);
    }
    
    setIsLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError('');
    setIsLoading(true);

    try {
      if (
        registerData.firstName.trim() === '' ||
        registerData.lastName.trim() === '' ||
        registerData.email.trim() === '' ||
        registerData.phone.trim() === '' ||
        registerData.address.trim() === '' ||
        registerData.postalCode.trim() === '' ||
        registerData.city.trim() === '' ||
        registerData.password.trim() === '' ||
        registerData.confirmPassword.trim() === ''
      ) {
        setRegisterError(t('login.fillAllFields') || 'Vul alle vereiste velden in');
        setIsLoading(false);
        return;
      }

      if (registerData.password !== registerData.confirmPassword) {
        setRegisterError(t('login.passwordMismatch'));
        setIsLoading(false);
        return;
      }

      if (registerData.password.length < 6) {
        setRegisterError(t('login.passwordTooShort'));
        setIsLoading(false);
        return;
      }

      const result = await register({
        email: registerData.email,
        password: registerData.password,
        confirmPassword: registerData.confirmPassword,
        firstName: registerData.firstName,
        middleName: registerData.middleName,
        lastName: registerData.lastName,
        phone: registerData.phone,
        address: registerData.address,
        postalCode: registerData.postalCode,
        city: registerData.city,
        country: registerData.country
      });
      
      if (result.success) {
        // Redirect to previous page or profiel after successful registration and login
        const previousPath = location.state?.from?.pathname || '/profiel';
        navigate(previousPath);
      } else {
        // Display specific error message from API or fallback to generic error
        const errorMessage = result.error || t('login.registerError');
        setRegisterError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Registration error:', error);
      
      let errorMessage = t('login.registerError') || 'Registration failed';
      
      // Handle .NET Identity errors
      if (error.response?.data) {
        const serverErrors = error.response.data;
        if (typeof serverErrors === 'object') {
          const errorMessages = Object.values(serverErrors).flat().join(", ");
          errorMessage = errorMessages || errorMessage;
        } else if (typeof serverErrors === 'string') {
          errorMessage = serverErrors;
        }
      }
      
      setRegisterError(errorMessage);
      toast.error(errorMessage);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Toggle Buttons */}
          <div className="flex mb-8 border-b">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 font-semibold transition cursor-pointer ${
                isLogin
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <LogIn className="h-5 w-5 inline mr-2" />
              {t('login.login')}
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 font-semibold transition cursor-pointer ${
                !isLogin
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <UserPlus className="h-5 w-5 inline mr-2" />
              {t('login.register')}
            </button>
          </div>

          {isLogin ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="space-y-6">
              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{loginError}</p>
                </div>
              )}
              <div>
                <label htmlFor="login-email" className="block font-semibold mb-2">
                  {t('login.emailAddress')}
                </label>
                <input
                  type="email"
                  id="login-email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block font-semibold mb-2">
                  {t('login.password')}
                </label>
                <input
                  type="password"
                  id="login-password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {isLoading ? t('login.loggingIn') : t('login.loginButton')}
              </button>

              <div className="text-center">
                <Link to="/profiel" className="text-blue-600 hover:text-blue-700 text-sm">
                  {t('login.forgotPassword')}
                </Link>
              </div>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegister} className="space-y-4">
              {registerError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">{registerError}</p>
                </div>
              )}
              {/* Name Fields */}
              <div>
                <label htmlFor="firstName" className="block font-semibold mb-2">
                  {t('login.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Jan"
                />
              </div>

              <div>
                <label htmlFor="middleName" className="block font-semibold mb-2">
                  {t('login.middleName')} {t('login.optional')}
                </label>
                <input
                  type="text"
                  id="middleName"
                  value={registerData.middleName}
                  onChange={(e) => setRegisterData({ ...registerData, middleName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="de"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block font-semibold mb-2">
                  {t('login.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vries"
                />
              </div>

              <div>
                <label htmlFor="register-email" className="block font-semibold mb-2">
                  {t('login.emailAddress')}
                </label>
                <input
                  type="email"
                  id="register-email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="uw@email.nl"
                />
              </div>

              <div>
                <label htmlFor="register-password" className="block font-semibold mb-2">
                  {t('login.password')}
                </label>
                <input
                  type="password"
                  id="register-password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  required
                  minLength={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="register-confirm" className="block font-semibold mb-2">
                  {t('login.confirmPassword')}
                </label>
                <input
                  type="password"
                  id="register-confirm"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  required
                  minLength={6}
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                    registerData.password && registerData.confirmPassword && registerData.password !== registerData.confirmPassword
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  placeholder="••••••••"
                />
                {registerData.password && registerData.confirmPassword && registerData.password !== registerData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{t('login.passwordMismatch')}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold mb-2">
                  {t('login.phoneNumber')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="06-12345678"
                />
              </div>

              <div>
                <label htmlFor="address" className="block font-semibold mb-2">
                  {t('login.address')}
                </label>
                <input
                  type="text"
                  id="address"
                  value={registerData.address}
                  onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Hoofdstraat 123"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="postalCode" className="block font-semibold mb-2">
                    {t('login.postalCode')}
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={registerData.postalCode}
                    onChange={(e) => setRegisterData({ ...registerData, postalCode: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 AB"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block font-semibold mb-2">
                    {t('login.city')}
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={registerData.city}
                    onChange={(e) => setRegisterData({ ...registerData, city: e.target.value })}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Amsterdam"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="country" className="block font-semibold mb-2">
                  {t('login.country')}
                </label>
                <CountryDropdown 
                    placeholder={t('login.selectCountry')}
                    defaultValue={registerData.country || "NLD"}
                    onChange={(country) => setRegisterData({ ...registerData, country: country.alpha3 })}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || registerData.password.length < 6 || registerData.password !== registerData.confirmPassword}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {isLoading ? t('login.creatingAccount') : t('login.registerButton')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};