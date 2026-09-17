import {useState} from 'react'
import { Close_configration } from "../Compont/Svg";

const BalanceTransactionContent = () => {
  const [click_btm,setClick_btm]=useState("Deposit-money")
      

  return (
    <>
      <Close_configration />
      <div className="btm-transaction-mone">
        <button
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
              مقدار الاموال المراد سحبها للمستثمر نرجس
               <small>(كتابه مبلغ بالدينار العراقي مع الاصفار)</small>
            </p>
            <input className="add-input-content" type="number" />
            <button className="btm-content">
              <p>سحب</p>
            </button>
            <p className="add-text-content">
              <samp style={{ color: "red" }}>* </samp> لا يمكن تراجع بعد ضغط على
              سحب
            </p>
          </>
        ) : (
          <>
            <p className="add-text-content">
              {" "}
              مقدار الاموال المراد ايداعها للمستثمر نرجس
              <small>(كتابه مبلغ بالدينار العراقي مع الاصفار)</small>
            </p>
            <input className="add-input-content" type="number" />
            <button className="btm-content">
              <p>سحب</p>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default BalanceTransactionContent
