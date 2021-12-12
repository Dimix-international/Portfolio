import React from 'react';
import './App.scss';
import {Topbar} from "./components/topbar/Topbar";
import {Intro} from "./components/intro/Intro";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Works} from "./components/works/Works";
import {Testimonials} from "./components/testimonials/Testimonials";
import {Contact} from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Topbar />
        <section className={'sections'}>
            <Intro />
            <Portfolio />
            <Works />
            <Testimonials />
            <Contact />
        </section>
    </div>
  );
}

export default App;
