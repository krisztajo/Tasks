import React from "react";
import { CourseType } from "../../../../constants";
import styles from "./CourseCard.module.css";
import Button from "../../../../common/Button";
import trash from "../../../../assets/trash.svg";
import edit from "../../../../assets/edit.svg";

type CourseInfoProps = {
  course: CourseType;
};

const CourseCard: React.FC<CourseInfoProps> = ({ course }) => {
  return (
    <li key={course.title} className={styles.courseCard}>
      <div className={styles.courseInfo}>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
      <div className={styles.courseDetails}>
        <p>
          <strong>Authors: </strong>
          {course.authors}
        </p>
        <p>
          <strong>Duration: </strong>
          {course.duration}
        </p>
        <p>
          <strong>Created: </strong>
          {course.createdDate}
        </p>
        <div className={styles.courseActions}>
          <Button>SHOW COURSE</Button>
          <Button>
            <img src={trash} height="25px" />
          </Button>
          <Button>
            <img src={edit} height="25px" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CourseCard;
