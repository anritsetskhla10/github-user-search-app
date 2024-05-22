import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from 'react';
import GlobalStyles from "./styles/GlobalStyles";


function App() {

  const [mode, setMode] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles mode={mode}/>
      <Header mode={mode} setMode={setMode}></Header>
      <Main mode={mode} ></Main>
    </>
  )
}

export default App
