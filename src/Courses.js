import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);

    //aynı eleman gelmeesin diye oluşturulan koşul 
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndButton">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata!
        </button>
      </div>
      <div className="cardDiv">
        <button className="prevNext" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNext" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
          //course={course}
        })} */}
      </div>
    </div>
  );
}

export default Courses;
