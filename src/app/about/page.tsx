"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center relative" 
             style={{ backgroundImage: 'url("/images/6.jpg")' }}> {/* Background image */}
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Increased opacity */}

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* About Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-30 rounded-lg shadow-lg" style={{ boxShadow: '0 4px 15px rgba(0, 128, 128, 0.5)' }} // Teal shadow
>
                <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602]">About Me</h1> {/* Updated Heading Color */}

                {/* Image Section */}
                <div className="flex justify-center mb-8">
                    <img 
                        src="/images/Aiman.jpg" // Replace with your actual image path
                        alt="Aiman wajid"
                        className="w-32 h-32 rounded-full border-4 border-gray-800 shadow-lg" // Added shadow for better appearance
                    />
                </div>

                {/* Description Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ boxShadow: '0 4px 15px rgba(0, 128, 128, 0.5)' }} // Teal shadow
>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
                        <h2 className="text-2xl font-bold mb-2 text-[#F9A602]">Who I Am</h2>
                        <p className="text-lg">
                            My name is Aiman wajid, a web developer with 1.5 years of experience in building interactive web applications. 
                            I specialize in HTML, CSS, TypeScript, JavaScript, and Next.js, and have a passion for creating dynamic and responsive user experiences.
                        </p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white">
                        <h2 className="text-2xl font-bold mb-2 text-[#F9A602]">My Journey</h2>
                        <p className="text-lg">
                            Throughout my career, I've worked on various projects, including a currency converter and a showroom website, 
                            which have honed my skills in both front-end and back-end development. 
                            I am dedicated to continuous learning and improvement in the ever-evolving field of web development.
                        </p>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="p-6 bg-gray-800 rounded-lg shadow-md text-white mt-6"style={{ boxShadow: '0 4px 15px rgba(0, 128, 128, 0.5)' }} // Teal shadow
>
                    <h2 className="text-2xl font-bold mb-2 text-[#F9A602]">Skills & Technologies</h2>
                    <ul className="list-disc list-inside">
                        <li>HTML: Creating structured web pages with semantic markup.</li>
                        <li>CSS: Styling web pages with responsive designs and modern layouts.</li>
                        <li>JavaScript: Adding interactivity and dynamic features to web applications.</li>
                        <li>TypeScript: Enhancing JavaScript code with static typing for better maintainability.</li>
                        <li>Next.js: Building server-rendered React applications with ease.</li>
                        <li>Python: Learning Python for backend development and automation.</li>
                    </ul>
                </div>

                {/* Go Back Button */}
                <div className="text-center mt-8">
                    <Link href={"/"}>
                        <Button props="Go Back Home" />
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 mt-10">
                <Footer />
            </div>
        </div>
    );
};

export default About;