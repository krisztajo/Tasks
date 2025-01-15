import React from "react";

import mockedCoursesList, { CourseType } from "../../constants";

import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";

import styles from "./Courses.module.css";
import EmptyCourseList from "../EmptyCourseList/EmtyCourseList";

const Courses: React.FC = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.header}>
        <SearchBar />
        <Button>Add new</Button>
      </div>
      {mockedCoursesList.length === 0 && <EmptyCourseList />}
      <ul className={styles.coursesList}>
        {mockedCoursesList.map((course: CourseType) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
