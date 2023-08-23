"use client"
import Link from 'next/link';
import Image from 'next/image';
import imagen from './images/logo.png';
import { useRouter } from 'next/navigation';
const videoFood = require('./videos/food.mp4')


const LandingPage = () => {
	const router = useRouter();

	return (
		<div className='fixed flex items-center justify-center'>
			<video autoPlay muted loop src={videoFood} className='h-screen w-screen object-cover'>
				
			</video>
			<div className='fixed flex flex-col items-center gap-10 '>
				<Image src={imagen} className='' alt='logo'/>
				
					<Link className='flex justify-center text-slate-50 bg-orange-600 hover:scale-110 items-center w-1/5 py-3 rounded-lg' href={'/home'}>
					START
					</Link>
				
			</div>
		</div>
	);
};

export default LandingPage;