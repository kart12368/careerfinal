import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import DoctorImg from '../images/showcase/doctor.jpg';
import DoctorImg1 from '../images/showcase/doctor1.jpg';

const Doctor = () => {
  return (
    <>
      <Navbar />
      <section className="doctor px-14 py-6">
        <div className="top flex flex-row gap-5 mt-10">
          <div className="left w-[40%]">
            <img src={DoctorImg} className="boxShadow" />
          </div>
          <div className="right w-[60%]">
            <div className="flex flex-col gap-3 justify-evenly h-full">
              <h1 className="sm:text-lg md:text-2xl lg:text-4xl text-base text-purple-700 font-bold">
                Who is a Doctor?
              </h1>
              <p className="sm:text-base md:text-xl lg:text-2xl text-base">
                A doctor is a professional physician who seeks out various
                methods and implements them to restore the health of patients.
                It involves providing surgical, medicinal, and therapeutic care
                to patients.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5 text-2xl">
          <p>
            A doctor career path comes with the responsibility of prescribing
            medicines and providing therapeutic and surgical care to patients.
            Individuals in the doctor's career path advise patients on dietary
            and lifestyle changes. Individuals in the doctor's career path
            provide services in hospital, healthcare, and clinical lab settings.
            Many also consider a career as doctor an honourable professional
            path.
            <br />
            <br />
          </p>
        </div>

        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            What is the role of a Doctor?
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            A medical doctor is primarily responsible for healthcare services to
            patients. He or she uses several methods to treat disorders,
            diseases, and allergies such as medication, immunotherapy, or
            avoidance of triggers. A specialized doctor with an M.Ch. (Master of
            Chirurgiae) may often be required to perform surgeries on patients.
            He or she may also treat or remove tumors of internal organs.
          </p>
        </div>

        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            Diagnosing
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            The role of doctor is to diagnose, examine, and identify disorders,
            diseases, illnesses, and injuries of patients He or she manages the
            surgical and medical conditions of adult and pediatric patients.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            Treatment
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            A doctor is responsible for prescribing adequate medicine dosage and
            therapies to patients. He or she advises patients on dietary and
            lifestyle changes for early recovery and is responsible for checking
            on patients for their progress.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            Providing Assistance
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            A doctor is responsible for providing assistance to other medical
            professionals in complex cases depending on their area of
            specialization. He or she may specialize in any of the branches such
            as neurology, endocrinology, cardiology, and other related
            specializations.
          </p>
        </div>
        <div className="mt-6">
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 my-4 font-bold">
            Performing Surgery
          </h1>
          <p className="sm:text-base md:text-xl lg:text-2xl text-base">
            The role of doctor is to perform surgeries on patients with various
            disorders, diseases, and injuries. Surgeries are performed when a
            disorder or infection can not be treated with medicines only. A
            doctor schedules operations and prescribes all the necessary
            precautions to be taken by patients.
          </p>
        </div>

        <div>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl text-base text-purple-700 font-bold my-3">
            Types of Doctor
          </h1>

          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              1. Optometrist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              An optometrist is a physician who specialises in the treatment of
              eyes. He or she is responsible for diagnosing eyes and detecting
              problems that affect vision. It may include signs of injury,
              ocular diseases, abnormality and other problems with general
              health. An optometrist prescribes corrective lenses and provides
              medicinal and therapeutic treatment.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              2. ENT Specialist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              An ENT specialist is a physician who specialises in ear, nose,
              throat, sinus and neck. He or she is responsible for diagnosing,
              examining, identifying and treating disorders, diseases and
              injuries that affect the fundamental functions of life. It
              includes hearing and balance, swallowing and speech, breathing and
              sleep. An ENT specialist provides surgical, medicinal and
              therapeutic treatment to patients.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              3. Dentist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A dentist is a healthcare professional who specialises in oral
              health. He or she is responsible for removing tooth decay, filling
              cavities, fixing fractured teeth and treating gums-related
              problems such as gingivitis, pyorrhea and periodontal disease. A
              dentist uses a variety of equipment to examine the mouth and
              provide surgical as well as therapeutic care. It includes x-ray
              machines, mouth mirrors, drills, forceps, brushes and scalpels.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              4. Cardiologist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A cardiologist is a physician who specialises in cardiology.
              Cardiology involves the study and treatment of diseases and
              conditions of the cardiovascular system. A cardiovascular system
              consists of the heart and blood vessels. He or she is responsible
              for treating heart rhythm disorders, coronary artery disease,
              heart attacks, heart defects, infections and other related
              disorders.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              5. Pulmonologist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A pulmonologist is a physician who specialises in the diagnosis
              and treatment of diseases, disorders and other illnesses of the
              human respiratory system. The human respiratory system consists of
              lungs and other organs that provide support for breathing. He or
              she is responsible for treating flu and pneumonia that may have
              effects on your lungs, upper airways, thoracic cavity, and chest
              wall.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              6. Pathologist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A pathologist is a medical professional who specialises in
              diagnosing fluid produced by the human body. He or she performs
              tests in the laboratory. A pathologist provides support to other
              healthcare professionals in the diagnosis of the medical condition
              of a patient. Hence, he or she plays a crucial role in providing
              accurate treatment to patients.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              6. Psychiatrist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A psychiatrist is a physician who specialises in the diagnosis,
              treatment and prevention of mental, emotional, behavioural and
              substance use disorders. He or she is responsible for treating
              mental conditions such as schizophrenia, depression, bipolar
              disorder, eating disorders and addiction.
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-bold sm:text-base md:text-xl lg:text-2xl text-base">
              7. Clinical Psychologist
            </h1>
            <p className="sm:text-base md:text-xl lg:text-2xl text-base">
              A clinical psychologist is a medical professional who specialises
              in abnormal psychology. He or she applies psychological therapies
              and procedures to provide support to clients in recovering from
              various problems. It includes depression, addiction, anxiety,
              neurological disorders, mental ill-health, challenging behaviour
              and learning disabilities.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Doctor;
