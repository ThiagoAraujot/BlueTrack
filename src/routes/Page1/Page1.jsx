import Banner from "../../components/Page1/Banner/Banner";
import Navbar from "../../components/Page1/Navbar/Navbar";
import CardRight from "../../components/Page1/CardRight/CardRight";
import CardLeft from "../../components/Page1/CardLeft/CardLeft";

import check from "../../assets/check.svg";
import "./Page1.scss";
import data from "../../data.json";

const Page1 = () => {
  const images = {
    "1-girl.png": check,
    "2-girl.png": check,
    "enfermeira.png": check,
    "enfermeira2.png": check,
    "enfermeira3.png": check,
    "enfermeira4.png": check,
    "girl-jumping.png": check,
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
