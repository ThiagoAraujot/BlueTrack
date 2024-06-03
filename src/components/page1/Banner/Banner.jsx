import "./Banner.scss";

const Banner = () => {
  return (
    <>
      <div className="container-banner-home">
        <h2 className="banner-intro">O problema da</h2>
        <h1 className="banner-problem">PESCA ILEGAL</h1>
        <p className="banner-explanation">
          Let&apos;s dive into the life of sea turtles, one of the ocean&apos;s
          most well-known but mysterious creatures. We&apos;ll break it down
          into three key stops—each one a crucial chapter in the sea
          turtle&apos;s journey.
        </p>
        <button className="Learnmore">Learn more</button>
      </div>
      <div className="pl-130">
        <img src="" alt="starfish image" />
      </div>
    </>
  );
};

export default Banner;
