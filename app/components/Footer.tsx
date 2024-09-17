import React from 'react'

const Footer = () => {
  return (
    <div className='h-20 flex justify-center items-center bg-black text-white dark:bg-slate-600 mt-20 dark:bg-opacity-50'>
       <p className="text-sm md:text-lg">Copyright &copy; {new Date().getFullYear()} Om Kumar. All rights reserved.</p>
    </div>
  )
}

export default Footer
