import { useState } from 'react'
import { useRef } from 'react'

import InventoryGrid from './InventoryGrid';
import WeaponInfo from './WeaponInfo';

import {
    useFloating,
    autoUpdate,
    offset,
    shift,
    flip,
} from '@floating-ui/react';

import './index.css'

function InventorySlotRight() {

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

  // const {
  //   refs: invRefs,
  //   floatingStyles: invFloatingStyles,
  //   } = useFloating ({
  //       placement: 'left-start',
  //       whileElementsMounted: autoUpdate,
  //   });

    const {
        refs: infoRefs,
        floatingStyles: infoFloatingStyles,
    } = useFloating ({
      placement: 'left',
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

  const {refs, floatingStyles} = useFloating({
    placement: 'left-start',
    whileElementsMounted: autoUpdate,
  });

  // const ref = useMergeRefs([invRefs.setReference, infoRefs.setReference]);

  return (
    <div className="border-2 border-yellow-400 bg-purple-600 h-full m-auto overflow-hidden">
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
          <img className='' src="/LeeHeadphones_BGR.png" alt="" />
        </div>
        <div className=' w-1/5 bg-white/0 h-100% overflow-hidden' ref={infoRefs.setFloating} style={infoFloatingStyles} popover="manual">
          <WeaponInfo />
        </div>
    </div>
  )
}

export default InventorySlotRight