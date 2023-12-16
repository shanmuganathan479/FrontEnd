import React from "react";

const UserContext = React.createContext();
export const UserContext2 = React.createContext();

const UserProvider= UserContext.Provider
const UserConsumer= UserContext.Consumer

const UserProvider2= UserContext2.Provider
const UserConsumer2= UserContext2.Consumer

export  default UserContext
export {UserProvider,UserConsumer,UserProvider2,UserConsumer2}