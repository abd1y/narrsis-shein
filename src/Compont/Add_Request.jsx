import React from 'react'
import { useSelector } from 'react-redux'
import Confirm from '../Modles/Confirm'
import AddRequestContent from '../Content/AddRequestContent'
const Add_Request = () => {
    const add_request=useSelector((s)=>{
        return(
            s.whoclick.value
        )
    })
  return (
<>
{
    add_request==="add_new_Request"&&
    (

        Confirm("Confirm-L",<AddRequestContent/>)
    )
}
</>
  )
}

export default Add_Request
