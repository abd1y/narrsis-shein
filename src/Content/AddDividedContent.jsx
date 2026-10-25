import { Close_configration,Arrow_up,Arrow_down } from "../Compont/Svg"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { setSelectedInvestors } from "../Redux/Content/DividedOrder"
import { Add_divided_order } from "../API/ApiContent/APIDividedOrder"
const AddDividedContent = () => {
    const [list,setList]=useState(false)
    const [numberOrder,setNumberOrder]=useState(0)
    const clickList=()=>{
        setList(!list)
    }
    const add_divided_order=Add_divided_order(numberOrder)
        const invister = useSelector(s => s.Dividedorder.invister)
        const selectedInvestors = useSelector(s => s.Dividedorder.selectedInvestors)

        const dispatch=useDispatch()
  return (
    <>
      <Close_configration/>
      <div className="confration-content-M">
  <p className="add-text-content"> رقم الطلب :</p>
       <input className="add-input-content" type="text" value={numberOrder} 
       onChange={(e) => {
    const value = e.target.value.replace(/,/g, "");
    if (!isNaN(value)) {
      setNumberOrder(Number(value));
    }
  }} />

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



{
    [...new Map(
        invister.map(item => [item.InvestorsUser, item])
    ).values()].map(item => (
        <li key={item.InvestorsUser}>
            <label className="list-down">
                <p className="Text-list-down">
                    {item.InvestorsName}
                </p>

                <input
                    type="checkbox"
                    value={item.InvestorsUser}
                    checked={selectedInvestors.includes(item.InvestorsUser)}
                    onChange={(e) => {
                        if (e.target.checked) {
                            dispatch(setSelectedInvestors([
                                ...selectedInvestors,
                                item.InvestorsUser
                            ]))
                        } else {
                            dispatch(setSelectedInvestors(
                                selectedInvestors.filter(
                                    id => id !== item.InvestorsUser
                                )
                            ))
                        }
                    }}
                />
            </label>
        </li>
    ))
}


       </ul>
       </div>
         <button className="btm-content " onClick={()=>{add_divided_order()}}> 

        <p> اضافه </p>
      </button>
      </div>
    </>
  )
}

export default AddDividedContent
