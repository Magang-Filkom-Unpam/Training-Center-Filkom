import { createSystem, defaultConfig } from '@chakra-ui/react';

import '@fontsource/poppins';

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: { value: '#205781' },
                secondary: { value: '#F6F8D5' },
            },
            fonts: {
                heading: `'Poppins', sans-serif`,
                body: `'Poppins', sans-serif`,
            },
        },
    },
});
