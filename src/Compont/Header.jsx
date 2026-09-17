import { Icon_page,Icon_login,Icon_logout } from './Svg'
  
import {  useDispatch } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
    const Header = () => {
        const dispatch=useDispatch()
    return (
        <>
    
        <div className='header'>
        <div>

        </div>
        <div className='header-icon'>

           <Icon_page/>
        <p className='header-icon-Text'>Narsis Shein</p>
        </div>
        <button  className='Icon-auth' onClick={()=>dispatch(configretionSlider("Log-in"))}>
           
<Icon_login  />
        </button>

        </div>
    </>
    )
    }

    export default Header
