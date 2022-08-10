import React from "react";
import "./ResumeCard.css";

function ResumeCard() {
  return (
    <div className="resume-card-list">
      <div className="card">
        <span className="card-headline">Education</span>
        <div className="card-seperator"></div>
        <div className="card-bullet-point">
          <span>
            University of California, Los Angeles (UCLA), Los Angeles, CA
          </span>
          <span>December 2021</span>
        </div>
        <div>Bachelor of Science in Computer Science</div>
        <ul>
          <li>
            Relevant coursework: Software Engineering, Data Mining, Machine
            Learning, Computer System Architecture, Artificial Intelligence,
            Software Construction, Operation System, Computer Network, Computer
            Graphics, Computational Linguistic, Cryptography.
          </li>
          <li>GPA: 3.4</li>
        </ul>
      </div>
      <div className="card">
        <span className="card-headline">Skills</span>
        <div className="card-seperator"></div>
        <ul>
          <li>
            Competed in various Top Coder (algorithmic programing) competitions
            for 14 years.
          </li>
          <li>
            Programming Languages: Python, C/C++, SQL, Java, HTML, LISP, and
            OCAML.
          </li>
          <li>Database: Relational Database (SQL/SQLite3).</li>
          <li>Framework: Django.</li>
        </ul>
      </div>
      <div className="card">
        <span className="card-headline">HONORS & AWARDS</span>
        <div className="card-seperator"></div>
        <ul>
          <li>
            Won First prize in Top Coder contest for competing with 100+ highly
            skilled coders from best schools in Ho Chi Minh city.
          </li>
          <li>
            Honorably recognized as one of five highest ranked coders to compete
            in National Top Coder contest in Viet Nam.
          </li>
          <li>
            Won the Bronze medal in Southern National Top Coder contest
            competing with 100+ members of highly ranked coders who were winners
            from 30+ other regional contests in Viet Nam.
          </li>
          <li>
            Won Third Prize in IT Bootcamp after competing with 100+ highly
            skilled coders. The contest ranks winner base on how well robots
            move, interact and react to data collected from surrounding
            environment.
          </li>
        </ul>
      </div>
      <div className="card">
        <span className="card-headline">PROJECTS</span>
        <div className="card-seperator"></div>
        <ul>
          <li>
            Trained an AI to generate infinite realistic 3D faces using image
            data sets from social media gathered by the Selenium library.
            constructed an SQLite relational database to store user profiles,
            posts, and image links for easy reference. A large dataset is built
            from those faces extracted using OpenCV and filtered out by a
            hand-built Convolutional Neural Network Classifier.
          </li>
          <li>
            Lead a group of 3 peers to build an physics simulation Android app
            where users can interact in real-time with particles. The app can
            handle millions of interactions per second, and was awarded for most
            efficient project of semester.
          </li>
          <li>
            Forecasted daily Covid-19 cases for each state in the US utilizing
            Autoregression, Recurrent Neural Network (LSTM) to predict potential
            infection cases for upto 25 days. This project archived 2.044% Mean
            Absolute Percentage Error.
          </li>
          <li>
            Collected stock market data via API of TD Ameritrade broker.
            Analyzed data by various mathematical indicators (such as Average
            Directional Index, and Moving Average Convergence Divergence) to
            find equity with predefined characteristics such as high ratio of
            Reward/Loss, or low probability of going the wrong way.
          </li>
        </ul>
      </div>
      <div className="card">
        <span className="card-headline">EXPERIENCE</span>
        <div className="card-seperator"></div>
        <div className="card-bullet-point">
          <span>42 US, Fremont, CA</span>
          <span>January 2019</span>
        </div>
        <div>IT bootcamp</div>
        <ul>
          <li>
            Collaborated with various groups of 2-8 members to complete daily
            personal projects and weekly group projects utilizing C/C++ to code
            and share in the organization system via internal git repositories.
          </li>
        </ul>

        <div className="card-bullet-point">
          <span>Chabot College, Hayward, CA</span>
          <span>January 2017 - December 2018</span>
        </div>
        <div>IT bootcamp</div>
        <ul>
          <li>
            Recognized by two instructors in the CS department for diversifying
            ways of approaching problems.
          </li>
          <li>
            Selected and appointed by the CS department to help students in CS
            and STEM courses and was prioritized to work only with CS students
            due to high demand from students.
          </li>
        </ul>

        <div className="card-bullet-point">
          <span>Hoang Hoa Tham High School, Viet Nam</span>
          <span>January 2011 - June 2013</span>
        </div>
        <div>Training instructor for Top Coders competition</div>
        <ul>
          <li>
            Prepared lectures and curriculum for selective honor students for
            regional Top Coder Programming Competition.
          </li>
          <li>
            Tested and evaluated potential candidates for each and evey seasonal
            contest to evaluate skills, knowledge, and competitiveness.
          </li>
          <li>
            Trained students to solve complex algorithmic questions to improve
            problem-solving skills. As a result, multiple medals are gathered
            such as Bronze medals in the Southern National, and other well-known
            regional Top Coder competitions in Viet Nam.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResumeCard;
