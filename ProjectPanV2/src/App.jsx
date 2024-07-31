import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import About from "./pages/About"
import Project from "./pages/Project"
import Contact from "./pages/Contact"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </main>


      </Router>
 

      {/* <main>
        <section id="About-Me">
          <article>
            <p>
              Hi! My name is Ryan and I build awesome things on the internet. Back in 2008, I played with custom MySpace themes - which was my introduction into HTML & CSS!
              When I got older I dabbled in a few introductory coding courses during my undergrad years at ASU. Today, I consider myself a life long learner and am pursuing my passion in web development.
              I've had the wonderful opportunity in studying fullstack development through ASU's Coding Bootcamp.
            </p>
            <p>
              These days I focus on learning about and building coding projects, while also balancing a full-time position in the banking industry.
            </p>
            <p>
              During my freetime, I enjoy working out, spending quality time with my girlfriend and our dog, or grinding out stats on my Hardcore Ironman on Old School RuneScape (Ironman btw).
            </p>
          </article>
        </section>

        <section id="Projects">
          <ul>
            <li>
              <h3>
                <a href="https://giv-hub-36f86bc350f7.herokuapp.com/">GivHub</a>
              </h3>
              <p>
              GivHub is the ultimate platform for giving back. With our app, you can easily and conveniently give away your belongings for free to those who need them most. Whether it's clothes, books, furniture, or electronics, GivHub connects you with people who will truly appreciate your generosity. Join us in creating a community where sharing is caring, and make a positive impact on the world one gift at a time with GivHub.

              </p>
            </li>
            <li>
              <h3>
                <a href="https://ryans-hub.github.io/GivHub/?#">Trudge</a>
              </h3>
              <p>
              Trudge is a front-end web application combining trail, weather, and crime data to find the best place for you to do what you love; trudging!
Often, there is a limited selection of hikes; many of which are dangerous for a variety of reasons. We built this app to solve many of the major problems found when looking for a good trail

              </p>
            </li>
            <li>
              <h3>
                <a href="https://bitewise.onrender.com/">BiteWise</a>
              </h3>
              <p>
              We aim to ensure that restaurants consistently serve exceptional food, provide generous portions, and maintain reasonable prices. We hold them accountable, reminding them that their food might be served to a member of the BiteWise Army. If they fail to meet our standards, they risk facing a flood of negative reviews. Let every restaurant remember that when preparing or packaging our food, they must deliver their best. We are the BiteWise Army, and together, we can make a difference.

              </p>
            </li>
          </ul>
        </section>

        <section id="Contact-Me">
          <h2>Get In Touch</h2>
          <p>
            I'm open to exploring new opportunities and welcome any chance to contribute my skills and expertise. Please feel free to contact me at any time; my inbox is always open.
          </p>
        </section>
      </main> */}
    </div>
  );
};

export default App;
