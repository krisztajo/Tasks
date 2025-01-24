import { useNavigate, useParams } from "react-router-dom";
import Button from "../../common/Button";
import { useAuthors } from "../../contexts/AuthorsProvider";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";

import styles from "./CourseInfo.module.css";
import { useCourses } from "../../contexts/CoursesProvider";
import { useEffect } from "react";

const CourseInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });
  const params = useParams(); // itt a useParams a react-router-dom-ból jön, params.id-t használjuk
  const course = useCourses().courses.find(
    (course) => course.id === params.courseId
  );

  const authorContext = useAuthors().authors;
  if (!course) return null;
  const authorsList: string = authorContext
    .filter((author) => course.authors.includes(author.id))
    .map((author) => author.name)
    .join(", ");
  return (
    <div className={styles.container}>
      <div className={styles.courseCard}>
        <div className={styles.courseInfo}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <div className={styles.courseDetails}>
          <p className={styles.authors}>
            <strong>Authors: </strong>
            {authorsList}
          </p>
          <p>
            <strong>Duration: </strong>
            {getCourseDuration(course.duration)}
          </p>
          <p>
            <strong>Created: </strong>
            {formatCreationDate(course.creationDate)}
          </p>
        </div>
      </div>
      <div className={styles.action}>
        <Button type="button" onClick={() => navigate("/")}>
          BACK
        </Button>
      </div>
    </div>
  );
};

export default CourseInfo;
