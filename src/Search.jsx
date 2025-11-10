import React from "react";

const Search=()=>{
    return <div className="flex flex-col items-center justify-center">
        <div className="mb-8 text-7xl text-orange-400">Foogle</div>
        <div className="bg-orange-200 w-[520px] py-7 px-6 rounded-full border border-orange-300 flex">
            <i className="mr-4 text-2xl text-orange-400 fa-solid fa-magnifying-glass"></i>
            <input className="flex-1 text-lg text-orange-700 bg-inherit"/>
        </div>
        <div className="flex mt-8">
            <button className="px-6 py-2 m-2 rounded-md bg-violet-200 text-violet-500">Foogle Search</button>
            <button className="px-6 py-2 m-2 rounded-md bg-violet-200 text-violet-500">Image Search</button>
        </div>
        </div>
    
};

export default Search;