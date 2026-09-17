import React from 'react'
import { Add_new_investor,Close_configration } from "../Compont/Svg";


const Add_investorContent = () => {
  return (
  <>

 
          <Close_configration/>
  <div className='confration-content-M'>
            <p className="add-text-content"> اسم المستثمر:</p>
            <input className="add-input-content" type="text" />
            <p className="add-text-content">  اسم المستخدم<small>(اقصى حد للحروف هو عشرة)</small>:</p>
            <input className="add-input-content" type="text" maxLength={10} />
            <p className="add-text-content">
              مبلغ المستثمر <small>(مع اضافه الاصفار):</small>
            </p>
            <input className="add-input-content" type="number" /><samp>د.ع</samp>
            <p className="add-text-content">
          
              مدفوعات الكمركيه <small> (ان وجدت):</small>
            </p>
            <input className="add-input-content" type="number" /><samp>د.ع</samp>
            <button className="btm-content">
              <p> اضافة</p>
              <Add_new_investor /> 
            </button>
             </div>
          </>
  )
}

export default Add_investorContent