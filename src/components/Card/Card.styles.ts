import styled from 'styled-components';

const Wrapper = styled.button<{ backgroundImage?: string }>((props) => ({
  width: '200px',
  height: '300px',
  borderRadius: '6px',
  boxShadow:
    'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  backgroundImage: `url(${props.backgroundImage})}`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  ':hover': {
    cursor: 'pointer',
    opacity: '0.7',
    transition: '0.3s',
  },
}));

export { Wrapper };
