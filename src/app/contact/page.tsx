"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Button from "../components/button"; // Ensure path is correct
import Navbar from '../components/Navbar'; // Importing Navbar
import Footer from '../components/Footer'; // Importing Footer

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-cover bg-center relative"
             style={{ backgroundImage: 'url("/images/6.jpg")' }}> {/* Background image */}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>

            {/* Navbar */}
            <div className="relative z-10">
                <Navbar />
            </div>

            {/* Contact Section */}
            <div className="relative z-10 p-8 mx-10 mt-24 bg-white bg-opacity-30 rounded-lg shadow-xl" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }} // Orange shadow
>
                <h1 className="text-4xl font-bold mb-4 text-center text-[#F9A602]">Contact Me</h1> {/* Updated Heading Color */}

                {/* Contact Form */}
                <form className="space-y-6" 
>
                    <div>
                        <label className="block text-lg font-bold mb-2"  htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Name" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Email" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full p-3 bg-gray-800 text-white rounded-md"
                            placeholder="Your Message" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }}
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <Button props="Send Message" />
                    </div>
                </form>

                {/* Additional Information */}
                <div className="mt-8 text-white" style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.5)' }} // Orange shadow
>
                    <h2 className="text-2xl font-bold mb-2 text-center text-[#F9A602]">Get in Touch</h2>
                    <p className="text-lg text-center mb-2">Feel free to reach out for any inquiries or collaborations!</p>
                    <p className="text-lg text-center">You can also connect with me on:</p>
                    <ul className="list-disc list-inside text-center">
                        <li>Email: <a href="ommeaimanwajid@gmail.com" className="underline">ommeaimanwajid@gmail.com</a></li>
                
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

export default Contact;