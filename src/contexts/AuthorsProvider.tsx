import React, { createContext, useContext, useState } from "react";
import { AuthorType, mockedAuthorsList } from "../constants";

type AuthorsContextType = {
  authors: AuthorType[];
  addAuthor: (author: AuthorType) => void;
  removeAuthor: (id: string) => void;
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

  return (
    <AuthorsContext.Provider value={{ authors, addAuthor, removeAuthor }}>
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
