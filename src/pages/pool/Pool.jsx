import {Link} from 'react-router-dom'

function Pool() {
  return (
    <div className='mt-8 flex flex-col items-center justify-center'>

      <div className='flex flex-wrap justify-center px-8 md:px-96'>
        <h1 className=' text-5xl md:text-7xl font-semibold tracking-widest'>D3X POOL</h1>
        <p className="text-center mt-2 leading-6 tracking-wide">
          Liquidity providers earn a fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
        </p>
        <Link to='/' className='uppercase mt-2 text-md space-x-2 flex items-center tracking-wide text-blue-700 font-semibold hover:font-light'>
          <ion-icon name="book-outline"></ion-icon>
          <span>Learn How It works</span> 
        </Link>
      </div>

      <div className='mt-12 flex md:flex flex-wrap justify-center gap-6'>
        <button
          className='py-3 md:px-36 px-24 bg-blue-100 text-black hover:bg-blue-200 uppercase text-sm font-semibold tracking-wider rounded-lg'
        >
          Create a Pair
        </button>
        <button
          className='py-3 md:px-36 px-24 bg-blue-500 text-white hover:bg-opacity-90 uppercase text-sm font-semibold tracking-wider rounded-lg'
        >
          Add Liquidity
        </button>
      </div>

      <div className='mt-12 flex justify-center p-8'>
        <div className='flex items-center justify-center h-20 w-80 md:96bg-white shadow-md rounded-lg'>
          <h1 className='text-blue-900 font-semibold tracking-wide'>No Liquidity found</h1>
        </div>
      </div>

    </div>
  )
}

export default Pool