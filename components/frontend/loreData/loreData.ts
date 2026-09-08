// This file stores the lore data for Urgent or Is It?

interface LoreInfo {
    name: string;
    description: string;
    imageUrl?: string;
}

const unknownLore: LoreInfo = {
    name: "???",
    description: "Coming soon",
    imageUrl: "",
};

export const LoreItems: LoreInfo[] = [

    // =========================================
    // FUTUREPURA
    // =========================================

    {
        name: "Futurepura",
        description:
            "An alternate Earth, set in a far future.\n" +
            "99.9% of citizens of Futurepura are digitally literate.\n" +
            "However, a sinister force is preying on them...",
    },


    // =========================================
    // DECEIVIOUS
    // =========================================

    {
        name: "Deceivious",
        description:
            "Nobody knows what he looks like, but it is said that he is the mastermind behind the scam incidents of Futurepura.\n" +
            "However, there are rumors that he isn't alone...",
        imageUrl: "", // TODO: Add later.
    },


    // =========================================
    // STEP BACK
    // =========================================

    {
        name: "STEP BACK",
        description:
            "A group founded by five friends with one goal: stop Deceivious and protect the people of Futurepura.\n" +
            "Recently, they have been facing a shortage of members due to a huge spike in scam messages.",
    },


    // =========================================
    // GEOFREY BOON
    // =========================================

    {
        name: "Geofrey Boon",
        description:
            "Originating from Singapore, Geofrey is one of the main founders of STEP BACK.\n" +
            "After graduating from a prestigious university in Singapore, he aims to raise digital and cyber-safety awareness across Futurepura.",
    },


    // =========================================
    // UNKNOWN
    // =========================================

    // Reserved for future lore entries.

];