// =========================================================================
// THE STORY OF US - COMPLETE RELATIONSHIP CHRONICLE
// All 18 chapters from the unfinished chess match to forever.
// =========================================================================

const STORY_CHAPTERS = [
  {
    id: 1,
    chapterNumber: "01",
    tag: "The Unfinished Match ♟️",
    title: "It started with a chess game.",
    date: "Statistics Department Core Team Shoot",
    location: "College Campus",
    image: "images/chapters/chapter_01.jpg",
    quote: "That match started, but it never ended. And neither did we.",
    paragraphs: [
      "There is something almost funny about the way we began.",
      "We were in the same class, and somehow, I didn't even know who you were.",
      "You barely came to class anyway. You had SENSATION, your dance society, chess, and a hundred other things going on, so it wasn't exactly surprising that we never really talked. We were classmates in the most technical sense of the word.",
      "Then came the core team shoot for the Statistics Department. That was the first time we actually met.",
      "We introduced ourselves, talked a little, and somehow discovered that both of us had played chess. Of course, there was one small difference: I had played chess, while you were actually on the college chess team and FIDE-rated.",
      "Naturally, we ended up competing. People started putting bets on us, deciding who would win. And then, before the game could even finish, we had to stop because we had a shoot to do.",
      "So that first game remained unfinished. At the time, it was just an unfinished chess match. Looking back now, it feels almost impossible that it wasn't a sign. Because that match started, but it never ended. And neither did we.",
      "Months later, we would actually remember that exact match and laugh about how the first time we ever played chess together was on the day of the photoshoot, and how the game never reached its conclusion."
    ],
    sticker: "♟️"
  },
  {
    id: 2,
    chapterNumber: "02",
    tag: "The Blue Suit & Fest 💙",
    title: "Then we went back to being strangers.",
    date: "A Semester Later",
    location: "Department Fest & WhatsApp",
    image: "images/chapters/chapter_02.jpg",
    quote: "That was the first day I really noticed you. Not as the girl from my class... Just... you.",
    paragraphs: [
      "After that day, we didn't really meet or talk. Not until the department fest.",
      "That was a semester later, and somehow, our first proper conversation happened just one day before the fest.",
      "And fittingly, your first real text to me wasn't some dramatic beginning. It was about the fest. You helped me make the itinerary for the department fest, and somewhere between planning everything, you started ranting about the Hindu society and how they had basically made us do their work without doing ours.",
      "I didn't know it then, but that conversation was the beginning of something.",
      "The next day was the department fest. You were wearing that blue suit. And that was the first day I really noticed you. Not as the girl from my class. Not as the girl who barely came to class. Not as the girl who played chess better than me. Just... you. You looked beautiful.",
      "And somehow, we spent almost the entire day together. That day felt different. I didn't just feel like I had talked to a classmate anymore. I felt like I had made a friend.",
      "And from there, we moved almost entirely to chats. It started innocently enough—ranting about classmates, talking about random things, complaining about things that happened in the group. Then you started telling me about your life. You told me about the situation with your super senior, about him blocking you, about everything that had happened.",
      "You ranted. I listened. And somewhere in the middle of all those conversations, something changed.",
      "The messages became longer. The nights became later. You started sending those long voice notes. We started texting until ridiculous hours of the night. And even though you still weren't coming to class because of dance, it didn't matter anymore. We had our own classroom. It was WhatsApp."
    ],
    sticker: "💬"
  },
  {
    id: 3,
    chapterNumber: "03",
    tag: "Endless Calls ☀️",
    title: "Summer vacation didn't really feel like a vacation.",
    date: "Summer Break & 3rd Semester",
    location: "Late Night Phone Calls",
    image: "images/chapters/chapter_03.jpg",
    quote: "Calling you stopped being something special. It just became something we did.",
    paragraphs: [
      "The semester ended, everyone went their own way, and summer break began.",
      "But somehow, our conversations never stopped. We talked almost every day. It was as if the conversation that had started during the fest had simply refused to end.",
      "Somewhere during those late-night conversations and the summer vacation, we started talking on calls too. At some point, calling you stopped being something special. It just became something we did.",
      "And when summer ended and the third semester began, we were already incredibly close. Best friends. Or at least, that's what we thought.",
      "Neither of us had feelings. At least, neither of us admitted to having them."
    ],
    sticker: "📞"
  },
  {
    id: 4,
    chapterNumber: "04",
    tag: "dumb photo for doing dumb things 😠",
    title: "dumb photo for doing dumb things.",
    date: "Dance Society Days",
    location: "Standing by Your Side",
    image: "images/chapters/chapter_04.jpg",
    quote: "I was there for all of it... And somehow, we got even closer.",
    paragraphs: [
      "Then you got attracted to someone from your dance society. You wanted to text him. You did.",
      "And I was there for all of it. Every update. Every conversation. Every little thing that happened.",
      "Eventually, the two of you became close. It turned into a situationship where he didn't want to call you his girlfriend, but still wanted the closeness that came with it. You liked him a lot, and because of that, leaving was difficult.",
      "Then you found out he already had a girlfriend. He had been cheating on her with you. You told her. The two of you went to his flat and confronted him. And after that, slowly, you started moving on.",
      "That period was one of the times I was genuinely angry with you. I wanted you to listen to me. You didn't. You were completely caught up in what you felt for him, and I could see you getting hurt while still walking deeper into it.",
      "But eventually, that chapter began to close. And somehow, we got even closer."
    ],
    sticker: "😠"
  },
  {
    id: 5,
    chapterNumber: "05",
    tag: "6:30 AM Wake-Up Calls 📚",
    title: "The nights before exams.",
    date: "Final Exams Season",
    location: "Late Night Online Study Calls",
    image: "images/chapters/chapter_05.jpg",
    quote: "That was us. Even before we knew we were us.",
    paragraphs: [
      "Final exams came. And somehow, exams became another chapter in our story.",
      "We studied together online. We talked all night. We sent updates. We helped each other survive topics we barely understood ourselves.",
      "There were nights where we were supposed to be studying, but somehow ended up talking about everything except studying.",
      "At ridiculous hours, you would ask me which topics were important, whether something could be skipped, whether you were prepared enough to pass.",
      "You even asked me to call you at 6:30 in the morning and keep calling if you didn't wake up.",
      "At one point you essentially had to tell me to stop talking because I was distracting you from studying. That was us. Even before we knew we were us."
    ],
    sticker: "📖"
  },
  {
    id: 6,
    chapterNumber: "06",
    tag: "Distance Draws Us Closer 🌊",
    title: "And then there was someone else again.",
    date: "Post-Exams & Puri Trip",
    location: "Puri & Endless Texts",
    image: "images/chapters/chapter_06.jpg",
    quote: "Distance didn't really create distance between us. It almost did the opposite.",
    paragraphs: [
      "During and after the exams, someone texted you on Instagram. You started talking to him. And you were worried about me. Because I was your best friend.",
      "You asked me, in your own way, what would happen if things got serious. I told you that if you genuinely wanted something with him, I could maintain distance. I would have.",
      "But you told me I was more important. More important than someone you had just started talking to and had never even met. That thing eventually didn't work out either.",
      "And then I went on my Puri trip. But even there, I talked to you every day. Distance didn't really create distance between us. It almost did the opposite.",
      "And somewhere after that trip, something changed. We became closer than we had ever been."
    ],
    sticker: "🌅"
  },
  {
    id: 7,
    chapterNumber: "07",
    tag: "Butterflies & The Wrong Bus 🚌",
    title: "We still thought we were just friends.",
    date: "North Campus Days",
    location: "Kamla Nagar, Packed Bus & Metro",
    image: "images/chapters/chapter_07.jpg",
    quote: "Friends don't usually walk around North Campus holding hands. Friends don't usually start feeling like home.",
    paragraphs: [
      "The first day I came back from the trip, you cried in front of me because of something involving one of our friends. I stayed.",
      "We started spending more time together. We went to Kamla Nagar two or three times. We walked around. We shopped. We talked.",
      "And then, without planning it, we held hands for the first time. It felt completely natural. So natural that neither of us questioned it. We were still 'just friends.' Except... friends don't usually walk around North Campus holding hands. Friends don't usually spend that much time together. Friends don't usually start feeling like home. But we ignored all of that.",
      "One day I decided to drop you home. We decided to take the bus. We didn't know that this ridiculous bus journey would become one of the memories I would remember forever.",
      "The first bus ride was calm. We sat at the back. You rested your head on my shoulder. We listened to music.",
      "Then we reached our first destination, changed buses, and promptly took the wrong one. So we got off at the next stop—somewhere that felt like nowhere. We decided the new plan was simply to take any bus going towards the metro.",
      "The next bus was packed. Really packed. We were standing so close that we were practically hugging. And that was the first time I got butterflies.",
      "Then we reached the metro. That was packed too. We couldn't even get off at our station. So we had to get off one station later and travel back.",
      "By then, the whole journey was absurd. But it was ours. And I think somewhere in all that chaos, we had already stopped being just friends. We just hadn't said it yet."
    ],
    sticker: "🚌"
  },
  {
    id: 8,
    chapterNumber: "08",
    tag: "The Wake-Up Call 💔",
    title: "Then came the moment I realized I could lose you.",
    date: "Kamla Nagar Shopping Day",
    location: "North Campus Market",
    image: "images/chapters/chapter_08.jpg",
    quote: "For the first time, something became painfully clear: I could actually lose you. For the first time, I realized that I wanted to be something more.",
    paragraphs: [
      "On one of our days in Kamla Nagar, we were shopping for you. And then I saw Hinge on your phone.",
      "Technically, you hadn't done anything wrong. We weren't dating. You were allowed to download Hinge. But I had gotten used to you telling me everything. Whenever you downloaded something. Whenever you talked to someone. Whenever something happened.",
      "This time, you hadn't told me. And it hurt. A lot more than it should have.",
      "Because for the first time, something became painfully clear: I could actually lose you.",
      "You weren't going to be my best friend forever simply because we had become best friends. You could meet someone else. You could fall in love with someone else. And one day, I might not be the person you called anymore.",
      "For the first time, I realized that I wanted to be something more."
    ],
    sticker: "⚡"
  },
  {
    id: 9,
    chapterNumber: "09",
    tag: "January 30th Anniversary 🌹",
    title: "Then came Tulika's birthday.",
    date: "January 30",
    location: "Pizza Hut, Empty Classroom, Open Sky & Phone Confession",
    image: "images/chapters/chapter_09.jpg",
    quote: "I don't know how to say... it feels weird... and I don't want to ruin our friendship... but I kinda like you.",
    paragraphs: [
      "The next day was our common friend Tulika's birthday. Everyone went to Pizza Hut to celebrate. At first everything was normal. You sat beside me. We were all together.",
      "Then we started playing Kill, Kiss, Marry. And eventually it was my turn. My options were you, Akshara, and Shambhavi.",
      "And I did something that made perfect sense to my terrified brain at the time. I chose Akshara to kill. Then I paused. And I said: You to kiss. Shambhavi to marry.",
      "I didn't mean it. Not even remotely. I said it because I didn't want you to think I liked you. I wanted you to believe I didn't.",
      "And the second I said it, your mood changed. You barely ate. You sulked through the rest of the party. And somewhere inside me, something clicked. You liked me. I wasn't completely sure. Nobody can be completely sure until the person tells you. But I almost knew.",
      "After everyone left, we went back to college because you had some work. We found an empty classroom. You were clearly upset. I asked what happened. You didn't tell me. So instead, I stared at you. For a long time. You got shy. Flustered. Troubled in that very you way. I almost confessed. Almost. Then your phone rang. And the moment disappeared.",
      "Later, we went to the ground. You met your friend. Your friend left. And the two of us lay there under the open sky. I played with you. You were flustered again. And once again, I couldn't say it. So we went home.",
      "And later that night, on a call, I finally did. I said the exact sentence I had been too scared to say: 'I don't know how to say... it feels weird... and I don't want to ruin our friendship... but I kinda like you.'",
      "It was the first time I had ever confessed to someone directly like that. And only I know how difficult it was to say those words. Even though, somewhere inside me, I already knew what your answer would be.",
      "You told me to give you a second. Then you cut the call. For a moment, I probably thought I had destroyed everything. Then you called back. And you were happy. Really happy. You told me you liked me too. You told me you had been scared that I didn't feel the same. And suddenly everything made sense.",
      "You were in the clouds. You called Tulika. You called Kartik. You told them. And then came the question: Now what? I said we should date.",
      "And just like that, after everything, after all the pretending, the friendship had finally admitted what it had been becoming. Thirty minutes, thirty days, a whole lifetime of hesitation—and finally, January 30th became our anniversary."
    ],
    sticker: "💖"
  },
  {
    id: 10,
    chapterNumber: "10",
    tag: "First Date & First Kiss 🌹",
    title: "February 1, 2026 — our first official date.",
    date: "February 1, 2026",
    location: "Noida, Korean Photobooth & Xero Degrees",
    image: "images/chapters/chapter_10.jpg",
    hasVideo: true,
    videoUrl: "videos/korean_photobooth.mp4",
    poster: "images/korean_photobooth_strip.jpg",
    videoTitle: "Our Korean Photobooth Moment 🎬",
    videoSubtitle: "That unforgettable laugh & sweet shy smiles inside the booth!",
    quote: "Our first date. Our first official day as us. Something had finally become real.",
    paragraphs: [
      "We had already spent so much time together. We had already held hands. We had already cuddled. We had already crossed lines neither of us called lines anymore. And somehow, I was still nervous for our first actual date.",
      "I was so conscious about how I looked that I went to the gym early that morning just to feel one percent more confident.",
      "Then I bought you a single red rose. I wasn't sure whether it would feel too much. But it was our first day. So I bought it anyway.",
      "Then I went to Noida. I arrived first. And waited. And was absurdly nervous. Which is ridiculous when I think about it now. You were already my best friend. We had known each other for around a year and a half. We had talked for hours and hours. But that day, waiting for you to arrive, I felt like I was meeting you for the first time.",
      "Then you came. Blue dress. And you looked absolutely beautiful. I was mesmerized. And then, just like that, everything became normal again.",
      "We went to a Korean photobooth and took those photos that are still with me. Then we went shopping for our upcoming department Udaipur trip. Then we went to Xero Degrees. You put different shades of lipstick on my hand and took a picture of it—our first tiny soft launch.",
      "After that, I went to your society to drop you home. And then you took me somewhere quieter. We hugged. Tightly. And then you asked whether I wanted to kiss you. You even told me I didn't have to force myself if I wasn't ready. You knew it was my first time. I knew you had more experience than me. But somewhere in my head, I had always imagined what it would feel like. So I kissed you.",
      "And somehow, our first kiss became much more than just a kiss. It was our first proper makeout. Our first date. Our first official day as us. And I don't really know how to describe what it felt like. I just knew it was different. Something had finally become real.",
      "And the funny part was that one day wasn't enough. We planned another day together immediately. Because apparently, one day apart was already too much. Our WhatsApp conversation from that same period makes that part almost painfully obvious: barely a day into being together, you were already telling me you wanted to hug, kiss and cuddle me, and both of us were complaining about how much we missed each other."
    ],
    sticker: "📸"
  },
  {
    id: 11,
    chapterNumber: "11",
    tag: "Terrible Movie, Perfect Day 🍿",
    title: "Our second day.",
    date: "February 2, 2026",
    location: "Marty Supreme & Majnu ka Tila",
    image: "images/chapters/chapter_11.jpg",
    quote: "Two days. Two collages. Two tiny records of the beginning.",
    paragraphs: [
      "We decided to watch a movie. And now that I think about it, this wasn't just our first movie after starting to date. It was our first movie together ever.",
      "The movie was Marty Supreme. Critically acclaimed. Apparently very good. And yet somehow, both of us didn't like it. So much for our first movie experience.",
      "After that, we went to Majnu ka Tila to eat. I don't even remember what we ate. But I remember liking the day. And we took another Korean photobooth set.",
      "Two days. Two collages. Two tiny records of the beginning. And those photos will always be part of this story."
    ],
    sticker: "🎟️"
  },
  {
    id: 12,
    chapterNumber: "12",
    tag: "Secret Visits & Silly Dates 🍕",
    title: "Then came everything after that.",
    date: "Spring Days & Secret Hours",
    location: "Kaffiaa, Noida, Mystery Rooms & Home",
    image: "images/chapters/chapter_12.jpg",
    quote: "Some memories are big enough to remember by date. Others are just places, stupid jokes, food, journeys.",
    paragraphs: [
      "More dates. More walks. More dropping you home all the way to Noida from college. More time together.",
      "One of our favourite places was Kaffiaa. We spent so much time at your home too—quietly, secretly, trying not to get caught by your family.",
      "And there were so many little dates that I could probably remember them only by feeling:",
      "• The pickleball date.<br>• The day we went with everyone to the mystery room in Kamla Nagar and then went around the market.<br>• The Japanese restaurant where we sat traditionally on the floor and you ordered that disastrous chewy dish.<br>• And so many more.",
      "Some memories are big enough to remember by date. Others are just places, stupid jokes, food, journeys, one random afternoon, one random evening. But somehow they all stayed."
    ],
    sticker: "🌸"
  },
  {
    id: 13,
    chapterNumber: "13",
    tag: "The Honeymoon Trip 🏔️",
    title: "And then came Udaipur.",
    date: "Department Trip",
    location: "Udaipur & Mount Abu",
    image: "images/chapters/chapter_13.jpg",
    quote: "It genuinely felt like a honeymoon. And I still want a thousand more trips with you.",
    paragraphs: [
      "If I had to choose the most memorable and iconic part of our dating journey so far, it would probably be our Udaipur–Mount Abu trip.",
      "Technically, it was a department trip. We went with our classmates. But when I think about that trip, I mostly remember us.",
      "From boarding the bus together to getting dropped off from the same bus, we were beside each other through almost the entire journey. And I don't regret a single bit of it.",
      "We visited Kumbalgarh Fort. We trekked Bahubali Hills. We went to the Karni Mata Temple by ropeway. We explored the City Palace. And somehow, every place became more special because you were there.",
      "But Mount Abu stays with me the most. The two of us walking up towards the sunset point. Watching the sun go down together. Spending that time together. It genuinely felt like a honeymoon. Which is slightly ridiculous considering this was a department trip with our entire class. But that is what it felt like.",
      "And even after spending so much time together, it still didn't feel like enough. I still want a thousand more trips with you. A thousand more journeys where we're sitting beside each other, getting lost, getting tired, getting hungry, taking the wrong route and somehow still having the best time."
    ],
    sticker: "🌄"
  },
  {
    id: 14,
    chapterNumber: "14",
    tag: "Choosing Each Other Always 🤝",
    title: "But our story wasn't always sunshine.",
    date: "Seven Months of Growing",
    location: "Learning, Apologizing & Loving",
    image: "images/chapters/chapter_14.jpg",
    quote: "I want it to be a story about two people who fought, learned, apologised, and still chose each other afterward.",
    paragraphs: [
      "Seven months is a long time. And our relationship has been eventful.",
      "There were moments when I hurt you. Like Athlos. I left you when you needed me. And when you got the prize, I wasn't there to cheer for you. That still bothers me.",
      "Then I shifted from my PG into my flat. I did it partly because I wanted us to have more time together. But the irony was that the move made me busier, more frustrated, more overwhelmed. And instead of giving you the affection you deserved, I sometimes ignored your feelings.",
      "We had rough days. We had long conversations trying to fix things. We had misunderstandings. We had moments where both of us were tired.",
      "But we didn't give up. You didn't. I didn't. And I hope we never do.",
      "Because I don't want our story to be a story about two people who never fought. I want it to be a story about two people who fought, hurt each other sometimes, learned, apologised, changed, and still chose each other afterward."
    ],
    sticker: "🌱"
  },
  {
    id: 15,
    chapterNumber: "15",
    tag: "Proudest Supporter 🏆",
    title: "And then came the award.",
    date: "Annual Day / Graduation Dinner",
    location: "Cheering Loudest in the Audience",
    image: "images/chapters/chapter_15.jpg",
    quote: "I want to be the person standing there, clapping the loudest.",
    paragraphs: [
      "I wasn't there for that Athlos award ceremony. And I hated that.",
      "So when I later found out that you were going to receive an award at the annual day / graduation dinner, something inside me felt genuinely proud. Because finally, I could be there. Finally, I could cheer for you.",
      "And watching you receive that award was beautiful. Proud doesn't even completely describe it.",
      "Because I have watched you put yourself into so many things. Dance. Chess. Academics. The things you care about. The things you work for.",
      "And I want you to know that I will always be your biggest supporter. Whatever you choose. Dance. Chess. Academics. Something completely different. Anything. I want to be the person standing there, clapping the loudest. I want to help you get wherever you want to go. And I will do everything in my power to make sure you know that you never have to do it alone."
    ],
    sticker: "✨"
  },
  {
    id: 16,
    chapterNumber: "16",
    tag: "Movie Watchlists & Flat Cozy Nights 🎬",
    title: "And somehow, even the movies became part of our story.",
    date: "From PG to Our Flat",
    location: "Cozy Couch & Laptop Screen",
    image: "images/chapters/chapter_16.jpg",
    quote: "From Legally Blonde to Harry Potter... somehow, I am still just following your watchlist. And honestly? I wouldn't have it any other way.",
    paragraphs: [
      "It's funny that our first movie together wasn't even good. But after that, we watched so many things together:",
      "Project Hail Mary. The Drama. Spider-Man: Brand New Day. Obsession. The Odyssey. And, of course, the unfinished Harry Potter marathon.",
      "Don't worry. We are finishing it. We will. Because apparently our relationship now includes an ongoing commitment to complete movies you started recommending.",
      "And that's another thing that has changed. When we first started dating, I used to secretly go to your home just to spend time with you. We had to keep things quiet. We watched Red, White & Royal Blue. We watched Legally Blonde. We had to be careful. Everything felt secret.",
      "Now, you come to my flat. We don't have to hide. We can spend time together without constantly thinking about whether someone is going to notice. So much has changed.",
      "But one thing hasn't. Almost every movie we watch is still your recommendation. From Legally Blonde... to Harry Potter... somehow, I am still just following your watchlist. And honestly? I wouldn't have it any other way."
    ],
    sticker: "🎬"
  },
  {
    id: 17,
    chapterNumber: "17",
    tag: "The Mosaic of Us 🧩",
    title: "When I look back, I don't think our story really has a beginning.",
    date: "Thousands of Ordinary Moments",
    location: "Everywhere & Every Chat",
    image: "images/chapters/chapter_17.jpg",
    quote: "Photographs can show what happened. But they can't fully show how it felt. This is my attempt to keep that feeling.",
    paragraphs: [
      "There was no single moment where everything changed.",
      "There was a chess match. A photoshoot. A department fest. A blue suit. An itinerary. Late-night rants. Long voice notes. Calls. Exams. The bus going the wrong way. A packed metro. Holding hands in Kamla Nagar. A Hinge icon that scared me more than it should have. A stupid game of Kill, Kiss, Marry. A confession at night. A red rose. A blue dress. A Korean photobooth. A lipstick photo. A first kiss. A terrible first movie. Majnu ka Tila. Kaffiaa. Your home. My flat. Udaipur. Mount Abu. Sunsets. Fights. Apologies. Awards.",
      "And thousands upon thousands of messages that, individually, seem insignificant. But together, they became us.",
      "Even the way we talk now has traces of everything we were before. The random requests. The late-night calls. The 'oye'. The 'bhai'. The teasing. The missing each other. The absurd arguments. The tiny updates. The constant need to tell each other what happened.",
      "Our chat has thousands of ordinary moments, but that's what I love about it. There are conversations about exams and practicals, department work, registrations, random photos, late-night nonsense and asking each other for help. Somewhere among all those ordinary messages, the relationship grew.",
      "And maybe that is why I don't want this website to just be a collection of photographs. Because photographs can show what happened. But they can't fully show how it felt. This is my attempt to keep that feeling."
    ],
    sticker: "💌"
  },
  {
    id: 18,
    chapterNumber: "18",
    tag: "Happy Birthday, My Love 🎂",
    title: "And now it's your birthday again.",
    date: "Today & Every Tomorrow",
    location: "From the Unfinished Chess Match to Forever",
    image: "images/chapters/chapter_18.jpg",
    quote: "Before you were my girlfriend, you became my best friend. And I would choose you again. Every time.",
    paragraphs: [
      "And this is probably the strangest part of the entire story for me. Because I remember going to your birthday when you were just my friend. I showed up. I was there. And I didn't even have a gift for you.",
      "Now look at me. I've been preparing this fifteen days before your birthday. I'm collecting our photos. Our videos. The gifts and cards you gave me. The memories. The conversations. The little pieces of us that would otherwise just remain buried somewhere in my phone. And I've spent all this time trying to build one place where you can come back and see everything.",
      "Because I don't want you to remember only the big moments. I want you to remember the silly ones too. The nights we were supposed to study. The wrong bus. The packed metro. The lipstick marks. The terrible movie. The good movies. The 'miss you' messages. The fights we thought were going to ruin everything but didn't. The trips. The quiet days at home. The secret visits. The now-not-so-secret visits. The chess game that still hasn't finished.",
      "Because maybe that is what our story is. A game that started before either of us knew what it meant. Two people who kept saying they were just friends while slowly becoming something else. Two people who took the longest possible route to arrive at the obvious answer.",
      "And after all this time, the game is still going. The first match never finished. And neither has our story. There is still so much left. More movies. More trips. More birthdays. More stupid arguments. More apologies. More photographs. More cards. More places. More sunsets. More ordinary Tuesdays that we'll somehow end up remembering years later. More versions of us that we haven't met yet.",
      "So this isn't the end of our story. It's just the part I've managed to put into one little corner of the internet.",
      "And if one day, years from now, we come back here and scroll through it again, I hope we remember the most important thing: Before you were my girlfriend, you became my best friend. And before either of us knew we were falling in love, we were already choosing each other—in tiny ways, every single day.",
      "And I would choose you again. Every time. From the unfinished chess match... to wherever the next move takes us."
    ],
    sticker: "💖"
  }
];
