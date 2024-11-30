import React from 'react';

const coursesStatus = ["All","Active","Completed","Upcoming"]

const Header = () => {
    return (
        <div>
            <div className="w-[800px] bg-red-400/ flex items-center justify-center mt-14 " >
                <h1 className=" text-4xl font-medium mx-auto  font-lexend ">My Courses (3)</h1>
            </div>
            <div className=" w-[800px] bg-red-400/ mt-16  " >
                <ul className=" w-full flex items-center justify-between " >
                    {coursesStatus.map((status)=>(<li key={status} className=" font-medium text-base px-2 py-1 bg-stone-200 rounded-md cursor-pointer " >{status}</li>))}
                </ul>
            </div>
        </div>
    );
};

export default Header;