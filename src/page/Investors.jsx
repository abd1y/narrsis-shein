import Loding from '../Compont/Loding'
import Investors_content from '../Content/Investors_content'
import Erorr_page from '../Compont/Erorr_page'
import { useSelector } from 'react-redux'
const Investors = () => {
  const loding=useSelector((s)=>{
return s.staus.LodingValue
  })
  const Error=useSelector((s)=>{
return s.staus.ErorrValue
  })
  return (
<>
        {loding &&<Loding/>}
      {  Error?(<Erorr_page/>):<Investors_content/>}
    
</>


    
  )
}

export default Investors
