import Navbar from "../../components/Page1/Navbar/Navbar";
import Banner from "../../components/Page1/Banner/Banner";
import Info from "../../components/Page1/Info/Info";
import "./Page1.scss";

const Page1 = () => {
  return (
    <div className="body-page1">
      <Navbar />
      <Banner />
      <Info />
      {/* <Card
        number={"01"}
        title={"The first swim"}
        text={
          "When sea turtles hatch, their first big challenge is to get to the ocean from the beach. " +
          "It's a race against time and predators. Once they hit the water, they start what's often called the " +
          "'lost years' because they drift far out to sea and aren't easy to track."
        }
      /> */}
    </div>
  );
};

export default Page1;
