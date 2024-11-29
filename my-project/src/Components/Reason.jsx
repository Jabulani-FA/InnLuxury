import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReasonList } from "./List/ReasonList";
// import HOCComponent from "../HOC/HOCComponent";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { floatVariant, containerVariant } from "./animation/animation";
import HOCComponent from "./HOC/HOCComponent";

const Reason = () => {
  const mainContainer = useRef(null);
  const bounceContainer = useRef(null);

  const mainIsInView = useInView(mainContainer, { threshold: 0.1 });
  const bounceIsInView = useInView(bounceContainer, { threshold: 0.1 });
  return (
    <div className="md:p-4 p-2">
      <motion.h2 ref={bounceContainer} variants={floatVariant("right", "", "bounce")} animate={bounceIsInView&&"show"} initial="hidden" className="text-4xl font-bold">Our Story</motion.h2>
      <motion.p ref={mainContainer} variants={containerVariant("up", 0.5, 0.7)} animate={mainIsInView&&"show"} initial="hidden" className="text-white text-xl font-medium">
        On the course of search or authentic decoration fabric and furniture for
        interior design takes comparatively a large amount of time and energy,
        not to talk of the psychological stress of trying to fit these items to
        our homes or workspaces in our mind. A simple solution to reduce this
        worry to the barest minimum we say with our virtual space where we make
        a close replica of your space be it size and color and you get to assess
        it first hand experience even before purchase. Tempting? Yes, and a lot
        more, all these at almost zero cost. We have gone through the rigorous
        stress of vetting the products to filter out the very best quality just
        for you.
      </motion.p>
      <div className="text-dark md:px-20 mt-8 flex-auto">
        <VerticalTimeline>
          {ReasonList &&
            ReasonList.map((reason, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work md:w-full w-72"
                contentArrowStyle={{ borderRight: "7px solid #fff" }}
                contentStyle={{
                  background: `${index % 2 === 0 ? "#458681" : "#000000"}`,
                  color: `${index % 2 === 0 ? "#000000" : "#fff"}`,
                }}
                iconStyle={{
                  background: index % 2 === 0 ? "#458681" : "#000000",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                  alignItems: "center",
                }}
                icon={reason.icon}
              >
                <div className="bg-white bg-opacity-30 w-40 p-2 text-center rounded mb-2">
                  <h3 className="text-sm font-bold">{reason.Phase}</h3>
                </div>
                <h3>
                  <strong>Criteria:</strong> <em>{reason.Criteria}</em>
                </h3>
                <h3>
                  <strong>Evaluation Mode:</strong> <em>{reason.Evaluation}</em>
                </h3>
                <h3>
                  <strong>Exemptions:</strong> <em>{reason.Exemption}</em>
                </h3>
                <h3>
                  <strong>Period:</strong> <em>{reason.Period}</em>
                </h3>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

const WrappedReason = () => (
  <HOCComponent Component={Reason} idName="patners"/>
)

export default WrappedReason;
