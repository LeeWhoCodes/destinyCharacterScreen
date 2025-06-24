import { useState } from 'react'
import { useRef } from 'react'

import InventoryGrid from './InventoryGrid';
import WeaponInfo from './WeaponInfo';

import {
    useFloating,
    autoUpdate,
    offset,
    shift,
    useClientPoint,
    useTransitionStyles,
} from '@floating-ui/react';

import './index.css'

function ClassSlot({slot}) {

    const virtualEl = {
    getBoundingClientRect() {
    return {
      x: 2000,
      y: 1000,
      top: 10,
      left: 100,
      bottom: 20,
      right: 20,
      width: 20,
      height: 20,
    };
  },
};

  const {
    refs: invRefs,
    floatingStyles: invFloatingStyles,
    context: invContext,
    } = useFloating ({
        placement: 'left-start',
        whileElementsMounted: autoUpdate,
    });

    const {
        refs: infoRefs,
        floatingStyles: infoFloatingStyles,
        context: infoContext,
    } = useFloating ({
      placement: 'right',
      whileElementsMounted: autoUpdate,
      middleware: [
        offset(50),
        shift({
          padding: 5,
        }),
      ],
      elements: {
        reference: virtualEl,
      },
    })

    const {refs} = useFloating();

    const {isMounted, styles} = useTransitionStyles(invContext, {
      initial: {
        transform: "scale(0)"
      },
      common: {
        TransformOrigin: 'left',
      },
    });

  return (
    <div className="border-2 border-yellow-400 bg-purple-600 w-11/10 -translate-y-6 overflow-hidden" ref={invRefs.setReference} onMouseEnter={() => invRefs.floating.current.showPopover()} onMouseLeave={() => invRefs.floating.current.hidePopover()}>
      <div onMouseMove={({clientX, clientY}) => {
      infoRefs.setPositionReference({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            top: clientY,
            left: clientX,
            right: clientX,
            bottom: clientY,
          };
        },
      });
    }} onMouseEnter={() => infoRefs.floating.current.showPopover()} onMouseLeave={() => infoRefs.floating.current.hidePopover()}>        
          <img className='-translate-y-3' src="/LeeHeadphones_BGR.png" alt="" />
      </div>
      <div className=' w-1/5 bg-white/0 h-100% overflow-hidden' ref={infoRefs.setFloating} style={infoFloatingStyles} popover="manual">
        {/* <WeaponInfo /> */}
      </div>

      <div className='' ref={invRefs.setFloating} style={invFloatingStyles} popover="manual">
        {/* <p>This is where the {slot} inventory would go</p> */}
        <InventoryGrid />
      </div>
    </div>
  )
}

export default ClassSlot