import LoginContent from '../Content/LoginContent'
import Confirm from '../Modles/Confirm'
import { useSelector } from 'react-redux'


const Login = () => {
 const clickLogin= useSelector((s)=>{
            return s.whoclick.value
        })
  return (
   <>
   {
    clickLogin ==="Log-in" &&(
        Confirm("Confirm-M",<LoginContent  />)
    )
   }
   </>
  )
}

export default Login
