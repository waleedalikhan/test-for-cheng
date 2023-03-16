import Head from 'next/head'
import React from 'react'
import Footer from '../global/Footer'
import Header from '../global/Header'
import Navigation from '../global/Navigation'

type Props = {
  pageTitle?: string
  navigationTitle?: string
}

const Layout: React.FC<Props> = ({
  pageTitle = 'Document',
  children,
  navigationTitle,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <Navigation navigationTitle={navigationTitle} />
      <div className="2xl:container mx-auto 2xl:px-0 md:px-6 px-4 h-[77vh]">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
