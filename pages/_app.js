import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools";

// / chakura color
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });
// chakura responcive
const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
