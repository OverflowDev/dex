import {NavLink} from 'react-router-dom'

function BottomMenu() {
  const active = 'font-bold'
  const notActive = 'text-gray-600 hover:text-gray-900'

  return (
    <footer className='mt-auto md:hidden sticky bottom-0 bg-white'>
        <div className='flex justify-between items-center border-t py-6 px-6  gap-3'>

          <div className='flex flex-col text-md'>
            <div className='flex justify-center'>
              <ion-icon name="swap-horizontal-outline" size='large'></ion-icon>
            </div>
            <NavLink 
                to='/swap' 
                className={
                    ({isActive}) => isActive ? active : notActive 
                }
              >
                Swap
            </NavLink>
          </div>

          <div className='flex flex-col text-md '>
            <div className='flex justify-center'>
              <ion-icon name="reorder-two-outline" size='large'></ion-icon>
            </div>
              <NavLink 
                to='/pool' 
                className={
                    ({isActive}) => isActive ? active : notActive 
                }
              >
                Pool
              </NavLink>
          </div>

          <div className='flex flex-col text-md '>
            <div className='flex justify-center'>
              <ion-icon name="alert-circle-outline" size='large'></ion-icon>
            </div>
            <NavLink 
                to='/farm' 
                className={
                    ({isActive}) => isActive ? active : notActive 
                }
              >
                Farm
              </NavLink>
          </div>
          
          <div className='flex flex-col text-md '>
            <div className='flex justify-center'>
              <ion-icon name="link-outline" size='large'></ion-icon>
            </div>
            <NavLink 
                to='/bridge' 
                className={
                    ({isActive}) => isActive ? active : notActive 
                }
              >
                Bridge
              </NavLink>
          </div>

          <div className='flex flex-col text-md '>
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