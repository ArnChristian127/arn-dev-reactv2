import { useState, useEffect } from 'react';
import { animate } from 'animejs';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setAnimate] = useState(true);
    const navLinks = [
        {label: "About", href: "#about"},
        {label: "Skills", href: "#skills"},
        {label: "Projects", href: "#projects"},
        {label: "Experience", href: "#experience"},
        {label: "Education", href: "#education"},
        {label: "Contact", href: "#contact"},
    ];
    const toggleButton = () => {
        if (isAnimating) return;
        setAnimate(true);
        if (isOpen) {
            animate('.slide-in-out', {
                translateY: ['0', '-100%'],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeOutCubic',
                onComplete: () => {
                    setIsOpen(false);
                    setAnimate(true);
                }
            })
        } else {
            setIsOpen(true);
        }
    };
    useEffect(() => {
        animate('.slide-in-out', {
            translateY: ['-100%', '0'],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic',
            onComplete: () => {
                setAnimate(false);
            }
        })
    }, [isOpen]);
    return (
        <>
            <nav className="bg-slate-800 text-white px-6 py-3 fixed top-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl select-none">
                        Arn<span className="text-blue-400">Dev</span>
                    </h1>
                    <ul className="flex space-x-6 font-bold hidden lg:flex">
                        {navLinks.map((link, index) => (
                            <li key={index}><a href={link.label} className="hover:text-blue-400 focus:text-blue-400 transition-colors duration-300">{link.label}</a></li>
                        ))}
                    </ul>
                    <button className="bg-blue-400 px-3 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-500 focus:bg-blue-500 transition-colors duration-300 hidden lg:flex">
                        Github Profile
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-full h-auto max-w-[30px]" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                    </button>
                    <button onClick={() => toggleButton()} className="lg:hidden bg-blue-400 p-1 rounded-lg hover:bg-blue-500 focus:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-full h-auto max-w-[20px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="overflow-hidden">
                    <nav className="bg-slate-800 text-white px-6 py-4 lg:hidden fixed top-14 w-full z-40 slide-in-out rounded-b-3xl">
                        <div className="container mx-auto flex flex-col items-start gap-4">
                            <ul className="space-y-4 text-sm font-bold">
                                {navLinks.map((link, index) => (
                                    <li key={index}><a href={link.label} className="hover:text-blue-400 focus:text-blue-400 transition-colors duration-300">{link.label}</a></li>
                                ))}
                            </ul>
                            <button className="bg-blue-400 px-3 py-1 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-500 focus:bg-blue-500 transition-colors duration-300 text-sm">
                                Github Profile
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-full h-auto max-w-[30px]" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}