import React from 'react'
import Slippage from './Slippage'

function Swap() {
  return (
    <div>
        <Slippage />
        
        <div className="flex flex-col">
            {/* From  */}
            <h1 className='mb-2'>FROM</h1>
            <div className='md:shadow-lg shadow-sm border rounded-lg'>

                <div className='flex justify-between items-center px-6 md:w-96 md:h-16 w-80 h-16 hover:bg-gray-100'>

                    <div className="flex items-center gap-2">
                        <ion-icon name="cash-outline"></ion-icon>
                        <h2 className='font-semibold text-2xl'>ETH</h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='font-light text-sm'>Balance - 100</h2>
                        <h2 className='font-light text-sm text-end'> ≈ $1.37 </h2>
                    </div>
                    
                </div>

                <div className='flex justify-between items-center px-6 md:w-96 md:h-16 w-80 h-16 border-t border-gray-300'>

                    <div className="flex flex-col items-start">
                        {/* <h2 className='font-semibold text-gray-400'>0.00</h2> */}
                        <input type="number" 
                            className='py-1 w-full text-start leading-3 tracking-wider text-2xl outline-none appearance-none' 
                            placeholder='0.00' 
                        />
                        <h2 className='font-light text-sm text-start'> ≈ $1.37 </h2>
                    </div>
                    <div className="flex">
                        <h1 className='bg-blue-300 py-1 px-3 rounded text-center font-bold'>
                            MAX
                        </h1>
                    </div>
                    
                </div>

            </div>
            {/* From end */}

            {/* Switch arrow */}
            <button className='flex justify-center text-2xl py-2 text-gray-600'>
                <ion-icon name="swap-vertical-outline"></ion-icon>
            </button>
            {/* Switch arrow end */}

            {/* TO  */}
            <h1>TO</h1>
            <div className='md:shadow-lg shadow-sm border rounded-lg'>

                <div className='flex justify-between items-center px-6 md:w-96 md:h-16 w-80 h-16 hover:bg-gray-100'>

                    <div className="flex items-center gap-2">
                        <ion-icon name="cash-outline" ></ion-icon>
                        <h2 className='font-semibold text-2xl'>ETH</h2>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='font-light text-sm'>Balance - 100</h2>
                        <h2 className='font-light text-sm text-end'> ≈ $1.37 </h2>
                    </div>
                    
                </div>

                <div className='flex md:justify-between justify-around items-center px-6 md:w-96 md:h-16 w-80 h-16 border-t border-gray-300'>

                    <div className="flex flex-col">
                        {/* <h2 className='font-semibold text-gray-400'>0.00</h2> */}
                        <input type="number" 
                            className='py-1 w-full text-start leading-3 tracking-wider text-2xl outline-none appearance-none' 
                            placeholder='0.00' 
                        />
                        <h2 className='font-light text-sm text-start'> ≈ $1.37 </h2>
                    </div>
                    <div className="">
                        <button className='bg-blue-300 py-1 px-3 rounded text-center font-bold'>
                            MAX
                        </button>
                    </div>
                    
                </div>

            </div>
            {/* TO end */}

            {/* button  */}
            <div className='bg-blue-300 py-3 px-4 rounded-md text-center mt-4'>
                <button className='uppercase font-bold text-sm'>
                    Connect Wallet
                </button>
            </div>

        </div>
    </div>
  )
}

export default Swap