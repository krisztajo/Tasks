import React from "react";

import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";
import EmptyCourseList from "../EmptyCourseList/EmtyCourseList";

import styles from "./Courses.module.css";

import { useCourses } from "../../contexts/CoursesProvider";

import { ViewType } from "../../App";
import { CourseType } from "../../constants";

type CoursesProps = {
  setView: (view: ViewType) => void;
  setSelectedCourse: (course: CourseType) => void;
};

const Courses: React.FC<CoursesProps> = ({ setView, setSelectedCourse }) => {
  const [filterValue, setFilterValue] = React.useState<string>("");
  const courses = useCourses().courses.filter((course) =>
    course.title.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <div className={styles.courses}>
      <div className={styles.header}>
        <SearchBar filterValue={filterValue} setFilterValue={setFilterValue} />
        <Button onClick={() => setView("create")}>Add new</Button>
      </div>
      {courses.length === 0 && <EmptyCourseList />}
      <ul className={styles.coursesList}>
        {courses.map((course: CourseType) => (
          <CourseCard
            course={course}
            key={course.id}
            setSelectedCourse={setSelectedCourse}
            setView={setView}
          />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
