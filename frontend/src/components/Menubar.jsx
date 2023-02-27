import React from 'react'
import { Badge} from '@mui/material'
import {AiOutlineSearch} from 'react-icons/ai'
import {ShoppingCartOutlined } from "@mui/icons-material";

function Menubar() {
  return (
    <nav className="bg-[#3D3D3D] shadow-md relative z-10 shadow-[#8F8F8F] ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-lg">My Ecommerce Site</h1>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end ">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiOutlineSearch />
                </div>
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:ml-6">
                <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" >Login</a>
                <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" >About</a>
                <Badge badgeContent={0} className="text-white">
                  <ShoppingCartOutlined/>
                </Badge>
          </div>
          
        </div>
      </div>
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" >Login</a>
            <a href="#" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium" >About</a>
        </div>
        {/* cart badge */}
       

  </div>
</nav>
  )
}

export default Menubar

