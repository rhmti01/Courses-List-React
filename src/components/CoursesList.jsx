
function CoursesList() {
    return (
      <section className=" w-[800px] bg-red-400/ mt-16 flex items-center justify-center flex-col gap-y-4 mb-20 "  >
        <div className=" w-full p-2 bg-blue-400/ flex items-center justify-between " >
          <img className=" w-72 rounded-xl " src="/public/images/img1.jpg" alt="image-1" />
          <div className=" flex items-center justify-between flex-col w-full pl-6 bg-violet-300/  gap-y-8 mb-4 " >
            <div className=" w-full  flex items-center justify-between  " >
              <div>
                <h1 className=" text-[27px] font-medium my-3 " >English Lecture</h1>
                <p className=" font-light text-slate-500 "  >lagnguage lessons with the most popular teachers</p>
              </div>
              <div className=" flex gap-x-2 text-lg "  >
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <p>4.5</p>
              </div>
            </div>
            <div className=" w-full  flex items-center justify-between  " >
              <div>
                <h3 className="  text-sm text-slate-700 px-2 py-1 bg-slate-950/20 rounded-md font-medium my-3 " >Languages</h3>
                <p className=" font-light text-slate-500 "  >{new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}</p>
              </div>
              <p className=" font-medium text-sm text-green-700 px-2 py-1 bg-green-200 rounded-md cursor-pointer " >Completed</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  
export default CoursesList;  