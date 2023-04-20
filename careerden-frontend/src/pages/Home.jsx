import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import engImg from '../images/engineering.jpg';
import doctorImg from '../images/doctor.jpeg';
import architectImg from '../images/architect.jpg';
import defenseImg from '../images/defense.jpg';
import designImg from '../images/design.jpg';
import journalismImg from '../images/journalism.jpg';
import managementImg from '../images/management.jpg';
import scientistImg from '../images/scientist.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24  flex-col items-center justify-center h-[90vh] heroSection">
          <div class="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
            <h3 class="sm:text-[2em] md:text-[2em] text-[1em] mb-8 text-center  w-full ">
              Explore the Career Options
            </h3>
            <h1
              class="md:text-[4em] sm:text-[4em] text-[1.5em] mb-8  text-center  w-full"
              style={{
                lineHeight: '1.2',
              }}
            >
              A WONDERFUL PATH
            </h1>

            <a
              href="#engineering"
              className="inline-block text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-xs text-center justify-self-center mx-auto sm:text-base md:text-lg"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div
          class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          id="engineering"
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded-lg engineering-img"
              alt="hero"
              src={engImg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Engineering
            </h1>
            <p class="mb-8 leading-relaxed">
              An engineer is a professional who applies mathematical and
              scientific principles to design, build, and maintain systems,
              machines, structures, and other products. Engineers work in
              various fields including electrical, mechanical, chemical, civil,
              and software engineering, among others.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/about/engineering">Read more</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Doctor
            </h1>
            <p class="mb-8 leading-relaxed">
              A doctor, also known as a physician, is a medical professional who
              is trained and licensed to practice medicine. They diagnose and
              treat illnesses, injuries, and other health conditions in
              patients.
            </p>
            <div class="flex justify-center">
              <button class=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/about/doctor">Read more</Link>
              </button>
            </div>
          </div>

          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded-lg doctor-img"
              alt="hero"
              src={doctorImg}
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-8xl font-medium title-font mb-4 text-gray-900 bg-purple-400 text-white py-5">
              Explore
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={scientistImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Scientist
                  </h1>
                  <p class="leading-relaxed">
                    The role of a scientist involves designing and conducting
                    experiments, analyzing data, and developing theories and
                    models to explain their observations.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={managementImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Management
                  </h1>
                  <p class="leading-relaxed">
                    Management is the process of planning, organizing,
                    directing, and controlling the efforts of organization
                    members towards the attainment of common goals and
                    objectives.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={designImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Designer
                  </h1>
                  <p class="leading-relaxed">
                    A designer is a professional who creates visual solutions to
                    problems and communicates ideas through the use of various
                    design elements and techniques.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={architectImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Architecture
                  </h1>
                  <p class="leading-relaxed">
                    Architects need to have strong technical and design skills,
                    as well as a thorough understanding of building codes,
                    construction techniques, and materials.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={defenseImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Defense
                  </h1>
                  <p class="leading-relaxed">
                    Defense refers to the protection of a country, group, or
                    individual against threats, such as military attacks or
                    cyberattacks. Defence is a broader term than security.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src={journalismImg}
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Journalist
                  </h1>
                  <p class="leading-relaxed">
                    Journalists play a crucial role in informing the public
                    about important events and issues, and in holding those in
                    power accountable. They are the eyes and ears of the public.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Home;
