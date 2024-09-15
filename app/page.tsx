import Link from 'next/link';

export default function Home() {
    return (
        <main className="relative flex-grow pt-8 flex flex-col items-center justify-center space-y-12">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                preload='auto'
            >
                <source src="http://localhost:8080/videos/beat-saber-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section id="introduce" className="relative z-10 text-center p-8 rounded-lg shadow-lg bg-base-200 bg-opacity-80 max-w-3xl">
                <h1 className="text-4xl font-bold text-primary mb-4">Welcome to BeatModsV2</h1>
                <p className="text-lg text-base-content">Your ultimate platform for the latest Beat Saber mods.</p>
                <p className="text-lg text-base-content">Discover, share, and enhance your gaming experience with our curated mods collection.</p>
            </section>

            <section id="links" className="relative z-10 flex flex-row justify-center gap-4">
                <Link href="/mods" className="btn btn-primary rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    Explore Mods
                </Link>
                <Link href="https://bsmg.wiki/" className="btn btn-secondary rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    Visit Wiki
                </Link>
                <Link href="https://discord.gg/beatsabermods" className="btn btn-accent rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                    Join Discord
                </Link>
            </section>

            <section id="installer" className="relative z-10 text-center p-8 rounded-lg shadow-lg bg-base-200 bg-opacity-80 max-w-xl">
                <p className="text-lg text-base-content mb-4">Easily manage mods with an installers:</p>
                <div className="flex flex-row justify-center gap-4">
                    <Link href="https://www.bsmanager.io" className="btn btn-outline btn-primary rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
                        BSManager
                    </Link>
                    <Link href="https://github.com/bsmg/ModAssistant" className="btn btn-outline btn-secondary rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-transform transform hover:scale-105">
                        ModAssistant
                    </Link>
                </div>
            </section>
        </main>
    );
}
