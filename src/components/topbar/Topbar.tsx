import s from './Topbar.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";


type TopbarType = {
    isOpenMenu:boolean,
    setOpenMenu:(value:boolean) => void
}
export const Topbar:React.FC<TopbarType> = React.memo( (props) => {

    const {isOpenMenu, setOpenMenu} = props;

    const finallyTopbarClass = isOpenMenu? `${s.topbar} ${s.active}` : s.topbar;

    const onClickMenuHamburger = () => {
        setOpenMenu(!isOpenMenu)
    }

    return (
        <div className={finallyTopbarClass}>
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
                    <div
                        className={s.hamburger}
                        onClick={onClickMenuHamburger}
                    >
                        <span className={s.line1}> </span>
                        <span className={s.line2}> </span>
                        <span className={s.line3}> </span>
                    </div>
                </div>
            </div>
        </div>
    )
})