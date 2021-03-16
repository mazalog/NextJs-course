import Avatar from '@c/Avatar'

export default function Devit({ id, username, avatar, message }) {
    return (
        <>
            <article key={id}>
                <div>
                    <Avatar
                        alt={username}
                        src={avatar}
                    />
                </div>
                <section>
                    <strong>{username}</strong>
                    <p>{message}</p>
                </section>
            </article>

            <style jsx>{`
                article{
                    border-bottom:2px solid #eaf7ff;
                    display:flex;
                    padding:10px 15px;
                       }
                div{
                    padding-right:10px;
                }        
            `}</style>
        </>

    )
}