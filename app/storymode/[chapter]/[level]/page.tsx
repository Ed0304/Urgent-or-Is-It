import {
    storyChapters
} from "@/components/frontend/GameSkeleton/chapters";

import {
    chapterLevels
} from "@/components/frontend/GameSkeleton/levels";

import GameLevel from "@/components/frontend/GameSkeleton/gameLevel";
import LevelIntro from "@/components/frontend/GameSkeleton/LevelIntro";
import AuthGuard from "@/components/frontend/AuthGuard";

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
            <AuthGuard>

                <main className="
                    min-h-screen
                    bg-slate-950
                    px-6
                    py-16
                    text-slate-100
                ">

                    <div className="
                        mx-auto
                        flex
                        min-h-[60vh]
                        max-w-4xl
                        items-center
                        justify-center
                    ">

                        <div className="
                            w-full
                            rounded-2xl
                            border
                            border-red-900/60
                            bg-slate-900/80
                            p-10
                            text-center
                            shadow-[0_0_35px_rgba(248,113,113,0.05)]
                        ">

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-red-500
                            ">
                                ERROR // CASE NOT FOUND
                            </p>

                            <h1 className="
                                mt-4
                                text-4xl
                                font-extrabold
                                md:text-5xl
                            ">
                                Level Not Found
                            </h1>

                            <p className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-slate-400
                            ">
                                The requested investigation could not
                                be located.
                            </p>

                        </div>

                    </div>

                </main>

            </AuthGuard>
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
        <AuthGuard>

            <main className="
                min-h-screen
                bg-slate-950
                px-6
                py-12
                text-slate-100
            ">

                <div className="
                    mx-auto
                    max-w-5xl
                ">

                    {/* =========================================
                        CASE HEADER
                       ========================================= */}

                    <section className="
                        border-b
                        border-slate-800
                        pb-8
                    ">

                        <div className="
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-4
                        ">

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-sky-500
                            ">

                                {chapterNumber === 0
                                    ? "STEP BACK // PROLOGUE"
                                    : `STEP BACK // CHAPTER ${chapterNumber}`}

                            </p>


                            <p className="
                                rounded-lg
                                border
                                border-slate-800
                                bg-slate-900
                                px-3
                                py-2
                                font-mono
                                text-xs
                                text-slate-500
                            ">
                                CASE //
                                {chapterNumber.toString().padStart(2, "0")}
                                -
                                {levelNumber.toString().padStart(2, "0")}
                            </p>

                        </div>


                        <h1 className="
                            mt-5
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-slate-100
                            md:text-6xl
                        ">

                            {levelData.title}

                        </h1>


                        <p className="
                            mt-5
                            max-w-3xl
                            text-lg
                            leading-relaxed
                            text-slate-400
                        ">

                            {levelData.description}

                        </p>

                    </section>


                    {/* =========================================
                        INVESTIGATION
                       ========================================= */}

                    <section className="
                        mt-10
                    ">

                        <div className="
                            mb-5
                            flex
                            items-center
                            justify-between
                            gap-4
                        ">

                            <div>

                                <p className="
                                    font-mono
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-slate-600
                                ">
                                    Investigation Interface
                                </p>

                                <p className="
                                    mt-1
                                    text-sm
                                    text-slate-500
                                ">
                                    Review the evidence carefully.
                                </p>

                            </div>


                            <div className="
                                hidden
                                font-mono
                                text-xs
                                text-slate-600
                                sm:block
                            ">
                                MSG // {messages.length}
                            </div>

                        </div>


                        {/* =================================
                            GAME
                           ================================= */}

                        <div className="
                            rounded-3xl
                            border
                            border-sky-900/40
                            bg-slate-900/30
                            p-4
                            shadow-[0_0_45px_rgba(56,189,248,0.04)]
                            md:p-6
                        ">

                            <LevelIntro
                                blurb={levelData.blurb}
                                messageCount={messages.length}
                                tutorial={levelData.tutorial}
                            >

                                <GameLevel
                                    messages={messages}
                                    levelId={messages[0]?.level_id}
                                    chapter={chapterNumber}
                                    finalmessage={levelData.finalmessage}
                                />

                            </LevelIntro>

                        </div>

                    </section>

                </div>

            </main>

        </AuthGuard>
    );
}