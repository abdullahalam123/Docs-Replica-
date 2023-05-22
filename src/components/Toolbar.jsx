import React from "react";
import { Box, Center, Divider, Flex, Icon, Text } from "@chakra-ui/react";

import { AiOutlineFontColors } from "react-icons/ai";

import {
  MdAdd,
  MdChecklist,
  MdFormatLineSpacing,
  MdFormatListBulleted,
  MdOutlineFormatListNumbered,
  MdOutlineFormatIndentDecrease,
  MdOutlineFormatIndentIncrease,
  MdOutlineFormatClear,
  MdOutlineFormatColorText,
  MdArrowDropDown,
  MdFormatAlignLeft,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdKeyboardArrowUp,
  MdOutlineAddComment,
  MdOutlineImagesearchRoller,
  MdOutlineInsertLink,
  MdOutlineLocalPrintshop,
  MdOutlineMode,
  MdOutlinePhoto,
  MdOutlineSpellcheck,
  MdRemove
} from "react-icons/md";
import { BiRedo, BiUndo, BiHighlight } from "react-icons/bi";

export default function Toolbar() {
  return (
    <Flex
      mx={"3"}
      p={"3"}
      pt={"1.5"}
      pb={"1.5"}
      borderRadius={"3xl"}
      bgColor={"#edf2fa"}
      justifyContent={"stretch"}
      gap={2}
      alignItems={"center"}
    >
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiUndo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiRedo}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineLocalPrintshop}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineSpellcheck}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineImagesearchRoller}
      />
      <Flex alignItems={"center"}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius="md"
          // p={"1"}
          _hover={{ bgColor: "gray.300" }}
        >
          <Text color="#434446" p={"1"}>
            100%
          </Text>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Box>
      </Flex>
      {/* inserts a line separator */}
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Flex alignItems={"center"}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius="md"
          p={"1"}
          _hover={{ bgColor: "gray.300" }}
        >
          <Text color="#434446">Normal text</Text>
          <Icon ml={3} borderRadius="md" boxSize="6" as={MdArrowDropDown} />
        </Box>
      </Flex>
      {/* inserts line separator */}
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Flex alignItems={"center"}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius="md"
          p={"1"}
          _hover={{ bgColor: "gray.300" }}
        >
          <Text color="#434446">Arial</Text>
          <Icon
            ml={3}
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Box>
      </Flex>
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Flex alignItems={"center"}>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdRemove}
        />
        <Box mx={"2"} px={"2"} border={"1px"} borderRadius={"md"}>
          <Text color="#434446">11</Text>
        </Box>
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdAdd}
        />
      </Flex>
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatBold}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatItalic}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdFormatUnderlined}
      />
      {/* AiOutlineFontColors */}
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={AiOutlineFontColors}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={BiHighlight}
      />
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineInsertLink}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlineAddComment}
      />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdOutlinePhoto}
      />
      <Box
        as="span"
        display="inline-block"
        borderRight="1px"
        borderColor="gray.300"
        height="20px"
      />
      <Flex gap={2}>
        {/* ALIGN LEFT ICON */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatAlignLeft}
          />

          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Flex>

        {/* LINE AND SPACING ICON */}
        <Icon
          borderRadius={"md"}
          _hover={{ bgColor: "gray.300" }}
          boxSize={"5"}
          cursor={"pointer"}
          as={MdFormatLineSpacing}
        />

        {/* CHECKLIST ICON */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdChecklist}
          />

          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Flex>

        {/* BULLET LIST ICON  MdFormatListBulleted*/}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdFormatListBulleted}
          />

          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Flex>

        {/* NUMBERED LIST ICON MdOutlineFormatListNumbered */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdOutlineFormatListNumbered}
          />

          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Flex>

        {/* DECREASED INDENT ICON MdOutlineFormatIndentDecrease */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdOutlineFormatIndentDecrease}
          />
        </Flex>

        {/* INCREASED INDENT ICON MdOutlineFormatIndentIncrease */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdOutlineFormatIndentIncrease}
          />
        </Flex>

        {/*CLEAR FORMAT ICON MdOutlineFormatClear */}
        <Flex>
          <Icon
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdOutlineFormatClear}
          />
        </Flex>

        {/* flex end */}
      </Flex>

      {/* EDITING OPTION */}

      <Flex ml={24} alignItems={"center"}>
        <Box
          display="flex"
          alignItems="center"
          borderRadius="md"
          p={"1"}
          _hover={{ bgColor: "gray.300" }}
        >
          {/* This is the edit button */}

          <Icon
            // ml={24}
            pr={0}
            // pl={2}
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdOutlineMode}
          />

          {/* editing text */}
          <Text
            pb={0.5}
            ml={2}
            fontWeight="semibold"
            color="#434446"
            textAlign="center"
          >
            Editing
          </Text>

          {/* Drop Down Arrow */}
          <Icon
            ml={7}
            borderRadius={"md"}
            _hover={{ bgColor: "gray.300" }}
            boxSize={"5"}
            cursor={"pointer"}
            as={MdArrowDropDown}
          />
        </Box>
      </Flex>

      {/* this is a simple separator */}
      {/* ml={"12"} */}
      <Box ml={18} height="20px" width="1px" bg="gray.400" />
      <Icon
        borderRadius={"md"}
        _hover={{ bgColor: "gray.300" }}
        boxSize={"5"}
        cursor={"pointer"}
        as={MdKeyboardArrowUp}
      />
    </Flex>
  );
}
