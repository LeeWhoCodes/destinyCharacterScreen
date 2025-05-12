import { useState } from 'react'
import './index.css'

import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.0/+esm';

import EquipementSlot from './EquipmentSlot'

function Grid() {

  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-3 px-50 py-25 h-screen">
        <div className="outline">
            <p className='absolute'>1</p>
        </div>
        <div className="col-start-1 row-start-2 outline">
            <p className='absolute'>2</p>
            <EquipementSlot slot="Primary" />
            {/* <div>
            <img className='absolute w-25' src="../public/LeeHeadphones_BGR.png" alt="" />
            </div> */}
        </div>
        <div className="col-start-1 row-start-3 outline">
            <p className='absolute'>3</p>
            <EquipementSlot />
        </div>
        <div className="col-start-1 row-start-4 outline">
            <p className='absolute'>4</p>
            <EquipementSlot />
        </div>
        <div className="col-start-1 row-start-5 outline">
            <p className='absolute'>5</p>
            <EquipementSlot />
        </div>
        <div className="col-start-1 row-start-6 outline">
            <p className='absolute'>6</p>
        </div>
        <div className="col-start-5 row-start-1 outline">
            <p className='absolute'>7</p>
            <EquipementSlot />
        </div>
        <div className="col-start-5 row-start-2 outline">
            <p className='absolute'>8</p>
            <EquipementSlot />
        </div>
        <div className="col-start-5 row-start-3 outline">
            <p className='absolute'>9</p>
            <EquipementSlot />
        </div>
        <div className="col-start-5 row-start-4 outline">
            <p className='absolute'>10</p>
            <EquipementSlot />
        </div>
        <div className="col-start-5 row-start-5 outline">
            <p className='absolute'>11</p>
            <EquipementSlot />
        </div>
        <div className="col-start-5 row-start-6 outline">
            <p className='absolute'>12</p>
            <EquipementSlot />
        </div>
        <div className="col-start-2 row-start-1 outline">
            <p className='absolute'>13</p>
        </div>
        <div className="row-span-4 col-start-4 row-start-1 outline">
            <p className='absolute'>14</p>
        </div>
    </div>
  )
}

export default Grid