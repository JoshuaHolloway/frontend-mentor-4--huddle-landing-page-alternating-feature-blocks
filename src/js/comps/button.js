import styled from 'styled-components';

// ==============================================

const Button = styled.button`
  width: calc(${(props) => props.width}px - 35px);

  @media (min-width: 1400px) {
    width: ${(props) => props.width}px;
  }

  background: ${(props) => props.color};

  color: ${({ variant }) => {
    if (variant === 'primary') return 'white';
    if (variant === 'secondary') return 'black';
  }};
`;

// ==============================================

function F({ children, width = '100', variant = 'primary' }) {
  // --------------------------------------------

  const colors = { pink: '#ff52c1', white: '#ffffff' };

  // --------------------------------------------

  let color;
  if (variant === 'primary') color = colors['pink'];
  else if (variant === 'secondary') color = colors['white'];

  // --------------------------------------------

  return (
    <Button className='button' width={width} color={color} variant={variant}>
      {children}
    </Button>
  );
}

// ==============================================

export default F;
