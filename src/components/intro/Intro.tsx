import s from './Intro.module.scss';
import {init} from 'ityped';
import {useContext, useEffect, useRef} from "react";
import './itypedCursor.scss'
import {useOnScreen} from "../../hooks/onScreen";
import {ThemeContext} from "../../context";

export const Intro = () => {

    const textRef = useRef<HTMLElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);

    const {setActivePointOfMenu} = useContext(ThemeContext);

    useEffect(() => {
        if (textRef.current) {
            init(textRef.current, {
                showCursor: true,
                typeSpeed: 150,
                backDelay: 700,
                strings: [
                    'Developer',
                    'Designer!',
                    'Content Creator'
                ],
            })
        }
    }, [])

    useEffect(() => {
        if (isVisible) {

            setActivePointOfMenu('Home')
        }
    }, [isVisible, setActivePointOfMenu])

    return (
        <div ref={containerRef} className={s.intro} id={'intro'}>
            <div className={s.left}>
                <div className={s.imgContainer}>
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className={s.right}>
                <div className={s.wrapper}>
                    <h2>Hi There, I'm</h2>
                    <h1>Dima Melnikov</h1>
                    <h3>Freelance <span className={s.itypedCursor}
                                        ref={textRef}> </span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}