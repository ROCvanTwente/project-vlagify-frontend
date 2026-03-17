import './App.css'

function App() {
  return (
    <div className="maintenance-container">
      <div className="content">
        <div className="icon-wrapper">
          <span className="tool-icon">🛠️</span>
        </div>
        
        <h1>We zijn even bezig...</h1>
        <p className="description">
          Onze website ondergaat momenteel gepland onderhoud om de ervaring te verbeteren. 
          We zijn snel weer online!
        </p>

        <div className="card">
          <p>Verwachte terugkomst: <strong>Binnen paar weken</strong></p>
        </div>

        <div className="contact-info">
          <p>Vragen? Stuur ons een mailtje op <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default App