import React from 'react'
import RemoveContentModel from '../Modles/RemoveContentModel'
import { Remove_order } from '../API/ApiContent/APIorder'
const Remove_RequestContent = () => {
  const remove_order=Remove_order()
  return (
   <>
   {
    RemoveContentModel("الطلب",remove_order)
   }
   </>
  )
}

export default Remove_RequestContent
