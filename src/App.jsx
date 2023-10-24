import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header cartCount={6} />
      <Outlet />
    </div>
  );
}

export default App;
