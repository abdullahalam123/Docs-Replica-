import {
  Divider,
  Tooltip,
  Flex,
  Icon,
  Image,
  Box,
  Link,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { MdAdd, MdOutlineArrowForwardIos } from "react-icons/md";
import CalendarLogo from "../assets/images/calendar.png";
import ContactLogo from "../assets/images/contact.png";
import KeepLogo from "../assets/images/gkeep.png";
import MapLogo from "../assets/images/gmap.png";
import GoogleTask from "../assets/images/gtask.png";

export default function Sidebar() {
  return (
    <Flex flexDirection={"column"}>
      <VStack spacing={"10"}>
        <Box
          p={1.5}
          mt={"3"}
          borderRadius={"full"}
          _hover={{ bgColor: "gray.300" }}
        >
          {/* this is the calendar icon */}
          <Link href="https://calendar.google.com/calendar" isExternal>
            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Calendar"
              bg="#4e5355"
              color="white"
            >
              <Image cursor={"pointer"} boxSize={"5"} src={CalendarLogo} />
            </Tooltip>
          </Link>
        </Box>
        <Box p={1.5} borderRadius={"full"} _hover={{ bgColor: "gray.300" }}>
          {/* this is the google keep icon */}
          <Link href="https://keep.google.com" isExternal>
            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Keep"
              bg="#4e5355"
              color="white"
            >
              <Image cursor={"pointer"} boxSize={"5"} src={KeepLogo} />
            </Tooltip>
          </Link>
        </Box>
        <Box p={1.5} borderRadius={"full"} _hover={{ bgColor: "gray.300" }}>
          <Link
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US"
            isExternal
          >
            {/* this is the google task icon */}

            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Tasks"
              bg="#4e5355"
              color="white"
            >
              <Image
                alt="Alternative Text"
                cursor={"pointer"}
                boxSize={"5"}
                src={GoogleTask}
              />
            </Tooltip>
          </Link>
        </Box>
        <Box p={1.5} borderRadius={"full"} _hover={{ bgColor: "gray.300" }}>
          <Link href="https://contacts.google.com/" isExternal>
            {/* this is the contacts logo */}
            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Contacts"
              bg="#4e5355"
              color="white"
            >
              <Image cursor={"pointer"} boxSize={"5"} src={ContactLogo} />
            </Tooltip>
          </Link>
        </Box>
        <Box p={1.5} borderRadius={"full"} _hover={{ bgColor: "gray.300" }}>
          <Link href="https://www.google.com/maps/" isExternal>
            {/* this is the maps logo */}
            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Maps"
              bg="#4e5355"
              color="white"
            >
              <Image cursor={"pointer"} boxSize={"5"} src={MapLogo} />
            </Tooltip>
          </Link>
        </Box>

        {/* divider */}
        <Box w="20px" h="1px" bg="gray.300" my="4" mx="auto" />

        <Box p={1.5} borderRadius={"full"} _hover={{ bgColor: "gray.300" }}>
          <Link
            href="https://workspace.google.com/u/0/marketplace/appfinder/category/works-with-doc?host=docs"
            isExternal
          >
            <Tooltip
              fontSize="12px"
              borderRadius="md"
              p="1"
              label="Get Add ons"
              bg="#4e5355"
              color="white"
            >
              <Image cursor={"pointer"} boxSize={"6"} as={MdAdd} />
            </Tooltip>
          </Link>
        </Box>

        <Box paddingTop={150}>
          <Image
            borderRadius={"full"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"3"}
            // mt={100}
            cursor={"pointer"}
            as={MdOutlineArrowForwardIos}
          />
        </Box>
      </VStack>
    </Flex>
  );
}
