// import {Link} from 'react-router-dom'

function Farm() {
  return (
    <div className=''>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-12 p-4'>
        {/* Farm  */}
        <div className="relative max-w-md w-80 h-80 md:w-80 md:h-80 py-4 px-6 rounded-lg shadow-md">
            
          <div className="absolute inset-x-7 md:inset-x-6 -top-6 w-5/6 h-24 md:w-5/6 md:h-16 rounded-lg shadow-md bg-blue-600">
            <div className='flex items-center justify-around'>

              <div className=" flex-col mt-2 text-sm">
                <h3 className="font-bold  text-white text-xl uppercase">
                  Eth - BTC LP
                </h3>
                <h3 className='font-light text-white'>
                  Rewards: <span>ETH</span>
                </h3>
              </div>

              <div className='flex text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='font-bold'>-</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>

          </div>

          <div className="flex flex-col justify-center md:mt-10 mt-14 p-2">
            {/* Apr  */}
            <div className='flex-col justify-center'>
              <h3 className="font-bold tracking-wider text-center text-2xl">100%</h3>
              <h3 className="flex items-center justify-center font-light tracking-wider text-center text-md">
                APR 
                <ion-icon name="help-circle-outline"></ion-icon>
              </h3>
            </div>
            {/* Apr end */}

            {/* Stake and Rewards  */}
            <div className="mt-1">
              <div className="flex-col">
                <h2 className="font-light text-sm">My Staked</h2>
                <h2 className="font-bold tracking-wider">$0.00</h2>
              </div>
              <div className="flex-col mt-3">
                <h2 className="font-light text-sm">Rewards</h2>
                <div className="flex items-center justify-between">
                  <h2 className="font-bold tracking-wider">$0.00</h2>
                  <button className="px-3 py-1 bg-blue-50 border border-blue-200 tracking-wider rounded-lg">Claim</button>
                </div>
              </div>
            </div>
            {/* Stake and Rewards end */}

            {/* stake and unstake  */}
            <div className="mt-4">
              <button className="py-2 w-full px-4 bg-blue-500 text-center text-white uppercase font-bold tracking-widest rounded-lg">Stake</button>
            </div>
            {/* stake and unstake  */}
          </div>

        </div>
        {/* Farm Ends  */}
        <div className="relative max-w-md w-80 h-80 md:w-80 md:h-80 py-4 px-6 rounded-lg shadow-md">
            
          <div className="absolute inset-x-7 md:inset-x-6 -top-6 w-5/6 h-24 md:w-5/6 md:h-16 rounded-lg shadow-md bg-blue-600">
            <div className='flex items-center justify-around'>

              <div className=" flex-col mt-2 text-sm">
                <h3 className="font-bold  text-white text-xl uppercase">
                  Eth - USDT LP
                </h3>
                <h3 className='font-light text-white'>
                  Rewards: <span>ETH</span>
                </h3>
              </div>

              <div className='flex text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='font-bold'>-</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>

          </div>

          <div className="flex flex-col justify-center md:mt-10 mt-14 p-2">
            {/* Apr  */}
            <div className='flex-col justify-center'>
              <h3 className="font-bold tracking-wider text-center text-2xl">100%</h3>
              <h3 className="flex items-center justify-center font-light tracking-wider text-center text-md">
                APR 
                <ion-icon name="help-circle-outline"></ion-icon>
              </h3>
            </div>
            {/* Apr end */}

            {/* Stake and Rewards  */}
            <div className="mt-1">
              <div className="flex-col">
                <h2 className="font-light text-sm">My Staked</h2>
                <h2 className="font-bold tracking-wider">$0.00</h2>
              </div>
              <div className="flex-col mt-3">
                <h2 className="font-light text-sm">Rewards</h2>
                <div className="flex items-center justify-between">
                  <h2 className="font-bold tracking-wider">$0.00</h2>
                  <button className="px-3 py-1 bg-blue-50 border border-blue-200 tracking-wider rounded-lg">Claim</button>
                </div>
              </div>
            </div>
            {/* Stake and Rewards end */}

            {/* stake and unstake  */}
            <div className="mt-4">
              <button className="py-2 w-full px-4 bg-blue-500 text-center text-white uppercase font-bold tracking-widest rounded-lg">Stake</button>
            </div>
            {/* stake and unstake  */}
          </div>

        </div>
        <div className="relative max-w-md w-80 h-80 md:w-80 md:h-80 py-4 px-6 rounded-lg shadow-md">
            
          <div className="absolute inset-x-7 md:inset-x-6 -top-6 w-5/6 h-24 md:w-5/6 md:h-16 rounded-lg shadow-md bg-blue-600">
            <div className='flex items-center justify-around'>

              <div className=" flex-col mt-2 text-sm">
                <h3 className="font-bold  text-white text-xl uppercase">
                  Eth - USDC LP
                </h3>
                <h3 className='font-light text-white'>
                  Rewards: <span>ETH</span>
                </h3>
              </div>

              <div className='flex text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className='font-bold'>-</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>

          </div>

          <div className="flex flex-col justify-center md:mt-10 mt-14 p-2">
            {/* Apr  */}
            <div className='flex-col justify-center'>
              <h3 className="font-bold tracking-wider text-center text-2xl">100%</h3>
              <h3 className="flex items-center justify-center font-light tracking-wider text-center text-md">
                APR 
                <ion-icon name="help-circle-outline"></ion-icon>
              </h3>
            </div>
            {/* Apr end */}

            {/* Stake and Rewards  */}
            <div className="mt-1">
              <div className="flex-col">
                <h2 className="font-light text-sm">My Staked</h2>
                <h2 className="font-bold tracking-wider">$0.00</h2>
              </div>
              <div className="flex-col mt-3">
                <h2 className="font-light text-sm">Rewards</h2>
                <div className="flex items-center justify-between">
                  <h2 className="font-bold tracking-wider">$0.00</h2>
                  <button className="px-3 py-1 bg-blue-50 border border-blue-200 tracking-wider rounded-lg">Claim</button>
                </div>
              </div>
            </div>
            {/* Stake and Rewards end */}

            {/* stake and unstake  */}
            <div className="mt-4">
              <button className="py-2 w-full px-4 bg-blue-500 text-center text-white uppercase font-bold tracking-widest rounded-lg">Stake</button>
            </div>
            {/* stake and unstake  */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Farm