import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.scss';
import Theme from './theme';
import Header from './components/Header';
import Tabset from './components/Tabset';
import { Container } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Header></Header>
        <Container>
          <br/>
          <Tabset></Tabset>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
