import Footer from '@/components/organisms/Footer.jsx';
import Header from '@/components/organisms/Header.jsx';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <Header />

            <Box as='main'>
                <Outlet />
            </Box>

            <Footer />
        </>
    );
}

export default App;
