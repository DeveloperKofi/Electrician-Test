"use client"

import Navbar from "../components/Navbar"

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
                <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
                    Have questions or need a free estimate? We're here to help! Reach out to Nzema Electric Duo for all your electrical needs.  
                </p>
                <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Your email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-yellow-500 focus:border-yellow-500" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}