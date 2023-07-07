import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const OutputContainer = styled.div`
  overflow-wrap: break-word;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
