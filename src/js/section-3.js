import Button from '../js/comps/button';

// ==============================================

export default function Section3() {
  return (
    <section className='banner'>
      <div className='top'></div>
      <div className='bottom'></div>
      <div className='container shadow'>
        <h3>Ready To Build Your Community?</h3>
        <Button width='200' variant='primary'>
          Get Started
        </Button>
      </div>
    </section>
  );
}
