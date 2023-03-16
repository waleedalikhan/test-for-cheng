import { NextPage } from 'next'
import Layout from '~/components/layouts'
import Profile from '~/components/Profile'

const ProfilePage: NextPage = () => {
  return (
    <Layout pageTitle="Profile" navigationTitle="ABC Contractor">
      <Profile />
    </Layout>
  )
}

export default ProfilePage
