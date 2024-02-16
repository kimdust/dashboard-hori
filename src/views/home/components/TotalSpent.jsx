import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Button,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";
import LineChart from "../../../components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <Flex align="center" w="100%" pe="20px" ps="20px">
        <Button
          bg="#F4F7FE"
          fontSize="sm"
          fontWeight="500"
          color="#A3AED0"
          borderRadius="7px"
        >
          <Icon as={MdOutlineCalendarToday} color="#A3AED0" me="4px" />
          This month
        </Button>
        <Button
          ms="auto"
          align="center"
          justifyContent="center"
          bg="#F4F7FE"
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
        >
          <Icon as={MdBarChart} color="primary" w="24px" h="24px" />
        </Button>
      </Flex>
      <Flex flexDir={"row"} justify={"space-between"}>
        <CardHeader>
          <Stat>
            <StatNumber fontSize={"34px"} fontWeight={"700"}>
              $37.5K
            </StatNumber>
            <StatLabel color={"#A3AED0"} display={"flex"}>
              Total Spent
              <Text
                color={"green.500"}
                fontWeight={"700"}
                display={"flex"}
                alignItems={"center"}
              >
                <Icon
                  as={RiArrowUpSFill}
                  color="green.500"
                  me="2px"
                  mt="2px"
                  ml="5px"
                  fontSize="20px"
                />
                +2.45%
              </Text>
            </StatLabel>
          </Stat>
        </CardHeader>
        <CardBody minH="260px" minW="75%" mt="auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </CardBody>
      </Flex>
    </Card>
  );
};

export default TotalSpent;
