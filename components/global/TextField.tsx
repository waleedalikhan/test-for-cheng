import React from 'react'

type Props = {
  label: string
  type: string
}

const TextField: React.FC<Props> = ({ type, label }) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2 uppercase text-sm">{label}</label>
        <input
          type={type}
          className={`bg-[#f6f6f6] px-4 py-1 rounded-md outline-none focus:outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 border border-gray-200 ${
            label === '' ? 'mt-5' : ''
          }`}
        />
      </div>
    </>
  )
}

export default TextField
