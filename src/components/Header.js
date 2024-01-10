import React from 'react'

const Header = () => {
  return (
    <div>
      
      <nav className="bg-[#023859] text-center text-[#D8EBF2] flex justify-between p-5" >
      <h1 className='font-serif font-bold text-2xl'>
        Jyoti Pal
      </h1>
      <ul className="space-x-7 sm:flex hidden font-semibold justify-between flex-wrap text-lg hover:cursor-pointer ">
        <li className='hover:text-[#96C6D9]'> <a  className='hover:no-underline '  href='#' > </a>Home</li>
        <li className='hover:text-[#96C6D9]'> <a  className='hover:no-underline '  href='#'></a>About</li>
        <li className='hover:text-[#96C6D9]'> <a  className='hover:no-underline '  href='#'> Skills</a></li>
        <li className='hover:text-[#96C6D9]'><a  className='hover:no-underline '  href='#'> Contact </a></li>
        <li className='hover:text-[#96C6D9]'> <a className='hover:no-underline '  href='#'>Projects</a></li>
        
      </ul>
      <div className='sm:hidden '>
      <a className='menubar' ><i className='bx bx-menu text-xl'></i> </a>
      
      </div>
    </nav>
    </div>
  )
}

export default Header
