import { createContext, useEffect, useState } from "react";
import "./App.css";
import { currUser } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const UserContext = createContext([]);
export const ExerciseLogContext = createContext(null);
export const dataContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const [exerciseLog, setExerciseLog] = useState([]);
  const [data, setData] = useState(null);

  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);



  return (
    <div className="App">
      <NavBar />

      <UserContext.Provider value={{ user, setUser }}>
        <ExerciseLogContext.Provider value={[exerciseLog, setExerciseLog]}>
          <dataContext.Provider value={[data, setData]}>
            <Outlet />
          </dataContext.Provider>
        </ExerciseLogContext.Provider>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;