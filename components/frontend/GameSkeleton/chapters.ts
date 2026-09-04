//This code is for giving react the story chapters data.
//So that I can just create one 'component' to define the UI structure,
//Yet using this ts file to extract data iteratively.
export interface TextPart {
    text: string;
    bold?: boolean;
    italic?: boolean;
}
export interface Chapter{
    order: number // 0 stands for prologue.
    title: string,
    description: TextPart[]
}

export const storyChapters: Chapter[] = [
    //0-4 -> Part 1 
    {
        order: 0,
        title: "A New Prodigy", //THEME: Tutorial Level, with a test 
         description: [
            { text: "When " },
            { text: "STEP BACK", bold: true },
            { text: " is overwhelmed, an unknown fellow" },
            { text: " steps in....", bold: true, italic: true}
        ],
    },
    {
        order: 1,
        title: "The PuraTrust Bank Scandal", //THEME: Bank email scams
        description: [
            {text: "PuraTrust is sued for failing to protect its customers from scams. "},
            {text: "Or is it?" , bold: true}
        ],
    },
    {
        order: 2,
        title: "Did You Strike a Lucky Draw?", //THEME: Lucky draw SMS scams
        description: [
            {text: "Reports from Futurepura Police shows there are reports of suspicious SMSes that baits desperate people to win awards. "},
            {text: "Rumors suggest Decievious isn't working alone", bold: true}
        ]
    },
    {
        order: 3, 
        title: "The Impostor Strikes Again", // THEME: Official Impersonation scams
        description: [
            {text: "STEP BACK got reports of people scammed by Futurepura Police"},
            {text: "But are they the real officers?", bold: true}
        ]
    },
    {
        order: 4,
        title: "Is Your Concert Cancelled?", //THEME: Fake Cancellation alerts
        description:[
            {text: "An artist's concert is coming soon, however there are complains that customers don't get their tickets. "},
            {text: "Then, someone, unknowingly had took advantage of the situation..", italic:true}
        ] 
    }
]