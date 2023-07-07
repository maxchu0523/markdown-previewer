import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`

`;

const MarkdownGuide = () => {
    const markdownSyntaxes = [
        'Headers: # H1, ## H2, ### H3, etc.',
        'Emphasis: *italic*, **bold**, ~~strikethrough~~',
        'Links: [Link Text](https://www.example.com)',
        'Lists: \n- Item 1\n- Item 2\n- Item 3',
        'Code Blocks: \n```\nconst code = "example";\n```',
    ];

    return (
        <GuideContainer>
            <h2>Markdown Guide</h2>
            <ul>
                {markdownSyntaxes.map((syntax, index) => (
                    <li key={index}>
                        <code>{syntax}</code>
                    </li>
                ))}
            </ul>
        </GuideContainer>
    );
};

export default MarkdownGuide;
