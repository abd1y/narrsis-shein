    import { Delete_bin,Pen_icon,Add_content } from "../Compont/Svg"
    import { useSelector,useDispatch } from "react-redux"
    import { configretionSlider } from "../Redux/Content/ClickConfigretion"
    import Remove_RequestContent from "./Remove_RequestContent"
    import Confirm from "../Modles/Confirm"
    const RequestsContent = () => {
        const open_configration_reomv=useSelector((s)=>{
    return s.whoclick.value
        })

        const dispatch=useDispatch()
    return (
    <div className='Table'>
            <div className='main-item-Table'>

        
    <div className='Logo-Table'>
        <h3 className='Logo-Table-Text'>جدول الطلبات</h3>
    </div>

    <table className='list-Table'>
    <tr className='main-list-Table'>
        <th className="list-Table-child"> رقم طلب </th>
        <th className="list-Table-child">  تاريخ  الطلب</th>
        <th className="list-Table-child"> اسم زبون</th>
        <th className="list-Table-child">  سعر للزبون</th>
        <th className="list-Table-child"> عربون </th>
        <th className="list-Table-child">التكلفه</th>
        <th className="list-Table-child">حجم طلب <small>(kg)</small></th>
        <th className="list-Table-child"> سعر التوصيل + سعر كامل لـ KG</th>
        <th className="list-Table-child"> الربح صافي</th>
        <th className="list-Table-child">  سعر الاجمالي لزبون</th>
        <th className="list-Table-child">تعديل</th>
            <th className="list-Table-child">حذف</th>


    </tr>
    <tr className='main-list-Table'>
        <td className="list-Table-info"> 1</td>
        <td className="list-Table-info"> 2027/1/1</td>
        <td className="list-Table-info"> نرجس</td>
        <td className="list-Table-info">50,450</td>
        <td className="list-Table-info"> 0</td>
        <td className="list-Table-info">153,250</td>
        <td className="list-Table-info">4</td>
        <td className="list-Table-info" >10,000</td>
        <td className="list-Table-info">950,000</td>
        <td className="list-Table-info">1,500,000</td>
        <td className="list-Table-info"onClick={()=>dispatch(configretionSlider("updat_Requst"))}><Pen_icon/></td>
            <td className="list-Table-info" onClick={()=>dispatch(configretionSlider("Remove_Requst"))}><Delete_bin/></td>



    </tr>
    <tr className='main-list-Table'>
        <td className="list-Table-info"> 1</td>
                <td className="list-Table-info"> 2027/1/1</td>
        <td className="list-Table-info"> نرجس</td>
        <td className="list-Table-info"> 1,250,450</td>
        <td className="list-Table-info"> 250,450</td>
        <td className="list-Table-info">153,250</td>
        <td className="list-Table-info">4</td>
        <td className="list-Table-info">10,000</td>
        <td className="list-Table-info">950,000</td>
        <td className="list-Table-info">1,500,000</td>
        <td className="list-Table-info " onClick={()=>dispatch(configretionSlider("updat_Requst"))}><Pen_icon/></td>
            <td className="list-Table-info" onClick={()=>dispatch(configretionSlider("Remove_Requst"))}><Delete_bin/></td>




    </tr>



        <button className='Add-Table' onClick={()=>dispatch(configretionSlider("add_new_Request"))} >

    <Add_content/>

        </button>
{
open_configration_reomv==="Remove_Requst" &&(
    Confirm("Confirm-S",<Remove_RequestContent/>)
)
}


    </table>

    </div>
        </div>
    )
    }

    export default RequestsContent
