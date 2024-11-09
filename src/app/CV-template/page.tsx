"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const CVTemplate: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center relative"
             style={{ backgroundImage: 'url("/images/6.jpg")' }}> {/* Background image */}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* CV Template Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-30 rounded-lg shadow-xl" style={{ boxShadow: '0 4px 15px rgba(0, 255, 0, 0.5)' }} // Green shadow
>
                <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602]">CV Template</h1> {/* Updated Heading Color */}

                {/* CV Content */}
                <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg text-white" style={{ boxShadow: '0 4px 15px rgba(0, 255, 0, 0.5)' }} // Green shadow
>
                    <h2 className="text-2xl font-bold mb-2 text-[#F9A602]">Personal Information</h2> {/* Updated Heading Color */}
                    <p>Name: <span className="font-semibold">Aiman wajid</span></p>
                    <p>Email: <span className="font-semibold">mominshykh7@gmail.com</span></p>
                    <p>Phone: <span className="font-semibold">0315-2309503</span></p>

                    <h2 className="text-2xl font-bold mb-2 mt-4 text-[#F9A602]">Education</h2> {/* Updated Heading Color */}
                    <p><span className="font-semibold">INTERMEDIATE:</span> sir syed college (2019)</p>
                    <p><span className="font-semibold">MATRIC:</span> the educator (2021)</p>

                    <h2 className="text-2xl font-bold mb-2 mt-4 text-[#F9A602]">Skills</h2> {/* Updated Heading Color */}
                    <ul className="list-disc list-inside">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Next.js</li>
                        <li>Python</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2 mt-4 text-[#F9A602]">Work Experience</h2> {/* Updated Heading Color */}
                    <p className="font-semibold">Student - Giaic Institute</p>
                    <p>currently serving as the class leader. I am pursuing my studies in HTML, CSS, and TypeScript, and gaining experience in compiling and running JavaScript applications. In my second quarter, I am mastering Next.js, enhancing my web development skills through practical projects.</p>
                    
                    <p className="font-semibold mt-4">Student - Piaic Institute</p>
                    <p>Learning Generative AI with a focus on code generation and practical Python development. Completed my first quarter, actively participating in hands-on projects to solidify my programming skills.</p>
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

export default CVTemplate;