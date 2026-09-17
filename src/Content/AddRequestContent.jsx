import { Close_configration } from "../Compont/Svg";
const AddRequestContent = () => {
  return (
    <>
 <Close_configration/>
    <div className='confration-content-M'>
        <p className='add-text-content'> اسم الزبون:</p>
        <input type='text' className='add-input-content'/>
        <p className='add-text-content'>السعر للزبون:</p>
        <input type='number' className='add-input-content'/><samp className='text-denar'>د.ع</samp>
         <p className='add-text-content'> التكلفه الاجماليه <small>(سعر طلب على المستثمرين):</small></p>
         <input type='number' className='add-input-content'/><samp className='text-denar'>د.ع</samp>
         <p className='add-text-content'> حجم الطلب <small>(kg):</small></p>
          <input type='number' className='add-input-content'/>
          <p className='add-text-content'>سعر الـ kg الواحد:</p>
                     <input type='number' className='add-input-content'/>
          <p className='add-text-content'> سعر التوصيل :</p>
           <input type='number' className='add-input-content'/>
           <button className="btm-content">
                         <p> اضافة الطلب</p>
                        
                       </button>
    </div>
    </>
  )
}

export default AddRequestContent
