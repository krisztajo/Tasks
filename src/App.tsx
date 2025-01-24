import "./App.css";

import CourseInfo from "./components/CourseInfo/CourseInfo";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import CreateCourse from "./components/CreateCourse/CreateCourse";

import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState<string>("");

  return (
    <>
      <Header userName={userName} setUserName={setUserName} />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/add" element={<CreateCourse />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
