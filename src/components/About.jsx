import React from 'react';

function About() {
    return (
        <>
            <section className="min-h-screen flex justify-center items-center">
                <div>
                    <a className="block max-w-sm p-6 bg-stone-300 border border-gray-200 rounded-lg shadow-2xl dark:border-gray-700 mt-auto mb-4 mx-12 max-w-screen-sm">
                    <h5 className=" underline underline-offset-8 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-2">ABOUT</h5>
    <p className=" font-normal text-gray-700 dark:text-gray-400 text-center text-3xl">Hello there! I am Jopher Joe Ribo, 19 years of age  who loves diving into tech stuff and exploring my creative side. Web development is my playground, where I blend my 
    tech curiosity with artistic ideas to build cool things online.</p>
                    </a>
                </div>
            </section>
            <div className="flex justify-center items-center">
                <a className="block max-w-sm p-6 bg-stone-300 border border-gray-200 rounded-lg shadow-2xl dark:border-gray-700 mt-auto mb-4 mx-12 max-w-screen-sm">
                <h5 className=" underline underline-offset-8 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-2">EDUCATION</h5>
                </a>
            </div>
            <section className="flex flex-wrap flex items flex justify-center items-center mb-8">
                <div>
                    <a className="block max-w-sm p-6 bg-stone-300 border border-gray-200 rounded-lg shadow-2xl dark:border-gray-700 mt-auto mb-4 mx-12 text-center">
                        <div className="mx-auto flex justify-center">
                            <img src="elementary-logo.jpg" alt="Elementary Logo" />
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2010-2015</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">EGCS</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">Graduated at</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">Ernesting Gonzalez Central School</p>
                    </a>
                </div>
                <div>
                    <a className="block max-w-sm p-6 bg-stone-300 border border-gray-200 rounded-lg shadow-2xl dark:border-gray-700 mt-auto mb-4 mx-12 text-center">
                        <div className="mx-auto flex justify-center">
                            <img src="highschool-logo.jpg" alt="High School Logo" />
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2015-2019</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">LSCA</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">Graduated at</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">LIVING STONE CHRISTIAN ACADEMY</p>
                    </a>
                </div>
                <div>
                    <a className="block max-w-sm p-6 bg-stone-300 border border-gray-200 rounded-lg shadow-2xl dark:border-gray-700 mt-auto mb-4 mx-12 text-center">
                        <div className="mx-auto flex justify-center">
                            <img src="seniorhigh-logo.png" alt="Senior High Logo" />
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">2019-2021</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">PUCU</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">Graduated at</p>
    <p className="font-normal text-gray-700 dark:text-gray-400">PHINMA UPANG COLLEGE OF URDANETA</p>
                    </a>
                </div>
            </section>
        </>
    );
}

export default About;
