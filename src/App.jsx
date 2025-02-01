import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAll from "./components/ViewAll.jsx";

 const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAll />

    </>
  );
};

export default App;
