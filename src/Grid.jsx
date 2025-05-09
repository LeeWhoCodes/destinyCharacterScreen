import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Grid() {

  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-3 px-50 py-25 h-screen">
        <div className="outline">4</div>
        <div className="col-start-1 row-start-2 outline">5</div>
        <div className="col-start-1 row-start-3 outline">6</div>
        <div className="col-start-1 row-start-4 outline">7</div>
        <div className="col-start-1 row-start-5 outline">8</div>
        <div className="col-start-1 row-start-6 outline">9</div>
        <div className="col-start-5 row-start-1 outline">10</div>
        <div className="col-start-5 row-start-2 outline">11</div>
        <div className="col-start-5 row-start-3 outline">12</div>
        <div className="col-start-5 row-start-4 outline">13</div>
        <div className="col-start-5 row-start-5 outline">14</div>
        <div className="col-start-5 row-start-6 outline">15</div>
        <div className="col-start-2 row-start-1 outline">16</div>
        <div className="row-span-4 col-start-4 row-start-1 outline">17</div>
    </div>
  )
}

export default Grid