import * as React from "react";
import "./App.css";
import { Button } from "antd";

export const App = () => {
  return (
    <div className="App">
      <Button type="primary" onClick={() => console.log("test")}>
        test
      </Button>
    </div>
  );
};
