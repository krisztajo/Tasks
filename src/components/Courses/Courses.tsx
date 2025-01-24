import React, { useEffect } from "react";

import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button";
import EmptyCourseList from "../EmptyCourseList/EmtyCourseList";

import styles from "./Courses.module.css";

import { useCourses } from "../../contexts/CoursesProvider";

import { CourseType } from "../../constants";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });
  const [filterValue, setFilterValue] = React.useState<string>("");
  const courses = useCourses().courses.filter((course) =>
    course.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={styles.courses}>
      <div className={styles.header}>
        <SearchBar filterValue={filterValue} setFilterValue={setFilterValue} />
        <Button onClick={() => navigate("/add")}>Add new</Button>
      </div>
      {courses.length === 0 && <EmptyCourseList />}
      <ul className={styles.coursesList}>
        {courses.map((course: CourseType) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </ul>
    </div>
  );
};

export default Courses;
