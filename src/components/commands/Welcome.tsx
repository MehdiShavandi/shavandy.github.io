import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
                       __                          
 |\/|  _  |_   _| o   (_  |_   _.     _. ._   _| o 
 |  | (/_ | | (_| |   __) | | (_| \/ (_| | | (_| | 
                                                   
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
                       __                          
 |\/|  _  |_   _| o   (_  |_   _.     _. ._   _| o 
 |  | (/_ | | (_| |   __) | | (_| \/ (_| | | (_| | 
                                                   
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator></Seperator>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

