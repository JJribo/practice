import React from "react";

export default function Home() {
    const fullname = "RIBO, JOPHER JOE SIMON";
    const role = "WEB DEVELOPER";
    const github = "Github Account: ";
    const githubusername = "JJribo";
    const socialmedia = "Social Media Accounts: "
    const facebookusername = "JopherJoe"
    const instagramusername = "j_rjoe"

    return (
        <main className="max-w-fit flex items flex justify-center items-center min-h-screen m-auto">
            <img className="shadow-2xl shadow-slate-200 h-72 rounded-full ml-20" src="./pic.png" alt="pic" />
            <div> 
                <h1 className="shadow-gray-800 shadow-md ml-20 font-black text-yellow-50 text-3xl">{fullname}</h1>
                <h1 className="ml-20 font-medium text-l">{role}</h1>
                <div className="pt-4 ml-20 max-w-fit">
                    <h1 className="text-yellow-50">{github}</h1>
                    <a
                        href={`https://github.com/${githubusername}`}
                    >
                        <img className="h-16 transition-transform transform hover:scale-125 delay-200" src="github-icon.png" alt="GitHub Icon" />
                    </a>
                </div>
                <div className="pt-4 ml-20 max-w-fit flex items-center">
                    <h1 className="text-yellow-50">{socialmedia}</h1>
                    <a
                        href={`https://www.facebook.com/${facebookusername}`}
                    >
                        <img className="h-16 transition-transform transform hover:scale-125 delay-200 h-16 bg-slate-900 ml-8" src="facebooks-logo.png" alt="Facebook Icon"/>
                    </a>
                    <a
                        href={`https://www.instagram.com/${instagramusername}`}
                    >
                        <img className="h-16 transition-transform transform hover:scale-125 delay-200 h-16 bg-slate-900 ml-8" src="instagram-logo.png" alt="Instagram Icon"/>
                    </a>
                </div>
            </div>
        </main>
    );
}
