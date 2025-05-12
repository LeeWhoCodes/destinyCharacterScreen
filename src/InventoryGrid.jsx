import { useState } from 'react'
import { useRef } from 'react'
import './index.css'

function InventoryGrid() {

  return (        
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div >1</div>
        <div className="col-start-1 row-start-2">2</div>
        <div className="col-start-1 row-start-3">3</div>
        <div className="col-start-2 row-start-1">4</div>
        <div className="col-start-2 row-start-2">5</div>
        <div className="col-start-2 row-start-3">6</div>
        <div className="col-start-3 row-start-1">7</div>
        <div className="col-start-3 row-start-2">8</div>
        <div >9</div>
    </div>
  )
}

export default InventoryGrid