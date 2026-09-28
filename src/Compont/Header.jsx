import { Icon_page,Icon_login,Icon_logout } from './Svg'

import {  useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import { LogoutToken } from '../Redux/Content/TokenSlice'
    const Header = () => {
        const dispatch=useDispatch()
        const status= useSelector((s)=>{
            return s.whoclick.value
        })
       const Token = useSelector((state) =>{
         return state.Token.value
       })
        const LogoutHandler=()=>{
            localStorage.removeItem("Token")
    dispatch(configretionSlider(null))
     dispatch(LogoutToken())
        }
        const AuthHandler =()=>{
               if (Token) {
        LogoutHandler()
    } else {
        dispatch(configretionSlider("Log-in"))
    }
        }
       
      
    return (
        <>
    
        <div className='header'>
        <div>

        </div>
        <div className='header-icon'>

           <Icon_page/>
        <p className='header-icon-Text'>Narsis Shein</p>
        </div>
        <button  className='Icon-auth' title={ status==="log-out"?'تسجيل خروج':'تسجيل دخول'} onClick={()=>AuthHandler()}>
           {
            Token ?(<Icon_logout />):(<Icon_login/>)
           }

        </button>

        </div>
    </>
    )
    }

    export default Header
