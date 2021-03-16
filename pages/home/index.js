import AppLayout from "@c/AppLayout";
import Devit from "@c/Devit";
import { useEffect, useState } from 'react'

export default function HomePage() {
    const [timeline, setTimeline] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/statuses/home_timeline')
            .then(res => res.json())
            .then(setTimeline)
    }, [])
    return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {
                        timeline.map((devit) =>
                            <Devit
                                avatar={devit.avatar}
                                id={devit.id}
                                key={devit.id}
                                message={devit.message}
                                username={devit.username}
                            />
                        )
                    }
                </section>
                <nav></nav>
            </AppLayout>
            <style jsx>{` 
                header{
                    align-items:center;
                    border-bottonm:1px solid #ccc;
                    height:49px;
                    display:flex;
                    position:sticky;
                    top:0;
                    width:100%;
                }

                section{
                    padding-top:56px;
                }
                nav{
                    bottom:0;
                    border-top:1px solid #ccc;
                    height:49px;
                    position:sticky;
                    width:100%;
                }

                `}
            </style>
        </>
    )
}