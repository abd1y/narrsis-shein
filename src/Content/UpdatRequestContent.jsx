import { Close_configration } from "../Compont/Svg";
const UpdatRequestContent = () => {
  return (
<>
<Close_configration/>
   <div className='confration-content-M'>
        <p className='add-text-content'>   اسم الزبون:</p>
        <input type='text' className='add-input-content'/>
         <p className='add-text-content'> تاريخ الطلب</p>
         <input className='add-input-content' style={{textAlign:"right"}} type="date"/>
        <p className='add-text-content'>السعر للزبون:</p>
        <input type='number' className='add-input-content'/><samp className='text-denar'>د.ع</samp>
         <p className='add-text-content'> التكلفه الاجماليه <small>(سعر طلب على المستثمرين):</small></p>
         <input type='number' className='add-input-content'/><samp className='text-denar'>د.ع</samp>
         <p className='add-text-content'> حجم الطلب <small>(kg):</small></p>
          <input type='number' className='add-input-content'/>
          <p className='add-text-content'>سعر الـ kg الواحد:</p>
                     <input type='number' className='add-input-content'/>
                     <p className="add-text-content">مجموع السعر كامل لكل kg</p>
                               <input type='number' className='add-input-content'/>
          <p className='add-text-content'> سعر التوصيل :</p>
           <input type='number' className='add-input-content'/>
           <div className="delivery">

      
           <input type="checkbox"  className="delivery-checkbox"/>
           <p >هل تريد اضافه 5,000 د.ع اجرة توصيل </p>
                </div>
                  <button className="btm-content">
                         <p> تعديل الطلب</p>
                        
                       </button>
           </div>
</>
  )
}

export default UpdatRequestContent
