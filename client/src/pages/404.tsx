/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'

const NotFound: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="404 Page Not Found" />
      </Head>
      <main className="flex items-center justify-center px-4 h-screen min-h-screen bg-slate-600 text-white transition ease-in-out duration-700">
        <div className="flex flex-col items-center space-y-4 max-w-md">
          <header className="flex items-center">
            <span className="font-extrabold text-9xl">4</span>
            <div className="flex-shrink-0 z-50">
              <img src="/images/lawgo.png" alt="lawgo" width={192} height={192} />
            </div>
            <span className="font-extrabold text-9xl">4</span>
          </header>
          <section className="flex flex-col items-center gap-3 pb-5">
            <h2 className="text-xl uppercase font-bold">Oops! Page not be found</h2>
            <p className="text-slate-300 text-sm text-center">
              Sorry but the page that you are looking for does not exist, have been removed, name
              changed, or is temporarily unavailable
            </p>
          </section>
          <Link href="/">
            <span className="px-6 py-3 rounded-xl bg-barclerk-10 hover:bg-barclerk-10/70 text-white font-semibold hover:shadow-xl transition ease-in-out duration-150 focus:outline-none cursor-pointer">
              Back to Homepage
            </span>
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFound
