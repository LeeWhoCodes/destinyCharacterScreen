function WeaponInfo() { 

  return (
    <div className=" text-gray-300">
        <div className="bg-purple-700/75 p-2">
            <p className="text-white text-xl">Name Of Item</p>
            <p className="text-gray-300">Item type</p>
        </div>
        <div className="bg-black/75 p-2">
            <p className="text-gray-300">Requires Level 20</p>
            <div className="flex flex-row items-center">
                <img className='h-10' src="/LeeHeadphones_BGR.png" alt="" />
                <p className="text-blue-300 text-4xl mr-1">400</p>
                <p className="text-gray-300">ATTACK</p>
            </div>
            <p className="text-gray-300 text-sm">This is some flavor text -Lee Who Codes</p>
            <hr className="text-gray-500 mt-1 mb-1" />
            
                {/* these could prbably be a component */}

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Rate of Fire</p>
                    <div className="w-1/2 bg-gray-500/25 h-4 ml-2">
                        <div className="bg-white h-4 w-25/100"></div>
                    </div>
                </div>

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Rate of Fire</p>
                    <div className="w-1/2 bg-gray-500/25 h-4 ml-2">
                        <div className="bg-white h-4 w-25/100"></div>
                    </div>
                </div>

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Rate of Fire</p>
                    <div className="w-1/2 bg-gray-500/25 h-4 ml-2">
                        <div className="bg-white h-4 w-25/100"></div>
                    </div>
                </div>

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Rate of Fire</p>
                    <div className="w-1/2 bg-gray-500/25 h-4 ml-2">
                        <div className="bg-white h-4 w-25/100"></div>
                    </div>
                </div>

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Rate of Fire</p>
                    <div className="w-1/2 bg-gray-500/25 h-4 ml-2">
                        <div className="bg-white h-4 w-25/100"></div>
                    </div>
                </div>

                <div className="flex flex-row items-center ml-17 w-9/10">
                    <p>Magazine</p>
                    <p className="ml-5">4</p>
                </div>

                <hr className="text-gray-500 mt-1" />

                <div className="flex my-1">
                    <img className='h-10' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className="ml-1">Kills with this weapon while critically wounded have a chance to start regenerating health.</p>
                </div>

                <div className="flex my-1">
                    <img className='h-10' src="/LeeHeadphones_BGR.png" alt="" />
                    <p className="ml-1">When stowed for a short time, this weapon is automatically reloaded from your reserves.</p>
                </div>
            
        </div>
    </div>
  )
}

export default WeaponInfo