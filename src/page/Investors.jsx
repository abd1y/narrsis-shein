import Loding from '../Compont/Loding'
import Investors_content from '../Content/Investors_content'
import { useState,useEffect } from 'react'
import Erorr_page from '../Compont/Erorr_page'

const Investors = () => {
const [loding,setloding]=useState(false)
const [Error,setErorr]=useState(false)

  return (
<>
    
    
        {loding &&<Loding/>}
        
      {  Error?(<Erorr_page/>):<Investors_content setloding={setloding} setErorr={setErorr}/>}
    
</>


    
  )
}

export default Investors
