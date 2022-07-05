import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-10 py-[1.375rem] desktop:py-[1.375rem] desktop:px-[10.563rem]'>
      <div className='flex items-center justify-between gap-[3.625rem]'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <ul className='flex items-center gap-8'>
          <li>
            <Link className='font-nav' to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link className='font-nav' to='/locations'>
              Location
            </Link>
          </li>
          <li>
            <Link className='font-nav' to='/careers'>
              Careers
            </Link>
          </li>
        </ul>
      </div>
      <Link to='' className='btn'>
        Get Scootin
      </Link>
    </nav>
  );
};

export default Navbar;
