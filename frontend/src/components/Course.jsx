import React from "react";
import Card from "./Card";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {

  return (
    <>
      <div className="max-w-screen-2xl container bg-base-100 mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text:4xl">
            We'r delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>

          <p className="mt-12"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deleniti amet voluptate dolore architecto deserunt explicabo placeat
            odio, dolores nihil ullam libero iste asperiores quisquam eius
            minima. Porro, eaque repellat.
          </p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-4">Back</button>

          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item)=>(
              <Card key={item.id} item={item}/>
            ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
