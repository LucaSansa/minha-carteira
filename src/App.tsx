import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import { useTheme } from './hooks/theme';

// import Layout from './components/Layout';
// import Dashboard from './pages/Dashboard';
// import List from './pages/List';


import Routes from './routes';

const App: React.FC = () => {
    const {theme} = useTheme();
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    )
}

export default App;