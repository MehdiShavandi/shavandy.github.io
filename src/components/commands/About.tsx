import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mehdi Shavandi</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt> DevOps Engineer </HighlightAlt> 
      </p>
      <p>
      Passionate and inspired by witnessing the growth of new technologies and global developments, I decided to join Devops. 
      As a person committed to innovation and progress, my goal at Devops is to use my experience in the fields of software development and information technology to solve the challenges facing these companies.
      I believe that the coordination between my technical capabilities and the strategic goals of Devops will help me to promote the success of these companies with active participation and continuous effort and achieve long-term goals with a dynamic team.
      </p>
    </AboutWrapper>
  );
};

export default About;

