import {
    storyChapters
} from "@/components/frontend/GameSkeleton/chapters";

import {
    chapterLevels
} from "@/components/frontend/GameSkeleton/levels";

import GameLevel from "@/components/frontend/GameSkeleton/gameLevel";
import LevelIntro from "@/components/frontend/GameSkeleton/LevelIntro";

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


    // =========================================
    // FIND CHAPTER
    // =========================================

    const chapterData = storyChapters.find(
        (chapter) =>
            chapter.order === chapterNumber
    );


    // =========================================
    // FIND LEVEL
    // =========================================

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
    // FETCH GAME MESSAGES
    // =========================================

    const response = await fetch(
        `http://localhost:3001/messages/${chapterNumber}/${levelNumber}`,
        {
            cache: "no-store",
        }
    );


    if (!response.ok) {

        throw new Error(
            "Failed to fetch level messages"
        );

    }


    const messages = await response.json();


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
                    GAME
                   ================================= */}

                <section className="mt-12">

                <LevelIntro
                    blurb={levelData.blurb}
                    messageCount={messages.length}
                    tutorial={levelData.tutorial}
                >
                    <GameLevel
                        messages={messages}
                        levelId={messages[0]?.level_id}
                        chapter={chapterNumber}
                    />
                </LevelIntro>

            </section>

            </div>

        </main>
    );
}