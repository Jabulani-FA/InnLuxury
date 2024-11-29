import BallCanvas from "./Canvas/Ball";
// import BulletMarkSphere from "./BulletMark";
import { PartnersList } from "./List/PartnersList";
import { useInView, motion } from "framer-motion";
import { containerVariant, floatVariant } from "./animation/animation";
import { useRef } from "react";
import HOCComponent from "./HOC/HOCComponent";

const Patners = () => {
  const mainContainer = useRef(null);
  const bounceContainer = useRef(null);

  const mainIsInView = useInView(mainContainer, { threshold: 0.1 });
  const bounceIsInView = useInView(bounceContainer, { threshold: 0.1 });

  return (
    <div className="md:p-4 p-2">
      <motion.h2 ref={bounceContainer} variants={floatVariant("right", "", "bounce")} animate={bounceIsInView&&"show"} initial="hidden"  className="text-4xl font-bold">Our Partners</motion.h2>
      <motion.p ref={mainContainer} variants={containerVariant("up", 0.5, 0.7)} animate={mainIsInView&&"show"} initial="hidden"  className="text-white text-xl font-medium">
        Due to the our professionalism and great deal closing we secured the
        very best in the interior decoration industry.
        <br />
        Amongst our very own finest Partners are the indigenous.
      </motion.p>
      <div className="flex flex-wrap justify-center mt-6">
        {PartnersList &&
          PartnersList.map((partner, index) => (
            <div key={index} className="mt-2 md:w-32">
                {/* <BulletMarkSphere/> */}
                <BallCanvas icon={partner.logo} />
            </div>
          ))}
      </div>
    </div>
  );
};
const WrappedPatners = () => (
  <HOCComponent Component={Patners} idName="patners"/>
)

export default WrappedPatners ;
