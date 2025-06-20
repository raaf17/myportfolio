import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative grid place-content-center py-20 px-6'>
            <div className='flex flex-col justify-center items-center mb-4'>
                <img src="foto.jpg" alt='rafi' width='250px' className='rounded-3xl border-spacing-3 border-gray-950' />
            </div>
            <div className='md:max-w-2xl max-w-md items-center text-center grid gap-1'>
                <h1 className='md:text-4xl lg:text-5xl text-3xl font-bold'>
                    Hi I am <span className='text-primary'>Muhammad Rafi</span> a Fullstack Developer<span className='text-primary'>.</span>
                </h1>
                <p className='text-[0.8rem] max-w-md mx-auto'>
                    A passionate Fullstack Developer dedicated to building modern, responsive, and efficient web applications.
                    I craft seamless user experiences and robust backend systems to bring ideas to life<span className='text-primary'>.</span>
                </p>
            </div>
            <div className='flex items-center justify-center gap-3 mt-5'>
                <Button asChild variant="outline">
                    <Link href="https://drive.google.com/file/d/1nyvWO4EZLtVolb9kBvba25tsXbGpPv1y/view?usp=drive_link">Download CV</Link>
                </Button>
                <Button asChild className="flex gap-1 items-center justify-center">
                    <Link href="https://github.com/raaf17">My Github</Link>
                </Button>
            </div>
        </section>
    )
}