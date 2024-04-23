import styled from "styled-components";

const articleContent = 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.';

const Article = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`

function ArticleStyled() {
    return (
        <Article>{articleContent}</Article>
    )
}

export default ArticleStyled