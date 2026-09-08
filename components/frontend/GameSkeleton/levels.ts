// This file contains frontend metadata for story levels.
//
// The actual game content will eventually be fetched
// from the backend through the REST API.

export interface TutorialDialogue{
    speaker: string;
    text: string;
}

export interface Level {
    level_id: number;
    order: number;
    title: string;
    description: string;
    blurb?: TextPart[]; //The text displayed before the player goes to the tutorial dialogue/real level
    tutorial?: TutorialDialogue[];
    finalmessage?: TextPart[]; //Displays a note to tell players that they have reached the end of the game (DEMO version)
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
            level_id:1,
            tutorial: [
                {
                    speaker: "Geofrey",
                    text: "First, I want you to know what PuraTrust Bank is."
                },

                {
                    speaker: "You",
                    text: "PuraTrust Bank? The bank everyone uses?"
                },

                {
                    speaker: "Geofrey",
                    text: "Exactly. PuraTrust regularly sends notifications about transactions, account activity, and security alerts."
                },

                {
                    speaker: "Geofrey",
                    text: "But remember—just because a message claims to be from PuraTrust doesn't mean it actually is."
                },

                {
                    speaker: "You",
                    text: "So I should investigate the message first?"
                },

                {
                    speaker: "Geofrey",
                    text: "That's right. If there are any misspellings or unusual wording, mark it suspicious."
                },

                {
                    speaker: "Geofrey",
                    text: "Trust your gut. If something feels off, then it probably deserves a closer look."
                },

                {
                    speaker: "Geofrey",
                    text: "Oh, by the way—once you've investigated thoroughly, click PHISH or LEGIT to submit your answer."
                },

                {
                    speaker: "Geofrey",
                    text: "Alright. Let's see what you've got. FYI- Puratrust always send emails that end with @Puratrust.com, however you also need to check the contents too. "
                }
            ]
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
            level_id:2,
            tutorial: [
                {
                    speaker: "Geofrey",
                    text: "Excellent work, rookie. Now let's work on SMS messages."
                },
                {
                    speaker: "Geofrey",
                    text: "Just to let you know, like emails, they can contain links that may be traps."
                },
                {
                    speaker: "Geofrey",
                    text: "However, SMS messages tend to be shorter, so you need to pay closer attention to where the message is coming from and what it is asking you to do."
                },
                {
                    speaker: "You",
                    text: "So I should check the sender and the link before doing anything?"
                },
                {
                    speaker: "Geofrey",
                    text: "Exactly. Don't let a short message pressure you into making a quick decision."
                },
                {
                    speaker: "Geofrey",
                    text: "Take your time, inspect the details, and trust your gut if something feels off."
                },
                {
                    speaker: "Geofrey",
                    text: "Alright, rookie. Let's see how well you can spot a malicious SMS."
                }
            ]
        },

        {
            order: 3,
            title: "Your First Test",
            description:
                "Now, apply the skills you learnt to be a part of STEP BACK to tackle cases."
            ,
            level_id:3,
            blurb:[
                { text: " 'Alright, it seems you get the basics now.' "},
                { text: " 'Now, it's time to apply those skills to the test.' "},
                { text: " -Geofrey Boon, founder of STEP BACK. ", bold: true },
            ],
            finalmessage: [
                {
                    text: "Congratulations, rookie. You completed your first investigation.",
                    bold: true,
                },
                {
                    text: "You learned how to slow down, inspect the details, and question what a message is asking you to do. Those small decisions can make the difference between spotting a threat and becoming its next victim.",
                },
                {
                    text: "But your journey with STEP BACK doesn't end here. Deceivious is still out there, and Futurepura still needs people willing to look twice when something doesn't feel right.",
                },
                {
                    text: "Welcome to STEP BACK.",
                    bold: true,
                    italic: true,
                },
                {
                    text: "— END OF CURRENT STORY —",
                    bold: true,
                },
                {
                    text: "DEMO DISCLAIMER",
                    bold: true,
                },
                {
                    text: "You have reached the end of the currently available story content. Urgent or Is It? is currently a demonstration version, and additional chapters and features may be added in future updates.",
                },
            ]
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