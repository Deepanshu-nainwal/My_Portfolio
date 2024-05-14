import HTML from "../assets/img/skilles/html.png";
import CSS from "../assets/img/skilles/css.png";
import JS from "../assets/img/skilles/javascript.png";
import ReactImg from "../assets/img/skilles/react.png";
import Github from "../assets/img/skilles/github-1.png";
import Tailwind from "../assets/img/skilles/tailwind.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Bunch of fresh skills</h2>
              <p style={{ padding: "0 5rem" }}>
                My expertise extends to harnessing the power of Tailwind CSS,
                creating elegant, responsive, and user-friendly interfaces. With
                a commitment to clean code and a keen eye for design.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={HTML} alt="Image" />
                  <h5>HTML (Hyper Text Markup Language)</h5>
                </div>
                <div className="item">
                  <img src={CSS} alt="Image" />
                  <h5>CSS (Cascading Styling Sheet)</h5>
                </div>
                <div className="item">
                  <img src={Tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={JS} alt="Image" />
                  <h5>javascript</h5>
                </div>
                <div className="item">
                  <img src={ReactImg} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={Github} alt="Image" />
                  <h5>Github</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
