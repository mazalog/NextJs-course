import Head from 'next/head'
import Link  from 'next/link'
import AppLayout from '../styles/components/AppLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>devter rama two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
      <h1 className={styles.title}>
          <Link href="/">
             <a >
               devter
             </a>           
          </Link>
        </h1>
        <nav>
          <Link href="/timeline">
             <a >
               timeline
             </a>          
          </Link>
        </nav>

      </AppLayout>

      <style jsx>
        {`
          nav{
            font-size:24px;
            text-align:center:
            }
        `}
      </style>

    </div>
  )
}
