import React from "react";

const AppleContext = React.createContext("No stock")

const AppleProvider = AppleContext.Provider

const AppleConsumer = AppleContext.Consumer

const SonyContext = React.createContext("No stock")

const SonyProvider = SonyContext.Provider

const SonyConsumer = SonyContext.Consumer

export default AppleContext

export {AppleProvider,AppleConsumer,SonyContext,SonyProvider,SonyConsumer}