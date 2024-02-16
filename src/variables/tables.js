import { Progress } from "@chakra-ui/react";
import {
  MdCheckCircle,
  MdCancel,
  MdError,
  MdDragIndicator,
} from "react-icons/md";

export const tableDataCheck = [
  {
    checked: false,
    name: "Horizon UI PRO",
    progress: "17.5%",
    quantity: "2458",
    date: "12 Jan 2021",
  },
  {
    checked: true,
    name: "Weekly Update",
    progress: "21.3%",
    quantity: "1024",
    date: "13 Mar 2021",
  },
  {
    checked: true,
    name: "Horizon UI Free",
    progress: "10.8%",
    quantity: "1485",
    date: "21 Feb 2021",
  },
  {
    checked: true,
    name: "Venus 3D Asset",
    progress: "31.5%",
    quantity: "858",
    date: "24 Jan 2021",
  },
  {
    checked: false,
    name: "Marketplace",
    progress: "12.2%",
    quantity: "258",
    date: "24 Oct 2022",
  },
];

export const tableDataComplex = [
  {
    name: "Horizon UI PRO",
    icon: <MdCheckCircle color="#01B574" fontSize="20px" />,
    status: "Approved",
    date: "18 Apr 2022",
    progress: (
      <Progress
        value={70}
        colorScheme="brandScheme"
        w="108px"
        bg="secondaryGray.300"
      />
    ),
  },
  {
    name: "Horizon UI Free",
    icon: <MdCancel color="#E31A1A" fontSize="20px" />,
    status: "Disable",
    date: "18 Apr 2022",
    progress: (
      <Progress
        value={30}
        colorScheme="brandScheme"
        w="108px"
        bg="secondaryGray.300"
      />
    ),
  },
  {
    name: "Marketplace",
    icon: <MdError color="#FFB547" fontSize="20px" />,
    status: "Error",
    date: "20 May 2021",
    progress: (
      <Progress
        value={90}
        colorScheme="brandScheme"
        w="108px"
        bg="secondaryGray.300"
      />
    ),
  },
  {
    name: "Weekly Updates",
    icon: <MdCheckCircle color="#01B574" fontSize="20px" />,
    status: "Approved",
    date: "12 Jul 2021",
    progress: (
      <Progress
        value={50}
        colorScheme="brandScheme"
        w="108px"
        bg="secondaryGray.300"
      />
    ),
  },
];

export const tableDataTask = [
  {
    checked: false,
    name: "Horizon UI PRO",
    icon: <MdDragIndicator fontSize="20px" />,
  },
  {
    checked: true,
    name: "Dashboard Builder",
    icon: <MdDragIndicator fontSize="20px" />,
  },
  {
    checked: true,
    name: "Mobile App Design",
    icon: <MdDragIndicator fontSize="20px" />,
  },
  {
    checked: false,
    name: "Illustrations",
    icon: <MdDragIndicator fontSize="20px" />,
  },
  {
    checked: true,
    name: "Promotional LP",
    icon: <MdDragIndicator fontSize="20px" />,
  },
];
