import React from "react";
import { SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import "./WorkExp.css";

// TimelineItem Component with animation
const TimelineItem = ({
  date,
  title,
  subtitle,
  children,
  icon,
  iconStyle,
  contentStyle,
}) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="timeline-item-content" style={contentStyle}>
        <div className="timeline-icon" style={iconStyle}>
          {icon}
        </div>
        <span className="timeline-date">{date}</span>
        <h3 className="timeline-title">{title}</h3>
        {subtitle && <h4 className="timeline-subtitle">{subtitle}</h4>}
        <div className="timeline-body">{children}</div>
        <span className="timeline-arrow"></span>
      </div>
    </motion.div>
  );
};

// Timeline Container Component
const Timeline = ({ children }) => {
  return <div className="timeline-container">{children}</div>;
};

// ExampleTimeline to be rendered inside Education
const ExampleTimeline = () => {
  return (
    <Timeline>
      <TimelineItem
        date="2011 - present"
        title="Creative Director"
        subtitle="Miami, FL"
        icon={<SiReact />}
        iconStyle={{ background: "#1e1e2c", color: "#fff" }}
        contentStyle={{ background: "white", color: "#1e1e2c" }}
      >
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </TimelineItem>

      <TimelineItem
        date="2009 - 2011"
        title="Art Director"
        subtitle="San Francisco, CA"
        icon={<SiReact />}
        iconStyle={{ background: "#1e1e2c", color: "#fff" }}
        contentStyle={{ background: "white", color: "#1e1e2c" }}
      >
        <p>Creative Direction, User Experience, Visual Design, Publications</p>
      </TimelineItem>
    </Timeline>
  );
};

// Main Education Component
const Work = () => {
  return (
    <>
      <div className="work">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />
      </div>
      <ExampleTimeline />
    </>
  );
};

export default Work;
