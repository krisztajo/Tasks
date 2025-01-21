import React from "react";

import { CourseType } from "../../../../constants";

import styles from "./CourseCard.module.css";

import Button from "../../../../common/Button";

import trash from "../../../../assets/trash.svg";
import edit from "../../../../assets/edit.svg";

import getCourseDuration from "../../../../helpers/getCourseDuration";
import formatCreationDate from "../../../../helpers/formatCreationDate";

import { ViewType } from "../../../../App";
import { useAuthors } from "../../../../contexts/AuthorsProvider";

type CourseCardProps = {
  course: CourseType;
  setSelectedCourse: (course: CourseType) => void;
  setView: (view: ViewType) => void;
};

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  setSelectedCourse,
  setView,
}) => {
  const authorsList: string = useAuthors()
    .authors.filter((author) => course.authors.includes(author.id))
    .map((author) => author.name)
    .join(", ");

  return (
    <li key={course.title} className={styles.courseCard}>
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
        <div className={styles.courseActions}>
          <Button
            onClick={() => {
              setSelectedCourse(course);
              setView("details");
            }}
          >
            SHOW COURSE
          </Button>
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
