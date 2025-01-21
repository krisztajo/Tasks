import { ViewType } from "../../App";
import Button from "../../common/Button";
import { CourseType } from "../../constants";
import formatCreationDate from "../../helpers/formatCreationDate";
import getCourseDuration from "../../helpers/getCourseDuration";

import styles from "./CourseInfo.module.css";

type CourseInfoPropsType = {
  setView: (view: ViewType) => void;
  course: CourseType | null;
};

const CourseInfo: React.FC<CourseInfoPropsType> = ({ setView, course }) => {
  if (!course) return null;
  return (
    <div className={styles.container}>
      <div className={styles.courseCard}>
        <div className={styles.courseInfo}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
        <div className={styles.courseDetails}>
          {/* <p className={styles.authors}>
          <strong>Authors: </strong>
          {authorsList}
        </p> */}
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
        <Button type="button" onClick={() => setView("courses")}>
          BACK
        </Button>
      </div>
    </div>
  );
};

export default CourseInfo;
