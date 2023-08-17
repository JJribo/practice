import React from "react";

function Portfolio(){
    return(
        <>
            <section className="flex flex-wrap mt-20 ml-20 min-h-screen mt-40 " >
                <div className="ml-16">
                <a className="block max-w-sm p-6 bg-slate-900 rounded-lg shadow-xl hover:shadow-2xl transition-opacity">
            <h5 className="mb-2 text-2xl font-bold text-zinc-600 text-center">Vexxa</h5>
                            <img 
                            className="h-64 mx-auto"
                            src = "vexxa-icon.png"></img>
                             <p class="font-normal text-zinc-600 ">Using Android Studio we Created a application called
                             Vexxa. It is a Quiz game mobile application  that has a Log in and Sign up 
                             function and has a categorie of grammar(Filipino and English), trivia, and brain teaser(Puzzles).</p>
                        </a>
                </div>

                <div className="ml-16 ">
                <a className="block max-w-sm p-6 bg-slate-900 rounded-lg shadow-xl hover:shadow-2xl transition-opacity">
            <h5 className="mb-2 text-2xl font-bold  text-zinc-600 text-center">Baguio Girl Coffee</h5>
    <img 
    className="h-60 mx-auto p-1"
    src = "baguio-girl-coffee-icon.png"></img>
    <p className="font-normal  text-zinc-600 ">It is a E-COMMERCE web based using PHP for front-end and
    MySQL for back-end, it is a website that you can order coffee and foods.</p>
</a>
</div>

<div className="ml-16">
<a className="block max-w-sm p-6 bg-slate-900 rounded-lg shadow-xl hover:shadow-2xl transition-opacity">
            <h5 className="mb-2 text-2xl font-bold text-zinc-600 text-center">MultiPage Website</h5>
    <img 
    className="h-64 mx-auto"
    src = "wakeg2.png"></img>
    <p class="font-normal text-zinc-600 ">A multipage website is a collection of web pages, each with its own HTML, CSS, and JavaScript code. These pages are interconnected through links and navigation, allowing users to move between different sections and access various content and features. HTML structures the content, 
    CSS styles the design, and JavaScript adds interactivity, creating a cohesive user experience across different pages.</p>
</a>
</div>
</section>

        </>
    );
}
export default Portfolio