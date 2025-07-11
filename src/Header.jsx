function Header() {

function daysSinceFirstProject() {
        const dateStart = new Date(2013, 2, 19);
        const dateNow = new Date();

        const millisecondsSince = dateNow.getTime() - dateStart.getTime();

        const daysSince = Math.round(millisecondsSince / (1000 * 60 * 60 * 24));

        return daysSince;
    }

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
        <div className="w-100 h-14 bg-[#9C3A3B] ml-auto mr-25 mt-15 flex">
          <img className='' src="/new monarchy logo.png" alt="" />
          <div>
            <p className="text-white ml-2 mt-1">LeeWhoCodes</p>
          </div>
          <div className="ml-auto mt-0.5 mr-1">
            <p className="text-white mt-1 text-3xl/5 text-center">22</p>
            <div className='flex flex-row items-center mt-0.5'>
              <img className='h-4 mt-0.5' src="/destinyPowerIconTransparent.png" alt="" />
              <p className="text-[#F7E82C] text-center">{daysSinceFirstProject().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
