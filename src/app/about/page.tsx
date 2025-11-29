"use client"

import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"
import team from "../../../public/team.png"
import Image from "next/image"

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
            <Image src={team} alt="The team"/>
                <Footer />
            </main>
        </div>
    )
}