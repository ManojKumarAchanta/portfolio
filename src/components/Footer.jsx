import { Github, Linkedin, Mail, MailIcon, Pointer } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-t-2  w-full h-[3%] bg-black px-16 flex items-center justify-center flex-col'>
        <h1 className='text-2xl pt-4 font-semibold'>Thank You</h1>
       <div className='icons flex items-center justify-center gap-6 mt-4'>
        <a href="https://github.com/ManojKumarAchanta"><Github size={26} cursor="pointer"/></a>
        <a href="https://linkedin.com/in/ManojKumarAchanta"><Linkedin size={26} cursor="pointer"/></a>
        <a href="mailto:manojkumar.achanta9@gmail.com"><MailIcon size={26} cursor="pointer"/></a>
        
       </div>
       <p className='py-4'>&copy; {new Date().getFullYear()} Manoj Kumar. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
