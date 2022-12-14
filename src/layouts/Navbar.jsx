import { Link, NavLink } from "react-router-dom"

function Navbar() {
    const active = 'font-bold'
    const notActive = 'text-gray-600 hover:text-gray-900'

  return (
    <div className='conatainer overflow-hidden'>
        <nav className="py-4 px-8">
            <div className="flex items-center font-medium justify-between">  
                {/*  Menu  */}
                <div className='p-3 md:w-auto w-full flex items-center justify-between'>
                    <Link to='/' className='font-inter font-bold text-4xl'>
                        D3X
                    </Link>
                    {/* Cart  */}
                    <div className="md:hidden">
                        <button className='bg-blue-200 py-2 px-4 rounded text-center'>
                            Connect Wallet
                        </button>
                    </div> 
                </div>

                <ul className='md:flex hidden items-center gap-8 font-normal'>
                    <li className='cursor-pointer'>
                        <NavLink 
                            to='/swap' 
                            className={
                                ({isActive}) => isActive ? active : notActive 
                            }
                        >
                            Swap
                        </NavLink>
                    </li>
                    <li className='cursor-pointer '>
                        <NavLink 
                            to='/pool' 
                            className={
                                ({isActive}) => isActive ? active : notActive 
                            }
                        >
                            Pool
                        </NavLink>
                    </li>
                    <li className='cursor-pointer '>
                        <NavLink 
                            to='/farm' 
                            className={
                                ({isActive}) => isActive ? active : notActive 
                            }
                        >
                            Farm
                        </NavLink>
                    </li>
                    <li className='cursor-pointer '>
                        <NavLink 
                            to='/bridge' 
                            className={
                                ({isActive}) => isActive ? active : notActive 
                            }
                        >
                            Bridge
                        </NavLink>
                    </li>
                </ul>
                
                {/* <ul className='md:flex hidden items-center gap-8'></ul> */}
                
                <ul className='md:flex hidden items-center font-semibold gap-4'>
                    <li className='bg-blue-300 py-2 px-4 uppercase rounded text-center text-sm'>
                        Ethereum
                    </li>
                    <li className=''>
                        <button className='bg-blue-300 py-2 px-4 uppercase rounded text-center text-sm'>
                            Connect Wallet
                        </button>
                    </li>
                    <li className=''>
                        <button className='bg-blue-300 py-2 px-3 rounded text-center'>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                        </button>
                    </li>
                </ul>

            </div>
        </nav>

    </div>
  )
}

export default Navbar