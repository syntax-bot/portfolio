import "./App.css";
import Profile from "./Containers/Home/Profile";
import Navbar from "./Containers/Header/Navbar";
import Loading,{LoadingFunc} from "./Containers/loader/Loading";
import Resume from "./Containers/Resume/Resume";

export default function App() {
  return (
    <>
      <Loading/>
      <Navbar />
      <Profile/>
      <Resume/>
    </>
  );
}

LoadingFunc();