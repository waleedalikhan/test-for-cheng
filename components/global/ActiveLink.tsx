import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  linkText: string
  linkPath?: any
}

const ActiveLink: React.FC<Props> = ({ linkText, linkPath }) => {
  const router = useRouter()

  if (router.pathname === linkPath) {
    return (
      <>
        <Link href={linkPath}>
          <span className="font-semibold text-black text-2xl cursor-pointer">
            {linkText}
          </span>
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link href={linkPath}>
          <span className="font-semibold text-gray-500 text-2xl cursor-pointer">
            {linkText}
          </span>
        </Link>
      </>
    )
  }
}

export default ActiveLink
