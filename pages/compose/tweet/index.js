import AppLayout from "@c/AppLayout"
import Button from "@c/Button"
import useUser from "hooks/useUser"
import { addDevit, uploadImage } from 'firebase/client'
import { useEffect, useState } from "react"
import router from 'next/router'
import Avatar from "@c/Avatar"

const COMPOSE_STATES = {
    USERT_NOT_KNOW: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1
}

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
}

export default function ComposeTweet() {

    const user = useUser()
    console.log(user)
    const [status, setStatus] = useState(COMPOSE_STATES.USERT_NOT_KNOW)
    const [message, setMessage] = useState('')

    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
    const [task, setTask] = useState(null)
    const [imgUrl, setImgURL] = useState(null)

    useEffect(() => {
        if (task) {
            const onProgress = () => { }
            const onError = () => { }
            const onComplete = () => {
                console.log('onComplete')
                task.snapshot.ref.getDownloadURL()
                    .then(setImgURL)
            }
            task.on('state_changed',
                onProgress,
                onError,
                onComplete
            )
        }

    }, [task])


    const handleChange = (event) => {
        const { value } = event.target
        setMessage(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        setStatus(COMPOSE_STATES.LOADING)
        addDevit({
            avatar: user.avatar,
            content: message,
            userId: user.uid,
            userName: user.userName,
            img: imgUrl
        })
            .then(() => {
                router.push("/home")
            })
            .catch(() => {
                setStatus(COMPOSE_STATES.ERROR)
            })
    }

    const handleDragEnter = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
    }

    const handleDragLeave = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)

    }

    const handleDrop = e => {
        e.preventDefault()
        setDrag(DRAG_IMAGE_STATES.NONE)
        const file = e.dataTransfer.files[0]
        const task = uploadImage(file)
        setTask(task)
    }

    const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

    return (
        <>
            <AppLayout>

                <form onSubmit={handleSubmit}>
                    <textarea
                        onChange={handleChange}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        value={message}
                        placeholder="Que estas pensando"
                    ></textarea>
                    {imgUrl && <section className="remobe-img">
                        <button onClick={() => setImgURL(null)}>x</button>
                        <img src={imgUrl} />
                    </section>}
                    <div>
                        <Button
                            disabled={isButtonDisabled}>
                            Mazatwear</Button>
                    </div>
                </form>
            </AppLayout>
            <style jsx>{`
            div{
                padding:15px;
            }
            button{
                background:rgba(0,0,0,0.3);
                border:0; 
                border-radius:999px;
                width:31px;
                color:#fff;
                font-size:24px;
                height:31px;
                top:15px;
                position:absolute;
                right:15px;
                cursor:pointer;
            }
            .remove-img{
                poition:relative;
            }
            .form-container{
                display:flex;
                align-items:flex-start;
            }
            .avatar-container{
                padding-top:20px;
                padding-left:10PX;
            }
            form{
                padding:10px;
            }
            img{
                border-radius:10px;
                height:auto;
                width:100%;
            }
            textarea{
            border:${drag === DRAG_IMAGE_STATES.DRAG_OVER ? '3px dashed #09f' : '3px solid transparent'}; 
            font-size:21px;
            min-height:200px;
            outline:0;            padding:15px;
            resize:none;
            width:100%;
            }    
                
            `}</style>
        </>
    )
}