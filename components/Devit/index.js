import Avatar from '@c/Avatar'
import useTimeAgo from 'hooks/useTimeAgo'

export default function Devit({ id, img, userName, avatar, content, createdAt, userId }) {

    const timeago = useTimeAgo(createdAt)

    return (
        <>
            <article key={id}>
                <div>
                    <Avatar
                        alt={userName}
                        src={avatar}
                    />
                </div>
                <section>
                    <header>
                        <strong>{userName}</strong>
                        <span> . </span>
                        <time>{timeago}</time>
                    </header>
                    <p>{content}</p>
                    {img && <img src={img} />}
                </section>
            </article>

            <style jsx>{`
                article{
                    border-bottom:2px solid #eaf7ff;
                    display:flex;
                    padding:10px 15px;
                       }
                       img{
                        border-radius:10px;
                        height:auto;
                        margin-top:10px;
                        width:100%;
                       }
                div{
                    padding-right:10px;
                }        
                p{
                    line-height:1.3125;
                    margin:0;
                }
                date{
                    color:#555;
                    font-size:14px;
                }
            `}</style>
        </>

    )
}