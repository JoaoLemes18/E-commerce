import React from "react";
import { StatusBar } from "expo-status-bar";
import { TabRoutes } from "./src/routes/";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <TabRoutes />
    </>
  );
}
