import { useState } from 'react'
import './index.css'

function EquipementSlot() {

  return (
    <div className="border-2 border-yellow-400 bg-purple-600 size-1/2 m-auto h-full overflow-hidden">
        <button popoverTarget='popover-primary-inventory'>
                popover
            </button>
            <div id='popover-primary-inventory' popover="auto">
                <p>This is where the inventory would go</p>
            </div>
        <img className='-translate-y-3' src="/LeeHeadphones_BGR.png" alt="" />
    </div>
  )
}

export default EquipementSlot