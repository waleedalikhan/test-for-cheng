import type { NextPage } from 'next'
import Contractor from '~/components/Contractor'
import Layout from '~/components/layouts'

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Contractors" navigationTitle="Contracts">
        <Contractor />
      </Layout>
    </>
  )
}

export default Home
