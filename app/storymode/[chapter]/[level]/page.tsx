import {
    storyChapters
} from "@/components/frontend/GameSkeleton/chapters";

import {
    chapterLevels
} from "@/components/frontend/GameSkeleton/levels";


export default async function StoryLevel({
    params
}: {
    params: Promise<{
        chapter: string;
        level: string;
    }>;
}) {

    const {
        chapter,
        level
    } = await params;


    const chapterNumber = Number(chapter);
    const levelNumber = Number(level);


    // Find chapter

    const chapterData = storyChapters.find(
        (chapter) =>
            chapter.order === chapterNumber
    );


    // Find level

    const levelData = chapterLevels[chapterNumber]?.find(
        (level) =>
            level.order === levelNumber
    );


    // =========================================
    // INVALID CHAPTER / LEVEL
    // =========================================

    if (!chapterData || !levelData) {

        return (
            <main className="
                min-h-screen
                bg-black
                px-6
                py-12
                text-white
            ">

                <div className="
                    mx-auto
                    max-w-4xl
                    text-center
                ">

                    <h1 className="
                        text-4xl
                        font-extrabold
                    ">
                        Level Not Found
                    </h1>

                </div>

            </main>
        );
    }


    // =========================================
    // GAME
    // =========================================

    return (
        <main className="
            min-h-screen
            bg-black
            px-6
            py-12
            text-white
        ">

            <div className="
                mx-auto
                max-w-4xl
            ">

                <p className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                ">
                    {chapterNumber === 0
                        ? "Prologue"
                        : `Chapter ${chapterNumber}`}
                </p>


                <h1 className="
                    mt-3
                    text-5xl
                    font-extrabold
                ">
                    {levelData.title}
                </h1>


                <p className="
                    mt-6
                    text-lg
                    text-zinc-400
                ">
                    {levelData.description}
                </p>


                {/* =================================
                    GAME CONTENT GOES HERE
                   ================================= */}

                <section className="
                    mt-12
                    rounded-2xl
                    border-2
                    border-zinc-800
                    bg-zinc-900
                    p-8
                ">

                    <h2 className="
                        text-2xl
                        font-bold
                    ">
                        Game Area
                    </h2>

                    <p className="
                        mt-3
                        text-zinc-400
                    ">
                        Your actual level gameplay will go here.
                    </p>

                </section>

            </div>

        </main>
    );
}