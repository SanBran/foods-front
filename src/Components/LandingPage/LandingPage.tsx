"use client"
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
			<div className='fixed '>
				<Image src={imagen} className='w-100' alt='logo'/>
				<div className='flex justify-center items-center mt-5 mb-5 p-5'>
					<div
						className={`text-cyan-50 font-Satisfy w-40 text-2xl p-2 rounded-xl hover:opacity-100 border-2 transition duration-200`}
						onClick={() => router.push('/home')}>
						<span >Start</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;