// This file contains frontend metadata for story levels.
//
// The actual game content will eventually be fetched
// from the backend through the REST API.

export interface TutorialDialogue{

}

export interface Level {
    level_id: number;
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

                { text: "A low-crime society where everyone has a high level of digital literacy." },

                { text: "However, a constant threat keeps lurking among the people of Futurepura, exploiting trust and fear." },

                { text: "Deceivious.", bold: true },

                { text: "Despite all efforts, STEP BACK is getting overwhelmed. They needed more people, but the victims kept increasing." },

                { text: "Then, you decided to show up. You joined STEP BACK and swore an oath...", italic: true, bold: true },

                { text: "to keep the people of Futurepura safe." },

                { text: "You then meet a founder of STEP BACK, and he introduces himself as:" },

                { text: "Geofrey Boon.", bold: true },

                { text: "'Welcome to STEP BACK,' he greeted. 'It's good to see you step up to help us.'" },

                { text: "'Currently, we need people like you to reduce the damage Deceivious has done. However, it's not what you think.'" },

                { text: "'Now, I want to teach you the basics first. Let's look at the emails we received,' Geofrey said." },

                { text: "Then, it's all up to you, rookie.", bold: true }
            ],
            level_id:1
        },

        {
            order: 2,
            title: "Investigation Practice",
            description:
                "Put your investigation skills to the test."
            ,
            blurb: [
                { text: " 'Good job newcomer, it seems you start to get to know the strings well. ' ", bold: true },

                { text: " 'However, emails are not only Decievious' vectors to spread terror and extort his victims.' " },

                { text: " 'Now, I want you to learn how do legit SMS differ from those that are malicious.' " },

                { text: " -Geofrey Boon, founder of STEP BACK. ", bold: true },

            ],
            level_id:2
        },

        {
            order: 3,
            title: "Your First Case",
            description:
                "A real case has arrived at STEP BACK."
            ,
            level_id:3
        }

    ],


    // =========================================
    // CHAPTER 1 (Still Placeholders)
    // =========================================

    /*1: [

        {
            order: 1,
            title: "The Suspicious Email",
            description:
                "Investigate an email claiming to be from PuraTrust Bank."
                ,
            level_id:4
        },

        {
            order: 2,
            title: "Follow the Trail",
            description:
                "Look deeper into the clues hidden inside suspicious messages."
            ,
            level_id:5
        },

        {
            order: 3,
            title: "The Final Test",
            description:
                "Put everything you learned to the test."
            ,
            level_id:6
        }

    ]*/

};