import Link from 'next/link'

export default function TimeLine({userName}){
    return (
    <>
      <h1>This is the timeline {userName}</h1>
      <Link  href="/">
         <a>Go home</a>      
      </Link>

      <style jsx>
          {`
          h1{
              font-size:36px;
              color:red;
          }
          `}
      </style>
    </>
    )
}

TimeLine.getInitialProps=()=>{
 // return Promise.resolve({userName:'andres'})
  return fetch('http://localhost:3000/api/hello')
  .then(res=>res.json())
  .then(response=>{
      console.log(response)
      const {userName}=response
      return {userName}
  })
}