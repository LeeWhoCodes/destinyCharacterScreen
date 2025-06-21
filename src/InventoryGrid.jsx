import { useState } from 'react'
import { useRef } from 'react'
import './index.css'

import InventorySlot from './InventorySlot'

function InventoryGrid() {

  return (        
  <div className="grid grid-cols-3 grid-rows-3 gap-4">
    <div className="col-start-3 row-start-1 min-w-20 max-w-20 min-h-20 max-h-20 outline">
        <InventorySlot />
    </div>
    <div className="col-start-2 row-start-1 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-1 row-start-1 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-3 row-start-2 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-2 row-start-2 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-1 row-start-2 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-3 row-start-3 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-2 row-start-3 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
    <div className="col-start-1 row-start-3 min-w-20 max-w-20 min-h-20 max-h-20 outline">
      <InventorySlot />
    </div>
  </div>
    
  )
}

export default InventoryGrid