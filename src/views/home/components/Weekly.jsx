import { Card, CardBody, CardHeader, Button, Icon } from "@chakra-ui/react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "../../../variables/charts";
import BarChart from "../../../components/charts/BarChart";
import { MdBarChart } from "react-icons/md";

const Weekly = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader
        display={"flex"}
        flexDir={"row"}
        justify={"space-between"}
        fontSize={"20px"}
        fontWeight={"700"}
      >
        Weekly Revenue
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
      </CardHeader>

      <CardBody minH="260px" minW="75%" mt="auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </CardBody>
    </Card>
  );
};

export default Weekly;
