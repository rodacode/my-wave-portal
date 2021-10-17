import * as React from "react";
// import { ethers } from "ethers";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"

import { Button, Text } from '@chakra-ui/react'

export default function App() {

  const wave = () => {

  }

  return (
    <ChakraProvider>

    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            className="title"
            textAlign="center">Welcome to my</Text>
                      <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            className="title"
            textAlign="center">Wave Portal</Text>
            
        </div>

        <div className="bio">
          Hi I'm Nico and I like cheese and potatoes, and also cheese.
        </div>

        <Button colorScheme="teal" variant="outline" className="waveButton" onClick={wave}>
          Wave at Me
        </Button>
      </div>
    </div>
    </ChakraProvider>

  );
}
