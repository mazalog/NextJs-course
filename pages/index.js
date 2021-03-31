import { useEffect } from "react"
import { colors } from "styles/theme"
import { loginWithGithHub } from "firebase/client"
import { useRouter } from 'next/router'
import AppLayout from "components/AppLayout"
import Button from "components/Button"
import GitHub from "components/icons/GitHub"
import Head from "next/head"
import useUser, { USER_STATES } from "hooks/useUser"

export default function Home() {

  const user = useUser()

  const router = useRouter()



  useEffect(() => {
    user && router.replace('/home')
  }, [user])

  const handleClick = () => {
    loginWithGithHub()
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Head>
        <title>devter | home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/maza.png" alt="logo" />
          <h1>MazaSocial</h1>
          <h2>
            Talk about development <br /> with developers 🧑‍💻
          </h2>
          <div>
            {user === USER_STATES.NOT_LOGGED && (
              <Button onClick={handleClick}>
                <GitHub />
                Login with GitHub
              </Button>
            )}
            {user === USER_STATES.NOT_KNOW && <span>Loading...</span>}
          </div>
        </section>
      </AppLayout>

      <style jsx>
        {`
          img {
            width: 120px;
          }

          div {
            margin-top: 16px;
          }

          section {
            display: grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }

          h1 {
            color: ${colors.primary};
            font-weight: 800;
            margin-bottom: 16px;
          }

          h2 {
            color: ${colors.secondary};
            font-size: 21px;
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}
