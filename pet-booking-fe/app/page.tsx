import Navbar from "./components/Navbar";
import AboutUsPage from "./components/pages/AboutUsPage";
import LandingPage from "./components/pages/LandingPage";
import ScheduleAVisit from "./components/pages/ScheduleAVisit";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutUsPage id="about-us" />
      <ScheduleAVisit id="schedule-a-visit" />
    </>
  );
}
