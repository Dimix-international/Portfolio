import React, {useState} from 'react';
import './App.scss';
import {Topbar} from "./components/topbar/Topbar";
import {Intro} from "./components/intro/Intro";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Contact} from "./components/contact/Contact";
import {Menu} from "./components/menu/Menu";
import {MySkills} from "./components/MySkills/MySkills";

function App() {

    const [isOpenMenu, setOpenMenu] = useState(false);

    return (
        <div className="app">
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
                <MySkills />
                <Portfolio/>
                <Works/>
                <Testimonials/>
                <Contact/>
            </section>
        </div>
    );
}

export default App;
