import styled from 'styled-components';

import { css } from '../utils/css';

// ==============================================

const Card = styled.div`
  border-radius: ${css.get('rad')};

  padding: ${css.get('pad')};

  min-width: ${css.get('min-width')};

  &:first-child {
    margin-top: 30px;
  }
  margin-bottom: 30px;

  display: flex;

  @media (max-width: ${css.get('break')}) {
    flex-direction: column;
    text-align: center;
  }
  @media (min-width: ${css.get('break')}) {
    flex-direction: ${({ position }) => {
      if (position === 'left') return 'row';
      if (position === 'right') return 'row-reverse';
    }};
  }

  img,
  div {
    margin: auto auto;
  }

  img {
    width: 100%;
    max-width: 350px;
  }

  div {
    width: 100%;
    max-width: 700px;

    h4 {
      margin-bottom: 1.1rem;
    }
    p {
      color: ${css.get('text-secondary')};
    }
  }
`;

// ==============================================

export default function F({ position, img, title, content }) {
  return (
    <Card position={position} className='shadow'>
      <img src={img} alt='' />

      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </Card>
  );
}

// ==============================================
