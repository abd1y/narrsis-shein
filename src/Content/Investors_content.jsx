import { Add_content,Delete_bin,WithdrawMoney } from '../Compont/Svg'
import Confirm from '../Modles/Confirm'
import Remove_investorContent from './Remove_investorContent'
import {useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import { APIgetInvestors } from '../API/ApiContent/APIInvestors'
import { useEffect } from 'react'
import { clickValueHandler } from '../Redux/Content/ClickConfigretion'
const Investors_content = () => {
const dispatch=useDispatch()
    const info=useSelector((status)=>{return status.infoValue.info})
//  Redux
const open_configration_remov=useSelector((s)=>{return s.whoclick.value})
const Token = useSelector((state) =>{return state.Token.value})
// function API
const getinvester=APIgetInvestors()
  useEffect(()=>{
getinvester()
  },[Token])
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
    
   <tr className='main-list-Table' key={item.id} >
    <td className="list-Table-info"> {index+1}</td>
    <td className="list-Table-info"> {item.InvestorsName}</td>
    <td className="list-Table-info"> {item.InvestorsUser}</td>
    <td className="list-Table-info">{item.Customs.toLocaleString()}</td>
    <td className="list-Table-info">{item.Withdrawn.toLocaleString()}</td>
    <td className="list-Table-info">{item.investedMone.toLocaleString()}</td>
    <td className="list-Table-info">{item.profits.toLocaleString()}</td>
    
    <td className="list-Table-info"  onClick={()=>
{
dispatch(clickValueHandler(item.id))
dispatch(configretionSlider("balance-Transaction"))
}
}>
    <WithdrawMoney/>
    </td>
<td  className="list-Table-info Delete_Table" onClick={()=>
{
dispatch(clickValueHandler(item.id))
dispatch(configretionSlider("Remove-investors"))
}
}>
<Delete_bin/>
</td> 

</tr>
))

}
    <button className='Add-Table' 
      onClick={()=>{dispatch(configretionSlider("Add-investors"))}}>
    <Add_content/>
    </button>
{open_configration_remov==="Remove-investors" &&
(Confirm("Confirm-S",<Remove_investorContent  />))}
</table>
 </div>
    </div>
  )
}

export default Investors_content
