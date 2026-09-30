import {useState} from 'react'
import { Add_new_investor,Close_configration } from "../Compont/Svg";
import { Creat_investor } from '../API/ApiContent/APIInvestors';
import { useSelector } from 'react-redux';
const Add_investorContent = () => {
  const [InvestorsName,setInvestorsName]=useState("")
  const [InvestorsUser,setInvestorsUser]=useState("")
  const [investedMone,setinvestedMone]=useState(0)
  const [Customs,setCustoms]=useState(0)
  const creat_investor=Creat_investor(InvestorsName,InvestorsUser,investedMone,Customs)
     const status=useSelector((s)=>{
return s.staus.statusValue
  })

  return (
  <>

 
          <Close_configration/>
  <div className='confration-content-M'>
            <p className="add-text-content"> اسم المستثمر:</p>
            <input className="add-input-content" type="text"  value={InvestorsName} onChange={(e)=>{setInvestorsName(e.target.value)}}/>
            <p className="add-text-content">  اسم المستخدم<small>(اقصى حد للحروف هو عشرة)</small>:</p>
            <input className="add-input-content" type="text" maxLength={10}  value={InvestorsUser} onChange={(e)=>{setInvestorsUser(e.target.value)}} />
            <p className="add-text-content">
              مبلغ المستثمر <small>(مع اضافه الاصفار):</small>
            </p>
<input
  className="add-input-content"
  type="text"
  value={investedMone.toLocaleString()}
  onChange={(e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value)) {
      setinvestedMone(Number(value));
    }
  }}
/><samp>د.ع</samp>
            <p className="add-text-content">
          
              مدفوعات الكمركيه <small> (ان وجدت):</small>
            </p>
            <input className="add-input-content" type="text" 
            value={Customs.toLocaleString()} onChange={(e)=>{
              const value=e.target.value.replace(/,/g,"")
              if(!isNaN(value)){
                setCustoms(Number(value))
              }
            }} /><samp>د.ع</samp>
            <button disabled={status} onClick={()=>{creat_investor()}} className="btm-content" >
              <p> اضافة</p>
              <Add_new_investor /> 
            </button>
             </div>
          </>
  )
}

export default Add_investorContent