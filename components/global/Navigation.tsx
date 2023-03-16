import React from 'react'
import ActiveLink from './ActiveLink'
import { SettingsIcon } from './icons'

type Props = {
  navigationTitle?: String
}

const Navigation: React.FC<Props> = ({ navigationTitle }) => {
  const links: { id?: string | number; linkText: string; linkPath: any }[] = [
    {
      id: 1,
      linkText: 'Contracts',
      linkPath: '/',
    },
    {
      id: 2,
      linkText: 'Staff',
      linkPath: '/staff',
    },
    {
      id: 3,
      linkText: 'Profile',
      linkPath: '/profile',
    },
  ]

  const renderNavigationLinks = links.map(
    (
      link: { id?: string | number; linkText: string; linkPath: any },
      index: number,
    ) => {
      return (
        <React.Fragment key={`${link.id}${index}${link.linkText}`}>
          <ActiveLink linkText={link.linkText} linkPath={link.linkPath} />
        </React.Fragment>
      )
    },
  )

  return (
    <>
      <main className="mb-10">
        <div className="2xl:container mx-auto 2xl:px-0 md:px-6 px-4">
          <div className="flex items-start space-x-6">
            <div>
              <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                <SettingsIcon />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full mb-10">
                <h1 className="text-4xl text-black">{navigationTitle}</h1>
              </div>
              <div className="w-full flex space-x-20">
                {renderNavigationLinks}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Navigation
