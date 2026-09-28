import API from "../Axios"
import { useDispatch,useSelector } from 'react-redux'
import { setloding,seterorr } from "../../Redux/Content/RequestState"
import { Remove_investers } from "../../Redux/Content/InfoInvester"
import {setInfo} from '../../Redux/Content/InfoInvester'
import { configretionSlider } from '../../Redux/Content/ClickConfigretion'
  import { withdraw_InvestorMony,Depost_InvestorMony,Add_investor } from '../../Redux/Content/InfoInvester';
import Notifications from "../../Modles/NaficationMessgeModel"
export const APIgetInvestors = () => {

    const dispatch = useDispatch()
const Token = useSelector((state) =>{return state.Token.value})
    const getAllinvester = () => {

        dispatch(setloding(true))

        API.get('investors/getInvestors/', {
            headers: {
                Authorization: `Token ${Token}`
            }
        })
        .then(res => {

            const Info_invester = res.data.Investors.map(item => ({
                id: item.id,
                InvestorsName: item.InvestorsName,
                InvestorsUser: item.InvestorsUser,
                profits: item.profits,
                Customs: item.Customs,
                investedMone: item.investedMone,
                Withdrawn: item.Withdrawn
            }))

            dispatch(setloding(false))
            dispatch(setInfo(Info_invester))
        })
        .catch(err => {
           dispatch( seterorr(true))
            dispatch(setloding(false))
        })
    }

    return getAllinvester
}

 export const Remove_invester_handler=()=>{
    const dispatch = useDispatch()
        const Token = useSelector((state) =>{return state.Token.value})
    const valueClick=  useSelector((state)=>{return state.whoclick.click_value})


    const Remove_invester=()=>{
  Notifications("",'Loding')
API.delete('investors/Remove_investors/',{
  headers:{
     Authorization:`Token ${Token}`
  },
  data:{
    id:valueClick}

})
.then(res=>{
  dispatch(configretionSlider(null))
  dispatch(Remove_investers(valueClick))
Notifications(res.data.Mes,'correct')

})
.catch(err=>{
Notifications("حدث خطأ اثناء الحذف يرجى محاوله لاحقا",'error')
})
}
return Remove_invester
}

export const  Amount_Depost=(Depost)=>{
    const dispatch=useDispatch()
    const valueClick=  useSelector((state)=>{return state.whoclick.click_value})
 const Token = useSelector((state) =>{return state.Token.value})
    const Depost_mony=()=>{
     Notifications('',"Loding")
        API.post("investors/Add_invested_money/",  
          { amount:Depost,
        id:valueClick
        },
        {
          headers:{
                Authorization:`Token ${Token}`
          }
        }
    
        
      )
      .then(res=>{
        Notifications(res.data.Mes,"correct")
      dispatch(Depost_InvestorMony({id:valueClick,investedMone: res.data.investedMone}))
  dispatch(configretionSlider(null))
        
      })
      .catch(err=>{
        Notifications(err.response.data.erorr,"error")
      })
    }
      return Depost_mony
    }

export   const Amount_withdraw=(withdraw)=>{
        const dispatch=useDispatch()
    const valueClick=  useSelector((state)=>{return state.whoclick.click_value})
 const Token = useSelector((state) =>{return state.Token.value})
const withdraw_investor=()=>{
                  Notifications('',"Loding")
    API.post('investors/withdraw_invested_money/',
      { amount:withdraw,
        id:valueClick
        },
        {
          headers:{
                Authorization:`Token ${Token}`
          }
        }
    )
    .then(res=>{
  Notifications(res.data.Mes,"correct")
  dispatch(withdraw_InvestorMony({id:valueClick,investedMone: res.data.investedMone,Withdrawn:res.data.Withdrawn}))
  dispatch(configretionSlider(null))
    })
      .catch(err=>{
        Notifications(err.response.data.erorr,"error")
      })
    }
return withdraw_investor
  }
export const Creat_investor=(name,username,investedMone,Customs)=>{
  const dispatch=useDispatch()
 const Token = useSelector((state) =>{return state.Token.value})

 const crear_investorAPI=()=>{
  Notifications("",'Loding')
  API.post('investors/crear_investors/',
    {
      InvestorsName:name,
      InvestorsUser:username,
      investedMone:investedMone,
      Customs:Customs
    },
     {
          headers:{
                Authorization:`Token ${Token}`
          }
        }
  )
  .then(res=>{
    Notifications("تم انشاء مستثمر بنجاح","correct")
    dispatch(Add_investor(res.data.Investor))
      dispatch(configretionSlider(null))
  })
  .catch(err=>{
     Notifications(err.response.data.erorr,"error")
  })
 }
 return crear_investorAPI
}