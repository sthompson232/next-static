import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    colors: {
        primary: {
            100: "#ff0000"
        },
        secondary: {
            100: "#00ff00"
        }
    },
})

export default theme