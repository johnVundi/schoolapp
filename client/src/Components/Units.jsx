import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

function Units() {
  let { id } = useParams();
  const [course, setCourse] = useState(null);
  useEffect(() => {
    fetch(`/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const unitsDiv = course.units.map((unit) => {
    return (
      <div
        key={unit.name}
        className="rounded bg-white overflow-hidden shadow-lg"
      >
        <img
          className="w-full"
          src={`https://source.unsplash.com/random/800x600?job&${unit.name}`}
          alt={unit.name}
        />
        <div className="px-6 py-4">
          <div className="underline font-bold text-left text-xl mb-2">
            {`Unit name: ${unit.name}`}{" "}
          </div>
          <div className="px-2 py-1 text-left border bottom-1 border-gray-800 rounded-lg">
            <p className="text-gray-700 text-base">{unit.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Nav />
      <h1 className="mt-3 underline text-3xl">{`${course.name} units`}</h1>
      <div className="mt-4 px-10 text-left">
        <p className="mb-3">
          Welcome to our Units page! Here you'll find all the information you
          need to navigate through our curriculum, which has been carefully
          designed to help you build a solid foundation of knowledge and skills.
        </p>
        <p className="mb-3">
          Each unit is crafted to provide a comprehensive understanding of a
          particular subject, with a focus on real-world applications and
          practical learning outcomes. Our units are structured to be engaging
          and interactive, allowing you to explore complex concepts in a way
          that makes learning fun and meaningful.
        </p>
        <p>
          Whether you're interested in science, math, language, or the arts, our
          units offer a wide range of topics that cater to a variety of
          interests and learning styles. We believe that our units will inspire
          you to develop a love of learning and equip you with the tools you
          need to succeed academically and in life. So, take a look around and
          see what we have to offer.
        </p>
        <h2 className="text-center text-xl text-bold mt-5">
          Below are the units for this course.
        </h2>
      </div>
      <button className="bg-green-400 px-4 py-1 rounded-sm"><a href="#edit-form">Edit Form</a></button>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {unitsDiv}
      </div>
      <div id="edit-form">
        <form className="mx-auto my-10 max-w-lg">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-600 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Units;
