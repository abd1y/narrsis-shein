import { useSelector } from 'react-redux'
import Confirm from '../Modles/Confirm'
import UpdatRequestContent from '../Content/UpdatRequestContent'
const Updat_Request = () => {
    const updit_request=useSelector((s)=>{
        return(
            s.whoclick.value
        )
    })
    console.log(updit_request)
  return (
<>
{
    updit_request==="updat_Requst"&&
    (

        Confirm("Confirm-L",<UpdatRequestContent/>)
    )
}
</>
  )
}

export default Updat_Request
