import React, { createContext, useContext, useState } from "react";
import mockedCoursesList, { CourseType } from "../constants";

type CoursesContextType = {
  courses: CourseType[];
  addCourse: (course: CourseType) => void;
  removeCourse: (id: string) => void;
};

type CoursesProviderProps = {
  children: React.ReactNode;
};

const CoursesContext = createContext<CoursesContextType | undefined>(undefined);

const CoursesProvider: React.FC<CoursesProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<CourseType[]>(mockedCoursesList);

  const addCourse = (course: CourseType) => {
    setCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeCourse = (id: string) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== id)
    );
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse, removeCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;

export const useCourses = (): CoursesContextType => {
  const context = useContext(CoursesContext);
  if (!context) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};