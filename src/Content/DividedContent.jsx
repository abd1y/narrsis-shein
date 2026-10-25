import { Delete_bin,Add_content } from '../Compont/Svg'
import { useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import Remove_divided from './Remov_divided'
import Confirm from '../Modles/Confirm'
import { useState,useEffect } from 'react'
import { GetAllDividedOrder } from '../API/ApiContent/APIDividedOrder'
import { show_divided_order } from '../Redux/Content/DividedOrder'
const DividedContent = () => {
const info = useSelector(s => s.Dividedorder.divided)
const investor = useSelector(s => s.Dividedorder.invister)
    const open_configration_remov=useSelector((s)=>{
    return s.whoclick.value
})
    const dispatch=useDispatch()
    const APIGetAllDividedOrder=GetAllDividedOrder()

    useEffect(()=>{
        APIGetAllDividedOrder()
    },[])

  return (
    <div className='Table'>
       <div className='main-item-Table'>

        
    <div className='Logo-Table'>
        <h3 className='Logo-Table-Text'>تقسيم  الطلبات</h3>
    </div>
    <table className='list-Table'>
        <tr className='main-list-Table'>
            <th className='list-Table-child'>رقم الطلب</th>
 {[...new Map(investor.map(item => [item.InvestorsName, item])).values()].map((item, index) => (
    <th className="list-Table-child" key={index}>
        {item.InvestorsName}
    </th>
))}
        
            <th className='list-Table-child'>عدد مشاركين في طلب</th>
            <th className='list-Table-child'>اجمالي الكمركيه <small>(التوصيل+ سعر الكيلو الاجمالي)</small></th>
            <th className='list-Table-child'>الارباح لكل مستثمر</th>
            <th className='list-Table-child'>حذف</th>
        </tr>
        {
info.map((item)=>(

        <tr className="main-list-Table">
            <td className="list-Table-info">{item.number_order}</td>
            {item.invester.map(item=>(

      <td className="list-Table-info">{item.invested?"شارك":"لم يشارك"}</td>
            ))}
            <td className="list-Table-info">{item.invester_counted} </td>
            <td className="list-Table-info">{item.CustomsTotal.toLocaleString()}</td>
            <td className="list-Table-info">{item.profit_for_invester.toLocaleString()}</td>
            <td className="list-Table-info" onClick={
                ()=>{
                    dispatch(configretionSlider("Remove-Divided"))
                    dispatch(show_divided_order(item.id))
                }
                
                }><Delete_bin/></td>
        </tr>
))
        }
       
    </table>
     <button className='Add-Table'  onClick={()=>{dispatch(configretionSlider("add-Divided"))}} >
    
    
        <Add_content/>
        </button>
        {
      open_configration_remov==="Remove-Divided" &&(
          Confirm("Confirm-S",<Remove_divided />)
      )
}
    </div>
    </div>
  )
}

export default DividedContent
