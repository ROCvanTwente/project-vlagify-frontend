import './App.css'
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="maintenance-container">
      <div className="content">
        <div className="icon-wrapper">
          <span className="tool-icon">🛠️</span>
        </div>
        
        <h1>{t('maintenance.title')}</h1>
        <p className="description">
          {t('maintenance.description')}
        </p>

        <div className="card">
          <p>{t('maintenance.expectedReturn')}</p>
        </div>

        <div className="contact-info">
          <p>
            {t('maintenance.contact')}
            <a href="mailto:info@example.com">info@example.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App