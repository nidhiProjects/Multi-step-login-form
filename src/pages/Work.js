import React, { useState } from "react";
import image from "../assets/img2.png";
import image1 from "../assets/img.png";
import image2 from "../assets/img3.png";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import {useNavigate} from 'react-router-dom'

const cards = [
  {
    id: 1,
    text: "I'm a designer looking to share my work",
    img: image,
    description:
      "With over 7 millions of shots from a vast community of designer. Dribble is leading source for design inspiration",
  },
  {
    id: 2,
    text: "I'm looking for design inspiration",
    img: image1,
    description:
      "With over 7 millions of shots from a vast community of designer. Dribble is leading source for design inspiration",
  },
  {
    id: 3,
    text: " I'm looking to hire a web designer",
    img: image2,
    description:
      "With over 7 millions of shots from a vast community of designer. Dribble is leading source for design inspiration",
  },
];
const Work = () => {
  const [activeBox, setActiveBox] = useState(null);
  const redirect=useNavigate();
  return (
    <div className="container  mx-auto  w-2/3 mt-16 ">
      <h1 className="text-center text-3xl font-bold mb-3">
        What brings you to Dribble?
      </h1>
      <p className="text-center mb-11 text-slate-500">
        Select the options the best describe you.Don't worry,you can explore
        other options later.
      </p>
      <div className="flex gap-5 mb-5">
        {cards.map((item) => {
          console.log(item.id,activeBox)
          return(
            <div
            key={item.id}
            onClick={()=>setActiveBox(item.id)}
            className={`max-w-sm h-auto bg-white rounded-lg  p-2 border-2 transition-all duration-500 ${
              activeBox===item.id ? "border-fuchsia-700 h-[380px]":"h-auto"
            }  `}
          >
            <img
              src={item.img}
              alt={item.text}
              className={`h-64 ml-auto mr-auto transition-all duration-500 ${
                activeBox===item.id ? "-translate-y-20" : "translate-y-0"
              }`}
            />

            <h5
              className={` text-center font-bold ${
                activeBox===item.id ? "-translate-y-20" : "translate-y-0"
              } `}
            >
              {item.text}
            </h5>
            {activeBox===item.id && (
              <p
                className={`text-gray-400 ${
                  activeBox===item.id ? "-translate-y-20" : "translate-y-0"
              } `}
              >
                {item.description}
              </p>
            )}
            <p className={`flex justify-center items-center ${
                activeBox===item.id ? "-translate-y-16" : "translate-y-0"
              }`}>
              {activeBox!==item.id ? (
                <RiCheckboxBlankCircleLine className="text-fuchsia-700" size={25}/>
              ) : (
                <RiCheckboxCircleFill className="text-fuchsia-700" size={25} />
              )}
            </p>
          </div>
          )
        })}
      </div>
      <button onClick={()=>redirect('/email')} disabled={!activeBox } className="disabled:pointer-events-none block w-40 px-2 py-2 text-white bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700  focus:outline-none focus:shadow-outline  text-center">
        Next
      </button>
    </div>
  );
};

export default Work;
