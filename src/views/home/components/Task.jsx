import {
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Card,
  CardHeader,
  Checkbox,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { tableDataTask } from "../../../variables/tables";
import { MdOutlineMoreHoriz } from "react-icons/md";

const Task = () => {
  return (
    <Card display={"flex"} flexDir={"column"} justify={"center"}>
      <CardHeader
        fontSize={"22px"}
        fontWeight={"700"}
        display={"flex"}
        flexDir={"row"}
        justify={"space-between"}
      >
        <Checkbox colorScheme="brandScheme" mr="10px" mb="3px" />
        Task
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
          <Tbody>
            {tableDataTask.map((item, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox colorScheme="brandScheme" />
                  {item.name}
                </Td>
                <Td p={"5px"}>
                  <Box color="#A3AED0" padding={0}>
                    {item.icon}
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Task;
