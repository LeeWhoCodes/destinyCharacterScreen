import { useState } from 'react'
import { useRef } from 'react'

import InventoryGrid from './InventoryGrid';

import { useFloating } from '@floating-ui/react';

import './index.css'

function EquipementSlot({slot}) {

  const equipedSlotRef = useRef(null);
  const inventoryRef = useRef(null);

  const {refs, floatingStyles} = useFloating();

  return (
    <div className="border-2 border-yellow-400 bg-purple-600 size-1/2 m-auto h-full overflow-hidden" ref={refs.setReference} onMouseEnter={() => inventoryRef.current.showPopover()} onMouseLeave={() => inventoryRef.current.hidePopover()}>
        <button className='bg-blue-400' popoverTarget='popover-primary-inventory'>
          popover
        </button>
            <div className='outline' ref={refs.setFloating} style={floatingStyles} id='popover-primary-inventory' popover="auto">
                {/* <p>This is where the {slot} inventory would go</p> */}
                <InventoryGrid />
            </div>
        
        <img className='-translate-y-3' src="/LeeHeadphones_BGR.png" alt="" />
    </div>
  )
}

export default EquipementSlot