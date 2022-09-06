import React from 'react'

function BottomMenu() {
  return (
    <footer className='mt-auto md:hidden'>
        <div className='flex justify-between items-center border-t py-6 px-6  gap-3'>

          <div className='flex flex-col text-md'>
            <div className='flex justify-center'>
              <ion-icon name="swap-horizontal-outline" size='large'></ion-icon>
            </div>
            <h2 className='text-center font-bold'>Swap</h2>
          </div>

          <div className='flex flex-col text-md text-gray-500'>
            <div className='flex justify-center'>
              <ion-icon name="reorder-two-outline" size='large'></ion-icon>
            </div>
            <h2 className='text-center'>Pool</h2>
          </div>

          <div className='flex flex-col text-md text-gray-500'>
            <div className='flex justify-center'>
              <ion-icon name="alert-circle-outline" size='large'></ion-icon>
            </div>
            <h2 className='text-center'>Farm</h2>
          </div>
          
          <div className='flex flex-col text-md text-gray-500'>
            <div className='flex justify-center'>
              <ion-icon name="link-outline" size='large'></ion-icon>
            </div>
            <h2 className='text-center'>Bridge</h2>
          </div>

          <div className='flex flex-col text-md text-gray-500'>
            <div className='flex justify-center'>
              <ion-icon name="wallet-outline" size='large'></ion-icon>
            </div>
            <h2 className='text-center'>Wallet</h2>
          </div>

        </div>
    </footer>
  )
}

export default BottomMenu