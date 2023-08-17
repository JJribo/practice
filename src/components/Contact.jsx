import React from "react";

export default function Contact() {
    const contactInfo = [
        { icon: "facebooks-logo.png", link: "https://www.facebook.com/JopherJoe" },
        { icon: "instagram-logo.png", link: "https://www.instagram.com/j_rjoe" },
        { icon: "email-logo.png", link: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" },
    ];

    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="bg-stone-300 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
                <div className="flex flex-col items-center space-y-4">
                    {contactInfo.map((info, index) => (
                        <a
                            key={index}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-stone-600 transition"
                        >
                            <img className="h-8 w-8 mr-2" src={info.icon} alt="Social Icon" />
                            {info.link.includes("https://www.facebook.com/JopherJoe") ? "Jopher Joe": ""}
                            {info.link.includes("https://www.instagram.com/j_rjoe") ? "j_rjoe": ""}
                            {info.link.includes("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox") ? "Joe Jopher": ""}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
