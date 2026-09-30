  import {useState} from 'react'
  import { Close_configration } from "../Compont/Svg";
  import { Amount_Depost,Amount_withdraw } from '../API/ApiContent/APIInvestors';
  import { useSelector } from 'react-redux';
  const BalanceTransactionContent = () => {
    const [click_btm,setClick_btm]=useState("Deposit-money")
    const[Depost,setDeopst]=useState('')
    const[withdraw,setwithdraw]=useState('')
    const amount_Depost=Amount_Depost(Depost)
    const amount_withdraw=Amount_withdraw(withdraw)  
     const status=useSelector((s)=>{
return s.staus.statusValue
  })

    return (
      <>
        <Close_configration />
        <div className="btm-transaction-mone">
          <button
          disabled={status}
            onClick={() => {
              setClick_btm("Withdraw-money");
            }}
            className={
              click_btm === "Withdraw-money"
                ? "btm-transaction-mone-child btm-transaction-mone-child-acteve"
                : "btm-transaction-mone-child"
            }
          >
            سحب
          </button>

          <button
disabled={status}
            onClick={() => {
              setClick_btm("Deposit-money");
            }}
            className={
              click_btm === "Deposit-money"
                ? "btm-transaction-mone-child btm-transaction-mone-child-acteve"
                : "btm-transaction-mone-child"
            }
          >
            ايداع
          </button>
        </div>




        <div className="confration-content-M">
          {click_btm === "Withdraw-money" ? (
            <>
              <p className="add-text-content">
                {" "}
                مقدار الاموال المراد سحبها للمستثمر 
                <small>(كتابه مبلغ بالدينار العراقي مع الاصفار)</small>
              </p>
              <input className="add-input-content" type="number" value={withdraw} onChange={(s)=>{setwithdraw(Number(s.target.value))}} />
              <button className="btm-content Withdraw-btm-content"
                    
                onClick={()=>amount_withdraw()}
              >
                <p>سحب</p>
              </button>
              <p className="add-text-content">
                <samp style={{ color: "red" }}>* </samp> لا يمكن تراجع بعد ضغط على
                سحب
              </p>
            </>
          ) : 
          
          
          (
            <>
              <p className="add-text-content">
                {" "}
                مقدار الاموال المراد ايداعها للمستثمر 
                <small>(كتابه مبلغ بالدينار العراقي مع الاصفار)</small>
              </p>
              <input className="add-input-content" type="number" value={Depost} onChange={(s)=>setDeopst(Number(s.target.value))}/>
              <button className="btm-content Deposit-money-btm-content" 
              
              onClick={()=>{
            
                amount_Depost()
                
              }}
              >
                <p>ايداع</p>
              </button>
            </>
          )}
        </div>
      </>
    );
  }

  export default BalanceTransactionContent
