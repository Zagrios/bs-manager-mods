import Link from "next/link";
import Image from "next/image";
import Logo from "../public/svg/logo.svg";

export default function Home() {

    const BSManagerWebsite = "https://www.bsmanager.io";
    const BSMGWiki = "https://bsmg.wiki/";
    const DiscordInvite = "https://discord.gg/beatsabermods";

    return (
        <main className="relative flex-grow flex flex-col items-center justify-center gap-8">
            <div className="after:absolute after:size-full after:top-0 after:left-0 after:backdrop-blur-[80px] opacity-60">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    disablePictureInPicture={true}
                >
                    <source src="../videos/beat-saber-background.mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <section id="Logo" className="relative z-10 flex flex-col items-center justify-center">
                <Image priority src={Logo} alt="" height={250} />
            </section>
            <section
                id="introduce"
                className="relative z-10 text-center p-8 rounded-lg shadow-lg bg-base-200 bg-opacity-80 max-w-3xl"
            >
                <h1 className="text-4xl font-bold text-primary mb-4">Welcome to BeatMods</h1>
                <p className="text-lg text-base-content">Your ultimate platform for the latest Beat Saber mods.</p>
                <p className="text-lg text-base-content">
                    Discover, share, and enhance your gaming experience with our curated mods collection.
                </p>
            </section>

            <section id="links" className="relative z-10 flex flex-row justify-center gap-4">
                <Link
                    href="/ModsList"
                    className="btn btn-primary rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                    Explore Mods
                </Link>
                <Link
                    href={BSMGWiki}
                    className="btn btn-secondary rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                    Visit Wiki
                </Link>
                <Link
                    href={DiscordInvite}
                    className="btn btn-accent rounded-full px-6 py-3 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                >
                    Join Discord
                </Link>
            </section>

            <section
                id="installer"
                className="relative z-10 text-center p-8 rounded-lg shadow-lg bg-base-200 bg-opacity-80 max-w-xl"
            >
                <p className="text-lg text-base-content mb-4">Easily manage mods with an installer:</p>
                <div className="flex flex-row justify-center gap-4">
                    <Link
                        href={BSManagerWebsite}
                        className="btn btn-outline btn-primary rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                    >
                        BSManager
                    </Link>
                </div>
            </section>
        </main>
    );
}
