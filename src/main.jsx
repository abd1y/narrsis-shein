import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom"
import App from './App.jsx'
import  '../Css/index.css'
import { Store } from './Store/Store.js'
import { Provider } from 'react-redux'

const isMobile=window.matchMedia("(max-width: 768px)").matches
const root = createRoot(document.getElementById('root'))
if(isMobile){
    root.render(
    <div className="mobile-error">
      <h2 className='Title-mobile'>غير مدعوم على الهاتف</h2>
      <p className='title-body-modile'>يرجى استخدام جهاز كمبيوتر لفتح هذا الموقع</p>
    </div>
  )
}else{

root.render(
  <Provider store={Store}>

  <HashRouter>
    <App />
  </HashRouter>
  </Provider>
)
}
