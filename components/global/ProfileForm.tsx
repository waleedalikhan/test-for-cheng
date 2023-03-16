import React from 'react'
import TextField from './TextField'

const ProfileForm: React.FC = () => {
  return (
    <>
      <form>
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-3 pb-5 mb-5 border-b">
          <div>
            <TextField type="text" label="trade name*" />
          </div>
          <div>
            <TextField type="password" label="contractor registration id*" />
          </div>
          <div>
            <TextField type="password" label="fein*" />
          </div>
          <div>
            <TextField type="text" label="website" />
          </div>
          <div>
            <TextField type="text" label="industry" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-5 pb-5 mb-5 border-b">
          <div>
            <TextField type="text" label="business location*" />
          </div>
          <div>
            <TextField type="text" label="" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <select className="bg-[#f6f6f6] px-4 py-1 rounded-md outline-none focus:outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 border border-gray-200 w-full mt-7">
                <option value="NU">NU</option>
                <option value="EA">EA</option>
                <option value="MD">MD</option>
              </select>
            </div>
            <div>
              <TextField type="text" label="" />
            </div>
          </div>
          <div>
            <TextField type="text" label="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-5 pb-5 mb-5 border-b">
          <div>
            <TextField type="text" label="establishment location*" />
          </div>
          <div>
            <TextField type="text" label="" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <select className="bg-[#f6f6f6] px-4 py-1 rounded-md outline-none focus:outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 border border-gray-200 w-full mt-7">
                <option value="NU">NU</option>
                <option value="EA">EA</option>
                <option value="MD">MD</option>
              </select>
            </div>
            <div>
              <TextField type="text" label="" />
            </div>
          </div>
          <div>
            <TextField type="text" label="" />
          </div>
        </div>
      </form>
    </>
  )
}

export default ProfileForm
