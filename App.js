import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/home";

const AppNavigator = createStackNavigator(
  {
    Home: Home
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default function App(){
    return <AppContainer />;
  }