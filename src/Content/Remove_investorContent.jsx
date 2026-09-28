
import RemoveContentModel from '../Modles/RemoveContentModel'
import { Remove_invester_handler } from '../API/ApiContent/APIInvestors'
import API from '../API/Axios'
import { useSelector,useDispatch } from 'react-redux'
import Notifications from '../Modles/NaficationMessgeModel'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
import { Remove_investers } from '../Redux/Content/InfoInvester'
const Remove_investorContent = () => {
const Remove_invester=Remove_invester_handler()
  return (

  <>
  {

RemoveContentModel("المستثمر", Remove_invester)
  }
  </>
 
  )
}

export default Remove_investorContent
