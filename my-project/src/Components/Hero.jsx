import { containerVariant } from "./animation/animation";
import ExhibitionContainer from "./Canvas/Exhibition3D";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={containerVariant("", 1.2)} className="text-green md:p-4 p-2 md:mt-4 mt-2">
      <div>
        <h3 className="text-xl font-medium text-light">
          At Inn Luxury you are <strong className="text-green">Royalty</strong>{" "}
          and we assure such treatment with your purchases.
          <br /> Not all dining wares need{" "}
          <strong className="text-green">millions</strong> to purchase but we
          will definitely give <br />
          an leading insight to how your decoration will look with our{" "}
          <strong className="text-green">simulation technology</strong>.
        </h3>
      </div>
      <ExhibitionContainer />
    </motion.div>
  );
};

export default Hero;
