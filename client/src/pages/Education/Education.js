import React from "react";
import { MdSchool } from "react-icons/md";
import { motion } from "framer-motion";
import "./Education.css";

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
        date="2023 - 2024"
        title="Software Engineering"
        subtitle="ALX Africa"
        icon={<MdSchool />}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <p>
          An advanced course from ALX on designing software by using programming
          languages.
        </p>
      </TimelineItem>

      <TimelineItem
        date="2015-2023"
        title="Bachelor of Science in Zoology"
        subtitle="University of Nigeria, Nsukka"
        icon={<MdSchool />}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
      >
        <p></p>
      </TimelineItem>
    </Timeline>
  );
};

// Main Education Component
const Education = () => {
  return (
    <>
      <div className="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
      </div>
      <ExampleTimeline />
    </>
  );
};

export default Education;
