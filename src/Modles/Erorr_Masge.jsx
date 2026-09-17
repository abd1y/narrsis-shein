import React from 'react'
import { Erorr_Icon } from '../Compont/Svg'
const Erorr_Masge = (Masge) => {
  return (
    <div className='Erorr_mesage'>
             <p>{Masge}</p>
              <div className="Erorr-Icon">
      <Erorr_Icon/>
        </div>
    </div>
  )
}

export default Erorr_Masge
