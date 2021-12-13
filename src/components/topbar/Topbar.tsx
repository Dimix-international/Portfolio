import s from './Topbar.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export const Topbar = () => {
    return (
        <div className={s.topbar}>
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="#intro" className={s.logo}>Dimix.</a>
                    <div className={s.itemContainer}>
                        <PersonIcon className={s.icon} />
                        <span>+375 29 151 25 30</span>
                    </div>
                    <div className={s.itemContainer}>
                        <EmailIcon className={s.icon} />
                        <span>dima.dimix94@mail.ru</span>
                    </div>
                </div>
                <div className={s.right}>
                    right
                </div>
            </div>
        </div>
    )
}