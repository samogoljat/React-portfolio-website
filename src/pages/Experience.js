import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Secondary school of economics Maribor
          </h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Faculty of Electrical Engineering and Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Mechatronics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Project Manager - Henkel d.o.o.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maribor, Slovenia
          </h4>
          <p>
            Industrial engineer related work, excel spreads, buying assets,
            integrating new technological equipment in production.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Faculty of Mechanical Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master's Degree
          </h4>
          <p>Industrial engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">System integrator</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maribor, Slovenia
          </h4>
          <p>Mounting and connecting security cameras and designing network</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CAD Designer - RTC d.o.o.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maribor, Slovenia
          </h4>
          <p>Cad designing in PTC Creo</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Researcher - Faculty of mechanical engineering in Maribor
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maribor, Slovenia
          </h4>
          <p>
            R&D on the field of hydraulic systems, fluids and automatic
            Programming in C#
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            System engineer - COBISS/IZUM - Institute of information science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maribor, Slovenia
          </h4>
          <p>
            Linux system administration Bash script Network monitoring
            Virtualization Containerization PostgreSQL, MariaDB Wordpress Devops
            related work HTML, CSS, Javascript, Typescript, React, JSON, Python,
            SQL.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
