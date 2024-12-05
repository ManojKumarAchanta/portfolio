import Typewriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div id="hero" className='w-full m-auto px-10 md:px-48 md:grid md:grid-cols-2 py-18'>  
      <div className='part-1 pt-44 pb-18 text-white w-full'>
        <h1 className='font-semibold text-2xl'>Hello I'm, </h1>
        <div className="bg-gradient-to-r from-pink-300 mb-3 mt-2 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          <span className="text-4xl font-semibold tracking-tight">
            <Typewriter
              options={{
                strings: ['Manoj Kumar Achanta', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p>Self Driven Web Developer proficient in React.js, Node.js, Express.js, MongoDB. Continously trying to expanding knowledge and technical expertise.</p>
        <div className='mt-8 flex gap-12 font-semibold'>
          <button className='hover:bg-white hover:text-black bg-black text-white px-4 py-2 rounded-md text-lg shadow-black-btn' ><a href="#projects">Projects</a></button>
          <button className='hover:bg-[#9F9F9F] hover:text-white bg-white text-black px-4 py-2 rounded-md text-lg shadow-btn' ><a href="#contact">Get in touch</a></button>
        </div>
      </div>
      
      <div className='part-2 w-full flex justify-center'>
        <img src="profile.jpg"  className="rounded-[50%] m-auto size-80 my-24 border-4 border-white" />
      </div>
    </div>
  )
}

export default Hero
