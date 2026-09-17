import { useState } from "react"
import RequestsContent from "../Content/RequestsContent"
import Loding from "../Compont/Loding"
import Erorr_page from "../Compont/Erorr_page"

const Requests = () => {
    const [loding,setloding]=useState(false)
    const [Erorr,setErorr]=useState(false)
  return (
    <>
    {
        Erorr?(
            <Erorr_page/>
        ):
       ( loding? (<Loding/>):(<RequestsContent/>))
    }
    </>

  )
}

export default Requests
