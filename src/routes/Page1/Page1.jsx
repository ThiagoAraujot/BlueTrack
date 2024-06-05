import Banner from "../../components/Page1/Banner/Banner";
import Navbar from "../../components/Page1/Navbar/Navbar";
import CardRight from "../../components/Page1/CardRight/CardRight";
import CardLeft from "../../components/Page1/CardLeft/CardLeft";

import lobster from "../../assets/lobster.webp";
import "./Page1.scss";
import data from "../../data.json";

const Page1 = () => {
  const images = {
    "1-girl.png": lobster,
    "2-girl.png": lobster,
    "enfermeira.png": lobster,
    "enfermeira2.png": lobster,
    "enfermeira3.png": lobster,
    "enfermeira4.png": lobster,
    "girl-jumping.png": lobster,
  };

  return (
    <body className="body-page1">
      <Navbar />
      <Banner />

      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <CardRight
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        } else {
          return (
            <CardLeft
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        }
      })}
    </body>
  );
};

export default Page1;
