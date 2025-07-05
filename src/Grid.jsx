import { useState } from 'react'
import './index.css'

import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.0/+esm';

import EquipementSlot from './EquipmentSlot'
import EquipmentSlotRight from './EquipmentSlotRight';
import ClassSlot from './ClassSlot';

import InventorySlot from './InventorySlot';

function Grid() {

    function daysSinceFirstProject() {
        const dateStart = new Date(2013, 2, 19);
        const dateNow = new Date();

        const millisecondsSince = dateNow.getTime() - dateStart.getTime();

        const daysSince = Math.round(millisecondsSince / (1000 * 60 * 60 * 24));

        return daysSince;
    }

  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-3 px-75 py-25 h-9/10 bg-radial from-[#82A9B0] to-[#324745] overflow-hidden">
        <div className=" ml-35 min-w-28 max-w-28">
            {/* <p className='absolute'>1</p> */}
            <ClassSlot />
        </div>
        <div className='col-start-2 col-span-3 row-start-1 row-span-6 '>
            <img className='h-2/2 mx-auto' src="/public/Hunter_ironbanner_3.webp" alt="" />
        </div>
        <div className="col-start-1 row-start-2 ml-35 min-w-25 max-w-25">
            {/* <p className='absolute'>2</p> */}
            <EquipementSlot slot="Primary" />
            {/* <div>
            <img className='absolute w-25' src="../public/LeeHeadphones_BGR.png" alt="" />
            </div> */}
        </div>
        <div className="col-start-1 row-start-3 ml-35  min-w-25 max-w-25">
            {/* <p className='absolute'>3</p> */}
            <EquipementSlot />
            {/* <InventorySlot /> */}
        </div>
        <div className="col-start-1 row-start-4  ml-35  min-w-25 max-w-25">
            {/* <p className='absolute'>4</p> */}
            <EquipementSlot />
        </div>
        <div className="col-start-1 row-start-5  ml-35  min-w-25 max-w-25">
            {/* <p className='absolute'>5</p> */}
            <EquipementSlot />
        </div>
        <div className="col-start-1 row-start-6  ml-35  min-w-25 max-w-25">
            {/* <p className='absolute'>6</p> */}
        </div>
        <div className="col-start-5 row-start-1  mr-35  min-w-25 max-w-25">
            {/* <p className='absolute'>7</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-5 row-start-2  mr-35  min-w-25 max-w-25">
            {/* <p className='absolute'>8</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-5 row-start-3  mr-35  min-w-25 max-w-25">
            {/* <p className='absolute'>9</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-5 row-start-4  mr-35  min-w-25 max-w-25">
            {/* <p className='absolute'>10</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-5 row-start-5  mr-35  min-w-25 max-w-25">
            {/* <p className='absolute'>11</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-5 row-start-6  mr-35  min-w-25 max-w-25 overflow-hidden">
            {/* <p className='absolute'>12</p> */}
            <EquipmentSlotRight />
        </div>
        <div className="col-start-2 row-start-1  ml-4 -translate-y-6">
            {/* <p className='absolute'>13</p> */}
            <p className='text-8xl/15 font-bold text-gray-200 opacity-50'>22</p>
            <div className='flex flex-row mt-3'>
                <img className='h-7 opacity-50' src="/public/destinyGrimuoreLogoTransparent.png" alt="" />
                <p className='text-xl font-bold text-gray-200 opacity-50'>337</p>
            </div>
        </div>
        <div className="row-span-4 col-start-4 row-start-1 ">
            {/* <p className='absolute'>14</p> */}
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center'>
                    <img className='h-9 mt-2' src="/public/destinyPowerIconTransparent.png" alt="" />
                    <p className='text-5xl font-bold text-yellow-300'>{daysSinceFirstProject().toLocaleString()}</p>
                </div>
                <div className='flex flex-col items-center mt-5 w-full'>
                    <img className='h-9' src="/public/DestinyIntIconTransparent.png" alt="" />
                    <p className='text-l text-gray-300'>300</p>
                    <div className="w-1/4 bg-gray-900/25 h-0.5">
                        <div className="bg-white h-0.5 w-100/100"></div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-5 w-full'>
                    <img className='h-9' src="/public/DestinyDisciplineIconTransparent.png" alt="" />
                    <p className='text-l text-gray-300'>150</p>
                    <div className="w-1/4 bg-gray-900/25 h-0.5">
                        <div className="bg-white h-0.5 w-50/100"></div>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-5 w-full'>
                    <img className='h-9' src="/public/DestinyStrengthIconTransparent.png" alt="" />
                    <p className='text-l text-gray-300'>75</p>
                    <div className="w-1/4 bg-gray-900/25 h-0.5">
                        <div className="bg-white h-0.5 w-25/100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid