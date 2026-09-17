import { Close_configration,Arrow_up,Arrow_down } from "../Compont/Svg"
import { useState } from "react"
const AddDividedContent = () => {
    const [list,setList]=useState(false)
    const clickList=()=>{
        setList(!list)
    }
  return (
    <>
      <Close_configration/>
      <div className="confration-content-M">
  <p className="add-text-content"> رقم الطلب :</p>
       <input className="add-input-content" type="number" />

       <div className="list" >
        <div className="list-up" onClick={()=>{clickList()}}>

       <h3 className="Text-list-up">المشاركين في الطلب</h3>
       <div className="Arow-icon">
        {
            list?(  <Arrow_up/>):(<Arrow_down/>)
        }
        
        </div>

     
       </div>
       <ul style={{display:list?"flex":"none"}}   className="list-main-down">


<li >
<label className="list-down">
    <p className="Text-list-down"> الكل</p>
    <input type="checkbox" />
</label>

</li>

<li ><label className="list-down">
    <p className="Text-list-down"> نرجس</p>
    <input type="checkbox" />
</label></li>

<li><label className="list-down">
    <p className="Text-list-down"> مجمد</p>
    <input type="checkbox" />
</label></li>

<li><label className="list-down">
    <p className="Text-list-down"> عبدالله</p>
    <input type="checkbox" />
</label></li>

<li><label className="list-down">
    <p className="Text-list-down"> فاطمه</p>
    <input type="checkbox" />
</label></li>
       </ul>
       </div>
         <button className="btm-content "> 

        <p> اضافه </p>
      </button>
      </div>
    </>
  )
}

export default AddDividedContent
