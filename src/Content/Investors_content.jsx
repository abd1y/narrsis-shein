import { Add_content,Delete_bin,WithdrawMoney } from '../Compont/Svg'
import Confirm from '../Modles/Confirm'
import Remove_investorContent from './Remove_investorContent'
import {useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import API from "../API/Axios";
import { useState,useEffect } from 'react'
const Investors_content = ({setErorr,setloding}) => {
    const open_configration_remov=useSelector((s)=>{
    return s.whoclick.value
})
//  data States
// const [InvestorsUser,setInvestorsUser]=useState()
// const [profits,setprofits]=useState()
// const [Customs,setCustoms]=useState()
// const [Withdrawn,setWithdrawn]=useState()
// const [investedMone,setinvestedMone]=useState()
const [info,setinfo]=useState([])
const Token=localStorage.getItem("Token")
  const dispatch=useDispatch()
  useEffect(()=>{
    setloding(true)
    API.get('investors/getInvestors/',
    {      headers:{
    Authorization:`Token ${Token}`
  }}
)

    .then(res=>{
     const Info_invester=res.data.Investors.map((item)=>(
       { 
        id: item.id,
        InvestorsName:item.InvestorsName,
        InvestorsUser:item.InvestorsUser,
        profits:item.profits,
        Customs:item.Customs,
        investedMone:item.investedMone,
        Withdrawn:item.Withdrawn
        
    }
    
     ))
     setloding(false)
     setinfo(Info_invester)
    })
    .catch(err=>{
        setErorr(true)
        setloding(false)
    })
  },[])
  return (
  <div className='Table'>
        <div className='main-item-Table'>

       
<div className='Logo-Table'>
    <h3 className='Logo-Table-Text'>المستثمرين</h3>
</div>

<table className='list-Table'>
<tr className='main-list-Table'>
    <th className="list-Table-child"> التسلسل</th>
    <th className="list-Table-child">اسم المستثمر</th>
    <th className="list-Table-child"> اسم مستخدم</th>
    <th className="list-Table-child">مدفوعات الكمركيه</th>
    <th className="list-Table-child">مجموع الاموال مسحوبه </th>
        <th className="list-Table-child">المبلغ المستثمر</th>
        <th className="list-Table-child">الارباح</th>
    <th className="list-Table-child list-delete-child">سحب او ايداع</th>
    <th className="list-Table-child list-delete-child"> حذف</th>
</tr>
{
info.map((item,index)=>(
    
   <tr className='main-list-Table' key={item.id} id={item.id}>
    <td className="list-Table-info"> {index+1}</td>
    <td className="list-Table-info"> {item.InvestorsName}</td>
    <td className="list-Table-info"> {item.InvestorsUser}</td>
    <td className="list-Table-info">{item.Customs.toLocaleString()}</td>
    <td className="list-Table-info">{item.Withdrawn.toLocaleString()}</td>
    <td className="list-Table-info">{item.investedMone.toLocaleString()}</td>
    <td className="list-Table-info">{item.profits.toLocaleString()}</td>
    <td className="list-Table-info"  onClick={()=>{dispatch(configretionSlider("balance-Transaction"))}}>
        <WithdrawMoney/>
    </td>
      <td  className="list-Table-info Delete_Table" onClick={()=>dispatch(configretionSlider("Remove-investors"))}>
      <Delete_bin/>
        </td> 

</tr>
))

}




    <button className='Add-Table'   onClick={()=>{dispatch(configretionSlider("Add-investors"))}}>


    <Add_content/>
    </button>
{
      open_configration_remov==="Remove-investors" &&(
          Confirm("Confirm-S",<Remove_investorContent />)
      )
}
</table>
 </div>
    </div>
  )
}

export default Investors_content
{/* <td>{item.price.toLocaleString()}</td> اذا رقم */}
{/* <td>{Number(item.price).toLocaleString()}</td> اذا نص  */}