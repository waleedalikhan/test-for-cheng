import React from 'react'
import InfoCard from './global/InfoCard'

const Staff: React.FC = () => {
  return (
    <>
      <div className="px-16">
        <div className="flex flex-wrap">
          <div className="w-full pb-5 border-b mb-5">
            <p className="text-sm">View staff members here</p>
          </div>
          <div className="w-full grid md:grid-cols-2 gap-10">
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Staff
