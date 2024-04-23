import './App.css';
import rectangle from './assets/img/Rectangle.svg'
import ArticleStyled from './components/Article.styled';
import Box from './components/Box.styled';
import ButtonBox from './components/ButtonBox.styled';
import { ImgStyled } from './components/Img.styled';
import { TitleStyled } from './components/Title.styled';

function App() {
  return (
      <Box>
        <ImgStyled src={rectangle} alt="rectangle" />
        <TitleStyled>Headline</TitleStyled>
        <ArticleStyled></ArticleStyled>
        <ButtonBox></ButtonBox>
      </Box>
  );
}

export default App;
