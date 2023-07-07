import React from 'react';
import styled from 'styled-components';


const StyledTextArea = styled.textarea`
resize : none;
min-height : 35vh;
min-width : 100%;
`;

interface MarkdownInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
    return (
        <StyledTextArea value={value} onChange={onChange} />
    );
};

export default MarkdownInput;
