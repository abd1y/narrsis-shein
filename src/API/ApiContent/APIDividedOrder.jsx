import React from 'react'
import Notifications from "../../Modles/NaficationMessgeModel"
import API from '../Axios'
import { useDispatch,useSelector } from 'react-redux'
import { setloding,seterorr } from "../../Redux/Content/RequestState"
import { configretionSlider } from "../../Redux/Content/ClickConfigretion"
import {Set_Investor, Remove_Divided,set_dividedOrder,addDivided } from '../../Redux/Content/DividedOrder'
export const GetAllDividedOrder=()=>{

    const dispatch = useDispatch()
    const getallDividedOrder=()=>{
                dispatch(setloding(true))
        API.get('OrderInvestors/get_invested/')
        .then(res=>{
            dispatch(setloding(false))
           dispatch(set_dividedOrder(res.data.data) )
          dispatch(Set_Investor(res.data.data.flatMap(item=>item.invester)))
        })
        .catch(err=>{
        dispatch( seterorr(true))
         dispatch(setloding(false))
        })
    }
return getallDividedOrder
}
export const Remove_Divided_order=()=>{
        const dispach=useDispatch()
     const Token = useSelector((state) =>{return state.Token.value})
const id_divided = useSelector(s => s.Dividedorder.id_divided)
const remove_dividedOrder=()=>{

 Notifications("","Loding")
    API.delete('OrderInvestors/delete_invested/',
        {
                     headers:{
     Authorization:`Token ${Token}`
  },
   data:{
    id:id_divided
  }
        }
       
    )
    .then(res=>{
 Notifications("تم حذف طلب مقسم  بنجاح","correct")
      dispach(configretionSlider(null)) 
      
      dispach(Remove_Divided(id_divided))

    })
    .catch(err=>{
            Notifications(err.response.data.erorr,"error")
    })
}
return remove_dividedOrder
}

export const Add_divided_order=(number_order)=>{
            const selectedInvestors = useSelector(s => s.Dividedorder.selectedInvestors)
            const Token = useSelector((state) =>{return state.Token.value})
            const dispach=useDispatch()
            const add_divided_order=()=>{

                Notifications("","Loding")
            API.post('OrderInvestors/create_invested/',
                 { number_order:number_order,
            investors:selectedInvestors
            },
                {
    headers:{
         Authorization:`Token ${Token}`
      },
            }
        
        )
        .then(res=>{
     Notifications(res.data.Mesg,"correct")
          dispach(configretionSlider(null)) 
         API.get('OrderInvestors/get_invested/')
    .then(res => {
        dispach(set_dividedOrder(res.data.data))
        dispach(Set_Investor(res.data.data.flatMap(item => item.invester)))
    })
    
        })
        .catch(err=>{
             Notifications(err.response.data.erorr,"error")
        })
            }
            return add_divided_order
}


export const GetInvestorsForDivided = () => {
    const dispatch = useDispatch()
    const Token = useSelector(state => state.Token.value)

    const getInvestors = () => {
        API.get('investors/getInvestors/', {
            headers: {
                Authorization: `Token ${Token}`
            }
        })
        .then(res => {
            dispatch(Set_Investor(
                res.data.Investors.map(item => ({
                    InvestorsName: item.InvestorsName,
                    InvestorsUser: item.InvestorsUser
                }))
            ))
        })
        .catch(err => {
            console.log(err)
        })
    }

    return getInvestors
}
