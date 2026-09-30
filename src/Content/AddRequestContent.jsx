import { Close_configration } from "../Compont/Svg";
import { CreateOrder } from "../API/ApiContent/APIorder";
import { useState } from "react";
import { useSelector } from "react-redux";
const AddRequestContent = () => {
  const [Customer_name,setCustomer_name]=useState("")
  const [customer_deposit,setcustomer_deposit]=useState(0)
  const [selling_price,setselling_price]=useState(0)
  const [cost_price,setcost_price]=useState(0)
  const [order_size,setorder_size]=useState(0)
  const [price_per_km,setprice_per_km]=useState(0)
  const [total_delivery_price,settotal_delivery_price]=useState(0)
  const [delivery_price,setdelivery_price]=useState(0)
  const creatorder=
  CreateOrder(
    Customer_name,
    customer_deposit,
    selling_price,
    cost_price,
    order_size,
    price_per_km,
    total_delivery_price,
    delivery_price
  )
       const status=useSelector((s)=>{
return s.staus.statusValue
  })

  return (
    <>
 <Close_configration/>
    <div className='confration-content-M'>
        <p className='add-text-content'> اسم الزبون:</p>
        <input type='text' className='add-input-content' value={Customer_name} onChange={(e)=>{setCustomer_name(e.target.value)}}/>

        <p className='add-text-content'>السعر للزبون:</p>
        <input type='text' className='add-input-content' value={selling_price.toLocaleString()} 
        onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            setselling_price(Number(value))
          }
        }
        }/><samp className='text-denar'>د.ع</samp>

         <p className='add-text-content'> التكلفه الاجماليه <small>(سعر طلب على المستثمرين):</small></p>
         <input type='text' className='add-input-content' value={cost_price.toLocaleString()}
        onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            setcost_price(Number(value))
          }
        }}
        /><samp className='text-denar'>د.ع</samp>

         <p className='add-text-content'>كميه العربون المدفوع</p>
         <input type='text' className='add-input-content' value={customer_deposit.toLocaleString()}
            onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            setcustomer_deposit(Number(value))
          }
        }}
         />

         <p className='add-text-content'> حجم الطلب <small>(kg):</small></p>
          <input type='text' className='add-input-content'
          value={order_size.toLocaleString()}
             onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            setorder_size(Number(value))
          }
        }}
          />

          <p className='add-text-content'>سعر الـ kg الواحد:</p>
                     <input type='text' className='add-input-content'
                     value={price_per_km.toLocaleString()}
                        onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            setprice_per_km(Number(value))
          }
        }}
                     />
          <p className='add-text-content'> سعر التوصيل :</p>
           <input type='text' className='add-input-content' value={total_delivery_price.toLocaleString()}
                          onChange={(e)=>{
          const value=e.target.value.replace(/,/g,"")
          if(!isNaN(value)){
            settotal_delivery_price(Number(value))
          }
        }}
           />
           <div className="delivery">

      
           <input type="checkbox"  className="delivery-checkbox" checked={delivery_price}
           onChange={(e)=>{
            e.target.checked? setdelivery_price(5000):setdelivery_price(0)
           }}
           />
           <p >هل تريد اضافه 5,000 د.ع اجرة توصيل </p>
                </div>
           <button disabled={status} className="btm-content" onClick={()=>{creatorder()}}>
                         <p> اضافة الطلب</p>
                        
                       </button>
    </div>
    </>
  )
}

export default AddRequestContent
