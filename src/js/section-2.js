import { Fragment } from 'react';

import Card from './comps/card';

import { data } from '../data/cards';

// ==============================================

export default function Section2() {
  return (
    <section className='cards gutters'>
      {data.map(({ key, position, img, title, content }) => (
        <Fragment key={key}>
          <Card position={position} title={title} content={content} img={img} />
        </Fragment>
      ))}
    </section>
  );
}

// ==============================================
