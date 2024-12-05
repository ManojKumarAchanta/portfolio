import React from 'react';
import emailjs from 'emailjs-com';
import toast,{Toaster} from 'react-hot-toast';
const ContactMe = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual service ID, template ID, and public API key
    emailjs
      .sendForm(
        'service_hzso9dr',        // Your service ID
        'template_nabrfr8',       // Your template ID
        e.target,                 // Form element (e.target)
        'K1QZF_ydxUt5aGavx'       // Your public API key (User ID)
      )
      .then((response) => {
        toast.success("Email sent Successfully")
        e.target.reset();
      }, (error) => {
        console.log('Error sending email', error);
      });
  };

  return (
    <div className='shadow-black-btn w-full px-6 flex flex-col items-center mt-12 pb-14 md:w-full' id="contact">
      <Toaster/>
      <div className='heading w-full'>
        <h1 className='text-center text-white text-4xl font-semibold'>Contact Me</h1>
      </div>
      <div className='flex p-8 textblack text-xl md:w-full md:justify-center'>
        <form onSubmit={handleSubmit} className='shadow-black-btn bg-gray-50 pb-4 flex flex-col gap-6 pt-8 px-6 w-full rounded-lg md:w-[60%]'>
          <fieldset className='text-black px-4 py-2'>
            <input
              type="text"
              name="from_name"  // Use the correct name as defined in your EmailJS template
              placeholder='Enter your Name'
              className='border-gray-500 border px-6 py-2 rounded-md w-full'
            />
          </fieldset>
          <fieldset className='text-black px-4 py-2'>
            <input
              type="email"
              name="from_email"  // Use the correct name as defined in your EmailJS template
              placeholder='Enter your Email'
              className='px-6 py-2 rounded-md border border-gray-500 w-full'
            />
          </fieldset>
          <fieldset className='text-black px-4 py-2'>
            <textarea
              name="message"    // Use the correct name as defined in your EmailJS template
              placeholder='Enter your Message'
              className='px-6 py-2 rounded-md border border-gray-500 w-full'
            />
          </fieldset>
          <button className='py-2 rounded-lg bg-black text-white text-center inline w-[40%] m-auto px-4 md:w-[20%]'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
