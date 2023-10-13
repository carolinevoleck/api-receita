import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        header: {
          bg: "orange", 
        },
        "form-main": {
          width: "100%",
          bg: "amarelo.500", 
          color: "white",
          _hover: {
            bg: "white",
            color: "amarelo.500",
            border: "0.1875rem solid #FFD700",
          },
        },
        "form-secondary": {
          width: "100%",
          bg: "white",
          color: "amarelo.500", 
          _hover: {
            fontWeight: "normal",
            color: "amarelo.500",
            textDecoration: "underline",
            border: "0.1875rem solid #FFD700", 
          },
        },
        "add-recipe": {
          position: "fixed",
          borderRadius: "50%",
          fontSize: "32px",
          width: "2.5rem",
          padding: "0.375rem",
          bg: "amarelo.500",
          bottom: "0.9375rem",
          right: "0.9375rem",
          margin: "0.625rem",
          transition: "0.5s",
          _hover: {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  colors: {
    amarelo: {
      500: "#FFD700", 
    },
  },
});
