import { Add_content,Delete_bin,WithdrawMoney } from '../Compont/Svg'
import Confirm from '../Modles/Confirm'
import Remove_investorContent from './Remove_investorContent'
import {useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
const Investors_content = () => {
    const open_configration_remov=useSelector((s)=>{
    return s.whoclick.value
})

  const dispatch=useDispatch()
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
<tr className='main-list-Table'>
    <td className="list-Table-info"> 1</td>
    <td className="list-Table-info"> نرجس</td>
    <td className="list-Table-info"> Nana192092</td>
    <td className="list-Table-info">0</td>
    <td className="list-Table-info">12,000</td>
    <td className="list-Table-info">12,000</td>
    <td className="list-Table-info">153,250</td>
    <td className="list-Table-info"  onClick={()=>{dispatch(configretionSlider("balance-Transaction"))}}>
        <WithdrawMoney/>
    </td>
      <td  className="list-Table-info Delete_Table" onClick={()=>dispatch(configretionSlider("Remove-investors"))}>
      <Delete_bin/>
        </td> 

</tr>



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