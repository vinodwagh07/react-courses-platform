import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import React from "react";
import {toast } from "react-toastify";

function Card(props) {
  let course = props.course;
  let likedCourses= props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
      if(likedCourses.includes(course.id)){
        setLikedCourses(prevLiked => prevLiked.filter( (id) => (id!=course.id) ))
        toast.warning("Like Removed")
      }
      else{
        setLikedCourses(prevLiked => [...prevLiked,course.id])
        toast.success("Likes Succesfully")
      }
  }
  return (
    <>
      <div className="bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden">
        <div className="relative">
          <img src={course.image.url} />

          <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
            <button className="text-xl" onClick={clickHandler}>
              {
                likedCourses.includes(course.id)? <FcLike/> : <FcLikePlaceholder/>
              }
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className="text-white text-lg font-semibold leading-6">
            {props.course.title}
          </p>
          <p className="mt-2 text-white">
            {props.course.description.length > 100
              ? props.course.description.substring(0, 100) + "..."
              : props.course.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
