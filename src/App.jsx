import "./App.css";
import Profile from "./Containers/Home/Profile";
import Navbar from "./Containers/Header/Navbar";
import Loading from "./Containers/loader/Loading";
import Resume from "./Containers/Resume/Resume";
import AboutMe from "./Containers/AboutMe/AboutMe";
import Testimonial from "./Containers/Testimonial/Testimonial";
import ContactMe from "./Containers/ContactMe/ContactMe";
export default function App() {
  return (
    <>
      <Loading/>
      <Navbar />
      <Profile/>
      <AboutMe/>
      <Resume/>
      <Testimonial/>
      <ContactMe/>
    </>
  );
}