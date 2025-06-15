function Header() {

  return (
    <>
      <header className="w-screen bg-[#76837d] border-b-4 border-[#a7a7a7] flex h-1/10">
        <div className="flex">
          <p className="text-gray-300 opacity-50 p-5 pl-20 pt-13">roster</p>
          <p className="text-gray-300 opacity-50 p-5 pt-13">progress</p>
          <p className="text-gray-300 p-5 pt-13">character</p>
          <p className="text-gray-300 opacity-50 p-5 pt-13">inventory</p>
          <p className="text-gray-300 opacity-50 p-5 pt-13">settings</p>
        </div>
        <div className="w-100 h-14 bg-[#b09007] ml-auto mr-25 mt-15 flex">
          <img className='' src="/LeeHeadphones_BGR.png" alt="" />
          <div>
            <p className="text-white ml-2 mt-1">LeeWhoCodes</p>
            <p className="text-white ml-2 text-base/3 opacity-50">Clan Name?</p>
          </div>
          <div className="ml-auto mt-0.5 mr-1">
            <p className="text-white mt-1 text-3xl/5 text-center">22</p>
            <div className='flex flex-row items-center mt-0.5'>
              <img className='h-4' src="/LeeHeadphones_BGR.png" alt="" />
              <p className="text-yellow-300 text-center">4,466</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
