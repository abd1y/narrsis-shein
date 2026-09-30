import { Close_configration } from "../Compont/Svg";
import { useSelector,useDispatch } from "react-redux";
import { set_edit_order } from "../Redux/Content/Order_Redux";
import { Edate_Order } from "../API/ApiContent/APIorder";
const UpdatRequestContent = () => {
  const order_item=useSelector((s)=>{
   return s.order_value.order_update
  })
       const status=useSelector((s)=>{
return s.staus.statusValue
  })

const dispach=useDispatch()
const edate_order=Edate_Order()
  return (
<>
<Close_configration/>
   <div className='confration-content-M'>
        <p className='add-text-content'>   اسم الزبون:</p>
        <input type='text' className='add-input-content' value={order_item.Customer_name} 
        onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"Customer_name",
             value: e.target.value

            }
          ))
        }}
        />
         <p className='add-text-content'> تاريخ الطلب</p>
         <input className='add-input-content' style={{textAlign:"right"}} type="date" value={order_item.order_data}   
       onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"order_data",
             value: e.target.value

            }
          ))
        }}/>
        
        <p className='add-text-content'>السعر للزبون:</p>
        <input type='number' className='add-input-content'  min="0" value={order_item.selling_price }
         onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"selling_price",
             value: Number(e.target.value)
            }
          ))
        }}
        /><samp className='text-denar'>د.ع</samp>
        <p className='add-text-content'>العموله المرسله من قبل الزبون :</p>
        <input type='number' className='add-input-content'  min="0" value={order_item.customer_deposit }
         onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"customer_deposit",
             value: Number(e.target.value)
            }
          ))
        }}
        /><samp className='text-denar'>د.ع</samp>

         <p className='add-text-content'> التكلفه الاجماليه <small>(سعر طلب على المستثمرين):</small></p>
         <input type='number' className='add-input-content' min="0" value={order_item.cost_price} 
                 onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"cost_price",
             value: Number(e.target.value)
            }
          ))
        }}/><samp className='text-denar'>د.ع</samp>
         
         <p className='add-text-content'> حجم الطلب <small>(kg):</small></p>
          <input type='number' className='add-input-content'  min="0" value={order_item.order_size}
           
                          onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"order_size",
             value: Number(e.target.value)
            }
          ))
          }}/>

          <p className='add-text-content'>سعر الـ kg الواحد:</p>
                     <input type='number' className='add-input-content' 
                      // min="0"
                     value={order_item.price_per_km}
                           
                          onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"price_per_km",
             value: Number(e.target.value)
            }
          ))
          }}/>

                    

          <p className='add-text-content'> سعر التوصيل :</p>
           <input type='number' className='add-input-content'
                      min="0"
                     value={order_item.total_delivery_price}
          onChange={(e)=>{
          dispach(set_edit_order(
            {
              field:"total_delivery_price",
             value: Number(e.target.value)
            }
          ))
          }}
           />
           
           <div className="delivery">
           <input type="checkbox"  className="delivery-checkbox" checked={order_item.delivery_price === 5000}
           onChange={(e)=>{
            dispach(set_edit_order({
              field:"delivery_price",
              value:e.target.checked?5000:0
            }))
          
           }}
           />
           <p >هل تريد اضافه 5,000 د.ع اجرة توصيل </p>
                </div>
                  <button disabled={status} className="btm-content" onClick={()=>{edate_order()}}>
                         <p> تعديل الطلب</p>
                        
                       </button>
           </div>
</>
  )
}

export default UpdatRequestContent
