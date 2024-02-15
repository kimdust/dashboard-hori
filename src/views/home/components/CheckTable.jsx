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
  Checkbox,
  Button,
  Icon,
} from "@chakra-ui/react";
import { tableDataCheck } from "../../../variables/tables";
import { MdOutlineMoreHoriz } from "react-icons/md";

const CheckTable = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader
        fontSize={"22px"}
        fontWeight={"700"}
        display={"flex"}
        flexDir={"row"}
        justify={"space-between"}
      >
        Check Table
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
              <Th>PROGRESS</Th>
              <Th>QUANTITY</Th>
              <Th>DATE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableDataCheck.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox />
                  {item.name}
                </Td>
                <Td>{item.progress}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default CheckTable;
