import Farm from './Farm'

function FarmIndex() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-wrap justify-center px-8 md:px-96'>
        <h1 className=' text-5xl md:text-7xl font-semibold tracking-widest'>D3X FARM</h1>
        <p className="text-center mt-2 leading-6 tracking-wide">
          You can earn rewards by staking your pool tokens in multiple staking programs. You can unstake your pool tokens at any time without any penalty.
        </p>
      </div>
      
      <Farm />
    </div>
  )
}

export default FarmIndex