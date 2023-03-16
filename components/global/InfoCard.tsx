import React from 'react'
import { UserIcon } from './icons'

const InfoCard: React.FC = () => {
  return (
    <>
      <div className="flex border rounded">
        <div className="bg-gray-200 text-gray-500 h-28 w-28 flex items-center justify-center">
          <UserIcon />
        </div>
        <div className="flex items-center pl-5">
          <div>
            <p>John doe</p>
            <p className="text-gray-400 text-sm">Job title</p>
            <p className="text-gray-400 text-sm">johndoe@abc.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCard
