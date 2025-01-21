import { useState } from "react";

import Textarea from "../../common/Textarea";
import Button from "../../common/Button";
import Input from "../../common/Input";
import AuthorItem from "../AuthorItem/AuthorItem.js";

import styles from "./CreateCourse.module.css";

import randomIdGenerator from "../../helpers/randomIdGenerator";

import { ViewType } from "../../App.js";
import { useAuthors } from "../../contexts/AuthorsProvider.js";
import { AuthorType } from "../../constants.js";
// import getCourseDuration from "../../helpers/getCourseDuration.js";

type CreateCourseProps = {
  setView: (view: ViewType) => void;
};

const CreateCourse: React.FC<CreateCourseProps> = ({ setView }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const [titleError, setTitleError] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [durationError, setDurationError] = useState<string>("");
  const [authorError, setAuthorError] = useState<string>("");

  const authorContext = useAuthors();
  const [availableAuthors, setAvailableAuthors] = useState(
    authorContext.authors
  );
  const [courseAuthors, setCourseAuthors] = useState([] as AuthorType[]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const durationRegex = /^[0-9]{2,}:[0-5]\d$/;
    if (!durationRegex.test(duration)) {
      setDurationError("Duration must be in format hh:mm");
      valid = false;
    } else {
      setDurationError("");
    }

    if (valid) {
      const authors = courseAuthors.map((author) => author.id);
      //duration to do
      //authorContext és courseContext add Course and authors
      console.log(title, description, duration, authors);
      setView("courses");
    }
  };

  //create new author
  const handleCreateAuthor = () => {
    const authorRegex = /^.{2,}$/;
    if (!authorRegex.test(author)) {
      setAuthorError("Author name must be at least 2 characters long.");
    } else {
      setAuthorError("");
      setAuthor("");
      availableAuthors.push({ id: randomIdGenerator(), name: author });
      console.log(courseAuthors);
    }
  };

  //Add author to course authors
  const handleAddAuthorToCourse = (id: string) => {
    const author = availableAuthors.find((author) => author.id === id);
    if (author) {
      setCourseAuthors([...courseAuthors, author]);
      setAvailableAuthors(
        availableAuthors.filter((author) => author.id !== id)
      );
    }
  };

  // delete author from course authors
  const handleDeleteAuthorFromCourse = (id: string) => {
    const author = courseAuthors.find((author) => author.id === id);
    if (author) {
      setAvailableAuthors([...availableAuthors, author]);
      setCourseAuthors(courseAuthors.filter((author) => author.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Course Edit/Create Page</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <h2 className={styles.subTitle}>Main Info</h2>
          <Input
            labelText="Title"
            placeholderText="Input text"
            onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(target.value)
            }
            value={title}
            error={!!titleError}
          />
          {titleError && <p className={styles.error}>{titleError}</p>}
          <Textarea
            labelText="Description"
            placeholderText="Input text"
            onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(target.value)
            }
            error={!!descriptionError}
          />
          {descriptionError && (
            <p className={styles.error}>{descriptionError}</p>
          )}
          {/* 2 columns */}
          <div className={styles.columns}>
            <div className={styles.column1}>
              <h2 className={styles.subTitle}>Duration</h2>
              <div className={styles.duration}>
                <div className={styles.inputWrapper}>
                  <Input
                    labelText="Duration"
                    placeholderText="Input text"
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setDuration(target.value)
                    }
                    value={duration}
                    error={!!durationError}
                  />
                  {durationError && (
                    <p className={styles.error}>{durationError}</p>
                  )}
                </div>

                <p>
                  <span>00:00</span> hours
                </p>
              </div>
              <h2 className={styles.subTitle}>Authors</h2>
              <div className={styles.authors}>
                <div className={styles.inputWrapper}>
                  <Input
                    labelText="Author Name"
                    placeholderText="Input text"
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setAuthor(target.value)
                    }
                    value={author}
                    error={!!authorError}
                  />
                  {authorError && <p className={styles.error}>{authorError}</p>}
                </div>
                <Button type="button" onClick={handleCreateAuthor}>
                  CREATE AUTHOR
                </Button>
              </div>
              <div className={styles.authorsList}>
                <h2 className={styles.subTitle}>Authors List</h2>
                {availableAuthors.length > 0 ? (
                  <ul>
                    {availableAuthors.map((author) => (
                      <li key={author.id}>
                        <AuthorItem
                          author={author}
                          handleAdd={() => handleAddAuthorToCourse(author.id)}
                          handleDelete={() =>
                            handleDeleteAuthorFromCourse(author.id)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Author list is empty</p>
                )}
              </div>
            </div>
            <div className={styles.column2}>
              <h2 className={styles.subTitle}>Course Authors</h2>
              <div className={styles.authorsList}>
                {courseAuthors.length > 0 ? (
                  <ul>
                    {courseAuthors.map((author) => (
                      <li key={author.id}>
                        <AuthorItem
                          author={author}
                          handleAdd={() => handleAddAuthorToCourse(author.id)}
                          handleDelete={() =>
                            handleDeleteAuthorFromCourse(author.id)
                          }
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Course author list is empty</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formActions}>
          <Button type="button" onClick={() => setView("courses")}>
            CANCEL
          </Button>
          <Button type="submit">CREATE COURSE</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
