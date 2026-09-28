
import { Link,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Menu = () => {
  const Token = useSelector((state) =>{
    return state.Token.value
  } 
  )
  const location=useLocation()
  const activeMenu=location.pathname.split('/')[1]

 
  return (
    <div className="Main-Menu">
      <ul className="Menu" dir="rtl">
       {
    Token&& 
     (   <Link
        
          className={
            activeMenu == "investors"
              ? "Menu-active Menu-chaild"
              : "Menu-chaild"
          }
          to="/investors"
        >
          <li
          
          >
            المستثمرين
          </li>
        </Link>)
       }
        <Link
          className={
            activeMenu == "Requests" ? "Menu-active Menu-chaild" : "Menu-chaild"
          }
          to="/Requests"
        >
          <li
          
          >
            جدول الطلبات
          </li>
        </Link>

        <Link
          className={
            activeMenu == "divided" ? "Menu-active Menu-chaild" : "Menu-chaild"
          }
          to='/divided'
        >
          <li >تقسيم الطلبات</li>
        </Link>
   
      </ul>
    </div>
  );
}

export default Menu
