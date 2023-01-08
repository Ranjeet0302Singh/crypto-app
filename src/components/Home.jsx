import { Box, Image } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "90vh",
        }}
      >
        <Image w={"full"} h={"full"} src={btcSrc} />
      </motion.div>
    </Box>
  );
};

export default Home;
