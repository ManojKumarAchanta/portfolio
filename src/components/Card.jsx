import React from 'react'

const Card = ({title,description}) => {
  return (
    <div className='border-2 border-[#FFFFFF] flex flex-col bg-[#F9F9F0] text-[#000000] px-4 py-4 rounded-lg w-[80%] max-w-md shadow-md'>
      <div>
        <img src="/bg.jpg" alt="" className='' />
      </div>
      <div className='my-6'>
        <h1 className='text-3xl font-semibold'>{title}</h1>
        <p className='text-lg'>{description}</p>
      </div>
      <div className='flex gap-4'>
        <button className='bg-black text-white px-4 rounded-lg py-2 text-lg shadow-md'>Go live</button>
        <button className='text-black rounded-lg bg-white px-4 py-2 text-lg shadow-md'>Github</button>
      </div>
    </div>
  )
}

export default Card
