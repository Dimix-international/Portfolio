import s from './Testimonials.module.scss'

export const Testimonials = () => {

    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];

    return (
        <div className={s.testimonials} id={'testimonials'}>
            <h1>Testimonials</h1>
            <div className={s.container}>
                {
                    data.map(item => (
                        <div key={item.id} className={
                            item.featured
                                ? `${s.card} ${s.featured}`
                                : s.card
                        }>
                            <div className={s.top}>
                                <img className={s.left}
                                     src="assets/right-arrow.png" alt=""/>
                                <img className={s.user} src={item.img} alt=""/>
                                <img className={s.right} src={item.icon}
                                     alt=""/>
                            </div>
                            <div className={s.center}>
                                {item.desc}
                            </div>
                            <div className={s.bottom}>
                                <h3>{item.name}</h3>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}