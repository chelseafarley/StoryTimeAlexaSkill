/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome, you can ask me to tell you a tale or help. Which would you like to try?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const stories = [
    "There were once a man and a woman who had long in vain wished for a child. At length the woman hoped that God was about to grant her desire. These people had a little window at the back of their house from which a splendid garden could be seen, which was full of the most beautiful flowers and herbs. It was, however, surrounded by a high wall, and no one dared to go into it because it belonged to an enchantress, who had great power and was dreaded by all the world. One day the woman was standing by this window and looking down into the garden, when she saw a bed which was planted with the most beautiful rampion (rapunzel), and it looked so fresh and green that she longed for it, and had the greatest desire to eat some. This desire increased every day, and as she knew that she could not get any of it, she quite pined away, and looked pale and miserable. Then her husband was alarmed, and asked, \"What aileth thee, dear wife?\" \"Ah,\" she replied, \"if I can\'t get some of the rampion, which is in the garden behind our house, to eat, I shall die.\" The man, who loved her, thought, \"Sooner than let thy wife die, bring her some of the rampion thyself, let it cost thee what it will.\" In the twilight of the evening, he clambered down over the wall into the garden of the enchantress, hastily clutched a handful of rampion, and took it to his wife. She at once made herself a salad of it, and ate it with much relish. She, however, liked it so much—-so very much, that the next day she longed for it three times as much as before. If he was to have any rest, her husband must once more descend into the garden. In the gloom of evening, therefore, he let himself down again; but when he had clambered down the wall he was terribly afraid, for he saw the enchantress standing before him. \"How canst thou dare,\" said she with angry look, \"to descend into my garden and steal my rampion like a thief? Thou shalt suffer for it!\" \"Ah,\" answered he, \"let mercy take the place of justice, I only made up my mind to do it out of necessity. My wife saw your rampion from the window, and felt such a longing for it that she would have died if she had not got some to eat.\" Then the enchantress allowed her anger to be softened, and said to him, \"If the case be as thou sayest, I will allow thee to take away with thee as much rampion as thou wilt, only I make one condition, thou must give me the child which thy wife will bring into the world; it shall be well treated, and I will care for it like a mother.\" The man in his terror consented to everything, and when the woman was brought to bed, the enchantress appeared at once, gave the child the name of Rapunzel, and took it away with her. Rapunzel grew into the most beautiful child beneath the sun. When she was twelve years old, the enchantress shut her into a tower, which lay in a forest, and had neither stairs nor door, but quite at the top was a little window. When the enchantress wanted to go in, she placed herself beneath it and cried, \"Rapunzel, Rapunzel, Let down your hair to me.\" Rapunzel had magnificent long hair, fine as spun gold, and when she heard the voice of the enchantress she unfastened her braided tresses, wound them round one of the hooks of the window above, and then the hair fell twenty ells down, and the enchantress climbed up by it. After a year or two, it came to pass that the King\'s son rode through the forest and went by the tower. Then he heard a song, which was so charming that he stood still and listened. This was Rapunzel, who in her solitude passed her time in letting her sweet voice resound. The King\'s son wanted to climb up to her, and looked for the door of the tower, but none was to be found. He rode home, but the singing had so deeply touched his heart, that every day he went out into the forest and listened to it. Once when he was thus standing behind a tree, he saw that an enchantress came there, and he heard how she cried, \"Rapunzel, Rapunzel, Let down your hair.\" Then Rapunzel let down the braids of her hair, and the enchantress climbed up to her. \"If that is the ladder by which one mounts, I will for once try my fortune,\" said he, and the next day when it began to grow dark, he went to the tower and cried, \"Rapunzel, Rapunzel, Let down your hair.\" Immediately the hair fell down and the King\'s son climbed up.At first Rapunzel was terribly frightened when a man such as her eyes had never yet beheld, came to her; but the King\'s son began to talk to her quite like a friend, and told her that his heart had been so stirred that it had let him have no rest, and he had been forced to see her. Then Rapunzel lost her fear, and when he asked her if she would take him for her husband, and she saw that he was young and handsome, she thought, \"He will love me more than old Dame Gothel does;\" and she said yes, and laid her hand in his. She said, \"I will willingly go away with thee, but I do not know how to get down. Bring with thee a skein of silk every time that thou comest, and I will weave a ladder with it, and when that is ready I will descend, and thou wilt take me on thy horse.\" They agreed that until that time he should come to her every evening, for the old woman came by day. The enchantress remarked nothing of this, until once Rapunzel said to her, \"Tell me, Dame Gothel, how it happens that you are so much heavier for me to draw up than the young King\'s son—-he is with me in a moment.\" \"Ah! thou wicked child,\" cried the enchantress \"What do I hear thee say! I thought I had separated thee from all the world, and yet thou hast deceived me.\" In her anger she clutched Rapunzel\'s beautiful tresses, wrapped them twice round her left hand, seized a pair of scissors with the right, and snip, snap, they were cut off, and the lovely braids lay on the ground. And she was so pitiless that she took poor Rapunzel into a desert where she had to live in great grief and misery. On the same day, however, that she cast out Rapunzel, the enchantress in the evening fastened the braids of hair which she had cut off, to the hook of the window, and when the King\'s son came and cried, \"Rapunzel, Rapunzel, Let down your hair,\" she let the hair down. The King\'s son ascended, but he did not find his dearest Rapunzel above, but the enchantress, who gazed at him with wicked and venomous looks. \"Aha!\" she cried mockingly, \"Thou wouldst fetch thy dearest, but the beautiful bird sits no longer singing in the nest; the cat has got it, and will scratch out thy eyes as well. Rapunzel is lost to thee; thou wilt never see her more.\" The King\'s son was beside himself with pain, and in his despair he leapt down from the tower. He escaped with his life, but the thorns into which he fell, pierced his eyes. Then he wandered quite blind about the forest, ate nothing but roots and berries, and did nothing but lament and weep over the loss of his dearest wife. Thus he roamed about in misery for some years, and at length came to the desert where Rapunzel, with the twins to which she had given birth, a boy and a girl, lived in wretchedness. He heard a voice, and it seemed so familiar to him that he went towards it, and when he approached, Rapunzel knew him and fell on his neck and wept. Two of her tears wetted his eyes and they grew clear again, and he could see with them as before. He led her to his kingdom where he was joyfully received, and they lived for a long time afterwards, happy and contented.",
    "Once there was a miller who was poor, but who had a beautiful daughter. Now it happened that he had to go and speak to the King, and in order to make himself appear important he said to him, \"I have a daughter who can spin straw into gold.\" The King said to the miller, \"That is an art which pleases me well; if your daughter is as clever as you say, bring her to-morrow to my palace, and I will try what she can do.\" And when the girl was brought to him he took her into a room which was quite full of straw, gave her a spinning-wheel and a reel, and said, \"Now set to work, and if by to-morrow morning early you have not spun this straw into gold during the night, you must die.\" Thereupon he himself locked up the room, and left her in it alone. So there sat the poor miller\'s daughter, and for the life of her could not tell what to do; she had no idea how straw could be spun into gold, and she grew more and more miserable, until at last she began to weep. But all at once the door opened, and in came a little man, and said, \"Good evening, Mistress Miller; why are you crying so?\" \"Alas!\" answered the girl, \"I have to spin straw into gold, and I do not know how to do it.\" \"What will you give me,\" said the manikin, \"if I do it for you?\" \"My necklace,\" said the girl. The little man took the necklace, seated himself in front of the wheel, and \"whirr, whirr, whirr,\" three turns, and the reel was full; then he put another on, and whirr, whirr, whirr, three times round, and the second was full too. And so it went on until the morning, when all the straw was spun, and all the reels were full of gold. By daybreak the King was already there, and when he saw the gold he was astonished and delighted, but his heart became only more greedy. He had the miller\'s daughter taken into another room full of straw, which was much larger, and commanded her to spin that also in one night if she valued her life. The girl knew not how to help herself, and was crying, when the door again opened, and the little man appeared, and said, \"What will you give me if I spin that straw into gold for you?\" \"The ring on my finger,\" answered the girl. The little man took the ring, again began to turn the wheel, and by morning had spun all the straw into glittering gold. The King rejoiced beyond measure at the sight, but still he had not gold enough; and he had the miller\'s daughter taken into a still larger room full of straw, and said, \"You must spin this, too, in the course of this night; but if you succeed, you shall be my wife.\" \"Even if she be a miller\'s daughter,\" thought he, \"I could not find a richer wife in the whole world.\" When the girl was alone the manikin came again for the third time, and said, \"What will you give me if I spin the straw for you this time also?\" \"I have nothing left that I could give,\" answered the girl. \"Then promise me, if you should become Queen, your first child.\" \"Who knows whether that will ever happen?\" thought the miller\'s daughter; and, not knowing how else to help herself in this strait, she promised the manikin what he wanted, and for that he once more span the straw into gold. And when the King came in the morning, and found all as he had wished, he took her in marriage, and the pretty miller\'s daughter became a Queen. A year after, she had a beautiful child, and she never gave a thought to the manikin. But suddenly he came into her room, and said, \"Now give me what you promised.\" The Queen was horror-struck, and offered the manikin all the riches of the kingdom if he would leave her the child. But the manikin said, \"No, something that is living is dearer to me than all the treasures in the world.\" Then the Queen began to weep and cry, so that the manikin pitied her. \"I will give you three days\' time,\" said he, \"if by that time you find out my name, then shall you keep your child.\" So the Queen thought the whole night of all the names that she had ever heard, and she sent a messenger over the country to inquire, far and wide, for any other names that there might be. When the manikin came the next day, she began with Caspar, Melchior, Balthazar, and said all the names she knew, one after another; but to every one the little man said, \"That is not my name.\" On the second day she had inquiries made in the neighborhood as to the names of the people there, and she repeated to the manikin the most uncommon and curious. \"Perhaps your name is Shortribs, or Sheepshanks, or Laceleg?\" but he always answered, \"That is not my name.\" On the third day the messenger came back again, and said, \"I have not been able to find a single new name, but as I came to a high mountain at the end of the forest, where the fox and the hare bid each other good night, there I saw a little house, and before the house a fire was burning, and round about the fire quite a ridiculous little man was jumping: he hopped upon one leg, and shouted—- \"To-day I bake, to-morrow brew, The next I\'ll have the young Queen\'s child. Ha! glad am I that no one knew That Rumpelstiltskin I am styled.\" You may think how glad the Queen was when she heard the name! And when soon afterwards the little man came in, and asked, \"Now, Mistress Queen, what is my name?\" at first she said, \"Is your name Conrad?\" \"No.\" \"Is your name Harry?\" \"No.\" \"Perhaps your name is Rumpelstiltskin?\" \"The devil has told you that! the devil has told you that!\" cried the little man, and in his anger he plunged his right foot so deep into the earth that his whole leg went in; and then in rage he pulled at his left leg so hard with both hands that he tore himself in two.",
    "Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes. The first little pig was very lazy. He didn't want to work at all and he built his house out of straw. The second little pig worked a little bit harder but he was somewhat lazy too and he built his house out of sticks. Then, they sang and danced and played together the rest of the day. The third little pig worked hard all day and built his house with bricks. It was a sturdy house complete with a fine fireplace and chimney. It looked like it could withstand the strongest winds. The next day, a wolf happened to pass by the lane where the three little pigs lived; and he saw the straw house, and he smelled the pig inside. He thought the pig would make a mighty fine meal and his mouth began to water. So he knocked on the door and said: Little pig! Little pig! Let me in! Let me in! But the little pig saw the wolf's big paws through the keyhole, so he answered back: No! No! No! Not by the hairs on my chinny chin chin! Three Little Pigs straw houseThen the wolf showed his teeth and said: Then I'll huff and I'll puff and I'll blow your house down.So he huffed and he puffed and he blew the house down! The wolf opened his jaws very wide and bit down as hard as he could, but the first little pig escaped and ran away to hide with the second little pig. The wolf continued down the lane and he passed by the second house made of sticks; and he saw the house, and he smelled the pigs inside, and his mouth began to water as he thought about the fine dinner they would make. So he knocked on the door and said: Little pigs! Little pigs! Let me in! Let me in! But the little pigs saw the wolf's pointy ears through the keyhole, so they answered back: No! No! No! Not by the hairs on our chinny chin chin! So the wolf showed his teeth and said: Then I'll huff and I'll puff and I'll blow your house down! So he huffed and he puffed and he blew the house down! The wolf was greedy and he tried to catch both pigs at once, but he was too greedy and got neither! His big jaws clamped down on nothing but air and the two little pigs scrambled away as fast as their little hooves would carry them. The wolf chased them down the lane and he almost caught them. But they made it to the brick house and slammed the door closed before the wolf could catch them. The three little pigs they were very frightened, they knew the wolf wanted to eat them. And that was very, very true. The wolf hadn't eaten all day and he had worked up a large appetite chasing the pigs around and now he could smell all three of them inside and he knew that the three little pigs would make a lovely feast. Three Little Pigs brick house So the wolf knocked on the door and said: Little pigs! Little pigs! Let me in! Let me in! But the little pigs saw the wolf's narrow eyes through the keyhole, so they answered back: No! No! No! Not by the hairs on our chinny chin chin! So the wolf showed his teeth and said: Then I'll huff and I'll puff and I'll blow your house down. Well! he huffed and he puffed. He puffed and he huffed. And he huffed, huffed, and he puffed, puffed; but he could not blow the house down. At last, he was so out of breath that he couldn't huff and he couldn't puff anymore. So he stopped to rest and thought a bit. But this was too much. The wolf danced about with rage and swore he would come down the chimney and eat up the little pig for his supper. But while he was climbing on to the roof the little pig made up a blazing fire and put on a big pot full of water to boil. Then, just as the wolf was coming down the chimney, the little piggy pulled off the lid, and plop! in fell the wolf into the scalding water. So the little piggy put on the cover again, boiled the wolf up, and the three little pigs ate him for supper."
];
const TellMeAStoryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TellMeAStoryIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(stories[Math.floor(Math.random() * stories.length)])
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Ask me to tell you a tale.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye! May your dream sweet stories of your own.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please ask me to tell you a tale.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        TellMeAStoryIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();