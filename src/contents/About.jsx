import { animate } from 'animejs';
import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ArnPogi from '../assets/arnpogi.png';
export default function About() {
    useEffect(() => {
        animate('.fade-in', {
            opacity: [0, 1],
            duration: 1000,
            translateY: [50, 0],
            easing: 'easeInOutQuad',
        })
    })
    return (
        <section className="text-white py-25 px-6">
            <div className="container mx-auto bg-slate-800 rounded-lg p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-10 overflow-hidden" style={{boxShadow: '0px 0px 10px rgba(218, 214, 214, 0.47)'}}>
                <div className="text-center lg:text-left flex flex-col justify-center order-1 lg:order-0 fade-in">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Hellow my name is<br/>
                        Arn Christian S. Rosales
                    </h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        I am a <span className="text-blue-400">
                            <Typewriter
                                words={['UX/UI Developer', 'Web Designer', 'Programer', 'Gamer']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300">
                        I've always been passionate about technology, and I love exploring how it can solve real-world problems.
                        In addition to my coursework, I enjoy working on projects that allow me to apply my skills, and I'm always looking to collaborate with others.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end items-center order-0 lg:order-1 fade-in">
                    <img src={ArnPogi} alt="ArnPogi" className="w-full h-auto rounded-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] border-2 border-blue-400" style={{boxShadow: '0px 0px 10px rgba(218, 214, 214, 0.47)'}}/>
                </div>
            </div>
        </section>
    );
}