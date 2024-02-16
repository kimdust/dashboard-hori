import {
  Card,
  CardBody,
  CardHeader,
  Icon,
  Stat,
  StatNumber,
  StatLabel,
  Text,
  Select,
  Flex,
  Box,
  VSeparator,
} from "@chakra-ui/react";
import { pieChartData, pieChartOptions } from "../../../variables/charts";
import PieChart from "../../../components/charts/PieChart";

const YourPieChart = () => {
  return (
    <Card>
      <CardHeader fontSize={"16px"} fontWeight={"700"}>
        <Stat>
          <StatLabel
            color={"#A3AED0"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            Your Pie Chart
            <Select
              fontSize="14px"
              variant="subtle"
              defaultValue="monthly"
              width="unset"
              fontWeight="700"
            >
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </Select>
          </StatLabel>
        </Stat>
      </CardHeader>

      <CardBody w={"100%"}>
        <PieChart chartData={pieChartData} chartOptions={pieChartOptions} />
        <Card
          boxShadow={"0px 18px 40px rgba(112, 144, 176, 0.12)"}
          w="100%"
          p="15px"
          px="20px"
          mt="15px"
          mx="auto"
          flexDir="row"
          justifyContent="space-between"
        >
          <Flex direction="column" py="5px" w="50%">
            <Flex align="center">
              <Box
                h="8px"
                w="8px"
                bg="#4318FF"
                borderRadius="50%"
                me="4px"
                mb="5px"
              />
              <Text fontSize="xs" color="#A3AED0" fontWeight="700" mb="5px">
                Your files
              </Text>
            </Flex>
            <Text fontSize="lg" fontWeight="700">
              63%
            </Text>
          </Flex>
          <Flex direction="column" py="5px" me="10px" w="50%">
            <Flex align="center">
              <Box
                h="8px"
                w="8px"
                bg="#6AD2FF"
                borderRadius="50%"
                me="4px"
                mb="5px"
              />
              <Text fontSize="xs" color="#A3AED0" fontWeight="700" mb="5px">
                System
              </Text>
            </Flex>
            <Text fontSize="lg" fontWeight="700">
              25%
            </Text>
          </Flex>
        </Card>
      </CardBody>
    </Card>
  );
};

export default YourPieChart;
