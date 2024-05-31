import Analysis from "../../components/Page2/Analysis/Analysis";
import Banner from "../../components/Page2/Banner/Banner";
import Benefits from "../../components/Page2/Benefits/Benefits";
import Features from "../../components/Page2/Features/Features";
import Navbar from "../../components/Page2/Navbar/Navbar";
import "./Page2.scss";

const Page2 = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Benefits />
      <Analysis />
    </>
  );
};

export default Page2;
