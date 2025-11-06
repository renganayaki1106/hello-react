import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const existingUser = [
    {
      email: "priya@gmail.com",
      password: "priya123",
    },
    {
      email: "ben@gmail.com",
      password: "ben123",
    },
  ];

  const login = (email, password) => {
    const foundUser = existingUser.find(
      (user) => user.email === email && user.password === password
    );

    console.log(email, password, foundUser);

    if (foundUser) {
      alert("loggedin Successfully");
    } else {
      alert("Please signup");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
