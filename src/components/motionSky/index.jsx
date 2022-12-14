import Image from "next/image";
import SkyBorderBlack from "../../assets/img/nuage-cyan-border-black.png";
import SkyFormBorder from "../../assets/img/forme-border-nuage.png";

import { motion } from "framer-motion";

export const MotionSky = () => {
  return (
    <>
      {/* div for responsive  */}
      <div className="flex flex-col md:flex-row pt-4">
        {/* groupe 1 */}
        <div className="flex justify-center">
          {/* Nuage 1 */}
          <div className="pt-4 2xl:pr-20">
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.3, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, 10, -20],
                y: [0, -20, 5],
                rotate: [6, -6],
              }}
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="60px" width="60px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 2 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.1, 1, 0, 1, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, -30, -15],
                y: [0, -30],
                rotate: [6, -6, -6, 6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="125px" width="125px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 3 */}
          <div className="-pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                scale: [1, 1.1, 1, 1.1, 1],
                opacity: [1, 0, 1],
                x: [0, -10, 20],
                y: [0, 15, 10, 25],
                rotate: [12, -12, -5, 6, -12],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="80px" width="80px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 4 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.5],
                x: [0, -65, 20],
                y: [0, -25, 5, -15],
                rotate: [-6, -16],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="140px" width="140px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 5 */}
          <div className="pt-4 2xl:pr-20">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [0.7, 1, 0.3, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, 10, -20],
                y: [0, -20, 5],
                rotate: [6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="60px" width="60px" src={SkyFormBorder} />
            </motion.div>
          </div>

          {/* Nuage 6 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.1, 1],
                scale: [1, 1.3, 1, 1.3, 1],
                x: [0, 30, -20],
                y: [0, -10, 15],
                rotate: [0, 20],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="100px" width="100px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 7 */}
          <div className="pt-4">
            <motion.div   whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.1, 1, 0, 1, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, -30, -15],
                y: [0, -30],
                rotate: [6, -6, -6, 6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="125px" width="125px" src={SkyFormBorder} />
            </motion.div>
          </div>
        </div>
        {/* groupe 2 */}
        <div className="flex justify-center">
          {/* Nuage 8 */}
          <div className="pt-4 2xl:pr-20">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.1, 1],
                scale: [1, 1.3, 1, 1.3, 1],
                x: [0, 30, -20],
                y: [0, -10, 15],
                rotate: [0, 20],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="60px" width="60px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 9 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                x: [0, 35, -10],
                y: [0, 25, 5, 15],
                rotate: [6, 16],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="140px" width="140px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 10*/}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.1, 1, 0, 1, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, -30, -15],
                y: [0, -30],
                rotate: [6, -6, -6, 6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="75px" width="75px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 11 */}
          <div className="pt-4 pr-20">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [0.7, 1, 0.3, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, 10, -20],
                y: [0, -20, 5],
                rotate: [6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="60px" width="60px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 12 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.5],
                x: [0, -25, 20],
                y: [0, -15, 5, -15],
                rotate: [-6, 8],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="140px" width="140px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 13 */}
          <div className="-pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                scale: [1, 1.1, 1, 1.1, 1],
                opacity: [1, 0, 1],
                x: [0, -10, 20],
                y: [0, 15, 10, 25],
                rotate: [12, -12, -5, 6, -12],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="85px" width="85px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 14 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.1, 1],
                scale: [1, 1.3, 1, 1.3, 1],
                x: [0, 30, -20],
                y: [0, -10, 15],
                rotate: [0, 20],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="100px" width="100px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 15 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [0.7, 1, 0.3, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, -10, 20],
                y: [0, 5],
                rotate: [6, -6],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="60px" width="60px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 16 */}
          <div className="pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                opacity: [1, 0.5, 1, 0.1, 1, 0, 1, 1],
                scale: [1, 1.1, 1, 1.1, 1],
                x: [0, 15, -65],
                y: [0, 30],
                rotate: [6, -12, 12, -6, 12],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="125px" width="125px" src={SkyFormBorder} />
            </motion.div>
          </div>
          {/* Nuage 17 */}
          <div className="-pt-4">
            <motion.div
              whileHover={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              whileTap={{
                rotate: [
                  5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5, 5, -5,
                  5, -5, 5, -5, 5,
                ],
              }}
              animate={{
                scale: [1, 1.1, 1, 1.1, 1],
                opacity: [1, 0, 1],
                x: [0, -10, 20],
                y: [0, 15, 10, 25],
                rotate: [12, -12, -5, 6, -12],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",

                repeat: Infinity,
              }}
            >
              <Image height="85px" width="85px" src={SkyFormBorder} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
