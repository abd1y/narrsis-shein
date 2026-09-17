import {useState} from 'react'
import {Open_eye_narses,Close_eye_narses,Eye_open_password,Eye_close_password,Close_configration} from "../Compont/Svg"

const LoginContent = () => {
     const [eyeOpen,set_eyeOpen]=useState(false)
    const eyeHandler=()=>{
        set_eyeOpen(!eyeOpen)
    }
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
<input type='text'/>
<p className='Text-btm-login'>الرمز السري:</p>
<input type={!eyeOpen?'Password':"text"}/>
{
    eyeOpen?(<Eye_open_password eyeHandler={eyeHandler} />):(<Eye_close_password eyeHandler={eyeHandler} />)
}

<button className='btm-login'>تسجيل دخول </button>
     </div>
        </>
  )
}

export default LoginContent
