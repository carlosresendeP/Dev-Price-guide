import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import {Router}  from './routes'
import GlobalStyles from './Styles/GlobalSyles.js'
import {standardTheme} from './Styles/Themes/standard.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
