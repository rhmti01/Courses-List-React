/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
const CourseCard = ({ course }) => (
  <div className=" w-full p-2 bg-blue-400/ flex items-center justify-between " >
    <img className=" w-72 rounded-xl " src={course.imageUrl} alt={course.title} />
    <div className=" flex items-center justify-between flex-col w-full pl-6 bg-violet-300/  gap-y-6 mb-4 " >
      <CourseCardBody title={course.title} description={course.description} rate={course.rate} />
      <CourseCardFooter tags={course.tags} start={course.start} status={course.status} />
    </div>
  </div>
)

export default CourseCard;


const CourseCardBody = ({ title, description, rate }) => (
  <div className=" w-full  flex items-center justify-between  " >
    <div>
      <h1 className=" text-[27px] font-medium my-3 " >{title}</h1>
      <p className=" font-light text-slate-500 "  >{description}</p>
    </div>
    <div className=" flex gap-x-2 text-lg "  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
      <p>{rate}</p>
    </div>
  </div>
)


const CourseCardFooter = ({ tags, start, status }) => {
  const startDate = new Date(start).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
  const courseStatus
    = status === "Active" ? "font-medium text-sm px-2 py-1 rounded-md cursor-pointer bg-green-200 text-green-700"
      : status === "Upcoming" ? "font-medium text-sm px-2 py-1 rounded-md cursor-pointer bg-yellow-200 text-yellow-700" :
        "font-medium text-sm px-2 py-1 rounded-md cursor-pointer bg-blue-200 text-blue-700";
  return (
    <div className=" w-full  flex items-center justify-between  " >
      <div>
        <div className="flex items-center"  >
          {tags.map((tag) => <h3 className="  text-sm text-slate-700 px-2 py-1 mr-1 bg-slate-950/20 rounded-md font-medium my-3 " >{tag}</h3>)}
        </div>
        <p className=" font-light text-slate-500 ">{startDate}</p>
      </div>
      <p className={courseStatus} >{status}</p>
    </div>
  )
}


