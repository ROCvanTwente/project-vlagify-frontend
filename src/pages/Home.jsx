import { Link } from 'react-router';
import { ArrowRight, Star, Truck, Shield, Clock, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { products } from '../temp-data/products';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { useCurrency } from '../context/LocalizationContext';


export const Home = () => {
  const { t } = useTranslation();
  const { convertPrice, formatPrice } = useCurrency();
  const customFlagProduct = products.find(p => p.id === 'custom-flag');
  const featuredProducts = products.slice(1, 5);


  const categoryNames = [
    { key: 'flags', path: 'vlaggen', image: products[1]?.image || products[0].image },
    { key: 'pennants', path: 'wimpels', image: products[5]?.image || products[4].image },
    { key: 'flagpoles', path: 'vlaggenmasten', image: products[8]?.image || products[7].image },
    { key: 'flagsticks', path: 'vlaggenstokken', image: products[11]?.image || products[10].image }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('home.heroSubtitle')}
            </p>
            <Link
              to="/producten"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              {t('home.viewAssortment')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.topQuality')}</h3>
              <p className="text-sm text-gray-600">{t('home.topQualityDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.freeShipping')}</h3>
              <p className="text-sm text-gray-600">{t('home.freeShippingDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.guarantee')}</h3>
              <p className="text-sm text-gray-600">{t('home.guaranteeDesc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{t('home.fastDelivery')}</h3>
              <p className="text-sm text-gray-600">{t('home.fastDeliveryDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Flag Banner */}
      {customFlagProduct && (
        <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[50vh]">
                  <ImageWithFallback
                    src={customFlagProduct.image}
                    alt={customFlagProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      {t('home.new')}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="flex items-center mb-3">
                    <Palette className="h-6 w-6 text-blue-600 mr-2" />
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {customFlagProduct.name}
                    </h2>
                  </div>
                  <p className="text-base text-gray-600 mb-4">
                    {customFlagProduct.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {t('home.uploadDesign')}
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {t('home.chooseSizes')}
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {t('home.highQualityMaterials')}
                    </li>
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link
                      to="/vlag-configurator"
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition shadow-lg text-sm md:text-base"
                    >
                      {t('home.startDesigning')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">{t('home.from')}</p>
                      <p className="text-xl font-bold text-blue-600">{formatPrice(convertPrice(customFlagProduct.price))}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">{t('home.shopByCategory')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryNames.map((category) => (
              <Link
                key={category.key}
                to={`/producten?category=${category.path}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="aspect-square">
                  <ImageWithFallback
                    src={category.image}
                    alt={t(`home.${category.key}`)}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{t(`home.${category.key}`)}</h3>
                    <span className="inline-flex items-center text-sm">
                      {t('home.viewCollection')} <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t('home.featuredProducts')}</h2>
            <Link to="/producten" className="text-blue-600 hover:text-blue-700 font-semibold">
              {t('home.viewAll')}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition group"
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600">{formatPrice(convertPrice(product.price))}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.specialRequest')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('home.specialRequestDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {t('home.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
};