import { useState } from 'react'
import { useRef } from 'react'
import './index.css'

import InventorySlot from './InventorySlot'

function ClassInventoryGrid() {

  return (        
  <div className="grid grid-cols-2 grid-rows-1 gap-2">
    <div className="col-start-3 row-start-1 min-w-25 max-w-25 min-h-25 max-h-25 ">
        <InventorySlot />
    </div>
    <div className="col-start-2 row-start-1 min-w-25 max-w-25 min-h-25 max-h-25 ">
      <InventorySlot />
    </div>
  </div>
    
  )
}

export default ClassInventoryGrid