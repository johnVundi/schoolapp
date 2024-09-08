import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <div className="bg-white">
      <Nav />
      <h1 className="text-3xl mt-2 underline">About Our School</h1>
      <div className="px-20 text-left">
        <div className="space-y-3">
          <h2 className="text-bold text-xl underline">Mission statement</h2>
          <p className="mt-2">
            Our school is dedicated to providing a high-quality education that
            empowers students to become critical thinkers, problem solvers, and
            engaged citizens. We are committed to fostering a diverse and
            inclusive community that values respect, collaboration, and lifelong
            learning.
          </p>

          <h2 className="text-bold text-xl underline">History</h2>
          <p className="mt-2">
            Our school was founded in 1923 by a group of local educators who saw
            a need for a comprehensive and accessible educational institution.
            Over the years, our school has grown and evolved, but our commitment
            to providing an exceptional education to our students has remained
            constant.
          </p>

          <h2 className="text-bold text-xl underline">
            Programs and offerings
          </h2>
          <p className="mt-2">
            Our school offers a wide range of academic programs. In addition to
            our academic offerings, we also provide a variety of extracurricular
            activities, as well as clubs and sports teams.
          </p>

          <h2 className="text-bold text-xl underline">Faculty and staff</h2>
          <p className="mt-2">
            Our school is staffed by a team of experienced and dedicated
            educators who are committed to helping our students succeed. Our
            faculty members hold advanced degrees in their fields and have
            extensive experience teaching at the college level. Our
            administrative staff provide excellent support and guidance to
            students throughout their academic journey.
          </p>

          <h2 className="text-bold text-xl underline">Student life</h2>
          <p className="mt-2">
            At our school, we believe that a rich and fulfilling student life
            experience is essential to a well-rounded education. We offer a
            variety of housing options, including on-campus dormitories and
            off-campus apartments. Our dining services provide healthy and
            delicious meals, and our student organizations and cultural events
            offer opportunities for social and cultural engagement.
          </p>

          <h2 className="text-bold text-xl underline">Community engagement</h2>
          <p className="mt-2">
            Our school is committed to being an active and positive member of
            the community. We have established partnerships with local
            businesses and organizations to provide service-learning
            opportunities for our students, and we encourage our students to
            participate in volunteer programs that benefit the community.
          </p>
        </div>
        <div className="flex flex-row justify-around mt-4 border border- 2 border-slate-400 py-2 rounded-lg bg-slate-300">
          <div className="max-w-sm p-6 bg-slate-300 border border-slate-600 rounded-lg shadow">
            <svg
              className="w-10 h-10 mb-2 text-green-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Need a help with school fee?
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Get a course in mind, research about it and make sure it suits
              you. Contact the administrator at this email below.
            </p>
            <p className="underline">emmanuelmutisya@gmail.com</p>
          </div>

          <div className="max-w-sm p-6 bg-slate-300 border border-slate-600 rounded-lg shadow">
            <svg
              className="w-10 h-10 mb-2 text-green-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Access to premium activities.
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Get an activity, research about it and make sure it suits you.
              Contact the administrator at this email below.
            </p>
            <p className="underline">viviandande@gmail.com</p>
          </div>

          <div className="max-w-sm p-6 bg-slate-300 border border-slate-600 rounded-lg shadow">
            <svg
              className="w-10 h-10 mb-2 text-green-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Access recap classes.
            </h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Get info on past classes, this is not to encourage to to miss
              classes. Contact the administrator at this email below.
            </p>
            <p className="underline">josephwamitie@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
