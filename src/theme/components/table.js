import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
  components: {
    Table: {
      baseStyle: {
        thead: {
          th: {
            color: "#A3AED0",
            borderBottom: "1px solid #E2E8F0",
            fontSize: "12px",
          },
        },
        tbody: {
          td: {
            color: "#1B2559",
            fontSize: "14px",
            fontWeight: "700",
            _hover: {
              bg: "gray.100",
            },
          },
          label: {
            m: "3px 8px 3px 0",
          },
        },
      },
    },
  },
};
