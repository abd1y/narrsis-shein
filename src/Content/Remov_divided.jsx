import React from 'react'
import RemoveContentModel from '../Modles/RemoveContentModel'
import { Remove_Divided_order } from '../API/ApiContent/APIDividedOrder'
const Remove_divided = () => {
  const remove_divided_order=Remove_Divided_order()
  return (
   <>
   {
    RemoveContentModel("التقسميه",remove_divided_order)
   }
   </>
  )
}

export default Remove_divided
