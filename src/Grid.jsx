import { useState } from 'react'
import './index.css'

import {computePosition} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.7.0/+esm';

import EquipementSlot from './EquipmentSlot'

function Grid() {

  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-3 px-50 py-25 h-9/10 bg-[#82A9B0]">
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
            <p className='text-8xl/15 font-bold text-gray-200 opacity-50'>22</p>
            <div className='flex flex-row mt-3'>
                <img className='h-7' src="/LeeHeadphones_BGR.png" alt="" />
                <p className='text-xl font-bold text-gray-200 opacity-50'>337</p>
            </div>
        </div>
        <div className="row-span-4 col-start-4 row-start-1 outline">
            <p className='absolute'>14</p>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row items-center'>
                    <img className='h-7' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className='text-5xl font-bold text-yellow-300'>4,466</p>
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <img className='h-7' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className='text-l text-gray-300'>78</p>
                    <img className='' src="/statBar.PNG" alt="" />
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <img className='h-7' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className='text-l text-gray-300'>78</p>
                    <img className='' src="/statBar.PNG" alt="" />
                </div>
                <div className='flex flex-col items-center mt-5'>
                    <img className='h-7' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className='text-l text-gray-300'>78</p>
                    <img className='' src="/statBar.PNG" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid