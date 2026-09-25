import { Icon_page,Icon_login,Icon_logout } from './Svg'
import { useState } from 'react'
import {  useDispatch,useSelector } from 'react-redux'
import { configretionSlider,AuthSlider } from '../Redux/Content/ClickConfigretion'
    const Header = () => {
        const dispatch=useDispatch()
        const status= useSelector((s)=>{
            return s.whoclick.value
        })
        const isAuth=useSelector((s)=>{
             return s.whoclick.Auth
        })

        const [Token,setToken]=useState(
            localStorage.getItem("Token")
        )
        const LogoutHandler=()=>{
         localStorage.removeItem("Token")
    setToken(null)
    dispatch(configretionSlider(null))
    dispatch(AuthSlider(false))
     
        }
        const AuthHandler =()=>{
               if (Token || isAuth) {
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
            Token || isAuth?(<Icon_logout />):(<Icon_login/>)
           }

        </button>

        </div>
    </>
    )
    }

    export default Header
