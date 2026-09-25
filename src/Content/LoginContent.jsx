import {useState} from 'react'
import {
  Open_eye_narses,
  Close_eye_narses,
  Eye_open_password,
  Eye_close_password,
  Close_configration,
} from "../Compont/Svg";
import API from "../API/Axios";
import Notifications from '../Modles/NaficationMessgeModel';
import {  useDispatch } from 'react-redux'
import { configretionSlider,AuthSlider } from '../Redux/Content/ClickConfigretion'
const LoginContent = () => {
  const dispatch = useDispatch()
  // useStates
     const [eyeOpen,set_eyeOpen]=useState(false)
     const[username,setusername]=useState("")
     const[password,setpassword]=useState("")
     const [loding,setloding]=useState(false)
    //  function
    const eyeHandler=()=>{
        set_eyeOpen(!eyeOpen)
    }

    //  API
    const LOGINAPI=()=>{
      setloding(true)
      Notifications('',"Loding")
      API.post('authention/Login/',{
 username:username,
  Password:password
      }
      ).then(res=>{
        setloding(false)
  Notifications('تم تسجيل الدخول بنجاح',"correct")
        localStorage.setItem("Token",res.data.Token)
        dispatch(configretionSlider("log-out"))
        dispatch(AuthSlider(true))
      })
      .catch(err=>{
        setloding(false)
        Notifications(err.response.data.error,"error")
      })
    }

    //  content
  return (
   <>
            <Close_configration/>
     <div className='Icon-Login'>
        {
            !eyeOpen?(<Close_eye_narses/>):(<Open_eye_narses/>)
        }
   
  <p className='Text-icon-login'>  تسجيل الدخول</p>
     </div>
     <div className='btm-Login'>
<p className='Text-btm-login'>اسم مستخدم:</p>
<input type='text' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
<p className='Text-btm-login'>الرمز السري:</p>
<input type={!eyeOpen?'Password':"text"} value={password} onChange={(e)=>{setpassword(e.target.value)}} />
{
    eyeOpen?(<Eye_open_password eyeHandler={eyeHandler} />):(<Eye_close_password eyeHandler={eyeHandler} />)
}

<button className='btm-login' onClick={()=>LOGINAPI() } disabled={loding}>تسجيل دخول </button>
     </div>
        </>
  )
}

export default LoginContent
