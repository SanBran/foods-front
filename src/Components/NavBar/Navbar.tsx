'use client';
import styles from './NavBar.module.css';
import Image from 'next/image';
import logoNormal from './images/food.png';
import { BiSearchAlt } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';

const NavBar = () => {
	
	return (
		<nav
			className={`${styles['bg-nav']} fixed px-10 z-50 h-20 w-full flex  top-0 text-white justify-between items-center `}
		>
			
				<Image
					src={logoNormal}
					className=' w-52 p-5'
					alt='logo'
				/>
		

			
				<div className='  relative w-2/5'>
					<button
						className='absolute flex justify-center items-center right-2 top-1  h-9 w-9 rounded-full p-1 text-black bg-aqua-400 shadow-boxShadow-custom'
						>
						<BiSearchAlt
							className=' text-2xl text-black'
							style={{ pointerEvents: 'none' }}
						/>
					</button>

					<input
						type='text'
						className=' pl-4 h-11 rounded-full w-full outline-none text-gray-700 text-lg '
					/>
				</div>

				
						 <BiUserCircle className=' text text-5xl font-thin cursor-pointer mr-10' />
					
					
				
			
		</nav>
	);
};

export default NavBar;
