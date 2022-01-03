import s from './Contact.module.scss'
import {FormEvent, useContext, useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, IconDefinition} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import {useOnScreen} from "../../hooks/onScreen";
import {ThemeContext} from "../../context";

type SocialLinksType = {
    id:string,
    title:string,
    icon: IconDefinition,
    href: string
}
export const Contact = () => {

    const [isSendMessage, setSendMessage] = useState(false);

    const socialLinks: Array<SocialLinksType> = [
        {
            id: '1',
            title: 'Facebook',
            icon: faFacebookF,
            href: '#'
        },
        {
            id: '2',
            title: 'Instagram',
            icon: faInstagram,
            href: 'https://instagram.com/md__light?utm_medium=copy_link'
        },
        {
            id: '3',
            title: 'Telegram',
            icon: faTelegram,
            href: '#'
        },
        {
            id: '4',
            title: 'Linkedin',
            icon: faLinkedin,
            href: '#'
        },
        {
            id: '5',
            title: 'Vk',
            icon: faVk,
            href: '#'
        },
    ]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendMessage(true)
    }
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useOnScreen(containerRef);

    const{setActivePointOfMenu} = useContext(ThemeContext);


    useEffect(() => {
        if(isVisible) {
            setActivePointOfMenu('Contact')
        }
    },[isVisible, setActivePointOfMenu])

    useEffect(() => {
        if (isSendMessage) {
            const id = setTimeout(() => {
                setSendMessage(false)
            }, 5000)

            return () => clearTimeout(id)
        }
    }, [isSendMessage])

    return (
        <div ref={containerRef} className={s.contact} id={'contact'}>
            <div className={s.left}>
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className={s.right}>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder={'Email'}/>
                    <textarea placeholder={'Message'}/>
                    <button type={'submit'}>Send</button>
{/*                    <span className={
                        isSendMessage ? `${s.active} ${s.response}` : s.response
                    }>Thanks! I'll reply ASAP :)</span>*/}
                </form>
                <div className={s.icons}>
                    {
                        socialLinks.map(social => (
                            <a key={social.id} href={social.href}>
                                <div className={s.layer}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className={s.fab}><FontAwesomeIcon icon={social.icon}/></span>
                                </div>
                                <div className={s.text}>{social.title}</div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
