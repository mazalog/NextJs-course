const timeline = [
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
    {
        id: 1,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "optimos",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Andres Maza"
    },
    {
        id: 2,
        avatar: "https://backlog.com/wp-blog-app/uploads/2019/08/Backlog-Succeeding-as-software-developer-in-modern-workforce-Blog.png",
        username: "senku",
        message: "Los animales se clasifican en vertebrados e invertebrados dependiendo de si tiene huesos o no esto es texto para hacer mas relleno en mi wbe",
        name: "Luis Maza"
    },
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(timeline))
}