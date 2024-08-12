import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from './theme.ts';
import {store} from './app/store.ts';
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
