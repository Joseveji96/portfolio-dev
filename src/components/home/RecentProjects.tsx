"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { proyects } from '@/lib/data';
import FlipNumber from '../common/FlipNumber';
import ProjectCursor from '../common/ProjectCursor';

const RecentProjects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const projectContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const handleScroll = () => {
            if (!section) return;

            const sectionRect = section.getBoundingClientRect();
            if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
                projectRefs.current.forEach((ref, index) => {
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
                            setActiveProject(index);
                        }
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const container = projectContainerRefs.current[index];
        if (!container) return;

        const rect = container.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div className="font-dm w-full p-4 sm:p-8 md:p-10 lg:p-12" id="recent-projects">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col pb-6 sm:pb-8 md:pb-10 border-b-2 border-[#a2a2a2d6]">
                <div className="w-fit">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase font-bold">Recent Projects</h1>
                    <div className="mt-3 sm:mt-4 md:mt-5 h-[1.5px] bg-[#555050]" />
                </div>

                <div className="flex flex-col justify-between mt-4 sm:mt-5 md:mt-7">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <h2 className="text-lg sm:text-xl md:text-2xl text-[#153647] mb-2 lg:mb-0">
                            [Selected Works]
                        </h2>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold w-full lg:w-4/5">
                            Carefully selected projects, created with dedication and passion to achieve significant results and leave a mark.
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div ref={sectionRef} className="relative flex flex-col lg:flex-row">
                <div className="w-full lg:w-[55%]">
                    {proyects.map((project, id) => (
                        <div
                            key={id}
                            ref={el => {
                                projectRefs.current[id] = el;
                            }}
                            className="min-h-screen sm:mb-16 md:mb-20"
                        >
                            <div className="h-screen flex flex-col">
                                <div
                                    ref={el => {
                                        projectContainerRefs.current[id] = el;
                                    }}
                                    className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[90vh] group cursor-none"
                                    onMouseMove={(e) => handleMouseMove(e, id)}
                                >
                                    <Link
                                        href={project.url || '#'}
                                        target="_blank"
                                        className="block w-full h-full"
                                    >
                                        <ProjectCursor mousePosition={mousePosition} />

                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            width={900}
                                            height={0}
                                            className="absolute h-full w-full object-cover opacity-80"
                                            style={{ borderRadius: 8 }}
                                        />

                                        {/* Work */}
                                        <div className="absolute inset-0 z-10 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center pointer-events-none">
                                            <div className="flex flex-col gap-2 w-[90%] justify-center">
                                                <div
                                                    className="w-fit font-medium text-base sm:text-lg md:text-xl lg:text-2xl uppercase px-2 sm:px-3 flex items-center rounded-medium"
                                                    style={{ backgroundColor: project.backgroundColor }}
                                                >
                                                    <h3 className="leading-none">{project.sector}</h3>
                                                </div>
                                                <div className={`flex flex-wrap gap-2 ${project.sector === "Mobile Application" ? "max-sm:w-2/4" : "max-sm:w-auto"}`}>
                                                    {project.workOn.map((work, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-blurDark w-fit text-white font-medium text-sm sm:text-base md:text-lg uppercase px-2 flex items-center rounded-medium"
                                                        >
                                                            {work}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {project.sector === "Mobile Application" ?
                                                (
                                                    project.title === "TlalTec" ? (
                                                        <Image
                                                            src={project.video}
                                                            alt={`${project.title} preview`}
                                                            width={300}
                                                            height={0}
                                                            className="absolute z-10 self-end -translate-x-5"
                                                            style={{ borderRadius: 12, width: "30%" }}
                                                        />
                                                    ) : (
                                                        <video
                                                            src={project.video}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            className="absolute z-10 self-end -translate-x-5"
                                                            width="30%"
                                                            style={{ borderRadius: 12 }}
                                                        />
                                                    )
                                                ) : (
                                                    <video
                                                        src={project.video}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        className="relative z-10 self-center"
                                                        width="90%"
                                                        style={{ borderRadius: 12 }}
                                                    />
                                                )
                                            }

                                        </div>
                                    </Link>
                                </div>

                                {/* Resto del contenido permanece igual */}
                                <div className='w-full flex flex-row items-center justify-between mt-4 sm:mt-5 md:mt-6'>
                                    <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>{project.title}</h1>
                                    <h2 className='text-sm sm:text-base md:text-lg'>{project.date}</h2>
                                </div>

                                <div className="flex flex-row lg:hidden gap-10 mt-4">
                                    <div className="text-lg sm:text-xl md:text-2xl font-bold">
                                        <FlipNumber number={id + 1} />
                                    </div>
                                    <p className="text-base sm:text-lg md:text-xl font-extralight">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fixed Info Container para pantallas md y mayores */}
                <div className="hidden lg:block w-full lg:w-[45%] lg:sticky lg:top-0 lg:h-screen mt-8 lg:mt-0">
                    <div className="h-full">
                        <div className="flex flex-col w-full h-full">
                            <div className="transition-all duration-500 transform flex flex-col h-full justify-between">
                                <div>
                                    {/* Contador para pantallas md y mayores */}
                                    <FlipNumber number={proyects[activeProject].id} />
                                    <div className='flex w-full justify-end'>
                                        <p className="text-base sm:text-lg md:text-xl font-extralight w-full lg:w-[80%] text-left lg:text-right mb-8 lg:mb-16">
                                            {proyects[activeProject].description}
                                        </p>
                                    </div>
                                </div>

                                <div className='mb-6 sm:mb-8 md:mb-10'>
                                    <h1 className="mb-2 sm:mb-3 md:mb-4 w-full flex justify-start lg:justify-end text-xl sm:text-2xl">
                                        {"{"} <span className="font-semibold">GENERAL STACK</span> {"}"}
                                    </h1>

                                    <div className='font-extralight text-base sm:text-lg md:text-xl'>
                                        <div className="flex flex-wrap justify-start lg:justify-end">
                                            {proyects[activeProject].stackUX.map((stack, idx) => (
                                                <span key={idx} className="mr-2 mb-1">
                                                    ({stack})
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap justify-start lg:justify-end">
                                            {proyects[activeProject].stackFront.map((stack, idx) => (
                                                <span key={idx} className="mr-2 mb-1">
                                                    ({stack})
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap justify-start lg:justify-end">
                                            {proyects[activeProject].stackBack.map((stack, idx) => (
                                                <span key={idx} className="mr-2 mb-1">
                                                    ({stack})
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentProjects;