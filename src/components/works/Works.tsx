import s from './Works.module.scss'
import {useState} from "react";
export const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];

    const handleClick =(direction:string = 'right') => {
        direction === 'left'
            ? setCurrentSlide(
                /*current => current > 0 ? current - 1 : data.length - 1*/
            current => current > 0 ? current - 1 : current
            )
            : setCurrentSlide(
            /*current => current < data.length - 1 ? current + 1 : 0*/
            current => current < data.length - 1 ? current + 1 : current
            )
        }
    return (
        <div className={s.works} id={'works'}>
            <div
                className={s.slider}
                style={{
                    transform: `translateX(-${currentSlide * 100}vw)`
                }}
            >
                {
                    data.map(item => (
                        <div key={item.id} className={s.container}>
                            <div className={s.item}>
                                <div className={s.left}>
                                    <div className={s.leftContainer}>
                                        <div className={s.image}>
                                            <img src={item.icon} alt=""/>
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>
                                            {item.desc}
                                        </p>
                                        <span>Project</span>
                                    </div>
                                </div>
                                <div className={s.right}>
                                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt=""/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img
                src="assets/arrow.png"
                alt=""
                className={`${s.arrow} ${s.leftArrow}`}
                onClick={() => handleClick('left')}
            />
            <img
                src="assets/arrow.png"
                alt=""
                className={`${s.arrow} ${s.rightArrow}`}
                onClick={() => handleClick()}
            />
        </div>
    )
}