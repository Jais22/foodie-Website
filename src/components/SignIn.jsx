import React from 'react'

const SignIn = () => {
  return (
    <>
    <div className='text-gary-600 body-font w-[90%] sm:w-[80%] mx-auto'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap item center'>
        <div className='lg:w-3/5 md:1/2 md:pr-16 lg:pr-0 pr-0'>
          <h1 className='title-font font-medium text-3xl text-gray-900'>Get Started with Your Acoount</h1>
          <p className='leading-relaxed mt-4'>Find Your Food on Your Platform. just one step to order your food</p>
        </div>
        <div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounde p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
          <h2 className='text-gray-900 text-lg font-medium title-font mb-5'>Sign Up</h2>
          <div className='relative mb-4'>
            <label for="full -name" className='leading-7 text-sm text-gray-600'>Full Name</label>
            <input type='text'
            id='full-name'
            name='full-name'
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
           outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg'/>
          </div>

          <div className='relative mb-4'>
            <label for="e-mail" className='leading-7 text-sm text-gray-600'>E-Mail</label>
            <input type='text'
            id='e-mail'
            name='e-mail'
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
           outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg'/>
          </div>
          <div className='relative mb-4'>
            <label for="mobile" className='leading-7 text-sm text-gray-600'>Mobile</label>
            <input type='text'
            id='mobile'
            name='mobile'
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
           outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg'/>
          </div>

          <div className='relative mb-4'>
            <label for="password" className='leading-7 text-sm text-gray-600'>Paswword</label>
            <input type='password'
            id='password'
            name='password'
            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
           outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-lg'/>
          </div>

<button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>Sign Up</button>


        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn