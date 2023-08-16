import React from "react";

function Footer() {
    const upang = "Phinma- University of Pangasinan.";
    const cite = "College of Information Technology";

    return (
        <main className=" bottom-0 p-4 bg-gray-800 text-sky-50 font-semibold">
            <div className="text-center ml-auto mr-auto">
                <img className="h-16 mx-auto" src="phinma-logo.png" alt="Phinma Logo" />
                <p>{upang}</p>
                <p>{cite}</p>
            </div>
        </main>
    );
}

export default Footer;
