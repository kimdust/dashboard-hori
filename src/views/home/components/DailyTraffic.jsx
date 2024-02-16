import {
  Card,
  CardBody,
  CardHeader,
  Icon,
  Stat,
  StatNumber,
  StatLabel,
  Text,
} from "@chakra-ui/react";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../../../variables/charts";
import { RiArrowUpSFill } from "react-icons/ri";
import BarChart from "../../../components/charts/BarChart";

const DailyTraffic = () => {
  return (
    <Card>
      <CardHeader fontSize={"20px"} fontWeight={"700"}>
        <Stat>
          <StatLabel
            color={"#A3AED0"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            Daily Traffic
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
          <StatNumber
            fontSize={"34px"}
            fontWeight={"700"}
            display={"flex"}
            alignItems={"flex-end"}
          >
            2.579
            <Text
              fontSize={"14px"}
              fontWeight={"500"}
              color={"#A3AED0"}
              mb={"10px"}
              ml={"10px"}
            >
              Visitors
            </Text>
          </StatNumber>
        </Stat>
      </CardHeader>

      <CardBody h="240px" mt="auto">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </CardBody>
    </Card>
  );
};

export default DailyTraffic;
