import React, { createContext, useContext, useState } from "react";
import { AuthorType, mockedAuthorsList } from "../constants";

export type AuthorsContextType = {
  authors: AuthorType[];
  addAuthor: (author: AuthorType) => void;
  removeAuthor: (id: string) => void;
  unionAuthors: (list1: AuthorType[]) => void;
};

type AuthorsProviderProps = {
  children: React.ReactNode;
};

const AuthorsContext = createContext<AuthorsContextType | undefined>(undefined);

const AuthorsProvider: React.FC<AuthorsProviderProps> = ({ children }) => {
  const [authors, setAuthors] = useState<AuthorType[]>(mockedAuthorsList);

  const addAuthor = (author: AuthorType) => {
    setAuthors((prevAuthors) => [...prevAuthors, author]);
  };

  const removeAuthor = (id: string) => {
    setAuthors((prevAuthors) =>
      prevAuthors.filter((author) => author.id !== id)
    );
  };

  // Union of authors - O(n) complexity with Map
  const unionAuthors = (courseAuthors: AuthorType[]) => {
    setAuthors((prevAuthors) => [
      ...new Map(
        [...prevAuthors, ...courseAuthors].map((author) => [author.id, author])
      ).values(),
    ]);
  };

  return (
    <AuthorsContext.Provider
      value={{ authors, addAuthor, removeAuthor, unionAuthors }}
    >
      {children}
    </AuthorsContext.Provider>
  );
};

export default AuthorsProvider;

export const useAuthors = (): AuthorsContextType => {
  const context = useContext(AuthorsContext);
  if (!context) {
    throw new Error("useAuthors must be used within a AuthorProvider");
  }
  return context;
};
