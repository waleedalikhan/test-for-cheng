import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="h-20 flex items-center justify-end border-t pr-16">
        <div className="flex">
          <p className="text-gray-400">
            All Rights Reserved |{' '}
            <a href="#" className="text-gray-400 underline">
              Terms and Conditions
            </a>
            |{' '}
            <a href="#" className="text-gray-400 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
