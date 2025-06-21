import { useState } from 'react'
import { useRef } from 'react'

import InventoryGrid from './InventoryGrid';
import WeaponInfo from './WeaponInfo';

import {
    useFloating,
    autoUpdate,
    offset,
    shift,
} from '@floating-ui/react';

import './index.css'

function EquipementSlot({slot}) {

  const {
    refs: invRefs,
    floatingStyles: invFloatingStyles,
    } = useFloating ({
        placement: 'left-start',
        whileElementsMounted: autoUpdate,
    });

    const {
        refs: infoRefs,
        floatingStyles: infoFloatingStyles,
    } = useFloating ({
      placement: 'right',
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(10),
        shift({
          padding: 5,
        }),
      ],
    })

  const {refs, floatingStyles} = useFloating({
    placement: 'left-start',
    whileElementsMounted: autoUpdate,
  });

  // const ref = useMergeRefs([invRefs.setReference, infoRefs.setReference]);

  return (
    <div className="border-2 border-yellow-400 bg-purple-600 size-1/2 m-auto h-full overflow-hidden" ref={invRefs.setReference} onMouseEnter={() => invRefs.floating.current.showPopover()} onMouseLeave={() => invRefs.floating.current.hidePopover()}>
      <div ref={infoRefs.setReference} onMouseEnter={() => infoRefs.floating.current.showPopover()} onMouseLeave={() => infoRefs.floating.current.hidePopover()}>        
          <img className='-translate-y-3' src="/LeeHeadphones_BGR.png" alt="" />
      </div>
      <div className='outline w-1/5 bg-white/0 h-100% overflow-hidden' ref={infoRefs.setFloating} style={infoFloatingStyles} popover="manual">
        <WeaponInfo />
      </div>
      <div className='outline' ref={invRefs.setFloating} style={invFloatingStyles} popover="manual">
        {/* <p>This is where the {slot} inventory would go</p> */}
        <InventoryGrid />
      </div>
    </div>
  )
}

export default EquipementSlot