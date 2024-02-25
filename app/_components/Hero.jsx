import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative grid place-content-center py-20 px-6'>
            <div className='flex flex-col justify-center items-center mb-4'>
                <img src="fotoku.jpg" alt='...' width='250px' className='rounded-3xl border-spacing-3 border-gray-950' />
            </div>
            <div className='md:max-w-2xl max-w-md items-center text-center grid gap-1'>
                <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold'>
                    Hi I am <span className='text-primary'>Muhammad Rafi</span> a Backend Developer<span className='text-primary'>.</span>
                </h1>
                <p className='text-[0.8rem] max-w-md mx-auto'>
                    I am a student at SMKN 1 Boyolangu Tulungagung.
                    I am interested in learning programming because my dream is to become a programmer<span className='text-primary'>.</span>
                </p>
            </div>
            <div className='flex items-center justify-center gap-3 mt-5'>
                <Button asChild variant="outline">
                    <Link href="https://drive.google.com/file/d/13Qd_UvgMKmQl3I9E0JOVRSVygd97R6o5/view?usp=drivesdk">Download CV</Link>
                </Button>
                <Button asChild className="flex gap-1 items-center justify-center">
                    <Link href="https://github.com/raaf17">My Github</Link>
                </Button>
            </div>
        </section>
    )
}