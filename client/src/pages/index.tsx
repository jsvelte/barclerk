import { NextPage } from 'next'

import Button from '~/components/atoms/Button'
import { useAuthMethods } from '~/hooks/authMethods'
import MaintenancePage from '~/components/templates/MaintenancePage'

const Home: NextPage = (): JSX.Element => {
  const { handleAuthSignOut } = useAuthMethods()
  return (
    <div>
      <MaintenancePage />
      <Button
        onClick={handleAuthSignOut}
        value="Temporary Logout Button"
        className="absolute top-10 right-10 max-w-[150px] rounded-lg"
      />
    </div>
  )
}

export { authCheck as getServerSideProps } from '~/utils/getServerSideProps'
export default Home
