import React  from "react";
import "./App.css";
import CoursesList from "./components/CoursesList"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className=" w-full flex items-center justify-around flex-col " >
      <Header />
      <CoursesList />
      <Footer />
    </div>
  )
}

export default App;

