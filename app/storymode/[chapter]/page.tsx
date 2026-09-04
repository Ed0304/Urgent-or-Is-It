import Link from "next/link";

import {
    storyChapters
} from "@/components/frontend/GameSkeleton/chapters";


interface Level {

    order: number;
    title: string;
    description: string;

}

const chapterLevels: Record<number, Level[]> = {

    0: [

        {
            order: 1,
            title: "First Day Training",
            description:
                "Learn the basics of investigating suspicious messages."
        },

        {
            order: 2,
            title: "Investigation Practice",
            description:
                "Put your investigation skills to the test."
        },

        {
            order: 3,
            title: "Your First Case",
            description:
                "A real case has arrived at STEP BACK."
        }

    ]

};


export default async function ChapterLevelSelect({
    params
}: {
    params: Promise<{
        chapter: string;
    }>;
}) {

    // Get the actual route parameter
    const { chapter } = await params;

    // Convert "0" → 0
    const chapterNumber = Number(chapter);

    // Find chapter in your data
    const chapterData = storyChapters.find(
        (chapter) => chapter.order === chapterNumber
    );

    // Find levels belonging to that chapter
    const levels = chapterLevels[chapterNumber] ?? [];

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
                max-w-6xl
            ">

                {/* =================================
                    HEADER
                   ================================= */}

                <section className="
                    py-10
                    text-center
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
                        text-4xl
                        font-extrabold
                        md:text-6xl
                    ">
                        {chapterData?.title}
                    </h1>

                    <p className="
                        mt-4
                        text-zinc-400
                    ">
                        Select a level to continue.
                    </p>

                </section>


                {/* =================================
                    LEVEL SELECT
                   ================================= */}

                {levels.length > 0 ? (

                    <div className="
                        flex
                        gap-6
                        overflow-x-auto
                        pb-6
                    ">

                        {levels.map((level) => (

                            <LevelSelectionBox
                                key={level.order}
                                chapter={chapterNumber}
                                level={level}
                            />

                        ))}

                    </div>

                ) : (

                    <div className="
                        rounded-2xl
                        border-2
                        border-zinc-800
                        bg-zinc-900
                        p-10
                        text-center
                    ">

                        <h2 className="
                            text-2xl
                            font-bold
                        ">
                            Coming Soon
                        </h2>

                    </div>

                )}

            </div>

        </main>
    );
}


/* =========================================
   LEVEL CARD
   ========================================= */

function LevelSelectionBox({
    chapter,
    level
}: {
    chapter: number;
    level: Level;
}) {

    return (
        <article className="
            flex
            min-w-[300px]
            max-w-[320px]
            shrink-0
            flex-col
            rounded-2xl
            border-2
            border-zinc-700
            bg-zinc-900
            p-8
            shadow-xl
            transition
            hover:-translate-y-1
            hover:border-zinc-500
        ">

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-500
            ">
                Level {level.order}
            </p>

            <h2 className="
                mt-3
                text-2xl
                font-extrabold
            ">
                {level.title}
            </h2>

            <p className="
                mt-4
                min-h-[80px]
                text-sm
                leading-relaxed
                text-zinc-400
            ">
                {level.description}
            </p>

            <Link
                href={`/storymode/${chapter}/${level.order}`}
                className="
                    mt-8
                    rounded-xl
                    border-2
                    border-zinc-700
                    bg-black
                    px-8
                    py-3
                    text-center
                    font-bold
                    transition
                    hover:border-zinc-500
                    hover:bg-zinc-800
                "
            >
                Start
            </Link>

        </article>
    );
}