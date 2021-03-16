import { useEffect, useState } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import GitHub from '../components/icons/GitHub'
import {loginWithGithHub,onAuthStateChanged} from '../firebase/client'

export default function Home() {

  const [user,setUser]=useState(undefined)

  useEffect(()=>{
   onAuthStateChanged(setUser)
  },[])

   const handleClick=()=>{

     loginWithGithHub()
     .then(user=>{
       const {avatat,username}=user
       setUser(user)
     })
     .catch(err=>{
      console.log(err)
    })

   }
   
  return (
    <div>
      <Head>
        <title>devter rama two</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
        <img src="/maza.png" alt="logo"/>
          <h1>MazaSocial</h1>
          <h2>Talk about development <br/> with developers 
               🧑‍💻
          </h2>
           <div>
             {
               user===null &&
               <Button onClick={handleClick}>
               <GitHub/>
              Login with GitHub
              </Button>
             }
             {
               user && user.avatar &&           
              <div>
                   <img src={user.avatar}/>
                   <strong>{user.username}</strong>
              </div>
             }

           </div>
        </section>

      </AppLayout>

      <style jsx>{`
        img{
          width:120px;
        }

        div{
          margin-top:16px;
        }

        section{
          display:grid;
           height:100%;
          place-content:center;
          place-items:center;
        }

        h1{
          color: ${colors.primary};
          font-weight:800;
          margin-bottom:16px
        }

        h2{
          color: ${colors.secondary};
          font-size:21px;
          margin:0;
        }

        `}
      </style>

    </div>
  )
}

