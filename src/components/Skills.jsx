import React from 'react'

const Skills = () => {
  return (
    <div className='px-16 w-full' id="skills">
      <div className='w-full mb-24'>
        <h1 className='text-center text-4xl font-semibold'>Skills</h1>
      </div>
      <div className='grid select-none selection:none w-full gap-14 md:px-24 grid-cols-3 md:grid-cols-5 pb-16'>
        <div tooltip="java" className='size-20 rounded-[50%]'><img src="/skills/java.png"   className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/python.png" className="animate-rotate-x selection:none " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/html.png"   className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/css.png"    className="animate-rotate-x " /></div>
        <div className='size-16 rounded-[50%] place-content-center'><img src="/skills/tailwind-css.svg" className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/js.png"     className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/react.png" className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/nodejs.png" className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/mongo.png" className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%]'><img src="/skills/git.png" className="animate-rotate-x " /></div>
        <div className='size-20 rounded-[50%] '><img src="/skills/github.png" className="animate-rotate-x bg-white rounded-[50%]" /></div>
      </div>
    </div>
  )
}

export default Skills