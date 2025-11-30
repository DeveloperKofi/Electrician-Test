"use client"

import Navbar from "../components/Navbar"

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
                <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                    Have questions or need a free estimate? We're here to help! Reach out to Kapcan Electrical Services for all your electrical needs.  
                </p>
                <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
                    <h2 className="space-y-6">
                        Book us today at <a href="tel:0554145411" className="text-yellow-500 font-semibold">055 414-5411</a>. <br/>
                        Or email us at <a href="mailto: nemifrancis774@gmail.com" className="text-yellow-500 font-semibold">nemifrancis774@gmail.com </a> <br />
                        We can also be reached at <a href="tel:+233 55 790 6780" className="text-yellow-500 font-semibold">+233 55 790 6780</a>
                    </h2>
                </div>
            </main>
        </div>
    )
}