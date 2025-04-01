export const Home  = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative"> 
        <div className="text-center z-10 px-4"> 
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm KP
            </h1>
            <p className="tex-gray-500 text-lg mb-8 max-w-lg mx-auto">
                I'm a web developer base in th Myanmar. I love to build web applications and websites.
                I'm a web developer base in th Myanmar. I love to build web applications and websites.
                I'm a web developer base in th Myanmar. I love to build web applications and websites.
            
                
            </p>
            <div className="flex jstify-center space-x-4  C  ">
                <a href="#project" className="bg-blue-500  text-white py-3 px-6 mx-25 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Projects</a>
                    <a href="#contact" className="border  border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50 hover:text-white"> 
                    Contact</a>

            </div>
        </div>
        
    </section>
}