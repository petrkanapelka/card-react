import './App.css';
import rectangle from './assets/img/Rectangle.svg'
import ArticleStyled, { articleContent } from './components/Article.styled';
import Box from './components/Box.styled';
import ButtonBox from './components/ButtonBox.styled';
import { ImgStyled } from './components/Img.styled';
import { TitleStyled } from './components/Title.styled';

function App() {
  return (
      <Box>
        <ImgStyled src={rectangle} alt="rectangle" />
        <TitleStyled>Headline</TitleStyled>
        <ArticleStyled content={articleContent}></ArticleStyled>
        <ButtonBox valuePrimary='Save' valueSecondary='See more'></ButtonBox>
      </Box>
  );
}

export default App;
