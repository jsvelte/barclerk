import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ChevronRight } from 'react-feather'

type Props = {
  route: string
}

const Breedcrumb: FC<Props> = ({ route }): JSX.Element => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="flex items-center space-x-2 text-sm font-normal text-slate-400 md:text-base">
      <Link
        href={`/matter/${id}`}
        className="font-medium text-barclerk-30 outline-none transition duration-75 ease-in-out hover:underline"
      >
        Dashboard
      </Link>
      <ChevronRight className="h-4 w-4" />
      <p>{route}</p>
    </div>
  )
}

export default Breedcrumb
