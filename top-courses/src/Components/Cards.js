import React from "react";
import Card from "./Card";
import { useState } from "react";

// or write it as let courses=props.courses
const Cards = ({ courses, category }) => {
  // this is used to track the liked courses and is initilised as empty array and it will store the  id's
  const [likedCourses, setLikeCourses] = useState([]);

  // our fetched data from API is in form of key value pair but we want to store them as an array of objects so...

  // console.log(courses);
  // return a list of all courses received from the API response

  const getCourses = () => {
    if (category === "All") {
      let allCourses = []; //empty array
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
      // now it is array of objects
    } else {
      // mai sirf specific category ka data array render krunga
      // key value pair
      return courses[category];
      // we return above beacause courses is output.data which mean courses consit of 4 array
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4 justify-center">
      {
        /* maps are based on array */
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikeCourses={setLikeCourses}
            />
          );
        })
      }
    </div>
  );
};

export default Cards;
