import React from 'react'
import ProfileForm from './global/ProfileForm'

const Profile: React.FC = () => {
  return (
    <>
      <div className="px-16">
        <div className="flex flex-wrap">
          <div className="w-full pb-5 border-b mb-5">
            <p className="text-sm">View your details here</p>
          </div>
          <div className="w-full">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
