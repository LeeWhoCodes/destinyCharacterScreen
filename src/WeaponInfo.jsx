function WeaponInfo() { 

  return (
    <div className="w-1/4 h-175 ml-auto mr-auto text-gray-300">
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
            <hr className="text-gray-500" />
        </div>
    </div>
  )
}

export default WeaponInfo