import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { configureStore, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor} loading={null}>
        <MainPage />
      </PersistGate>
    </Provider>
  );
}

export default App;
