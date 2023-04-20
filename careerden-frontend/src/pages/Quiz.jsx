import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { FormControl, FormLabel, Slider, Typography } from '@mui/material';
import Question from '../components/Question';
import Result from '../components/Result';

const Quiz = () => {
  const initialState = {
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0,
    question11: 0,
    question12: 0,
    question13: 0,
    question14: 0,
    question15: 0,
    question16: 0,
    question17: 0,
    question18: 0,
    question19: 0,
    question20: 0,
    question21: 0,
    question22: 0,
    question23: 0,
    question24: 0,
    question25: 0,
    question26: 0,
    question27: 0,
    question28: 0,
    question29: 0,
    question30: 0,
    question31: 0,
    question32: 0,
    question33: 0,
    question34: 0,
    question35: 0,
  };

  const [answers, setAnswers] = useState(initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [result, setResult] = useState({});


  const handleForm = (e) => {
    e.preventDefault();

    console.log(answers);
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answers })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      setResult(data);
      setFormSubmitted(true);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      }
      );
  };
  const handleChange = (question) => (event, newValue) => {
    setAnswers({ ...answers, [question]: newValue });
  };

  if (formSubmitted) {
    return <Result  occupation={result.result}/>;
  }

  return (
    <>
      <Navbar />
      <section className="quiz"></section>

      <div className="px-[10rem] my-5">
        <p className="text-lg">
          <span className="font-bold">NOTE:</span> According to below
          description, rate your level of skill on a scale from{' '}
          <span className="font-bold">0</span> to{' '}
          <span className="font-bold">100</span>.
        </p>
        <p className="text-lg">
          <span className="font-bold">0</span> being absolutely{' '}
          <span className="font-bold">
            No Knowledge and Capability to acquire that skill
          </span>{' '}
          and <span className="font-bold">100</span> being{' '}
          <span className="font-bold">Complete Proficieny in that skill.</span>
        </p>
      </div>

      <div>
        <form>
          <Question
            info="Understanding written sentences and paragraphs in work-related documents."
            value={answers.question1}
            category="1. Reading Comprehension"
            onChange={handleChange('question1')}
          />
          <Question
            info="Giving full attention to what other people are saying, taking time to understand the points being made, asking questions as appropriate, and not interrupting at inappropriate times."
            value={answers.question2}
            category="2. Active Listening"
            onChange={handleChange('question2')}
          />
          <Question
            info="Communicating effectively in writing as appropriate for the needs of the audience."
            value={answers.question3}
            category="3. Writing"
            onChange={handleChange('question3')}
          />
          <Question
            info="Talking to others to convey information effectively."
            value={answers.question4}
            category="4. Speaking"
            onChange={handleChange('question4')}
          />
          <Question
            info="Using mathematics to solve problems."
            value={answers.question5}
            category="5. Mathematics"
            onChange={handleChange('question5')}
          />
          <Question
            info="Using scientific rules and methods to solve problems."
            value={answers.question6}
            category="6. Science"
            onChange={handleChange('question6')}
          />
          <Question
            info="Using logic and reasoning to identify the strengths and weaknesses of alternative solutions, conclusions, or approaches to problems."
            value={answers.question7}
            category="7. Critical Thinking"
            onChange={handleChange('question7')}
          />
          <Question
            info="Understanding the implications of new information for both current and future problem solving and decision-making."
            value={answers.question8}
            category="8. Active Learning"
            onChange={handleChange('question8')}
          />
          <Question
            info="Selecting and using training/instructional methods and procedures appropriate for the situation when learning or teaching new things."
            value={answers.question9}
            category="9. Learning Strategies"
            onChange={handleChange('question9')}
          />
          <Question
            info="Monitoring/assessing performance of yourself, other individuals, or organizations to make improvements or take corrective action."
            value={answers.question10}
            category="10.	Monitoring"
            onChange={handleChange('question10')}
          />
          <Question
            info="Being aware of others’ reactions and understanding why they react as they do."
            value={answers.question11}
            category="11. Social Perceptiveness"
            onChange={handleChange('question11')}
          />
          <Question
            info="Adjusting actions in relation to others’ actions."
            value={answers.question12}
            category="12.	Coordination"
            onChange={handleChange('question12')}
          />
          <Question
            info="Persuading others to change their minds or behavior."
            value={answers.question13}
            category="13.	Persuasion"
            onChange={handleChange('question13')}
          />
          <Question
            info="MBringing others together and trying to reconcile differences."
            value={answers.question14}
            category="14.	Negotiation"
            onChange={handleChange('question14')}
          />
          <Question
            info="Teaching others how to do something."
            value={answers.question15}
            category="15.	Instructing"
            onChange={handleChange('question15')}
          />
          <Question
            info="Actively looking for ways to help people."
            value={answers.question16}
            category="16.	Service Orientation"
            onChange={handleChange('question16')}
          />
          <Question
            info="Identifying complex problems and reviewing related information to develop and evaluate options and implement solutions."
            value={answers.question17}
            category="17.	Complex Problem Solving"
            onChange={handleChange('question17')}
          />
          <Question
            info="Analyzing needs and product requirements to create a design."
            value={answers.question18}
            category="18.	Operations Analysis"
            onChange={handleChange('question18')}
          />
          <Question
            info="Generating or adapting equipment and technology to serve user needs."
            value={answers.question19}
            category="19. Technology Design"
            onChange={handleChange('question19')}
          />
          <Question
            info="Determining the kind of tools and equipment needed to do a job."
            value={answers.question20}
            category="20. Equipment Selection"
            onChange={handleChange('question20')}
          />
          <Question
            info="Installing equipment, machines, wiring, or programs to meet specifications."
            value={answers.question21}
            category="21.	Installation"
            onChange={handleChange('question21')}
          />
          <Question
            info="DWriting computer programs for various purposes."
            value={answers.question22}
            category="22.	Programming"
            onChange={handleChange('question22')}
          />
          <Question
            info="Conducting tests and inspections of products, services, or processes to evaluate quality or performance."
            value={answers.question23}
            category="23. Quality Control Analysis"
            onChange={handleChange('question23')}
          />
          <Question
            info="Watching gauges, dials, or other indicators to make sure a machine is working properly."
            value={answers.question24}
            category="24.	Operations Monitoring"
            onChange={handleChange('question24')}
          />
          <Question
            info="Controlling operations of equipment or systems."
            value={answers.question25}
            category="25.	Operation and Control"
            onChange={handleChange('question25')}
          />
          <Question
            info="Performing routine maintenance on equipment and determining when and what kind of maintenance is needed."
            value={answers.question26}
            category="26.	Equipment Maintenance"
            onChange={handleChange('question26')}
          />
          <Question
            info="Determining causes of operating errors and deciding what to do about it."
            value={answers.question27}
            category="27.	Troubleshooting"
            onChange={handleChange('question27')}
          />
          <Question
            info="Repairing machines or systems using the needed tools."
            value={answers.question28}
            category="28.	Repairing"
            onChange={handleChange('question28')}
          />
          <Question
            info="Determining how a system should work and how changes in conditions, operations, and the environment will affect outcomes."
            value={answers.question29}
            category="29.	Systems Analysis"
            onChange={handleChange('question29')}
          />
          <Question
            info="Identifying measures or indicators of system performance and the actions needed to improve or correct performance, relative to the goals of the system."
            value={answers.question30}
            category="30.	Systems Evaluation"
            onChange={handleChange('question30')}
          />
          <Question
            info="Considering the relative costs and benefits of potential actions to choose the most appropriate one."
            value={answers.question31}
            category="31.	Judgment and Decision Making"
            onChange={handleChange('question31')}
          />
          <Question
            info="Managing one’s own time and the time of others."
            value={answers.question32}
            category="32.	Time Management"
            onChange={handleChange('question32')}
          />
          <Question
            info="Determining how money will be spent to get the work done, and accounting for these expenditures."
            value={answers.question33}
            category="33.	Management of Financial Resources"
            onChange={handleChange('question33')}
          />
          <Question
            info="Obtaining and seeing to the appropriate use of equipment, facilities, and materials needed to do certain work."
            value={answers.question34}
            category="34.	Management of Material Resources"
            onChange={handleChange('question34')}
          />
          <Question
            info="Motivating, developing, and directing people as they work, identifying the best people for the job."
            value={answers.question35}
            category="35.	Management of Personnel Resources"
            onChange={handleChange('question35')}
          />
          <div className="text-center">
            <a
              type="submit"
              onClick={handleForm}
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 cursor-pointer mx-auto"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Submit</span>
            </a>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Quiz;
