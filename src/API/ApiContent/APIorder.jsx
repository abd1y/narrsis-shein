import API from "../Axios"
import { useDispatch,useSelector } from "react-redux"
import { setorder } from "../../Redux/Content/Order_Redux"
import { seterorr,setloding } from "../../Redux/Content/RequestState"
import { save_edit_order } from "../../Redux/Content/Order_Redux"
import Notifications from '../../Modles/NaficationMessgeModel'
import { configretionSlider } from "../../Redux/Content/ClickConfigretion"
import { remove_order,add_order } from "../../Redux/Content/Order_Redux"
export const GetAllOrder=()=>{
    const dispach=useDispatch()
    const getOrder=()=>{
        dispach(setloding(true))
API.get('orders/get_order/')
.then((res)=>{
        const info_order=res.data.orders.map(item=>({
            id:item.id,
            number_order:item.number_order,
            order_data:item.order_data,
            Customer_name:item.Customer_name,
            customer_deposit:item.customer_deposit, //// العربون 
            selling_price:item.selling_price, /// سعر الزبون
            cost_price:item.cost_price, ///  تكلفه
            order_size:item.order_size, 
            price_per_km:item.price_per_km,
            total_price_per_kg:item.total_price_per_kg,
            total_delivery_price:item.total_delivery_price, /// سعر توصيل كامل (من شركه شحن)
            delivery_price:item.delivery_price, /// سعر توصيل  لبيت زبون
            net_profit:item.net_profit , /// الارباح 
            order_total:item.order_total
        }))

dispach(setorder(info_order))
}
)
.catch(err=>{

dispach(seterorr(true))
})
.finally(()=>{
 dispach(setloding(false))
})
}
return getOrder
}

export const Edate_Order=()=>{
const dispach=useDispatch()
  const order_item=useSelector((s)=>{
   return s.order_value.order_update
  })
  const Token = useSelector((state) =>{return state.Token.value})
  const edate_order=()=>{
    Notifications("","Loding")
API.put('orders/ubdate_order/',
    {
id:order_item.id,
Customer_name:order_item.Customer_name,
order_data:order_item.order_data,
selling_price:order_item.selling_price,
customer_deposit:order_item.customer_deposit,
order_size:order_item.order_size,
price_per_km:order_item.price_per_km,
total_delivery_price:order_item.total_delivery_price,
delivery_price:order_item.delivery_price,
},
{
    headers:{

                Authorization: `Token ${Token}`
            
    }
})
.then(res=>{
    Notifications(res.data.Msg,'correct')
    dispach(configretionSlider(null)) 
    dispach(save_edit_order({      
        id: order_item.id,
          orders: order_item
        }))
})
.catch(err=>{
      Notifications(err.response.data.erorr,"error")
})
  }
  return edate_order
}

export const Remove_order=()=>{
const dispach=useDispatch()
 const Token = useSelector((state) =>{return state.Token.value})
   const id_order=useSelector((s)=>{
   return s.order_value.order_update
  })
  const remove_orders=()=>{
    Notifications("","Loding")
API.delete('orders/delete_order/',
    {
         headers:{
     Authorization:`Token ${Token}`
  },
  data:{
    id:id_order
  }
    }
    
)
.then(res=>{
    Notifications("تم حذف طلب بنجاح","correct")
     dispach(configretionSlider(null)) 
    dispach(remove_order({
    id: id_order
}))
})
.catch(err=>{
      Notifications(err.response.data.erorr,"error")
})
  }
return remove_orders
}

export const CreateOrder=
(Customer_name,
  customer_deposit,
  selling_price,
  cost_price,
  order_size,
  price_per_km,
  total_delivery_price,
  delivery_price)=>{
  const dispach=useDispatch()
 const Token = useSelector((state) =>{return state.Token.value})
 const createorder=()=>{
  Notifications("","Loding")
  API.post('orders/create_order/',
    {
      Customer_name:Customer_name,
      customer_deposit:customer_deposit,
      selling_price:selling_price,
      cost_price:cost_price,
      order_size:order_size,
      price_per_km:price_per_km,
      total_delivery_price:total_delivery_price,
      delivery_price:delivery_price
    },
      {
          headers:{
                Authorization:`Token ${Token}`
          }
        }
  )
  .then(res=>{
    Notifications("تم اضافه طلب بنجاح","correct")
    dispach(configretionSlider(null))
    dispach(add_order(res.data))
  })
  .catch(err=>{
        Notifications(err.response.data.erorr,"error")
  })
  
 }
 return createorder
}