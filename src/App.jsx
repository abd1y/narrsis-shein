import {Route,Routes,Navigate} from "react-router-dom"
import Header from './Compont/Header'
import Login from './Compont/Login'
import Menu from './Compont/Menu'
import Investors from './page/Investors'
import Requests from './page/Requests'
import Divided from './page/Divided'
import Add_investor from './Compont/Add_investor'
import Add_Request from "./Compont/Add_Request"
import Updat_Request from "./Compont/Updat_Request"
import AddDivided from "./Compont/AddDivided"
import BalanceTransaction from "./Compont/BalanceTransaction"

function App() {
  return (
   <>
<Header/>
<Login/>
<Menu/>

<Routes>
  <Route path="/" element={<Navigate to="/investors" replace/>}/> 
  <Route path='/investors' element={<Investors />}/>
  <Route path='/Requests' element={<Requests/>}/>
  <Route path='/divided' element={<Divided/>}/>

 
</Routes>
<Add_investor/>
<Add_Request/>
<Updat_Request/>
<AddDivided/>
<BalanceTransaction/>
   </>
  )
}

export default App
