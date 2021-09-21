import React from "react";
import "./aboutpage.styles.scss";
import team_members from "./aboutpage.data.js";
import { CardList } from "../../components/card-list/card-list.component";
import { Header } from "../../components/header/header.component";
import Header_image from "../../assets/about-bg.jpg";
class Aboutpage extends React.Component {
  constructor() {
    super();
    this.state = {
      team: team_members,
    };
  }
  render() {
    const { team } = this.state;
    return (
      <div className="aboutpage">
        <Header Header_image={Header_image}>
          <h1
            style={{ color: "white", fontSize: "50px", textAlign: "center" }}
            data-aos="fade-up"
            data-aos-duration="700"
          >
            We are Procrastinators,
          </h1>
          <p
            style={{ fontSize: "40px", textAlign: "center" }}
            data-aos="fade-up"
            data-aos-duration="900"
          >
            But we get the work done.
          </p>
          <br></br>
          <div align="right" data-aos="fade-up" data-aos-duration="1100">
            <a href="#contactUs" className="button">
              Contact Us
            </a>
          </div>
        </Header>
        <div
          className="main-heading"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h1>Know more about Us!!!</h1>
        </div>
        <div className="features">
          <div className="blocks">
            <div
              className="para"
              data-aos="slide-right"
              data-aos-duration="500"
            >
              <h1>Our Goal</h1>
              <p>
                Our main goal in doing this project is find out how COVID-19
                Pandemic has disrupted learning for students all over the world.
                The Government had no other choice but to close the schools and
                colleges, which adversely affected the learning of the students.
                In response, schools and teachers have attempted to reach
                students remotely through distance learning tools and digital
                platforms. So, we have come up with the idea to deeply analyze
                the impact of COVID-19 on student learning and how digital
                learning has played a vital role in educating students even
                under these circumstances.
              </p>
              <div className="forScroll">
                <a
                  href="https://github.com/Apoorv-17/Covid-19-Impact-on-Digital-Learning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll button"
                >
                  Visit our Github Repository
                </a>
              </div>
            </div>
            <img
              src={require("../../assets/about-goal.jpg")}
              alt="why"
              data-aos="slide-left"
              data-aos-duration="500"
            />
          </div>
          <div className="blocks">
            <img
              src={require("../../assets/about-future.jpg")}
              alt="why"
              data-aos="slide-right"
              data-aos-duration="500"
            />
            <div className="para" data-aos="slide-left" data-aos-duration="500">
              <h1>Into the Future!!!</h1>
              <p>
                In the future we would love to work on many different projects
                like this one and continue to improve and learn more about Data
                Analytics and one day become someone worthy of being called a
                Professional Data Analyst.
              </p>
            </div>
          </div>
        </div>
        <div
          id="contactUs"
          className="main-heading"
          style={{ backgroundColor: "rgb(255, 236, 218)" }}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <h1>Contact Us</h1>
        </div>
        <CardList team={team} />
      </div>
    );
  }
}

export default Aboutpage;
