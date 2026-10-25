import DividedContent from "../Content/DividedContent"
import { useSelector } from "react-redux"
import Loding from "../Compont/Loding"
import Erorr_page from "../Compont/Erorr_page"
const Divided = () => {
  const loding=useSelector((s)=>{
return s.staus.LodingValue
  })
  const Error=useSelector((s)=>{
return s.staus.ErorrValue
  })
  return (
    <>
      {loding &&<Loding/>}
    {
    
    Error?(<Erorr_page/>):( <DividedContent/>)
   
    
    }
    </>
  )
}

export default Divided
