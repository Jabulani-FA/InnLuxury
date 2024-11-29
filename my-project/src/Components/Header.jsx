import InnLogo from '../assets/inn-luxury-transparent.png'

const Header = () => {
  return (
    <div className="w-full md:h-20 min-h-40 bg-green text-dark md:pt-px pt-10 md:flex items-center justify-around">
        <div className='md:mb-px mb-10 flex md:justify-start justify-center'>
          <img className='w-32' src={InnLogo} alt='Inn-Luxury'/>
        </div>
        <nav className='flex gap-4 flex md:justify-start justify-center'>
          <a href='#about' className='text-center'>Our Story</a>
          <a href='#patners'className='text-center'>Our Patners</a>
          <a href='#aim' className='text-center' >Our Aim</a>
          <a href='#book' className='text-center'>Book Exhibition</a>
        </nav>
    </div>
  );
};

export default Header;
