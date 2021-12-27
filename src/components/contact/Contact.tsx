import s from './Contact.module.scss'
import {FormEvent, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, IconDefinition} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'

type SocialLinksType = {
    id:string,
    title:string,
    icon: IconDefinition
}
export const Contact = () => {

    const [isSendMessage, setSendMessage] = useState(false);

    const socialLinks: Array<SocialLinksType> = [
        {
            id: '1',
            title: 'Facebook',
            icon: faFacebookF
        },
        {
            id: '2',
            title: 'Instagram',
            icon: faInstagram
        },
        {
            id: '3',
            title: 'Telegram',
            icon: faTelegram
        },
        {
            id: '4',
            title: 'Linkedin',
            icon: faLinkedin
        },
        {
            id: '5',
            title: 'Vk',
            icon: faVk
        },
    ]

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendMessage(true)
    }

    useEffect(() => {
        if (isSendMessage) {
            const id = setTimeout(() => {
                setSendMessage(false)
            }, 5000)

            return () => clearTimeout(id)
        }
    }, [isSendMessage])

    return (
        <div className={s.contact} id={'contact'}>
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
                            <a key={social.id} href="#">
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
