import Confirm from "../Modles/Confirm";
import BalanceTransactionContent from "../Content/BalanceTransactionContent";
import { useSelector } from "react-redux";
const BalanceTransaction = () => {
    const clickinvestors= useSelector((s)=>{
            return s.whoclick.value
        })
  return (
    <>
      {clickinvestors==="balance-Transaction" &&
        Confirm("Confirm-M",<BalanceTransactionContent  />
         
        )}
    </>
  );
};

export default BalanceTransaction;
