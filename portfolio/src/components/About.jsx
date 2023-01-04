import React from 'react'

const About = () => {
  return (
    <div name = "about" className = "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className = "pb-8">
                <p className = "text-4xl font-bold inline border-b-4 border-gray-500"> About </p>
            </div>
            <p className = "text-xl mt-10">
                My name is Harshul Satija and I am aspiring software engineer from the Bay Area. From a very young age, I have been drawn to computers
                and spent a long time working on them. As I got older, I turned my passion into a career, working at companies like 
                Verizon and NextFlex. In addition to my professional experience, I have also done numerous coding projects, further 
                developing my skills in the field.
            </p>
            <br />

            <p className="text-xl">
                As an individual passionate about technology, I am eager to grow and develop my skills in the field. An internship would be a great way for me
                to grow and develop my skills in the field. An internship, would be a great way to gain hands-on-experience and learn from experienced professionals.
                It would also allow me to network with others in my industry and make connections that would be valuable as I continue to build my career. I want to be amazing
                in my field, and I am never afraid of a challenge. 
            </p>
        </div>
    </div>
  )
}

export default About