import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom"
import App from './App.jsx'
import  '../Css/index.css'
import { Store } from './Store/Store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>

  <HashRouter>
    <App />
  </HashRouter>
  </Provider>
)

