import { useState } from 'react'
import { useRef } from 'react'
import './index.css'

import InventorySlot from './InventorySlot'

function InventoryGrid() {

  return (        
  <div className="grid grid-cols-3 grid-rows-3 gap-4">
    <div className="col-start-3 row-start-1">
    </div>
    <div className="col-start-2 row-start-1">2</div>
    <div className="col-start-1 row-start-1">3</div>
    <div className="col-start-3 row-start-2">4</div>
    <div className="col-start-2 row-start-2">5</div>
    <div className="col-start-1 row-start-2">6</div>
    <div className="col-start-3 row-start-3">7</div>
    <div className="col-start-2 row-start-3">8</div>
    <div className="col-start-1 row-start-3">9</div>
  </div>
    
  )
}

export default InventoryGrid