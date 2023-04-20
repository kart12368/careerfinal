import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../auth/helper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    // get user info from local storage
    const user = getCurrentUser().user;
    setUser(user);
    console.log(user);
  }, []);
  return (
    <>
      <Navbar />
      <section className="h-[90vh] px-4 py-6">
        <div>
          <h1 className="text-3xl text-center">Welcome to your Dashboard!</h1>
          <div className="text-center my-5">
            <a
              href="#_"
              class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">
                <Link to="/quiz">Take Assessment</Link>
              </span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
