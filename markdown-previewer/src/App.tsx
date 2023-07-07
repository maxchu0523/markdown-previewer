import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

const AppContainer = styled.div`
  font-family: 'Roboto';

`;

const HeaderContainer = styled.div`
  max-height : 20vh;
`;

const ContentContainer = styled.div`


`;

const MarkdownInputContainer = styled.div`
  min-height : 35vh;
  // width : 85vw;
  // justify-content: center;
`;

const MarkdownOutputContainer = styled.div`
  min-height : 35vh;
  background-color: WhiteSmoke;
  width : 100%;
  // justify-content: center;
`;


function App() {
  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    showGuide? dialogRef.current?.showModal() : dialogRef.current?.close();


  },[showGuide]);



  return (
    
    <AppContainer>
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
      <HeaderContainer>
        <Header onToggleGuide={() => setShowGuide(!showGuide)} />
        <dialog ref={dialogRef}>
          <MarkdownGuide />
          <button onClick={() => setShowGuide(false)}>Close</button>
        </dialog>
      </HeaderContainer>
      <ContentContainer>
        <MarkdownInputContainer>
          <MarkdownInput
            value={markdown}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setMarkdown(event.currentTarget.value)
            }
          />
        </MarkdownInputContainer>

        <MarkdownOutputContainer>
          <MarkdownOutput markdown={markdown} />
        </MarkdownOutputContainer>
      </ContentContainer>

    </AppContainer>
  );
}

export default App;
