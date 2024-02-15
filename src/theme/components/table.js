import { mode } from "@chakra-ui/theme-tools";
export const tableStyles = {
  components: {
    Table: {
      baseStyle: {
        thead: {
          tr: {
            color: "#A0AEC0",
            borderBottom: "1px solid #E2E8F0",
            fontSize: "12px",
          },
        },
        tbody: {
          tr: {
            color: "#1B2559",
            fontSize: "14px",
            fontWeight: "700",
            _hover: {
              bg: "gray.100",
            },
          },
          label: {
            m: "3px 8px 3px 0",
            _checked: {
              span: {
                bg: "primary",
                border: "1px solid primary",
                _hover: {
                  bg: "primary",
                  border: "1px solid primary",
                },
              },
            },
          },
        },
      },
    },
  },
};
