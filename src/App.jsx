import React  from "react";
import "./App.css";
import CoursesList from "./components/CoursesList"

function App() {
  return (
    <div className=" w-full flex items-center justify-around flex-col " >
      <div className="w-[800px] bg-red-400/ flex items-center justify-center mt-14 " >
        <h1 className=" text-4xl font-medium mx-auto  font-lexend ">My Courses (3)</h1>
      </div>
      <div className=" w-[800px] bg-red-400/ mt-16  " >
        <ul className=" w-full flex items-center justify-between " >
          <li className=" font-medium text-base px-2 py-1 bg-stone-200 rounded-md cursor-pointer " >All</li>
          <li className=" font-medium text-base px-2 py-1 bg-stone-200 rounded-md cursor-pointer " >Active</li>
          <li className=" font-medium text-base px-2 py-1 bg-stone-200 rounded-md cursor-pointer " >Completed</li>
          <li className=" font-medium text-base px-2 py-1 bg-stone-200 rounded-md cursor-pointer " >Upcoming</li>
        </ul>
      </div>
      <CoursesList />
    </div>
  )
}

export default App;

