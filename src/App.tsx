import React, {useContext, useRef, useState} from 'react';
import './App.scss';
import {Topbar} from "./components/topbar/Topbar";
import {Intro} from "./components/intro/Intro";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Contact} from "./components/contact/Contact";
import {Menu} from "./components/menu/Menu";
import {MySkills} from "./components/MySkills/MySkills";
import {ThemeContext, themes} from "./context";
import {AboutMe} from "./components/aboutMe/AboutMe";


function App() {

    const [isOpenMenu, setOpenMenu] = useState(false);

    const{theme} = useContext(ThemeContext);

    return (
            <div style={theme} className="app">
                <Topbar
                    isOpenMenu={isOpenMenu}
                    setOpenMenu={setOpenMenu}
                />
                <Menu
                    isOpenMenu={isOpenMenu}
                    setOpenMenu={setOpenMenu}
                />
                <section className={'sections'}>
                    <Intro/>
                    <AboutMe />
                    <MySkills/>
                    <Portfolio/>
                    {/*<Works/>
                    <Testimonials/>*/}
                    <Contact/>
                </section>
            </div>
    );
}

export default App;
