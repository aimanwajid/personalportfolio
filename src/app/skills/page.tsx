
import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Skills = () => {
    return (
        <div className="min-h-screen bg-cover bg-center relative" 
             style={{ backgroundImage: 'url("/images/6.jpg")' }}> {/* Background image */}
             
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Slightly increased opacity */}

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Skills Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-20 rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold mb-4 text-center text-[#F9A602]">Skills</h2> {/* Updated Heading Color */}

                {/* Skills List */}
                <div className="flex mt-10 flex-col space-y-4">
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }} // Blue shadow
>
                        <h3 className="text-xl font-bold text-yellow-300">HTML</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Structured web pages with semantic markup.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">CSS</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Styling web pages with responsive designs.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">JavaScript</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Adding interactivity to web applications.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">TypeScript</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Static typing for better maintainability.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">Next.js</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Server-rendered React applications.</p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">React</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Building user interfaces with components.</p>
                    </div>
                    <div className="p-4 bg-gray-600 rounded-lg shadow-lg text-white text-center" style={{ boxShadow: '0 4px 15px rgba(0, 0, 255, 0.5)' }}>
                        <h3 className="text-xl font-bold text-yellow-300">Python</h3> {/* Updated Heading Color */}
                        <p className="mt-2">Learning Python for backend development and automation.</p>
                    </div>
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

export default Skills;