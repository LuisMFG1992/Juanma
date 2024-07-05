import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MyContextProvider } from './context/index.jsx'
import './translations/i18next.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextProvider>
)
