import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import colors from "./colors.utils";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  styles: {
    global: {
      body: {
        bg: colors.primaryBg,
        color: colors.headline,
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: colors.button.buy,
          color: "white",
          _hover: {
            bg: colors.button.hover.buy,
          },
        },
        outline: {
          borderColor: colors.stroke,
          color: colors.bodyText,
          _hover: {
            bg: colors.whiteAlpha[50],
          },
        },
        ghost: {
          color: colors.bodyText,
          _hover: {
            bg: colors.whiteAlpha[50],
          },
        },
      },
      defaultProps: {
        size: "sm",
      },
    },
    Table: {
      variants: {
        simple: {
          th: {
            borderColor: colors.stroke,
            color: colors.bodyText,
            fontWeight: "normal",
            textTransform: "none",
            letterSpacing: "normal",
          },
          td: {
            borderColor: colors.stroke,
          },
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: colors.primaryBg,
            border: "none",
            _focus: {
              boxShadow: "none",
            },
            _hover: {
              bg: colors.whiteAlpha[50],
            },
            _placeholder: {
              color: colors.bodyText,
            },
          },
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: colors.secondaryBg,
          borderColor: colors.stroke,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "md",
          p: 1,
        },
        item: {
          bg: "transparent",
          _hover: {
            bg: colors.whiteAlpha[50],
          },
          _focus: {
            bg: colors.whiteAlpha[50],
          },
        },
      },
    },
  },
});

export default theme;
