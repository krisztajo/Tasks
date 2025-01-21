import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CoursesProvider from "./contexts/CoursesProvider.tsx";
import AuthorsProvider from "./contexts/AuthorsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoursesProvider>
      <AuthorsProvider>
        <App />
      </AuthorsProvider>
    </CoursesProvider>
  </StrictMode>
);
