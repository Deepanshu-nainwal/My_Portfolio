import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Author-2.jpeg";
import Resume from "../assets/pdf/Deepanshu_Nainwal_Resume.pdf";
import Github from "../assets/img/skilles/github-1.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = ["Web Developer", "UI/UX Developer"];
  const period = 2000;

  const handleDownload = () => {
    // Replace 'your-resume.pdf' with the actual file URL or path
    const fileURL = Resume;
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", "your-resume.pdf");
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="liner_gradient">
                    {/* text-with-background */}
                    {`Hi! it's Deepanshu 😋 `}
                    <span
                      style={{ fontSize: "40px" }}
                      className="txt-rotate "
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "UI Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    As a passionate React developer with a strong foundation in
                    HTML, CSS, and JavaScript, I craft captivating web
                    experiences that seamlessly blend functionality and
                    aesthetics.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "end",
                      gap: "15px",
                      cursor: "pointer",
                    }}
                  >
                    <button onClick={() => console.log("connect")}>
                      <img src={Github} style={{ maxWidth: "100px" }} />
                    </button>
                    <span className="tagline" onClick={() => handleDownload()}>
                      Resume
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/deepanshu-nainwal-543143268/"
                      )
                    }
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Header Img"
                    className="author_img"
                    style={{ borderRadius: "51px", width: "320px" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
