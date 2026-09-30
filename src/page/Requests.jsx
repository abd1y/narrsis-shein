import { useState } from "react"
import RequestsContent from "../Content/RequestsContent"
import Loding from "../Compont/Loding"
import Erorr_page from "../Compont/Erorr_page"
import { useSelector } from "react-redux"
const Requests = () => {
    const loding=useSelector((s)=>{
return s.staus.LodingValue
  })

  const Error=useSelector((s)=>{
return s.staus.ErorrValue
  })
  return (
    <>
{
  loding && <Loding/>
}
{Error?(<Erorr_page/>):(<RequestsContent/>)}
    </>

  )
}

export default Requests
