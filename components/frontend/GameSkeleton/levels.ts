// This file contains frontend metadata for story levels.
//
// The actual game content will eventually be fetched
// from the backend through the REST API.

export interface Level {
    order: number;
    title: string;
    description: string;
    blurb?: TextPart[];
}

export interface TextPart {
    text: string;
    bold?: boolean;
    italic?: boolean;
}

export const chapterLevels: Record<number, Level[]> = {

    // =========================================
    // PROLOGUE
    // =========================================

    0: [

        {
            order: 1,
            title: "First Day Training",
            description:
                "Learn the basics of investigating suspicious messages.",
            blurb: [
                { text: "Futurepura, 20XX.", bold: true },

                { text: "A low-crime society where everyone has a high digital literacy." },

                { text: "However, a constant threat keeps lurking among the people of Futurepura, exploiting trust and fear." },

                { text: "Deceivious.", bold: true },

                { text: "Despite all efforts, STEP BACK is getting overwhelmed. They needed more people, but the victims kept increasing." },

                { text: "Then, you decided to show up. You joined STEP BACK, and swore an oath...", italic: true, bold: true },

                { text: "to keep the people of Futurepura safe." }
            ]
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

    ],


    // =========================================
    // CHAPTER 1 (Still Placeholders)
    // =========================================

    1: [

        {
            order: 1,
            title: "The Suspicious Email",
            description:
                "Investigate an email claiming to be from PuraTrust Bank."
        },

        {
            order: 2,
            title: "Follow the Trail",
            description:
                "Look deeper into the clues hidden inside suspicious messages."
        },

        {
            order: 3,
            title: "The Final Test",
            description:
                "Put everything you learned to the test."
        }

    ]

};