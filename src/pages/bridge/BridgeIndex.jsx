import Bridge from './Bridge'

function BridgeIndex() {
  return (
    <div className='flex flex-col items-center justify-center mt-6'>
    <div className='flex justify-center px-8 md:px-96'>
      <h1 className=' text-5xl md:text-7xl font-semibold tracking-widest'>D3X Bridge</h1>
    </div>
    
    <Bridge />
  </div>
  )
}

export default BridgeIndex