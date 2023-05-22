import { useState } from "react";
import { BiVideo } from "react-icons/bi";

import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  MdArrowDropDown,
  MdDriveFileMoveOutline,
  MdLockOutline,
  MdOutlineCloudDone,
  MdOutlineComment,
  MdOutlineVideoCall,
  MdRestore,
  MdStarBorder,
  MdVideoCall,
} from "react-icons/md";

export default function Header() {
  const [docName, setDocName] = useState("Untitled Document");

  const changeDocTitle = (e) => {
    setDocName(e.target.value);
    document.title = `${docName} - Google Docs`;
  };
  return (
    <Flex
      textColor={"#202124"}
      className="header"
      justifyContent={"space-between"}
    >
      <Flex>
        <Flex m={"3"} mr={"1"}>
          <Image src="/images/docs_logo.png" boxSize={"12"} />
        </Flex>
        <Flex flexDirection={"column"}>
          <Flex mt={"2"}>
            <Text
              textColor={"blackAlpha.700"}
              fontWeight={400}
              fontSize={"xl"}
              pl={"2"}
            >
              <input
                type="text"
                id="document__name"
                value={docName}
                onChange={changeDocTitle}
              />
            </Text>
            <Flex cursor={"pointer"} alignItems={"center"} px={"3"}>
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdStarBorder}
                borderRadius={"full"}
                _hover={{ bgColor: "gray.100" }}
              />
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdDriveFileMoveOutline}
                borderRadius={"full"}
                _hover={{ bgColor: "gray.100" }}
              />
              <Icon
                color={"#44494E"}
                mx={"1"}
                boxSize={"5"}
                as={MdOutlineCloudDone}
                borderRadius={"full"}
                _hover={{ bgColor: "gray.100" }}
              />
            </Flex>
          </Flex>
          <Flex>
            <UnorderedList
              cursor={"pointer"}
              ml={"0"}
              listStyleType={"none"}
              display={"flex"}
            >
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                File
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Edit
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                View
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Insert
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Format
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Tools
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Extensions
              </ListItem>
              <ListItem
                borderRadius={"md"}
                _hover={{ bgColor: "gray.100" }}
                px={"2"}
              >
                Help
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex alignItems={"center"} className="meet">
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={MdRestore} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={MdOutlineComment} />
          </Flex>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"14"}
            borderRadius={"full"}
            _hover={{ bgColor: "gray.100", cursor: "pointer" }}
            mx={"1"}
          >
            <Icon color={"#44494E"} boxSize={"7"} as={BiVideo} />
            <Icon color={"#44494E"} boxSize={"7"} as={MdArrowDropDown} />
          </Flex>
          <Box mx={"3"}>
            <Button
              color={"#001d35"}
              fontWeight={"400"}
              p={"9px 24px"}
              borderRadius={"3xl"}
              bgColor={"#c2e7ff"}
              font
              leftIcon={<MdLockOutline />}
              _hover={{ boxShadow: "dark-lg" }}
            >
              Share
            </Button>
          </Box>
        </Flex>
        <Flex m={"4"}>
          <Image
            src="/images/profile.jpg"
            borderRadius={"full"}
            boxSize={"10"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
