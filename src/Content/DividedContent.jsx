import { Delete_bin,Add_content } from '../Compont/Svg'
import { useDispatch,useSelector } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import Remove_divided from './Remov_divided'
import Confirm from '../Modles/Confirm'

const DividedContent = () => {

    const open_configration_remov=useSelector((s)=>{
    return s.whoclick.value
})
    const dispatch=useDispatch()
  return (
    <div className='Table'>
       <div className='main-item-Table'>

        
    <div className='Logo-Table'>
        <h3 className='Logo-Table-Text'>تقسيم  الطلبات</h3>
    </div>
    <table className='list-Table'>
        <tr className='main-list-Table'>
            <th className='list-Table-child'>رقم الطلب</th>
            <th className='list-Table-child'>نرجس</th>
            <th className='list-Table-child'>مجمد</th>
            <th className='list-Table-child'>عبدالله</th>
            <th className='list-Table-child'>فاطمه</th>
            <th className='list-Table-child'>عدد مشاركين في طلب</th>
            <th className='list-Table-child'>اجمالي الكمركيه <small>(التوصيل+ سعر الكيلو الاجمالي)</small></th>
            <th className='list-Table-child'>الارباح لكل مستثمر</th>
            <th className='list-Table-child'>حذف</th>
        </tr>
        <tr className="main-list-Table">
            <td className="list-Table-info">1</td>
            <td className="list-Table-info">شارك</td>
            <td className="list-Table-info">لم يشارك</td>
            <td className="list-Table-info">لم يشار</td>
            <td className="list-Table-info">لم يشارك</td>
            <td className="list-Table-info">1 </td>
            <td className="list-Table-info">20,000</td>
            <td className="list-Table-info">4,0000</td>
            <td className="list-Table-info" onClick={()=>{dispatch(configretionSlider("Remove-Divided"))}}><Delete_bin/></td>
        </tr>
       
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
