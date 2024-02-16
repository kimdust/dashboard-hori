import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardHeader,
  Box,
  Button,
  Icon,
  Text,
} from "@chakra-ui/react";
import { tableDataComplex } from "../../../variables/tables";
import { MdOutlineMoreHoriz } from "react-icons/md";

const ComplexTable = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader
        fontSize={"22px"}
        fontWeight={"700"}
        display={"flex"}
        flexDir={"row"}
        justify={"space-between"}
      >
        Complex Table
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
          <Icon as={MdOutlineMoreHoriz} color="primary" w="24px" h="24px" />
        </Button>
      </CardHeader>
      <TableContainer>
        <Table bg={"white"} borderRadius={"20px"}>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>STATUS</Th>
              <Th>DATE</Th>
              <Th>PROGRESS</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableDataComplex.map((item, index) => (
              <Tr key={index}>
                <Td>{item.name}</Td>
                <Td>
                  <Text display={"flex"} gap="5px">
                    {item.icon}
                    {item.status}
                  </Text>
                </Td>
                <Td>{item.date}</Td>
                <Td>{item.progress}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ComplexTable;
