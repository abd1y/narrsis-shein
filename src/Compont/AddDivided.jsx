import Confirm from "../Modles/Confirm";
import { useSelector } from "react-redux";
import AddDividedContent from "../Content/AddDividedContent";
  
const AddDivided = () => {
      const clickDivided= useSelector((s)=>{
            return s.whoclick.value
        })
  return (
   <>
   {
    clickDivided==="add-Divided" &&
    Confirm("Confirm-M",<AddDividedContent/>)
   }
   </>
  )
}

export default AddDivided
