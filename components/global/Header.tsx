import React from 'react'
import { SettingsIcon } from './icons'

const Header: React.FC = () => {
  return (
    <>
      <header className="h-20 border-b border-b-gray-300 flex items-center mb-10">
        <nav className="2xl:container mx-auto 2xl:px-0 md:px-6 px-4 flex justify-between items-center w-full">
          <div>
            <a href="#" className="uppercase text-gray-500">
              logo
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="font-semibold text-blue-700 underline">
              Espanol
            </a>
            <button
              type="button"
              className="outline-none focus:outline-none bg-transparent text-white bg-gray-400 px-6 py-1"
            >
              Sign out
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
