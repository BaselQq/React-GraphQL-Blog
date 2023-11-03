import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: `'Itim', itim`,
        body: `'Itim', itim`
    },
    breakpoints: {
        sm: "150%",
        md: "125%",
        // lg: "960px",
        // xl: "1200px"
    }
});

export default theme;