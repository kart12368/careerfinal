import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EngImg from '../images/showcase/engineer.jpg';
import EngImg1 from '../images/showcase/engineer1.jpg';
import './Engineering.css';

const Engineering = () => {
  return (
    <>
      <Navbar />
      <section className="engineering px-14 py-6 ">
        <div className="top flex flex-row gap-5 mt-10">
          <div className="left w-[40%]">
            <img src={EngImg} className="boxShadow" />
          </div>
          <div className="right w-[60%]">
            <div className="flex flex-col gap-3 justify-evenly h-full">
              <h1 className="sm:text-lg md:text-2xl lg:text-4xl text-base text-purple-700 font-bold">
                What is engineering?
              </h1>
              <p className="sm:text-base md:text-xl lg:text-2xl text-base">
                Engineering is the application of science and maths to solve
                problems. While scientists and inventors come up with
                innovations, it is engineers who apply these discoveries to the
                real world.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5 text-2xl">
          <p>
            Engineering is part of STEM education, which aims to engage students
            with science, technology, engineering and mathematics yet, as a
            discipline, it has been practiced for thousands of years. Engineers
            work on everything from cell membranes to construction and
            prosthetics to improving engine and transport efficiencies and
            developing renewable energy resources.
            <br />
            <br />
            Engineering developed beyond military applications and began to be
            applied to civilian structures like bridges and buildings, leading
            to the creation of the term civil engineering, to differentiate it
            from the original military engineering field.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            What Does an Engineer Do?
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            Engineers are involved in the design, evaluation, development,
            testing, modification, inspection and maintaining of a wide range of
            products, structures and systems. This involves everything from the
            recommending of materials and processes, overseeing manufacturing
            and construction processes, and conducting failure analysis and
            investigation, to providing consultancy services and teaching
            engineering to students and trainees.
          </p>
        </div>

        <div className="text-center">
          <img src={EngImg1} className="text-center  boxShadow my-5 mx-auto" />
        </div>

        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 font-bold">
            Types of Engineering
          </h1>

          <p className="sm:text-base md:text-xl lg:text-2xl text-base my-4">
            Here are some of the traditional and more common interdisciplinary
            engineering fields:
          </p>

          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              1. Mechanical Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Mechanical engineers are involved in the design, manufacture,
              inspection and maintenance of machinery, equipment and components
              such as vehicles, engines, aerospace products, weapon systems,
              robotics, turbines, construction and farm machinery, as well as a
              wide range of tools and devices. This type of engineering is also
              associated with the management of control systems and instruments
              for measuring the performance and status of machinery.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              2. Electrical Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Electrical engineers work on the design, testing, manufacture,
              construction, control, monitoring and inspection of electrical and
              electronic devices, components, machines and systems. These range
              in size from the smallest microchips to large transmission and
              power generation systems. This includes everything from broadcast
              engineering to electromagnetic devices, computer systems,
              telecommunications and more.
            </p>
          </div>

          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              3. Civil Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Civil engineers are involved in the design, construction,
              maintenance and inspection of large civil infrastructure projects,
              including roads, railways, bridges, tunnels and dams. Working on
              both public and private projects, civil engineers traditionally
              work in sub-disciplines such as environmental engineering,
              structural engineering or surveying. As mentioned above, civil
              engineering was originally created to differentiate it from
              military engineering.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              4. Aerospace Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              As a specialised branch of mechanical and electrical engineering,
              aerospace engineering focuses on the design, manufacture and
              testing of aircraft and spacecraft, including all parts and
              components. Covering everything from vehicle aerodynamics and
              efficiencies to electrical control and navigation systems, much of
              the expertise is also used for other vehicles, such as cars.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              5. Nuclear Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Nuclear engineers work on the design, manufacture, construction,
              operation, and testing of the equipment, systems and processes for
              the production and control of nuclear power. From nuclear power
              plant reactors to particle accelerators, nuclear engineers also
              work on factors such as monitoring and the storage of nuclear
              waste in order to protect people from potentially harmful
              situations.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              6. Biomedical Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Biomedical engineers are concerned with the design of systems,
              equipment and devices for use in healthcare and medicine. By
              working with medical specialists such as doctors, therapists and
              researchers, biomedical engineers are able to meet the
              requirements of healthcare professionals.
            </p>
          </div>

          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              7. Chemical Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Chemical engineers use physics, chemistry, biology and engineering
              principles for the design of equipment, systems and processes for
              refining raw materials for mixing, compounding and processing
              chemicals for a variety of products. Carrying out processes on a
              commercial scale, chemical engineers are involved in processes
              ranging from petroleum refining to fermentation and the production
              of biomolecules.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              8. Computer Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Computer engineers design computer hardware, systems, networks and
              software. Computer engineering combines other engineering
              disciplines, such as electrical engineering and computer science,
              as well as software engineering and design.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              9. Industrial Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Industrial engineers design and optimise facilities, equipment and
              systems for manufacturing, materials processing and other
              industrial applications.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              10. Environmental Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Environmental engineers are concerned with the prevention, removal
              and elimination of sources of pollution that affect the
              environment. Measuring pollution levels, determining sources of
              pollution and cleaning up polluted areas, these engineers need to
              work in compliance with government regulations.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              11. Marine Engineering
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              Marine engineering is related to any engineering tasks on or near
              the oceans. This includes design and development for shipping,
              submarines, oil rigs, on-board, harbours, plants and more. This
              specialised area of engineering combines other types of
              engineering, including mechanical engineering, electrical
              engineering, civil engineering, and programming.
            </p>
          </div>
        </div>

        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 font-bold my-3">
            Why Engineering is Important
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            Engineering has been a part of human history, in one form or
            another, for thousands of years. Of course, as our knowledge and
            understanding of science and mathematics grew, so our engineering
            expertise and competence also improved.
          </p>
          <br />
          <br />
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            Today’s engineers use the most advanced technologies, alongside
            established scientific principles, to apply cutting-edge solutions
            and innovation to real world challenges. It is hard to
            over-emphasise the importance of engineering on human history, from
            designing transportation systems to powering our homes, engineering
            is all around us, right down to the device you are using to read
            this. As our scientific knowledge continues to advance, so
            engineering will find ways to take this new information and apply it
            to the world around us.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Engineering;
