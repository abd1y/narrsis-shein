    import { Delete_bin,Pen_icon,Add_content } from "../Compont/Svg"
    import { useSelector,useDispatch } from "react-redux"
    import { configretionSlider } from "../Redux/Content/ClickConfigretion"
    import Remove_RequestContent from "./Remove_RequestContent"
    import Confirm from "../Modles/Confirm"
    import { GetAllOrder } from "../API/ApiContent/APIorder"
    import { useEffect } from "react"
    import { show_order } from "../Redux/Content/Order_Redux"

    const RequestsContent = () => {
        const getOrder=GetAllOrder()
        const open_configration_reomv=useSelector((s)=>{
    return s.whoclick.value
        })
const order=useSelector((s)=>{
    return s.order_value.order
})
useEffect(()=>{
getOrder()
},[])
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
    {
        order.map((item)=>(
                <tr className='main-list-Table' key={item.id} id={item.id}>
        <td className="list-Table-info"> {item.number_order}</td>
        <td className="list-Table-info" style={{width:"15%"}}>{item.order_data}</td>
        <td className="list-Table-info"> {item.Customer_name}</td>
        <td className="list-Table-info"> {item.selling_price.toLocaleString()}</td>
        <td className="list-Table-info">{item.customer_deposit.toLocaleString()}</td>
        <td className="list-Table-info">{item.cost_price.toLocaleString()}</td>
        <td className="list-Table-info" title={`سعر الـ kg الواحد هو ${item.price_per_km.toLocaleString()}د.ع`}>{item.order_size}</td>
        <td className="list-Table-info" 
        title={`سعر الكامل لكل kg هو ${item.total_price_per_kg.toLocaleString()}د.ع و سعر  تكلفه توصيل الطلبيه هو ${item.total_delivery_price.toLocaleString()}د.ع و سعر توصيل الى بيت الزبون هو ${item.delivery_price.toLocaleString()}د.ع`} >
            {(item.total_price_per_kg +item.total_delivery_price +item.delivery_price).toLocaleString()}</td>
        <td className="list-Table-info">{item.net_profit.toLocaleString()}</td>
        <td className="list-Table-info">{item.order_total.toLocaleString()}</td>
        <td className="list-Table-info"onClick={
            ()=>{
            dispatch(show_order(item))
            dispatch(configretionSlider("updat_Requst"))}}><Pen_icon/></td>
            <td className="list-Table-info" onClick={()=>{
               dispatch(show_order(item.id))
                dispatch(configretionSlider("Remove_Requst"))}}><Delete_bin/></td>



    </tr>
        ))
    }



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
