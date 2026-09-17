import DividedContent from "../Content/DividedContent"
import { useState } from "react"
import Loding from "../Compont/Loding"
import Erorr_page from "../Compont/Erorr_page"
const Divided = () => {
  const [loding,setLoding]=useState(false)
  const [erorr,seterorr]=useState(false)
  return (
    <>
    {
      erorr?(<Erorr_page/>):
    loding?(<Loding/>):( <DividedContent/>)
   
    
    }
    </>
  )
}

export default Divided
