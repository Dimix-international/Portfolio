import s from './Topbar.module.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import React, {useContext, useEffect} from "react";
import {ThemeContext} from "../../context";


type TopbarType = {
    isOpenMenu: boolean,
    setOpenMenu: (value: boolean) => void
}
export const Topbar: React.FC<TopbarType> = React.memo((props) => {

    const {isOpenMenu, setOpenMenu} = props;

    const {theme, toggleThemeApp} = useContext(ThemeContext);


    const finallyTopbarClass = isOpenMenu ? `${s.topbar} ${s.active}` : s.topbar;

    const toggleTheme = () => {
        toggleThemeApp();
    }

    const onClickMenuHamburger = () => {
        setOpenMenu(!isOpenMenu)
    }
    useEffect(() => {
        if (isOpenMenu) {
            document.body.classList.add(s.body_lock)
        } else {
            document.body.className = ''
        }
    }, [isOpenMenu])
    return (
        <div
            style={{color: theme.color}}
            className={finallyTopbarClass}
        >
            <div className={s.wrapper}>
                <div className={s.left}>
                    <a href="#intro" className={s.logo}>Dimix</a>
                    <div className={s.itemContainer}>
                        <PersonIcon className={s.icon}/>
                        <span>+375 29 151 25 30</span>
                    </div>
                    <div className={s.itemContainer}>
                        <EmailIcon className={s.icon}/>
                        <span>dima.dimix94@mail.ru</span>
                    </div>
                </div>
                <div className={s.right}>
                    <button onClick={toggleTheme}>CHANGE THEME</button>
                    <div
                        className={s.hamburger}
                        onClick={onClickMenuHamburger}
                    >
                        <span style={{backgroundColor: theme.color}} className={s.line1}> </span>
                        <span style={{backgroundColor: theme.color}} className={s.line2}> </span>
                        <span style={{backgroundColor: theme.color}} className={s.line3}> </span>
                    </div>
                </div>
            </div>
        </div>
    )
})