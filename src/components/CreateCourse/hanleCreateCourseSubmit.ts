import { AuthorsContextType } from "../../contexts/AuthorsProvider";
import { CoursesContextType } from "../../contexts/CoursesProvider";
import { AuthorType } from "../../constants";
import { ViewType } from "../../App";

type HandleSubmitParamsType = {
  e: React.FormEvent<HTMLFormElement>;

  title: string;
  setTitleError: React.Dispatch<React.SetStateAction<string>>;

  description: string;
  setDescriptionError: React.Dispatch<React.SetStateAction<string>>;

  duration: number;
  setDurationError: React.Dispatch<React.SetStateAction<string>>;

  courseAuthors: AuthorType[];

  //Contexts
  authorContext: AuthorsContextType;
  courses: CoursesContextType;

  setView: (view: ViewType) => void;

  randomIdGenerator: () => string;
};

export function handleCreateCourseSubmit(params: HandleSubmitParamsType) {
  const {
    e,
    title,
    setTitleError,
    description,
    setDescriptionError,
    duration,
    setDurationError,
    courseAuthors,
    authorContext,
    courses,
    setView,
    randomIdGenerator,
  } = params;

  e.preventDefault();

  // Validation
  let valid = true;

  const titleRegex = /^.{2,}$/;
  if (!titleRegex.test(title)) {
    setTitleError("Title must be at least 2 characters long.");
    valid = false;
  } else {
    setTitleError("");
  }

  const descriptionRegex = /^.{2,}$/;
  if (!descriptionRegex.test(description)) {
    setDescriptionError("Description must be at least 2 characters long.");
    valid = false;
  } else {
    setDescriptionError("");
  }

  if (duration <= 0) {
    setDurationError("Duration must be a positive number.");
    valid = false;
  } else {
    setDurationError("");
  }

  if (!valid) return;

  // if valid -> create the new course
  const id = randomIdGenerator();
  const authors = courseAuthors.map((author) => author.id);
  const creationDate = new Date().toLocaleDateString("en-GB");

  // add new authors to the author context
  authorContext.unionAuthors(courseAuthors);

  // add new course to the courses context
  courses.pushCourse({
    id,
    title,
    description,
    authors,
    duration,
    creationDate,
  });

  // back to the courses view
  setView("courses");
}
