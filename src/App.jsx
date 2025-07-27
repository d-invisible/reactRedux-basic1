import React from "react";
import Outside from "./myComp/counter/Outside";
import { Provider } from "react-redux";
import { store } from "./myComp/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Outside />
    </Provider>
  );
};

export default App;
