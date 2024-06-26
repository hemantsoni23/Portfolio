import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (resData.success) {
        e.target.reset();
        setEmailSubmitted(true);

        toast.success('Email sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Failed to send email. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again later.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 10000);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <ToastContainer />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='w-full h-full bottom-0 bg-moon bg-cover bg-center bg-no-repeat absolute mix-blend-screen '></div>
        <div className='flex flex-col w-full max-w-[700px] z-0'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&#39;s <span className='text-accent'>Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            onSubmit={handleSubmit}
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='name'
                className='input'
                required
              />
              <input
                type='text'
                id='email'
                name='email'
                placeholder='email'
                className='input'
                required
              />
            </div>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='subject'
              className='input'
              required
            />
            <textarea
              id='message'
              name='message'
              placeholder='message'
              className='textarea'
              required
            ></textarea>
            <button
              type='submit'
              className={`btn rounded-full border border-white max-w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:before-accent group ${
                isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isButtonDisabled}
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-normal'>
                Send Mail
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
