import Button from './comps/button';
import logo from '../img/logo.svg';
// import bg_mobile from '../img/bg-hero-mobile.svg';
// import bg_desktop from '../img/bg-hero-desktop.svg';
import img from '../img/illustration-mockups.svg';

// ==============================================

export default function Section1() {
  return (
    <section className='hero'>
      <div className='gutters'>
        <header className='A'>
          <img className='logo' src={logo} alt='' />
          <Button width='150' variant='secondary'>
            Try It Free
          </Button>
        </header>
        <div className='B'>
          <h2>Build The Community Your Fans Will Love</h2>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{' '}
          </p>

          <Button width='220' variant='primary'>
            Get Started for Free
          </Button>
        </div>
        <div className='C'>
          <img src={img} alt='' className='hero-image' />
        </div>
      </div>
    </section>
  );
}
