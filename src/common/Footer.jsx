import React from "react";

function Footer() {
    const upang = "Phinma- University of Pangasinan.";
    const cite = "College of Information Technology";
    const address = "San Agustin, Sto. Tomas, Pangasinan"
    const phonenumber = "+63 945 744 5921"
    const email = "joejopher@gmail.com"
    const contactme = "Contact Me:"

    return (
        <footer className="bottom-0 bg-gray-800 text-sky-50 font-semibold">
            <p className="text-center mb-8 text-2xl">{contactme}</p>

            <div className="flex justify-center p-1">
                <div className="flex items-center mr-4">
                    <img className="h-16" src="location-logo.png" alt="Location Logo" />
                    <p>{address}</p>
                </div>
                <div className="flex items-center mr-4">
                    <img className="h-16" src="telephone-logo.png" alt="Telephone Logo" />
                    <p>{phonenumber}</p>
                </div>
                <div className="flex items-center ml-4">
                    <img className="h-16" src="email-logo.png" alt="Email Logo" />
                    <p>{email}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
