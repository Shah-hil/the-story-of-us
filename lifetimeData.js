// =========================================================================
// 80-YEAR LIFETIME LOADING SCREEN & REAL-TIME RELATIONSHIP DATA
// The moment Vishal asked her out: January 30, 2026 at 8:50 PM
// Target Lifetime Horizon: 80 Years Together (January 30, 2106 at 8:50 PM)
// =========================================================================

const LIFETIME_CONFIG = {
  // Start moment: January 30, 2026 at 8:50 PM (20:50:00)
  startDateString: "2026-01-30T20:50:00",
  startDateFormatted: "January 30, 2026 • 8:50 PM",
  
  // Total years in lifetime journey
  targetYears: 80,
  
  // 80 Years Later: January 30, 2106 at 8:50 PM
  endDateString: "2106-01-30T20:50:00",
  endDateFormatted: "January 30, 2106 • 8:50 PM",
  
  // Romantic Loading Status Messages (Rotate periodically)
  loadingMessages: [
    "Loading 80 years of inside jokes, warm forehead kisses, and late-night calls...",
    "Buffering infinite cuddles, shared coffees, and endless laughs together...",
    "Allocating memory for a million more sunset walks and cozy hugs...",
    "Synchronizing two hearts beat for beat across 80 beautiful years...",
    "Rendering a lifetime of dreams, home-cooked dinners, and holding hands...",
    "Downloading forever: No expiration date found in our universe... 💖"
  ],

  // Milestone Constellation Points along the 80-year loading track
  milestones: [
    {
      id: "milestone-day1",
      yearsFromStart: 0,
      unlockTimestamp: "2026-01-30T20:50:00",
      targetDate: "January 30, 2026",
      timeTag: "Day 1 • 8:50 PM",
      title: "First Milestone • The Start ✨",
      subtitle: "The Phone Call That Changed Everything",
      description: "Honestly, making this first milestone leaves me wondering something I don't really know the answer to yet:\n\nHow many of these will we actually unlock together?\n\nAnd how many will be unlocked without one of us?\n\nI don't know.\n\nAnd maybe that's the strange, beautiful thing about making something like this so far in advance. I don't know what the future looks like. I don't know how many constellations we'll get to see light up together.\n\nBut no matter how many we unlock, I just hope that everything leading up to each one is beautiful.\n\nBeautiful and infinite.\n\nLike the stars in the universe.\n\nFor this first milestone, I honestly don't have much more to say.\n\nI have already written one message for every milestone, and maybe that is enough for now.\n\nSo I'll leave this one here.\n\nAnd I just hope that when the next one unlocks, you'll still be here to read what I wrote for you.\n\nAnd maybe, by then, we'll have a lot more stories to add.",
      sticker: "✨",
      progressPercent: 0
    },
    {
      id: "milestone-1yr",
      yearsFromStart: 1,
      unlockTimestamp: "2027-01-30T00:00:00",
      targetDate: "January 30, 2027",
      timeTag: "Year 1 • 365 Days",
      title: "Second Milestone — 1 Year 🌹",
      subtitle: "One Full Year Together • Unlocks Jan 30, 2027",
      description: "If you're reading this, then somehow, somewhere, we actually made it through our first year of being a couple.\n\nOne whole year.\n\nWhich is honestly crazy to think about.\n\nAnd now I'm sitting here wondering what I could possibly have prepared for our first anniversary, because while writing this, I genuinely don't know if I'll ever be able to top this idea.\n\nBut I really hope I do.\n\nBecause I don't think this is the maximum effort I can ever put into this relationship.\n\nI know that sometimes you feel like I don't do enough, or that maybe I don't care as much as I should.\n\nBut please believe me when I say that I do.\n\nI get completely entangled in things when it comes to you.\n\nI genuinely want to do things for you.\n\nAnd not just the simple, easy gestures.\n\nWhen it comes to you, I want to go all out.\n\nThat's probably why my surprises aren't always frequent.\n\nI take time.\n\nI overthink.\n\nI get lost in trying to make something that actually means something.\n\nBecause when I do something for you, I don't want it to feel like I just did something because I had to.\n\nI want there to be a little bit of me in it.\n\nA lot of thought in it.\n\nAnd a lot of love in it.\n\nAnd one more thing.\n\nIf, somehow, we are fighting about some stupid little thing on our anniversary when you are reading this, please try to forgive me.\n\nI know I'm dumb sometimes.\n\nAnd I know I mess things up.\n\nBut I can at least trust myself on one thing: I would never intentionally do something seriously fucked up to you.\n\nSo if some stupid little thing I did has hurt you, I'm sorry in advance.\n\nPlease forgive him.\n\nFor my sake.\n\nAnd I promise he'll try his best not to repeat it.\n\nAlso, I already know he'll probably say “sorry” approximately 100 times after reading this.\n\nSo, if he has done something stupid...\n\nmake him read this.",
      sticker: "🌹",
      progressPercent: 1.25 // 1 / 80 * 100
    },
    {
      id: "milestone-5yr",
      yearsFromStart: 5,
      unlockTimestamp: "2031-01-30T00:00:00",
      targetDate: "January 30, 2031",
      timeTag: "Year 5 • 5 Years",
      title: "Fifth Milestone — 5 Years 🏡",
      subtitle: "Half a Decade • Unlocks Jan 30, 2031",
      description: "Five years.\n\nWhat the fuck.\n\nIf we have reached this one, then there are probably two possibilities:\n\nEither I became significantly better at planning these things...\n\nor you have somehow survived me for five years.\n\nProbably both.\n\nI wonder what we look like now.\n\nI wonder where we live.\n\nWhat we do.\n\nWhat our normal days look like.\n\nWhat stupid things we fight about.\n\nWhat our favourite place is now.\n\nWhat movies you've made me watch by this point.\n\nI wonder how many of the things we once thought were important don't matter anymore.\n\nAnd how many tiny things we didn't even notice became some of our favourite memories.\n\nBut I hope one thing hasn't changed.\n\nI hope we still find reasons to spend an ordinary day together.\n\nBecause I think that's what I've learned from us.\n\nThe big days are beautiful.\n\nTrips are beautiful.\n\nBirthdays are beautiful.\n\nAnniversaries are beautiful.\n\nBut eventually, a life is mostly made of ordinary days.\n\nAnd I hope I still want to spend those ordinary days with you.\n\nFive years in, I hope I'm still the person you tell your random thoughts to.\n\nThe person you send stupid things to.\n\nThe person you call when something happens.\n\nAnd the person you want beside you when nothing happens at all.\n\nAlso, I hope you're still the one choosing what we watch.\n\nBecause apparently that part of our relationship is permanent.",
      sticker: "🏡",
      progressPercent: 6.25 // 5 / 80 * 100
    },
    {
      id: "milestone-10yr",
      yearsFromStart: 10,
      unlockTimestamp: "2036-01-30T00:00:00",
      targetDate: "January 30, 2036",
      timeTag: "Year 10 • A Decade",
      title: "Tenth Milestone — 10 Years 🌟",
      subtitle: "A Whole Decade • Unlocks Jan 30, 2036",
      description: "Ten years.\n\nAt this point, I don't even know whether calling this a milestone is enough.\n\nA decade is a very long time.\n\nThere are probably entire versions of us that exist between the people who started this journey and the people reading this right now.\n\nWe would have changed.\n\nA lot.\n\nWe'll probably have different responsibilities, different problems, different dreams.\n\nMaybe some things we once thought were impossible became normal.\n\nMaybe some things we desperately wanted never happened.\n\nMaybe life took us places neither of us could have imagined.\n\nBut I hope that somewhere inside all those changes, there is still a part of us that remembers how this started.\n\nA department photoshoot.\n\nTwo people who barely knew each other.\n\nA chess game that never finished.\n\nA blue suit.\n\nLate-night conversations.\n\nA stupid confession.\n\nA red rose.\n\nAnd two people who somehow took the longest possible route to becoming each other's person.\n\nI hope we still laugh about how neither of us wanted to admit what was happening.\n\nI hope we still remember the wrong bus.\n\nThe packed metro.\n\nThe Korean photobooth.\n\nUdaipur.\n\nMount Abu.\n\nThe terrible first movie.\n\nThe good ones that came after.\n\nAnd every little memory in between.\n\nTen years later, I don't want us to only remember when we became a couple.\n\nI want us to remember all the tiny moments that made us one.",
      sticker: "🌟",
      progressPercent: 12.5 // 10 / 80 * 100
    },
    {
      id: "milestone-25yr",
      yearsFromStart: 25,
      unlockTimestamp: "2051-01-30T00:00:00",
      targetDate: "January 30, 2051",
      timeTag: "Year 25 • Silver",
      title: "Twenty-Fifth Milestone — 25 Years 🥂",
      subtitle: "A Quarter Century • Unlocks Jan 30, 2051",
      description: "Twenty-five years.\n\nHalf of the story I've written so far might already feel like ancient history by now.\n\nMaybe the photographs on this website look different.\n\nMaybe the videos feel old.\n\nMaybe our phones don't even have the same technology anymore.\n\nMaybe we have become so different from who we were that looking at these two people feels almost strange.\n\nBut I hope you still recognize me.\n\nAnd I hope I still recognize you.\n\nBecause there is something very special about knowing someone through different versions of themselves.\n\nNot just loving the person they were.\n\nNot just loving the person they became.\n\nBut getting to watch them change.\n\nGrow.\n\nFail.\n\nSucceed.\n\nStart again.\n\nAnd somehow still choosing each other through all of it.\n\nTwenty-five years is enough time to see an unbelievable number of chapters.\n\nSo I hope this constellation is not just full of memories.\n\nI hope it is full of proof.\n\nProof that we kept going.\n\nProof that we kept learning each other.\n\nProof that even when life got difficult, we didn't forget how to come back to each other.\n\nAnd somewhere among all the grown-up things life has given us, I hope we still have some ridiculousness left.\n\nI hope we can still lie down somewhere and talk for hours.\n\nI hope you still make fun of me.\n\nI hope I still annoy you.\n\nAnd I hope, somehow, you are still the person whose recommendations control what we watch.",
      sticker: "🥂",
      progressPercent: 31.25 // 25 / 80 * 100
    },
    {
      id: "milestone-50yr",
      yearsFromStart: 50,
      unlockTimestamp: "2076-01-30T00:00:00",
      targetDate: "January 30, 2076",
      timeTag: "Year 50 • Golden",
      title: "Fiftieth Milestone — 50 Years 👑",
      subtitle: "Half a Century • Unlocks Jan 30, 2076",
      description: "Fifty years.\n\nI'm not even sure what the younger version of me who wrote this would think about that number.\n\nHe probably couldn't imagine it.\n\nHonestly, I can't either.\n\nBy now, there would be so much more behind us than ahead of us.\n\nSo many birthdays.\n\nSo many anniversaries.\n\nSo many trips.\n\nSo many arguments.\n\nSo many apologies.\n\nSo many ordinary mornings and nights that nobody else would ever know were important.\n\nAnd maybe that's the part I would care about most.\n\nNot the spectacular memories.\n\nThe little ones.\n\nThe ones where nothing special happened.\n\nJust you and me.\n\nEating something.\n\nWatching something you suggested.\n\nTalking nonsense.\n\nFalling asleep.\n\nWaking up.\n\nExisting together.\n\nBecause after fifty years, I think those ordinary moments become the real story.\n\nAnd when I look back at this website, I hope I'm not impressed by how much I created.\n\nI hope I'm grateful that we had so much to remember.\n\nAnd if you're reading this with me beside you, then there's probably only one thing left to say:\n\nWe really did it.\n\nThe two idiots from that unfinished chess game somehow made it this far.",
      sticker: "👑",
      progressPercent: 62.5 // 50 / 80 * 100
    },
    {
      id: "milestone-80yr",
      yearsFromStart: 80,
      unlockTimestamp: "2106-01-30T00:00:00",
      targetDate: "January 30, 2106",
      timeTag: "Year 80 • Forever",
      title: "Eightieth Milestone — 80 Years ♟️",
      subtitle: "A Lifetime Completed • Unlocks Jan 30, 2106",
      description: "Eighty.\n\nOkay.\n\nAt this point, I refuse to believe this website is still running.\n\nBut somehow, here we are.\n\nAnd honestly, I don't know what words could possibly be enough for eighty years of a life.\n\nWe've probably forgotten more memories than we remember.\n\nThere will be names we have forgotten.\n\nPlaces that look completely different.\n\nPhotos whose stories only the two of us understand anymore.\n\nThere will probably be things on this website that make us laugh because we can't believe we ever thought they were important.\n\nAnd maybe that's okay.\n\nBecause not every memory needs to stay sharp forever.\n\nSome memories just need to have existed.\n\nAnd somehow, ours did.\n\nFrom two people who didn't even know each other properly...\n\nto two people who spent an entire lifetime collecting reasons to remember each other.\n\nI don't know how many stars there are in the universe.\n\nI don't know how many of these constellations we ended up unlocking.\n\nI don't know how many messages we wrote.\n\nOr how many photographs we took.\n\nBut I hope, after all these years, when you look back at this first constellation, you still remember the feeling.\n\nThe feeling of not knowing what would happen.\n\nThe feeling of starting something without knowing where it would take us.\n\nAnd the feeling of hoping that there would be a next chapter.\n\nAnd then another.\n\nAnd another.\n\nUntil somehow, there were eighty years of them.\n\nSo if we have actually reached this one...\n\nthank you.\n\nFor every version of you that I got to know.\n\nFor every version of me that you stayed through.\n\nFor every road we took.\n\nEvery wrong turn.\n\nEvery fight.\n\nEvery laugh.\n\nEvery movie.\n\nEvery trip.\n\nEvery ordinary day.\n\nEvery constellation.\n\nAnd every next move.\n\nThe chess game finally lasted a very, very long time.\n\nAnd I'm still glad I got to play it with you.",
      sticker: "♟️",
      progressPercent: 100
    }
  ]
};
