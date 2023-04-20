import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about h-[90vh] px-6 py-5 flex flex-col gap-5">
        <div className="flex flex-col gap-3 bg-purple-300 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">What Is Career Guidance?</h1>
          <p>
            The word “guidance” originated back in the 1530s, and is defined as
            the process of directing conduct. Career guidance can be defined as
            a comprehensive, developmental program designed to assist
            individuals in making and implementing informed educational and
            occupational choices. In simple words, it is a journey on which
            people develop to make mature and informed decisions. It is the act
            of guiding or showing the way; it is the act of seeking advice.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-purple-300 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Choosing The Right Career</h1>
          <p>
            For people who find it difficult to realize the right career meant
            for them; a career guide helps them sort this confusion. There are
            infinite career options available to choose from, and without an
            expert’s proper guidance, one might stick to a few that his/her
            friends or relatives ask him to pursue. An informed career guide
            makes one aware about the scope of every career option in detail,
            which widens the horizon for the student. For people who think they
            are clear on their career paths and have attained enough clarity to
            work towards a chosen career option, career guides ensure that they
            achieve their goals without any distractions.
          </p>
        </div>

        <div className="flex flex-col gap-3 bg-purple-300 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Do I Need Career Guidance?</h1>
          <p>
            More often than not, people find themselves in a state of dilemma
            before making important decisions in their lives. Generally,
            everyone seeks advice from parents and friends before deciding on
            what to wear. Being rational individuals, people always want to get
            what’s best for them. Shouldn’t the same logic be applied while
            choosing a career, or changing career paths, which is supposedly a
            big decision one makes in one’s life?
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
