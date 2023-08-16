import React from "react";

function Portfolio(){
    return(
        <>
            <section className="flex flex-wrap mt-20 ml-20 min-h-screen mt-40" >
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
            <h5 className="mb-2 text-2xl font-bold text-zinc-600 text-center"></h5>
    <img 
    className="h-64 mx-auto"
    src = "vexxa-icon.png"></img>
    <p class="font-normal text-zinc-600 ">Vexxa is a Quiz game mobile application that has a Log in and Sign up function and has a categorie of grammar(Filipino and English), trivia, and brain teaser(Puzzles).</p>
</a>
</div>
</section>

        </>
    );
}
export default Portfolio