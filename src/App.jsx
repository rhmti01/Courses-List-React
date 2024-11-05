import "./App.css";
import CoursesList from "./components/CoursesList"
const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/images/img1.jpg",
    rate: "4.5",
    tags: ["langauges"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/images/img2.jpg",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "/images/img3.jpg",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Active",
  },
];

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

