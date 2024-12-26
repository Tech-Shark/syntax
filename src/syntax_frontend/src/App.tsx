import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Home component should be here</>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
