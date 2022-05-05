import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/CreateNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
const App = () => {
  const [search, setSearch] = useState();
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />

      <main>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/createnote" exact component={CreateNote} />
        <Route path="/note/:id" exact component={SingleNote} />
        <Route
          path="/mynotes"
          exact
          component={() => <MyNotes search={search} />}
        />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
