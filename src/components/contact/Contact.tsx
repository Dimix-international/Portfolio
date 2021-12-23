import s from './Contact.module.scss'
import {FormEvent, useEffect, useState} from "react";

export const Contact = () => {

    const [isSendMessage, setSendMessage] = useState(false)

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
                    <span className={
                        isSendMessage ? s.active : ''
                    }>Thanks! I'll reply ASAP :)</span>

                </form>
            </div>
        </div>
    )
}