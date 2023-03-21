import { useState } from "react";

import GlobalStyles from "./styles/GlobalStyles";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header";
import { About } from "./components/About";
import { Articles } from "./components/Articles";
import { Sabscribe } from "./components/Sabscribe";

function App() {
  const [ theme, setTheme ] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header 
        toggleTheme={toggleTheme}
      />
      <About />
      <Articles />
      <Sabscribe />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;