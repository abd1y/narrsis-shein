import Confirm from "../Modles/Confirm";
import Add_investorContent from "../Content/Add_investorContent";
import { useSelector } from "react-redux";
const Add_investor = () => {
    const clickinvestors= useSelector((s)=>{
            return s.whoclick.value
        })
  return (
    <>
      {clickinvestors==="Add-investors" &&
        Confirm("Confirm-L",<Add_investorContent  />
         
        )}
    </>
  );
};

export default Add_investor;
