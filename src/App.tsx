import { useState } from "react";
import "./App.css";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { CourseType } from "./constants";

export type ViewType =
  | "courses"
  | "create"
  | "details"
  | "login"
  | "registration";

function App() {
  const [view, setView] = useState<ViewType>("courses");
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);
  const viewSelector = (view: ViewType) => {
    switch (view) {
      case "courses":
        return (
          <Courses setView={setView} setSelectedCourse={setSelectedCourse} />
        );
      case "create":
        return <CreateCourse setView={setView} />;
      case "details":
        return <CourseInfo setView={setView} course={selectedCourse} />;
      case "login":
        return <Login setView={setView} />;
      case "registration":
        return <Registration setView={setView} />;
    }
  };

  return (
    <>
      <Header setView={setView} />
      {viewSelector(view)}
    </>
  );
}

export default App;
