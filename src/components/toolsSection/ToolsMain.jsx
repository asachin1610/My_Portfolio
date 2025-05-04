import React from 'react'
import ToolsText from './ToolsText';
import AllTools from './AllTools';
import AllToolsSM from './AllToolsSM';
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";

const ToolsMain = () => {
  return (
    <div id="tools">
      <div className='max-w-[1200px] px-4 mx-auto min-h-[550px] relative overflow-hidden'>
      <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <ToolsText/>
          </motion.div>
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block hidden'>
          <AllTools/>
        </div>
        <div className='block lg:hidden'>
          <AllToolsSM/>
        </div>
      </div>
    </div>
  );
};

export default ToolsMain;