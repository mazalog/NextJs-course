import Devit from "@c/Devit";
import useUser from "hooks/useUser";
import { useEffect, useState } from 'react'
import { fetchLatestDevits } from 'firebase/client'

export default function HomePage() {
    const [timeline, setTimeline] = useState([])

    const user = useUser()
    useEffect(() => {
        user && fetchLatestDevits().then(setTimeline)
    }, [user])

    return (
        <>
            <header>
                <h2>Inicio</h2>
            </header>
            <section>
                {
                    timeline.map((devit) =>
                        <Devit
                            avatar={devit.avatar}
                            createdAt={devit.createdAt}
                            id={devit.id}
                            key={devit.id}
                            content={devit.content}
                            userName={devit.userName}
                            userId={devit.userId}
                            img={devit.img}
                        />
                    )
                }
            </section>
            <nav></nav>
            <style jsx>{` 
                header{
                    align-items:center;
                    background:#ffffffaa;
                    backdrop-filter:blur(5px);
                    border-bottom:1px solid #eee;
                    height:49px;
                    display:flex;
                    position:sticky;
                    top:0;
                    width:100%;
                }
                h2{
                    font-size:21px;
                    font-weight:800;
                    padding-left:15px;
                }
                section{
                    padding-top:56px;
                }
                nav{
                    background:#fff;
                    bottom:0;
                    border-top:1px solid #eee;
                    height:49px;
                    position:sticky;
                    width:100%;
                }

                `}
            </style>
        </>
    )
}