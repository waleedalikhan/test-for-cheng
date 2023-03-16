import { NextPage } from 'next'
import Layout from '~/components/layouts'
import Staff from '~/components/Staff'

const StaffPage: NextPage = () => {
  return (
    <Layout pageTitle="Staff" navigationTitle="Text here">
      <Staff />
    </Layout>
  )
}

export default StaffPage
