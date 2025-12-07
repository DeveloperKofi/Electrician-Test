"use client"

import Image from "next/image"
import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"
import team from "../../../public/team.png"
import finished from "../../../public/fencefin.png"
import care from "../../../public/careful.png"
import home from "../../../public/homeent.png"
//import pole from "../../../public/videos/pole.MP4"

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 text-center">
                <h1 className="text-4xl font-semibold mb-6">About Kapcan Electrical Services</h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
                    Kapcan Electrical Services is a locally owned and operated electrical company dedicated to providing top-notch residential and commercial electrical services. With years of experience in the industry, our licensed electricians are committed to delivering safe, efficient, and reliable solutions tailored to meet your specific needs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    Whether you need electrical installations, repairs, or maintenance, we pride ourselves on our professionalism, quality workmanship, and exceptional customer service. At Kapcan Electrical Services, your satisfaction and safety are our top priorities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full max-w-7xl mx-auto px-4">
  {[
    {
      title: "Team planning with client",
      desc: "Our team collaborates closely with clients to understand their unique electrical needs and deliver customized solutions.",
      img: team,
    },
    {
      title: "Full Security Electrical Fence Installation",
      desc: "Professional installation of high-quality electrical fences to enhance the security of your property.",
      img: finished,
    },
    {
      title: "Careful Planning & Execution",
      desc: "We meticulously plan and execute every project to ensure optimal results and minimal disruption to your daily life.",
      img: care,
    },
    {
      title: "Home Theater Wiring Installation",
      desc: "Expert wiring for home theaters and entertainment systems to enhance your viewing experience.",
      img: home,
    },
  ].map((service) => (
    <div
      key={service.title}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-1"
    >
      <Image
        src={service.img}
        alt={service.title}
        className="w-full h-48 sm:h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-base">{service.desc}</p>
      </div>
    </div>
  ))}
</div>

<div>
  <video
    src="videos/pole.MP4"
    controls
    ></video>
</div>

            {/* <Image src={team} alt="The team" height={300} width={250}/> */}
            </main>
                <Footer />
        </div>
    )
}