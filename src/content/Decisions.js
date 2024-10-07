const gameData = {
    warrior: {
        description: [
            "Oh no! You encountered the gigantic CO₂. To reduce its size and continue, you must separate the Carbon from the Oxygen as soon as possible. With your sword and the Musculoinator gloves that will give you the super strength of a warrior, you should plant more trees.",
            "With your Musculoinator activated, you enthusiastically tackle the task at hand. With each movement, your strength increases, allowing you to lift and move large piles of manure in the blink of an eye. However, you worry that throwing it into the well might do more harm than good. Will you take the risk and follow Metano's advice, or will you seek an alternative solution?",
            "You are a brave warrior who has faced numerous challenges on your journey. With your Lluviainador sword, you have the ability to summon rains that can extinguish fires. However, you must be cautious when using it, as reckless use could lead to a devastating flood. Will you act wisely in this mission to stop the methane?",
            "While exploring the fields, you come across Metano, who informs you that the area with livestock is filled with manure and urgently needs cleaning. With your Musculoinator, you can quickly lift and move large piles of manure. Metano suggests that, in the end, you throw it into a nearby well to prevent it from contaminating the soil.",
        ]
    },
    tank: {
        description: [
            "You accidentally stumbled upon CO₂ that is about to cut down trees. Your Antidioxin armor will make you immune to it. You must contain the villain while hitting him and disarming his laboratory.",
            "Equipped with your Oxigenator Armor, you approach the livestock area unafraid of the stench of manure. Your armor provides you protection, allowing you to move the manure with ease. After cleaning, Metano tells you that you must dispose of the manure in the well, but you wonder if there is a safer and less polluting place. Will you follow his advice or look for another option?",
            "You are a resilient tank, equipped with Antidioxin armor that provides protection against environmental hazards. Your brute strength and ability to withstand attacks make you a shield for your companions. In this mission, you will need to decide whether to use your armor to purify the air and slow down the release of methane. Will you be strong enough to face this challenge?",
            "While patrolling the fields, you encounter Metano, who alerts you about the overflowing manure in the livestock area. Using your Oxigenator Armor, you prepare to withstand the foul odor while using your combat skills to move the manure with your strength. After cleaning, Metano suggests disposing of it in a well to prevent air contamination.",
        ]
    },
    wizard: {
        description: [
            "As you leave the forest, you see CO₂ cutting down trees. \"They will never catch me again... muahahaha!\" With your Maderinador wand, you can generate trees, but what kind of trees will you create?",
            "With your Maderinador Wand in hand, you feel the power of nature surrounding you. You summon trees that take over the manure, transforming it into nutrients for the soil. While cleaning, Metano suggests throwing the manure into the well, but you think that perhaps a more ecological alternative might be better. Will you do as he says or explore a more sustainable method?",
            "As a powerful wizard, your knowledge of nature and the elements is vast. Your Maderinador wand allows you to manipulate vegetation to your advantage. In this mission, you will need to use your magic to contain the fire and absorb the methane. Your cunning and magical abilities will be essential to save the environment. Will you have the wisdom to discern the truth behind the Guardian of Climate?",
            "On your way through the fields, you encounter Metano, who tells you that the area with livestock is covered in manure. He asks you to use your Maderinador Wand to summon a group of trees that will absorb the manure and turn it into natural fertilizer. Metano hopes that, when finished, the manure can be used as fertilizer in the nearby well.",
        ]
    },
    beastmaster: {
        description: [
            "As we were leaving the forest, CO₂ saw us and began to run towards us. You must shout through a Potenciainador that amplifies your voice to summon giant, strong animals that will bring trees to absorb CO₂.",
            "With your Potenciainador active, you feel your muscles expand and become agile. You summon strong animals that come to your side, helping you move the manure faster. After cleaning, Metano suggests throwing the manure into the well, but you have doubts about whether that would be the best for the environment. Will you act according to his advice or find a better place to dispose of the manure?",
            "As a beast master, you have the ability to communicate with and control the creatures of the forest. With your Potenciainador, you can amplify your voice to call animals that will assist you in the fight against methane. In this mission, your connection with wildlife will be key to creating a gust of wind that disperses the gas. Will you be able to harness your abilities to protect nature?",
            "On your journey through the fields, Metano approaches asking for help with the manure flooding the livestock area. Using your Potenciainador, you summon strong animals to help you move and collect the manure. Together, you quickly clean the area. Metano asks you to throw the manure into a nearby well to prevent it from causing problems.",
        ]
    } 
}

const answers = [
    {
        correct: "",
        incorrect: "",
    },
    {
        correct: "",
        incorrect: "",
    },{
        correct: "",
        incorrect: "",
    },{
        correct: "",
        incorrect: "",
    },
]

function descriptions(heroClass) {
    let warriorDesc;

    switch (heroClass) {
        case "warrior":
            warriorDesc = gameData.warrior.description;
            break;
        case "tank":
            warriorDesc = gameData.tank.description;
            break;
        case "wizard":
            warriorDesc = gameData.wizard.description;
            break;
        case "beastmaster":
            warriorDesc = gameData.beastmaster.description;
            break;

        default:
            warriorDesc = gameData.warrior.description;
            break;
    }

    return warriorDesc;
}

export { descriptions };
