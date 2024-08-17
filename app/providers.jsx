// app/providers.tsx
"use client"

import {
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react"
// import { MultiSelectTheme } from 'chakra-multiselect'

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "medium",
    borderRadius: "xl",
    background: "#000000",
  },
  variants: {
    solid: {
      bg: "#6176AE",
      color: "white",
      height: "50px",
      width: "100%",
      fontWeight: "bold",
    },
    outline: {
      bg: "transparent",
    },
  },
})

const theme = extendTheme({
  components: {
    Button,
    // MultiSelect: MultiSelectTheme
  },
})

export function ChakraProviders({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
