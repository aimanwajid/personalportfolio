import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover bg-center relative z-10" 
         style={{ backgroundImage: 'url("/images/6.jpg")'      }}>
    
      <div className="absolute inset-0 bg-black opacity-40"></div>
   
      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center mt-24">
        <img 
          src="/images/Aiman.jpg" 
          alt="Aiman wajid" 
          className="mx-auto rounded-full w-32 h-32 border-4 border-emerald-400 shadow-lg" 
        />
    <h1 className="text-6xl mt-7 font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-400 to-green-300">
    Welcome to My Portfolio
</h1>





        <p className="mt-4 text-lg text-gray-300">I am Aiman wajid, a passionate web developer.</p>
        <Link href="/projects">
          <button className="mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300">
            View My Projects
          </button>
        </Link>
      </div>

      {/* Key Achievements Section */}
      <section className="relative z-10 p-8 mt-10 mx-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm" style={{ boxShadow: '0 4px 15px rgba(255, 255, 0, 0.5)' }} // Yellow shadow
>
        <h2 className="text-center text-3xl font-bold text-[#F9A602]">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Achievement Cards */}
          {[
            { title: "5+", description: "Projects Completed" },
            { title: "2 Years", description: "Of Experience" },
            { title: "1+", description: "Hackathons Completed" },
            { title: "4+", description: "Technologies Mastered" },
            { title: "2+", description: "Projects in Development" },
            { title: "Class Leader", description: "Leadership Role" }
          ].map((achievement, index) => (
            <div key={index} className="p-6 rounded-md bg-gray-900 bg-opacity-40 text-center">
              <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 p-8 mt-24 mx-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm" style={{ boxShadow: '0 4px 15px rgba(255, 255, 0, 0.5)' }} // Yellow shadow
>
        <h2 className="text-center text-3xl font-bold text-[#F9A602]">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Project Cards */}
          {[
            {
              title: "Hackathon Project: Dynamic Resume Builder",
              description: "An interactive web application that enables users to effortlessly create, customize, and download resumes. Featuring toggleable sections, shareable links, and PDF export, this project showcases my skills in HTML, CSS, TypeScript, and Next.js.",
              link: "http://cv-template-builder.vercel.app",
            },
            {
              title: "My Portfolio: Showcasing Web Development Skills",
              description: "A fully responsive and interactive portfolio website that highlights my expertise in web development, including React, Next.js, and Tailwind CSS. This project displays my completed projects, skills, and experience, providing potential clients with a clear view of my abilities and professionalism.",
              link: "#", // Update with actual project link
            }
          ].map((project, index) => (
            <div key={index} className="p-6 rounded-md bg-gray-900 bg-opacity-40 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 text-gray-300">{project.description}</p>
              <Link href={project.link}>
                <span className="text-blue-400 mt-4 hover:underline">View Project</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="relative z-10 p-8 mt-24 mx-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm" style={{ boxShadow: '0 4px 15px rgba(255, 255, 0, 0.5)' }} // Yellow shadow
>
        <h2 className="text-center text-3xl font-bold text-[#F9A602]">Let's Collaborate!</h2>
        <p className="text-center mt-4 text-gray-300">
          I'm always open to discussing new projects or creative ideas. Whether you have a startup in mind or want to enhance an existing project, I would love to bring your vision to life with my skills and expertise.
        </p>
        <p className="text-center mt-4 text-gray-300">
          My goal is to create meaningful and innovative solutions that not only meet your requirements but also exceed your expectations. Let's connect and explore the possibilities together!
        </p>
        <div className="text-center mt-6">
          <Link href="/contact">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 hover:shadow-lg transition-all duration-300">Contact Me</button>
          </Link>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="relative z-10 p-8 mt-24 mx-10 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm" style={{ boxShadow: '0 4px 15px rgba(255, 255, 0, 0.5)' }} // Yellow shadow
>
        <h2 className="text-center text-3xl font-bold text-[#F9A602]">Connect with Me</h2>
        <div className="flex justify-center mt-6 space-x-6">
          {[
            { name: "LinkedIn", link: "https://www.linkedin.com/in/muhammad-momin-62069b2b9/" },
            { name: "GitHub", link: "https://github.com/MuhammadMomin095" },
            { name: "Instagram", link: "https://www.instagram.com/mominshykh/?hl=en" },
            { name: "Facebook", link: "https://www.facebook.com/mominshykh.xx" }
          ].map((social, index) => (
            <Link key={index} href={social.link} target="_blank">
              <span className="text-white hover:text-blue-400">{social.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 mt-10">
        <Footer />
      </div>
    </div>
  );
}