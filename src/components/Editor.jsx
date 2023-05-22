import { Box, Flex, Icon, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdFormatListBulleted } from "react-icons/md";

export default function Editor() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  // #dadce0 scrollbar color
  return (
    <Box h="80vh" overflowY="scroll">
      <Box
        borderTop={"1px"}
        borderLeft={"1px"}
        ml={"4"}
        mt={"4"}
        borderColor="#c4c7c5"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          left={"10"}
          position={"absolute"}
          borderRadius={"full"}
          _hover={{ bgColor: "gray.100", cursor: "pointer" }}
          boxSize={"12"}
        >
          <Box>
            <Icon boxSize={"7"} as={MdFormatListBulleted} />
          </Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box border={"1px"} mt={"4"} width={"55%"} borderColor="#c7c7c7">
            <Textarea
              // borderBottom="1px solid #c7c7c7"
              resize="none"
              value={text}
              onChange={handleTextChange}
              width={"full"}
              placeholder="Type @ to insert"
              _focus={{ outline: "none" }}
              height={"100vh"}
              _placeholder={{
                color: "#8c9094",
                fontStyle: "italic",
                fontWeight: "semibold",
              }}
              marginTop={125}
              paddingLeft={125}
              paddingRight={125}
              // marginBottom={10}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
