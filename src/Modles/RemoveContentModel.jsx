
import { useDispatch } from 'react-redux'
import { configretionSlider } from '../Redux/Content/ClickConfigretion'
const RemoveContentModel = (nameDelet) => {
    const dispatch=useDispatch()
  return (
 <div className='cheack_content'>
<h2 className='title-cheack_content'>
هل انت متأكد من حذف {nameDelet}

    </h2>
<div className='btm-cheack_content'>
    <button className='btm-cheack_content-child Agreed-cheack_content' > نعم</button>
    <button className='btm-cheack_content-child' onClick={()=>{dispatch(configretionSlider(null))}} > لا</button>
</div>
    </div>
   
  )
}

export default RemoveContentModel
