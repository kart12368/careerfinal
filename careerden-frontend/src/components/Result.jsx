import Footer from './Footer';
import Navbar from './Navbar';

const Result = ({ occupation, eligibility, education, institutes, trends }) => {
  return (
    <>
      <Navbar />
      <section className="result">
        <div className="bg-purple-600 text-white px-8 py-4 my-4 text-lg mx-[6em]">
          <span className="text-4xl font-bold">Occupation Recommendation:</span>{' '}
          <span className="font-bold text-4xl underline">
            {occupation || 'Occupation Name'}
          </span>
        </div>

        <div className="bg-purple-500 text-white px-8 py-4 my-4 text-lg mx-[6em]">
          <h1 className="text-4xl mb-3 font-semibold">Eligibility Criteria:</h1>
          <p className="text-xl">
            {eligibility || 'Eligibility details can be found here'}
          </p>
        </div>

        <div className="bg-purple-500 text-white px-8 py-4 my-4 text-lg mx-[6em]">
          <h1 className="text-4xl mb-3 font-semibold">Degree/Education:</h1>
          <p className="text-xl">
            {education || 'Education details can be found here'}
          </p>
        </div>

        <div className="bg-purple-500 text-white px-8 py-4 my-4 text-lg mx-[6em]">
          <h1 className="text-4xl mb-3 font-semibold">
            Recommended Institutes:
          </h1>
          <p>
            {institutes || 'List of recommended institutes can be found here'}
          </p>
        </div>

        <div className="bg-purple-500 text-white px-8 py-4 my-4 text-lg mx-[6em]">
          <h1 className="text-4xl mb-3 font-semibold">Trends</h1>
          <p>{trends || 'Trends details can be found here'}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Result;
