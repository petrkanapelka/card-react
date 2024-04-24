import styled from "styled-components";

export const articleContent = 'Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.';

const Article = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`
type ArticleContentType = {
    content: string;
}
function ArticleStyled(props: ArticleContentType) {
    return (
        <Article>{props.content}</Article>
    )
}

export default ArticleStyled