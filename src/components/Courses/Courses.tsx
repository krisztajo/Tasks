import React from "react";
import courses, { CourseType } from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import styles from "./Courses.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";

const Courses: React.FC = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.header}>
        <SearchBar />
        <Button>Add new</Button>
      </div>
      <ul className={styles.coursesList}>
        {courses.map((course: CourseType) => (
          <CourseCard course={course} key={course.title} />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
