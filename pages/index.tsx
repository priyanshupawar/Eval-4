import Head from "next/head";
import Image from "next/image";
import { Heading, Box, Text } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import PageButton from "./PageButton";
import IdButton from "./idButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box p={"50px"}>
        <Heading fontSize={"5xl"} textAlign={"center"} m={"auto"} w={"35%"}>
          Welcome to the C4 evaluation for
        </Heading>
        <Heading
          color={"lightblue"}
          textAlign={"center"}
          fontSize={"5xl"}
          p={"10px"}
        >
          RCT-201
        </Heading>
        <Text textAlign={"center"} p={"10px"}>
          You need to create an application similar to the one that you are
          looking right now.
        </Text>
        <Text textAlign={"center"} p={"10px"}>
          There 2 pages that needs to be created apart from the current
          homepage.
        </Text>
        <Text textAlign={"center"} p={"45px"}>
          One path is /people and another a dynamic route /people/[id]
        </Text>
        <PageButton />

        <IdButton />

        <hr />

        <div className="criteria">
          <h3>Marking Criteria:</h3>
          <div className="colorbox">#TYPESCRIPT</div>
          <div className="colorbox">#REACT</div>
          <div className="colorbox">#NEXTJS</div>
          <div className="colorbox">#CHAKRAUI</div>
        </div>
      </Box>
    </>
  );
}
