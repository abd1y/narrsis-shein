
import RemoveContentModel from '../Modles/RemoveContentModel'
import { Remove_invester_handler } from '../API/ApiContent/APIInvestors'


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
