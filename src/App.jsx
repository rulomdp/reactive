import { Provider } from "react-redux";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import GentlemanStore from "./redux/store";
import Gentleman from "./pages/Gentleman/Gentleman";
import ComponentRedux1 from "./components/redux/ComponentRedux1";
import ComponentRedux2 from "./pages/Gentleman/components/ComponentRedux2";

function App() {
  return (
    <Provider store={GentlemanStore}>
      <div className="App">
        <h2>RxJS</h2>
        <Component1 />
        <Component2 />
        <ComponentRedux2 />
        <h2>Context</h2>
        <Gentleman />
        <h2>Redux</h2>
        <ComponentRedux1 />
      </div>
    </Provider>
  );
}

export default App;
