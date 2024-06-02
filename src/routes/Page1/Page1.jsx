import Navbar from "../../components/page1/Navbar/Navbar";
import Card from "../../components/page1/Card/Card";
import Banner from "../../components/page1/Banner/Banner";
import "./Page1.scss";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Card
        number={"01"}
        title={"The first swim"}
        text={
          "When sea turtles hatch, their first big challenge is to get to the ocean from the beach. " +
          "It's a race against time and predators. Once they hit the water, they start what's often called the " +
          "'lost years' because they drift far out to sea and aren't easy to track."
        }
      /> */}
    </>
  );
};

export default Page1;
