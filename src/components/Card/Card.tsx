import { Wrapper } from './Card.styles';

interface Props {
  onClick: () => void;
  backgroundImage?: string;
  children?: React.ReactNode;
}
const Card: React.FC<Props> = ({ onClick, backgroundImage, children }) => {
  return (
    <Wrapper backgroundImage={backgroundImage} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Card;
