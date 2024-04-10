import React, { useState } from "react";
import { AiTwotoneCamera } from "react-icons/ai";
import {useNavigate} from "react-router-dom"

const Profile = () => {
  const redirect=useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState("");

  const handleClick=()=>{
    sessionStorage.setItem("image",JSON.stringify(selectedImage))
    redirect("/work");
  }

  return (
    <div className="container mx-auto  w-3/5 mt-16 ">
      <h1 className=" text-3xl font-bold mb-4">
        Welcome! Let's create your profile
      </h1>
      <p className="text-slate-500 mb-5">
        Let other get to know you better! You can do these later
      </p>
      <h1 className="font-bold mb-3">Add an avatar</h1>
      <div className="flex items-center gap-3 mb-11">
        {selectedImage ? (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
          </div>
        ) : (
          <div className="w-40 h-40 border border-slate-400 border-dashed rounded-full flex items-center justify-center">
            <AiTwotoneCamera />
          </div>
        )}
        <div>
          <input
            className="  text-sm text-gray-900  bg-gray-50 focus:outline-none "
            id="file_input"
            type="file"
            onChange={(event) => setSelectedImage(event.target.files[0])}
          />
        </div>
      </div>
      <h1 className="font-bold">Add your location</h1>
      <input className="border-0 border-b-2 outline-0 mb-5" type="text" value={location} onChange={(e)=>setLocation(e.target.value)} />
      <button disabled={!selectedImage || !location} className=" disabled:pointer-events-none block w-40 px-2 py-2  text-white bg-violet-500 rounded-lg hover:bg-violet-700  focus:outline-none focus:shadow-outline"  onClick={handleClick}>
        Next
      </button>
    </div>
  );
};

export default Profile;
