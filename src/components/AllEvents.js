import React from "react";
import { useParams } from "react-router-dom";
import EventPage from "./EventPage";

// Event Details
const events = {
  /*
  interClassDance: {
    image: require("../images/dance.png"),
    title: "Jhoom Junction",
    subtitle: "Inter-Class Dance",
    details:
      "Showcase your class's talent and unity in the 'Jhoom Junction' Inter-Class Group Dance Event! With passion and competitive spirit, let your team light up the stage, blending creativity and energy into a performance that celebrates both rivalry and togetherness. Dance your heart out and make your class proud!",
    structure: [
      "Team size: 12-19 (12-16 performers + 3 volunteers)",
      "Participation: 1 team from each class",
      "Venue: Main Building Quadrangle",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 6:00 PM",
    ],
    rules: [
"Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
"Time allotted per performance is 5 minutes (4 minutes for the performance + 1 minute for clearance).",
"Teams have the liberty to select the songs/ theme/ dance style.",
"Marks will be allotted based on theme, dancing skills, originality of ideas and use of props, costumes, and choreography.",
"Theme for the dance may not be compulsory but having one would help in receiving additional points.",
"The participants are expected to observe a level of decency and refrain from making racial, religious or offensive remarks.",
"Revealing costumes won't be allowed. Teams need to get their costumes verified with the coordinators as and when asked to do so.",
"Only use of simple props which can be carried in and out of the stage right before the performance is permitted.",
"The soundtrack of the performance has to be submitted on time as and when instructed by the coordinators.",
"A song may be repeated only twice during the entire event.",
"Theme of the dance cannot be repeated.",
"Registration of the songs and themes will be done on a first come first serve basis.",
"All the songs submitted by the team have to be used in the final soundtrack.",
"Any delay on account of the participants or non-compliance of rules will lead to disqualification.",
"Schedule for rehearsal on the stage will be shared by the coordinators.",
"Decisions taken by the event coordinators would be final."
    ],
    contacts: [
      { name: "Rucha Joshi", phone: "9604282378" },
      { name: "Shruti Kothavade", phone: "8767824195" },
      { name: "Paridha Bhoite", phone: "9321649591" },
    ],
    registerLink: "https://example.com/interclassdance-register",
  },
  soloDance: {
    image: require("../images/dance.png"),
    title: "Solo Synergy",
    subtitle: "Solo Dance",
    details:
     " Step into the spotlight and let your passion take center stage in our Solo Dance Event! This is your chance to express your individuality, showcase your creativity, and captivate the audience with your unique moves. Dance to the rhythm of your story and own the stage in a celebration of talent, energy, and self-expression. Get ready to dazzle and make it a performance to remember – it's your moment to shine!",
    structure: [
      "Team size: 1 participant",
      "Participation: 1 participant per class",
      "Venue: Stage 2",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 2:00 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
"The allotted performance time is 3 minutes (extra 1 minute for stage setup & clearance). Points will be deducted for exceeding the time limit.",
"Non-classical styles include Bollywood, Hip-hop, Contemporary, Jazz, Freestyle, and similar genres. Classical forms like Bharatanatyam or Kathak are not allowed; refer to the classical dance competition for those guidelines.",
"Participants are required to maintain decency and must refrain from making any racial, religious, or offensive remarks.",
"Simple props that can be carried onto and off the stage just before the performance are allowed.",
"The soundtrack of the performance has to be submitted on time as and when instructed by the coordinators. No changes can be made to the soundtrack once it's submitted.",
"The judges decision will be final and binding.",
"Any delays on account of participants or non-compliance of rules will lead to disqualification.",
"The sequence of performances set by the event coordinators will be considered final. Requests to alter the order will not be accommodated.",
    ],
    contacts: [
      { name: "Sakshi Bansode", phone: "8600591667" },
      { name: "Komal", phone: "9022696146" },
    ],
    registerLink: "https://example.com/solodance-register",
  },
  classicalDance: {
    image: require("../images/dance.png"),
    title: "नृत्यांजलि",
    subtitle: "Classical Dance",
    details:
      "Embark on a graceful journey through the artistry of classical dance. Channel the elegance of tradition and weave your own story through every intricate move.Join us for a mesmerising exploration of cultural richness and timeless expressions – let your classical dance speak volumes on our stage!",
    structure: [
      "Team size: 1-5 members",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 10:00 AM - 1:00 PM",
    ],
    rules: [
     "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
"The allotted performance time is 3 minutes (extra 1 minute for stage setup & clearance). Points will be deducted for exceeding the time limit.",
"Only the use of simple props that can be carried in and out of the stage right before the performance is permitted.",
"The soundtrack of the performance has to be submitted on time as and when instructed by the coordinators. No changes can be made to the soundtrack once it's submitted.",
"The participants are expected to observe decency and refrain from making racial, religious, or offensive remarks.",
"During the application process, it's compulsory to mention the level/exams of the dance form you have chosen.",
"You will be short-listed only if you have qualified for any of the exams of your dance form.",
"Participants can perform a fusion of 2 dance forms in a single performance.",
"To maintain the authenticity of the performances, participants are to refrain from incorporating semi-classical elements into their performances.",
"Participants should wear traditional costumes authentic to their chosen dance form.",
"All songs are acceptable (considering the decency level). The use of classical music that complements the chosen dance style is highly recommended.",
"Any delays on account of participants or non-compliance of rules will lead to disqualification.",
"The judges decision will be final and binding.",
"The sequence of performances set by the event coordinators will be considered final. Requests to alter the order will not be accommodated."
    ],
    contacts: [
      { name: "Purva Sarda", phone: "9021750026" },
      { name: "Gayatri More", phone: "9561937665" },
      { name: "Bhargavi Girisagar", phone: "9373602852" },
    ],
    registerLink: "https://example.com/classicaldance-register",
  },
  streetdance: {
    image: require("../images/dance.png"),
    title: "The Street Brawl",
    subtitle: "Street Dance",
    details:
      " Get ready for an electrifying showdown as 37 dynamic dancers face off in a high-energy battle of rhythm, style, and raw talent. Watch as creativity and passion collide in a series of exhilarating rounds, leading to the ultimate face-off for dance supremacy. Who will rise as the champion of the floor? Join us to witness the intensity, drama, and unmatched energy of the Dance Battle!",
    structure: [
     "Team size: 1 participant",
      "Participation: 1 participant per class",
      "Venue: Stage 2",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 3:00 PM - 5:00 PM",
    ],
    structureNote: [
 "Round 1: 36 are paired, and 1 gets a bye. 18 winners + 1 bye = 19 advance.",
"Round 2: 18 are paired, and 1 gets a bye. 9 winners + 1 bye = 10 advance.",
"Round 3: 10 are grouped into 2 groups of 3 and 1 group of 4. 3 winners advance.",
"Final Round: The 3 winners face off to decide the champion."
    ],
    rules: [
    "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
"Opponents for each round will be decided on the spot during the event.",
"The organisers will randomly select and play music to which participants will perform in all rounds.",
"Each face-off will be of 2 minutes. Adherence to the time limit is crucial.",
"Judging will be based on technique and skill, synchronisation, creativity and originality, stage presence and showmanship.",
"Any form of disrespectful behaviour, including inappropriate gestures or actions, will result in disqualification. Playful jesting and mild teasing are permitted.",
"Classical and Folk dances are not a part of this competition. (Please refer to the rules of the classical dance competition).",
"The participants are expected to observe a level of decency and refrain from making racial, religious or offensive remarks.",
"Simple props which can be carried in and out of the stage right before the performance are permitted.",
"The decisions of the judges and organisers will be final and binding."
    ],
    contacts: [
      { name: "Aarohii Hanji", phone: "9765154647" },
      { name: "Samruddhi Patil", phone: "9765154647" },
    ],
    registerLink: "https://example.com/dancebattle-register",
  },
  interCollegeDance: {
    image: require("../images/dance.png"),
    title: "Step It Up",
    subtitle: "Inter-College Dance",
    details:
     "Dance to win, Step It Up to conquer! This is more than a competition – it’s a chance to network with top teams, showcase your skills to an enthusiastic audience, and make your mark on a platform buzzing with energy and creativity.  Raise your college flag high, mesmerize the crowd, and claim your spot as the best in the game!",
    structure: [
      "Team size: 5-15 members + 1-2 helpers (only if needed)",
      "Participation: Multiple teams from the same college",
      "Venue: Main Building Quadrangle",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 10:00 AM - 12:30 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "",
      ""
    ],
    contacts: [
      { name: "Purva Sarda", phone: "9021750026" },
      { name: "Tanisha Dusane", phone: "9823389442" },
    ],
    registerLink: "https://example.com/intercollegedance-register",
  },
  groupSinging: {
    image: require("../images/music.png"),
    title: "Sargam Symphony",
    subtitle: "Group Singing",
    details:
      "Unite your voices and let the music soar in this dynamic group singing competition! Perform your favorite songs in English, Hindi, or Marathi, all within a five-minute showcase of creativity, harmony, and stage charisma. Celebrate the power of teamwork and the joy of music as you captivate the audience with your unique blend of rhythm and melody. It's time to harmonize, innovate, and shine together on stage!",
    structure: [
      "Team Size: 2 (minimum) / 5 (maximum)",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 10:00 AM - 1:30 PM",
    ],
    rules: [
  "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
 "The selection of songs is up to the participant.", "Innovative compositions are most welcomed.",
 "Songs should be in English, Hindi or Marathi.",
 "Vocal beats in Raps are allowed, and mixing (Bollywood + Hollywood) of songs can be done.", 
"Remix versions of old songs can be done.",
 "Songs should be registered before the event to the event coordinators as and when instructed.", 
"No repetition of the song is allowed. Song priority will be based on a first come & first serve basis.", 
"Use of any personal instrument should be informed before the event.",
 "If any particular setup is required for a performance, kindly notify the event coordinators well in advance.", 
"Time Limit is 5 minutes- 3 minutes performance + 2 minutes for stage clearing.",
 "Timing begins as soon as the performance starts. Exceeding the limit will lead to the reduction of points.",
 "Participants should be ready with their instruments or songs before their performance and should not take much time to assemble on the stage.", 
"The karaoke should be submitted as and when instructed by the coordinator.",
 "Participants are expected to observe decency and refrain from profanity.", 
"The decision taken by the coordinators & judges will be final and binding.",
 "Judging Criteria are Creativity, Team Dynamics and Showmanship, Vocal, Pitching, Rhythm and Diction, Costume, Overall Impression, Impact & Stage Presence."
    ],
    contacts: [
      { name: "Sneha Ranade", phone: "9172457943" },
      { name: "Rujuta Kulkarni", phone: "8983083422" },
    ],
    registerLink: "https://example.com/groupsinging-register",
  },
  departmentAntakshariStudents: {
    image: require("../images/open.png"),
    title: "Suron ke Sikandar",
    subtitle: "Department Antakshari-Students",
    details:
      "Department Antakshari challenges teams to showcase their musical prowess through three exciting rounds. From song lyric decrypting to singing challenges, culminating in the ultimate Antakshari face-off. May the most melodious team emerge victorious!",
    structure: [
      "Participation: 1 team per department (1 student per year)",
      "Team Size: Minimum 2, Maximum 4",
      "Venue: KB Joshi Auditorium",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 10:00 AM - 12:00 PM",
    ],
    structureNote: [
    "Lifeline 1 (Sangeet Sathi) : For round 1, you can take help from the audience to guess the song.",
"For Round 2, audience can suggest only one song to a team.",
"Lifeline 2 (Sangeet Shuffle) : You can pick other chits.",
"Teams can use lifelines in 1st two rounds only.",
"Only one lifeline can be used per round.",
"Each of the lifelines can be used only once during the entire competition. (i.e if a team has used Sangeet Sathi in round 1, they can only take Sangeet Shuffle in round 2 and a team cannot use both lifelines in a single round)",
"Use of any lifeline leads to deduction of 2 points.",
"ROUND 1 (Song Lyric Decryptor) : No elimination.",
"1. Each team will pick up a chit containing lyrics of any Hindi song converted in English.",
"2. Team has to guess the correct Hindi song for the same.",
"3. Time given to think of a song is 45 seconds.",
"4. 5 points will be awarded for each correct song.",
"5. Each team will get a chance to pick up 2 chits.",
"5. Round 2 (Song Search Showdown) : No elimination.",
"1. Each team will pick up a chit having a word.",
"2. Team has to sing a maximum number of songs (at least 1 verse) having that word.",
"3. Time given to think of songs is 90 seconds.",
"4. Each song will be awarded with 5 points.",
"5. Each team will get a chance to pick up only 1 chit.",
"6. Round 3 : Ultimate Antakshari (Final Round)",
"1. No song can be repeated.",
"2. At least 1 first verse of the song must be sung.",
"3. The decision of the judges is final and binding to all the teams.",
"4. Time is given to think of a song is 20 seconds.",
"5. This round will run 3 times (3 turns for each team).",
"6. Each correct song will be awarded with 10 points."
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.", 
"There will not be any eliminations in any rounds. Winner will be declared based on overall scores of all 3 rounds.", 
"Use of Phone/Internet is strictly prohibited.",
 "Taking help from the audience will lead to deduction of points.", 
"The decision taken by the judges & coordinators during any event will be final and binding in all cases & should be accepted gracefully.",
 "The organizing committee reserves the right to make decisions in unforeseen circumstances or disputes in any competitions/events."
    ],
    contacts: [
      { name: "Sakshi Deshmukh", phone: "7055929394" },
      { name: "Shruti Srinivasan", phone: "8208996654" },
    ],
    registerLink: "https://example.com/departmentantakshari-register",
  },*/
  departmentAntakshariFaculty: {
    image: require("../images/open.png"),
    title: "The Great Faculty Sing-Off",
    subtitle: "Department Antakshari-Faculty",
    details:
      "Department Antakshari challenges teams to showcase their musical prowess through three exciting rounds. From song lyric decrypting to singing challenges, culminating in the ultimate Antakshari face-off. May the most melodious team emerge victorious!",
    structure: [
      "Participation: 1 team per department ",
      "Team Size: Minimum 2, Maximum 4",
      "Venue: Instrumentation Auditorium",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:00 PM - 4:00 PM",
    ],
    structureNote: [],

    rules: [
      {
        heading: "Final Registration",
        points: [
          "Once registration is completed, it will be considered final, and no changes or alterations will be allowed under any circumstances.",
        ],
      },
      {
        heading: "Participation",
        points: [
          "Each class can nominate 1 participant to perform in the competition.",
          "Participants must select a category from the approved list of talents.",
        ],
      },
      {
        heading: "Categories of Talent",
        points: [
          "Performing Arts: Stand-Up Comedy, Singing, Dancing, Drama (Solo/Group)",
          "Literary Arts: Poetry (Spoken Word or Recital), Storytelling",
          "Miscellaneous: Magic Tricks, Beatboxing, Any unique or unconventional talent",
        ],
      },
      {
        heading: "Time Allotment Per Performance",
        points: [
          "Each performance must not exceed 2 minutes. Exceeding the time limit will result in point deductions as per the penalty rules.",
        ],
      },
      {
        heading: "Winner Selection",
        subheading: "Score Prediction",
        points: [
          "Before their performance, participants must predict their own score out of 10.",
          "Judges will cross-question the participants after their performance and provide scores.",
          "The average score from all judges will be calculated.",
          "The participant whose predicted score matches the judges’ average score will be declared the winner. If no participant's prediction matches the average, no winner will be declared for that round or category.",
        ],
      },
      {
        heading: "Penalty Rules",
        points: [
          "Exceeding Time Limit: -0.5 points will be deducted for every 30 seconds over the 2-minute limit.",
          "Offensive Content: Use of offensive content, including inappropriate language or behavior, will result in: -1 point deduction or disqualification, depending on the severity.",
        ],
      },
    ],

    contacts: [
      { name: "Tejaswini Patkar", phone: "9730044087" },
      { name: "Mrudula Dafne", phone: "7447835329" },
    ],
    registerLink: "https://example.com/departmentantakshari-register",
  } /*

  CumminsGotLatent: {
    image: require("../images/open.png"),
    title: "Cummins Got Latent",
    subtitle: "",
    details:
  "Cummins's Got Latent is an electrifying talent showdown where students from each class unleash their creativity and unique skills! Whether it’s performing arts, literary brilliance, or extraordinary talents like magic or beatboxing, this is your time to shine. The catch? Predict your score before stepping on stage! Perform within 2 minutes, wow the judges, and if your prediction matches their average score, you take the crown. It’s a thrilling mix of talent, strategy, and confidence – so get ready to dazzle! ",
    structure: [
      "Team Size: 1",
      "Participation: 1 member per class",
      "Venue: Stage 2",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 12:00  - 2:30 PM",
    ],
    structureNote: [
   ],
    rules: [
      "Final Registration: Once registration is completed, it will be considered final, and no changes or alterations will be allowed under any circumstances.",
      "Participation: Each class can nominate 1 participant to perform in the competition. Participants must select a category from the approved list of talents.",
      "Categories of Talent: Participants can showcase their talent in any of the following categories:",
      "Performing Arts: Stand-Up Comedy, Singing, Dancing, Drama (Solo/Group)",
      "Literary Arts: Poetry (Spoken Word or Recital), Storytelling",
      "Miscellaneous: Magic Tricks, Beatboxing, Any unique or unconventional talent",
      "Time Allotment Per Performance: Each performance must not exceed 2 minutes. Exceeding the time limit will result in point deductions as per the penalty rules.",
      "Winner Selection:",
      "Score Prediction: Before their performance, participants must predict their own score out of 10.",
      "Judging Process: Judges will cross-question the participants after their performance and provide scores. The average score from all judges will be calculated.",
      "Winning Criteria: The participant whose predicted score matches the judges’ average score will be declared the winner. If no participant's prediction matches the average, no winner will be declared for that round or category.",
      "Penalty Rules:",
      "Exceeding Time Limit: -0.5 points will be deducted for every 30 seconds over the 2-minute limit.",
      "Offensive Content: Use of offensive content, including inappropriate language or behavior, will result in: -1 point deduction or disqualification, depending on the severity."
   ],
    contacts: [
      { name: "Rujuta Kulkarni", phone: "8983083422" },
      { name: "Mrudula Dafne", phone: "7447835329" },
    ],
    registerLink: "https://example.com/departmentantakshari-register",
  },
  DumbCharades: {
    image: require("../images/open.png"),
    title: "Shantit Kranti",
    subtitle: "Dumb Charades Competition",
    details: "Get ready to unleash your inner actor and test your wit in 'Shantit Kranti,' an exciting interdepartmental Dumb Charades competition! Expect laughter, teamwork, and maybe a little bit of friendly rivalry as you compete to guess movie titles, song hooks, and more. Toh aao dekhe kis department mei kitna hai dum!",
    structure: [
      "Team Size: 6 Members",
      "Participation: Inter-Departmental (One Team per department)",
      "Venue: KB Joshi Audi",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 3:00 PM - 5:00 PM",
    ],
    rules: [
      "Final Registration: Once registration is completed, it will be considered final, and no changes or alterations will be allowed under any circumstances.",
      "Team Participation: Each team member is allowed to enact only once during the competition. However, all team members can guess any number of times during their turn.",
      "Timing: The time limit will vary for each round and will be announced at the beginning of the event.",
      "Permissible Actions: Only gestures are allowed for enacting. The use of props, sounds, or words is strictly prohibited.",
      "Guessing Rules: Teams can make multiple guesses within the allotted time during their turn. The first correct answer will be considered. If a team fails to guess the answer, the question will be passed to the next team.",
      "Winning Criteria: The team with the highest points at the end of all rounds will be declared the winner.",
      "Disruptions: Disturbing other teams during their turns is strictly prohibited and may lead to penalties.",
      "Unfair Play: Any form of cheating or unfair play will result in penalties or disqualification.",
      "Final Authority: Decisions made by the event coordinators regarding disputes or rule clarifications will be final and binding."
    ],
    contacts: [
      { name: "Sachi Shah", phone: "9175034745" },
      { name: "Ishita Patil", phone: "8237551931" }
    ],
    registerLink: "https://example.com/shantitkranti-register"
  },
  KalakaarKatta: {
    image: require("../images/open.png"),
    title: "Kalakaar Katta",
    subtitle: "Art and Music Extravaganza",
    details: "Kalakaar Katta is a creative extravaganza blending art, music, and fun! Dive into a stunning art display and groove to the beats of an epic jamming session with live performances and open mic opportunities. Join us to immerse yourself in art, music, and the spirit of Gandhaar!",
    structure: [
      "Team Size: Not Applicable",
      "Participation: Open to all departments",
      "Venue: Instrumentation Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 5:00 PM",
    ],
    rules: [
      "Final Registration: Upon completion of registration, kindly note that it will be considered final, and no alterations will be accommodated under any circumstances.",
      "Art Collection: Collection of your art piece will be conducted and communicated through mail.",
      "Submission Deadline: The participants should submit their artwork within the deadline given.",
      "Shortlisting: Art pieces will be shortlisted prior to display to ensure a well-organized and uncluttered presentation."
    ],
    contacts: [
      { name: "Ishita Patil", phone: "8237551931" },
      { name: "Tanisha Joshi", phone: "7796760971" }
    ],
    registerLink: "https://example.com/kalakarkatta-register"
  },
  EscapeRoom: {
    image: require("../images/open.png"),
    title: "Escape Room",
    subtitle: "Thrilling Team Challenge",
    details: "Participants will be locked inside a building, teaming up in groups of four to tackle a series of thrilling challenges spread across mysterious locations. Each challenge completed unveils a clue to the next destination and a crucial digit for the ultimate password. The race is on to collect all the digits, return to the starting point within the 2-hour time limit, and crack the code to unlock the phone.",
    structure: [
      "Team Size: 4",
      "Participation: 1 team from each class (only first 20 teams: first come- first serve)",
      "Venue: Entire IT/Mech Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 11:00 AM - 1:00 PM",
    ],
    rules: [
      "Final Registration: Upon completion of registration, kindly note that it will be considered final, and no alterations will be accommodated under any circumstances."
    ],
    contacts: [
      { name: "Swarali Amrutkar", phone: "9823351654" },
      { name: "Aditi Pardeshi", phone: "7447554554" },
      { name: "Aarohii Hanji", phone: "9765154647" }
    ],
    registerLink: "https://example.com/escaperoom-register"
  },
  TreasureHunt: {
    image: require("../images/open.png"),
    title: "Treasure Hunt (TALAASH)",
    subtitle: "Campus Adventure",
    details: "Gear up for an exciting adventure across the campus! Solve progressively challenging clues, follow color-coded hints, and explore hidden spots to uncover the ultimate treasure. Teams of 5 will compete to earn points for their class and the title of the best treasure hunters!",
    structure: [
      "Team Size: 4",
      "Participation: 1 team from each class",
      "Venue: All Campus",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 10:30 AM - 12:30 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered final, and no alterations will be accommodated under any circumstances.",
      "Treasure Hunt will consist of clues that must be solved in a specific order. The difficulty level will increase as the team moves forward in the game.",
      "In case of failure in following the rules, your team will be disqualified.",
      "The strength of the team is to be limited to 5 members ONLY. Incomplete teams will face deduction in points.",
      "The first clue will be provided by the Panel members. Each clue will have a unique code number. Teams must follow the sequence by looking for clues marked with the corresponding code number.",
      "Tampering of clues of other teams will lead to immediate DISQUALIFICATION.",
      "Use of Mobile phones is NOT Allowed.",
      "Help / prompting by any Non-Team member will lead to DISQUALIFICATION.",
      "Reporting time will be 30 mins before the start of the event.",
      "No last-minute changes in team members are allowed.",
      "Make sure you do not damage any college property during your event.",
      "Game Coordinator's decision will be final.",
     
    ],
    contacts: [
      { name: "Shreya Siddheshwar", phone: "9689444578" },
      { name: "Eva Deswal", phone: "9920267634" },
      { name: "Gayatri Kadu", phone: "9209115390" }
    ],
    registerLink: "https://example.com/treasurehunt-register"
  },*/,
  btechfashionShow: {
    image: require("../images/Runway.png"),
    title: "HauteAura",
    subtitle: "BTECH Fashion Show",
    details:
      "Prepare for a fashion journey where your creativity takes center stage! This show breaks free from strict themes, encouraging you to unleash your originality with cool ideas, props, amazing costumes, and some stylish dance moves. Keep it classy, and let your performance be the voice.It's your moment to shine on stage, and every decision you make contributes to your extraordinary fashion adventure!",
    structure: [
      "Team Size: 18-21 students (14-17 performers + 4 for lights, costumes, hair, makeup, music management)",
      "Participation: 1 team from each FINAL YEAR class",
      "Venue: Samstha Ground",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 6:00 PM - 9:00 PM",
    ],
    rules: [
      {
        heading: "Registration and Eligibility",
        points: [
          "This event is exclusively for final-year students.",
          "Registration of themes will be on a first-come, first-serve basis. In case of repetition of themes or tracks, the team that registered first will retain the right to use the theme/track.",
          "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
          "The slots allotted by the organizers will be final and will not be changed.",
        ],
      },
      {
        heading: "Performance Guidelines",
        points: [
          "Performance time for each team is 13 minutes, plus 1 minute for stage setup and clearance.",
          "The music track for the performance must be submitted as instructed by the coordinators. Any delay in track submission will result in a reduction of points.",
          "There is no specific theme for the fashion show. Teams are free to select any theme and will be judged accordingly.",
        ],
      },
      {
        heading: "Props and Costumes",
        points: [
          "The use of simple props that can be carried in and out of the stage immediately before and after the performance is allowed.",
          "All outfits should be approved by the coordinators. Failure to share outfits when requested may result in disqualification.",
          "Prop preparations and arrangements will be the team's responsibility.",
        ],
      },
      {
        heading: "Conduct and Decorum",
        points: [
          "Participants must maintain a certain amount of decency. Any act or move deemed vulgar or indecent will lead to disqualification.",
          "Participants are strictly instructed to NOT use college property like the library or reading halls during their practice. Violations will result in disqualification.",
          "Only females will be involved in costume fittings for the performance.",
        ],
      },
      {
        heading: "Meetings and Reporting",
        points: [
          "Participants must report 1.5 hours before their event and confirm their presence with the event coordinator.",
          "Any delay in the schedule will cause a reduction of points.",
          "The team leader must complete any specific requirements form as instructed by the coordinators.",
        ],
      },
      {
        heading: "Judging and Results",
        points: [
          "Marking will be based on the originality of ideas, props, costumes, and choreography.",
          "The decision of the coordinators will be final and binding.",
        ],
      },
      {
        heading: "Practice and Permissions",
        points: [
          "Permission for practice venues and outside choreographers is the team’s responsibility, and the event coordinators must be informed in advance.",
          "There will be only one team head in a team.",
        ],
      },
    ],

    contacts: [
      { name: "Tejaswini Patkar", phone: "9730044087" },
      { name: "Sameeksha Tantak", phone: "9096417769" },
    ],
    registerLink: "https://example.com/fashionshow-register",
  },
  /*
  missCummins: {
    image: require("../images/Runway.png"),
    title: "Miss Cummins - Beauty Contest",
    subtitle: "Beauty Pageant",
    details:
      "Dive into the glamour with our Miss Cummins! Competition will take place in three rounds - Ramp Walk, Talent round and Q&A testing personality and intelligence. Shine in five categories: costume, ramp walk/modelling, fashion, personality, and stage presence. Awards await, from Miss Cummins to Best Personality—let the elegance and charm steal the spotlight!",
    structure: [
      "Team Size: 1",
      "Participation: 2 participants from each class",
      "Venue: Main Building Quadrangle",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 2:00 PM - 4:30 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "The deadline for applying for Miss Cummins is 20 January 2025.",
      "The elimination Round will be conducted in person on 22 January 2025.",
      "For the elimination round, each participant must bring and submit at least 3-4 pictures as a portfolio (physical printouts).",
      "Participants need to fill out a questionnaire which will be distributed and collected in person during this elimination round (22nd January 2025).",
      "20 Students will be shortlisted after the elimination round by a jury of judges.",
      "There will be a total of 3 rounds on the day of the event.",
      "Round 1: Walk and Introduction",
      "Round 2: Talent Round",
      "Round 3: Question and Answer Round.",
      "Each of these rounds will have elimination (10 eliminations in Round 1, 5 eliminations in Round 2).",
      "Soundtrack for the walk and final round has to be submitted as and when asked by the co-ordinators. If any changes are requested, you are obliged to follow.",
      "You will be allowed and allocated 15 minutes to change outfits if required, for your talent show.",
      "You will be judged on 5 categories (costume, walk, talent, personality, and stage presence).",
      "Awards for the Miss Cummins Pageant: Miss Cummins (Winner), Best Personality, Best Fashion Sense.",
      "Inappropriate costume/dress would lead to disqualification.",
      "Judges’ decision will be final and binding and should be accepted gracefully.",
      "Round 1: Walk and Introduction - Ramp walk must be between 30 seconds. The introduction should not exceed 30 seconds. One personal question would be asked to the participants spontaneously during this introduction, for which the participants will get 30 seconds to answer. Total time of 1 minute 30 seconds allotted to each participant.",
      "Round 2: Talent Round - Each person has to limit their Talent Performance (Dance, Music, etc.) to 3 minutes. Participants have to carry any props or equipment needed for their talent. 15 minutes will be allocated to change outfits if required.",
      "Round 3: Question and Answer Round - Each finalist will have to answer one question asked by the judge.",
    ],
    contacts: [
      { name: "Isha Madhavan", phone: "7507685007" },
      { name: "Aarya Kadam", phone: "7887799700" },
    ],
    registerLink: "https://example.com/misscummins-register",
  },
  
  ecoVogue: {
    image: require("../images/Runway.png"),
    title: "Eco Vogue - Trashion",
    subtitle: "Trashion Event",
    details:
      "Transform trash into fashion at our 'Abstract Artistry Outfits' Trashion event! Teams craft entire outfits and accessories from recycled materials, cardboard, bubble wrap, fabric straps, etc earning points for creativity, sustainability, and craftsmanship. It's a runway where style meets sustainability!",
    structure: [
      "Team Size: 3 members (1 model + 2 designers)",
      "Participation: 1 team per class",
      "Venue: Main Building Quadrangle",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 1:00 PM - 3:00 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "If multiple teams from the same class submit the form, priority will be given to the team that registers first, following a first-come, first-served basis.",
      "The theme for trashion this year is ‘Abstract Artistry Outfits’",
      "Teams are permitted to commence the creation of their dresses right after registering for the competition.",
      "Participants have the creative freedom to use a wide array of trash items, including cans, bottle caps, chip packets, old cloth cutouts, trash bags, bottles, cans, cups, used plates, electronic waste, used bubble wrap, combs, newspaper, etc.",
      "The entire dress must be crafted from scratch using trash material.",
      "Teams are encouraged to earn additional points by crafting accessories from scratch, such as heels, bags, earrings, hair accessories, necklaces, and more.",
      "If it is found that the attire is not legitimately created by the team, the judges reserve the right to disqualify the team.",
      "The team will have to present their costume in front of the judges on the day of the event and will have to explain their creative usage of trash.",
      "Each team will have a minute for the fashion walk followed by a 2-minute Q&A round on the day of the event.",
      "The participants have the liberty to choose the soundtrack for the walk. The track should be submitted as and when asked by the coordinators.",
      "Judging criteria include creativity, sustainability, craftsmanship, overall Impression, and impact. Additional points may be awarded for crafting accessories from scratch.",
      "The participants are requested to maintain decency and decorum. Indecent/Vulgar costume will lead to a reduction of points.",
      "Too revealing and short (above knee length) costumes will lead to disqualification.",
      "The organizing committee reserves the right to make decisions in unforeseen circumstances or disputes.",
    ],
    contacts: [
      { name: "Aarya Kadam", phone: "7887799700" },
      { name: "Srushti Tarate", phone: "7770004893" },
    ],
    registerLink: "https://example.com/ecovogue-register",
  },
  debateCompetition: {
    image: require("../images/Literary.png"),
    title: "Goonj 3.0",
    subtitle: "Debate Competition",
    details: "A solo debate where the speaker takes a stance on a topic and then switches sides after a set amount of time, presenting both the pros and cons of the particular motion.",
    structure: [
      "Team Size: 1",
      "Participation: 1 team from each class",
      "Venue: Stage 2",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 2:30 PM - 4:30 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "The duration of the contest will be 3 minutes.",
      "The topic for the debate will be given 10 minutes prior to the actual event.",
      "Initially, the candidate has to speak for the motion, and upon hearing the buzzer, the candidate must switch to speak against the motion.",
      "The buzzer will go up at the organizer’s discretion.",
      "Failure to change the stance will result in a deduction of points.",
      "The cycle of switching stances will continue until the 3 minutes are up.",
      "The candidate will be made aware 10 seconds before the allotted time ends to sum up their argument.",
      "The speakers will be evaluated on Matter (content of the speech) and Manner (presentation and speaking style).",
      "Any traces of copyright violation, plagiarism, or AI-generated writing will lead to disqualification.",
      "The judges' decision will be final. Any challenges to the authority of the esteemed judges will not be entertained.",
      "The focus is on transitions, strength of arguments, and balancing of opinions.",
      "Topics will be fun, engaging, and challenging, so prepare yourself accordingly."
    ],
    contacts: [
      { name: "Anuradha Kalkar", phone: "9284469995" },
      { name: "Sejal Patil", phone: "9373447616" },
    ],
    registerLink: "https://example.com/debate-register",
},

quizCompetition: {
    image: require("../images/Literary.png"),
    title: "Lights, Quiz, Action!",
    subtitle: "All In One Quiz",
    details: "Gear up for three exciting rounds in the Quizmania event! From text-based questions to enacting scenes in a bonus round, and finally, a buzzer round testing your quick thinking.",
    structure: [
      "Team Size: 5",
      "Participation: 1 team from each class",
      "Venue: KB Joshi Audi",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 2:00 PM - 4:00 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "The competition will involve 3 rounds:",
      "Round 1: Dialogue Fusion - Participants guess the correct dialog and its source movie.",
      "Round 2: Dumb Charades - One team member acts while the others guess the scene or song.",
      "Round 3: Buzzer Round - 'Fastest Finger First' based on images shown for a limited time.",
      "Results will be based on the average score of all three rounds and announced on the prize distribution day.",
      "Any decision taken by the Event Coordinators will be FINAL."
    ],
    contacts: [
      { name: "Kashish Patil", phone: "9834645651" },
      { name: "Srushti Tarate", phone: "7770004893" },
    ],
    registerLink: "https://example.com/quiz-register",
},

spellingBee: {
    image: require("../images/Literary.png"),
    title: "Spellbound",
    subtitle: "Spelling Bee/Vocab Builder",
    details: "Navigate through the life-size maze while completing word-related challenges. Accumulate points by successfully completing tasks, and aim to reach the end of the maze within the allotted time for bonus points.",
    structure: [
      "Team Size: 2-3 members",
      "Participation: One team per class",
      "Venue: KB Joshi Audi",
      "Date: Day 1 (Wednesday, 29th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "Each player rolls the dice in turn to determine their movement.",
      "Players move forward or backward based on the dice roll.",
      "Upon landing on a block, players must pick a chit and complete the task described.",
      "Successfully completing a task earns points, while failing results in point deductions.",
      "Bonus points may be awarded for creativity, speed, or exceptional performance.",
      "If a task is incomplete at the start of the next turn, the player automatically loses points.",
      "Players who reach the end of the maze within the time limit will receive bonus points.",
      "Players can continue participating in tasks until the slot ends, even if they’ve completed the maze."
    ],
    contacts: [
      { name: "Isha Madhavan", phone: "7507685007" },
      { name: "Twisha Gohil", phone: "9545944388" },
    ],
    registerLink: "https://example.com/spelling-bee-register",
},

openMic: {
    image: require("../images/Literary.png"),
    title: "Mic in the Open",
    subtitle: "Monologue/Standup/ Story",
    details: "The Open Mic is a vibrant and inclusive platform where participants showcase their storytelling, poetic, comedic, or dramatic talents. Whether it’s Shayari, Stand-up Comedy, Storytelling, Monologues, or Poetry, the stage is open to all creative expressions.",
    structure: [
      "Team Size: 1",
      "Participation: 1 participant per class",
      "Venue: Stage 2",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 3:00 PM - 5:00 PM",
    ],
    rules: [
      "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances.",
      "Participants must register their narrative category (Shayari, Standup, poetry, storytelling, and monologue) before the event.",
      "Each performance must be between 3 to 4 minutes. Exceeding the time limit will result in point deductions.",
      "Performances can be in English, Hindi, or Marathi.",
      "Performances must avoid offensive language, hate speech, or inappropriate content.",
      "Original content is highly encouraged. Plagiarism will lead to disqualification.",
      "Minimal props are allowed if they enhance the performance.",
      "Participants can mix genres (e.g., storytelling with humor or poetry with music).",
      "Participants must begin their performance within 30 seconds of being called.",
      "Interaction with the audience is allowed but must remain respectful.",
      "Disruptive behavior on stage will lead to disqualification.",
      "Judging criteria include relevance, creativity, depth of the narrative, voice modulation, emotional connection, uniqueness, and overall impact."
    ],
    contacts: [
      { name: "Priyanka Dhawale", phone: "8766011318" },
      { name: "Dhanashree Deshmukh", phone: "9307982145" },
    ],
    registerLink: "https://example.com/open-mic-register",
},
tShirtSneakerCompetition: {
  image: require("../images/art.png"),
  title: "Kicks and Dyes Showdown",
  subtitle: "T-Shirt/Sneaker Designing Competition",
  details: "Step into the realm of fashion innovation with our T-shirt & Sneaker Designing Event! Unleash your creativity on fabric and footwear, crafting unique styles that speak volumes. Join us for a fusion of art and fashion – an opportunity to showcase your design flair and leave a lasting imprint on the runway of creativity!",
  structure: [
    "Team Size: 1 or 2 members",
    "Participation: 1 team per class",
    "Venue: Instru Quadrangle",
    "Date: Day 1 (Wednesday, 29th January 2025)",
    "Time: 12:30 PM - 2:30 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final; no alterations will be accommodated under any circumstances.",
    "Judging Decisions: Decisions taken by the judges/event coordinators will be considered final and binding.",
    "Respectful Content: Ensure that no offensive or inappropriate language is used in the artwork while designing the T-shirt and sneakers.",
    "Prohibited Devices and References: Use of mobile phones or any printed references is strictly prohibited during the competition.",
    "Judging Criteria: Designs will be judged on originality, creativity, neatness, difficulty of design, and theme.",
    "Theme and Creativity: Participants have the freedom to select a theme for their sneakers and T-shirts. Additional points for a unified theme or colour scheme.",
    "Time Management: Teams must complete the art within a time limit of 1 hour and 15 minutes. Judges will spend the next 45 minutes evaluating each team's artwork.",
    "No Stencils or Stamps: Use of stencils or stamps is not allowed.",
    "Mandatory Attire: Students must bring their own T-shirt and sneakers, solid white or any colour without pre-existing designs.",
    "Art Materials: Students must bring their own paints, pens, brushes, etc.",
    "Venue Protection: Bring newspapers and plastic sheets to protect the event venue from any damage.",
    "Post-Event Cleanup: Participants are responsible for cleaning their workspace after the event."
  ],
  contacts: [
    { name: "Ashlesha Jagtap", phone: "9420482496" },
    { name: "Shruti Shinkar", phone: "7620460172" }
  ],
  registerLink: "https://example.com/kicks-and-dyes-showdown-register"
},

mehendiCompetition: {
  image: require("../images/art.png"),
  title: "Hands On Henna",
  subtitle: "Mehendi Competition",
  details: "Immerse yourself in the ancient art of henna! Transform hands into canvases, creating intricate designs that tell stories of tradition and beauty. Join us for a celebration of cultural elegance – participate, and let your henna artistry leave an indelible mark on our vibrant festivities!",
  structure: [
    "Team Size: 1 (Self-artist) or 2 (1 artist + 1 model)",
    "Participation: 1 team per class",
    "Venue: Mech Circle",
    "Date: Day 1 (Wednesday, 29th January 2025)",
    "Time: 3:30 PM - 5:30 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final; no alterations will be accommodated under any circumstances.",
    "Judging Decisions: The decision of the judges will be final and binding.",
    "Mandatory Design Component: Include the word ‘Gandhaar’ in Devanagari script in the design.",
    "Prohibited Items: No rough sketches, readymade designs, or mobile phone usage.",
    "Judging Criteria: Creativity, overall presentation, coverage of the design (extra points for mid-forearm and beyond).",
    "Mystery Box Challenge: Each participant will receive a sealed box with random design elements (e.g., peacock, lotus, sun) that must be incorporated.",
    "Time Management: 90 minutes for design creation, followed by 30 minutes for judging.",
    "Materials: Bring your own mehendi cones (coloured cones allowed).",
    "Model Requirement: Participants must bring their own model.",
    "Venue Protection: Bring cloths and newspapers to protect the venue.",
    "Post-Event Cleanup: Participants are responsible for cleaning their workspace."
  ],
  contacts: [
    { name: "Tanisha Joshi", phone: "7796760971" },
    { name: "Komal", phone: "7015663591" }
  ],
  registerLink: "https://example.com/hands-on-henna-register"
},

bestOutOfWaste: {
  image: require("../images/art.png"),
  title: "Bincredible",
  subtitle: "Best Out of Waste Competition",
  details: "Unleash your creativity and embrace sustainability with Bincredible, our signature Best Out of Waste competition! Transform everyday waste into extraordinary masterpieces. Showcase your ingenuity while promoting upcycling and eco-consciousness.",
  structure: [
    "Team Size: 1-2 members",
    "Participation: 1 team per class",
    "Venue: Mech Circle",
    "Date: Day 4 (Saturday, 1st February 2025)",
    "Time: 1:00 PM - 3:00 PM"
  ],
  rules: [
    "Team Formation: Teams must consist of 1-2 members from the same class.",
    "Registration: Participants must register before the event.",
    "Originality: No pre-prepared items. Plagiarism leads to disqualification.",
    "Restricted Items: No ready-made or semi-finished items, hazardous materials.",
    "Allowed Materials: Newspapers, plastic bottles, scrap fabric, metal, cardboard, etc.",
    "Setup and Cleanup: Participants must bring their own materials and tools, and clean their workspace after the event.",
    "Competition Flow: All creations must be completed and submitted by 3:00 PM.",
    "Judging Criteria: Creativity, originality, functionality, aesthetic appeal, and adherence to the rules."
  ],
  contacts: [
    { name: "Mrudula Kinkar", phone: "9604068921" },
    { name: "Tanisha Dusane", phone: "9823389442" }
  ],
  registerLink: "https://example.com/bincredible-register"
},

artRelay: {
  image: require("../images/art.png"),
  title: "Art-a-thon",
  subtitle: "Art Relay Challenge",
  details: "The Art Relay Challenge is a creative, timed competition where teams complete multiple art-based tasks in a relay format. Each stage focuses on a specific art technique: Origami, Collage Making, and Quilling Art.",
  structure: [
    "Team Size: 3 members per team",
    "Participation: 1 team per class",
    "Venue: Between Main & IT Building",
    "Date: Day 3 (Friday, 31st January 2025)",
    "Time: 2:30 PM - 4:30 PM"
  ],
  rules: [
    "Finality of Registration: Once registration is completed, it will be considered final; no alterations will be allowed under any circumstances.",
    "Team Roles and Structure: Each team assigns a different member to each stage. No substitutions allowed.",
    "Materials Use: Teams must use only the materials provided by the organizers.",
    "Time Monitoring: Teams have 1 hour and 15 minutes to complete the entire relay.",
    "Relay Overview: The team must complete three stages—Origami, Collage Making, and Quilling Art.",
    "Task Completion: Any deviation from the instructions may result in a deduction of points.",
    "Cleanliness: Teams must keep their workstations clean.",
    "Judging Criteria: Completion time, creativity, and accuracy."
  ],
  contacts: [
    { name: "Yukti Mahajan", phone: "7028021566" },
    { name: "Twisha Gohil", phone: "9545944388" }
  ],
  registerLink: "https://example.com/art-a-thon-register"
},
sketching: {
  image: require("../images/art.png"),
  title: "Sketching - Sketch Sphere",
  subtitle: "Unleash Your Creativity",
  details: "Put your artistic skills to the test in the thrilling Sketching Competition! Whether you're a seasoned artist or just starting out, this event invites participants of all skill levels to express their creativity and imagination.",
  structure: [
    "Team Size: Individual (1)",
    "Participation: 1 student per class",
    "Venue: Between Main & IT Building",
    "Date: Day 1 (Wednesday, 29th January 2025)",
    "Time: 12:30 PM - 2:00 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Originality: All sketches must be original and created on the spot. Pre-made or plagiarized sketches will lead to immediate disqualification.",
    "Paper Size: Use the provided or approved A4 paper size to ensure uniformity.",
    "Prohibited Aids: No additional embellishments or external aids (e.g., stencils) are permitted. The use of electronic devices (e.g., mobile phones, tablets) for reference or any external visual aids is strictly prohibited.",
    "Materials: Participants must bring their own sketching materials (e.g., paper, erasers, sharpeners).",
    "Workstation Cleanliness: Participants are responsible for maintaining the cleanliness of their workstations. Any form of damage or littering may result in strict actions.",
    "Submission Deadline: Sketches must be submitted within the time limit. Late submissions will not be accepted.",
    "Cheating and Malpractice: Any form of cheating, disruption, or malpractice will lead to immediate disqualification.",
    "Judges' Decision: The decision of the judges and organizers will be final and binding."
  ],
  contacts: [
    { name: "Sakshi Deshmukh", phone: "7055929394" },
    { name: "Sharvari Ughade", phone: "7823804166" }
  ],
  registerLink: "https://example.com/sketching-register"
}
,
doodling: {
  image: require("../images/art.png"),
  title: "Doodling - Doodle Express",
  subtitle: "Let your creativity shine",
  details: "Transform a blank canvas into a masterpiece based on a surprise theme. Bring your own colors and pens, and show off your originality in just 90 minutes.",
  structure: [
    "Team Size: Individual (1)",
    "Participation: 1 Member per class",
    "Venue: Between Main & IT Building",
    "Date: Day 2 (Thursday, 30th January 2025)",
    "Time: 12:30 PM - 2:30 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Theme Adherence: All participants must create their doodle based on the given theme, which will be announced at the start of the competition. Deviating from the theme will result in immediate disqualification.",
    "Originality: All doodles must be original and created on the spot. Plagiarism or pre-made designs are strictly prohibited and will lead to disqualification.",
    "Time Limit: Participants will have 90 minutes to complete their doodle. Late submissions will not be accepted.",
    "Materials: Only paper will be provided by the organizers. Participants must bring their own colors, pens, markers, and any other materials required.",
    "Judging Criteria: Entries will be judged based on creativity, adherence to the theme, use of space, and overall visual appeal. Judges’ Decision will be final and binding."
  ],
  contacts: [
    { name: "Sanjana Tupe", phone: "9156102292" },
    { name: "Paridha Bhoite", phone: "9321649591" }
  ],
  registerLink: "https://example.com/doodling-register"
}
,
portrait: {
  image: require("../images/art.png"),
  title: "Portrait - Faces in Focus",
  subtitle: "Capture the essence",
  details: "Express your creativity in this portrait competition. Showcase your skills in capturing the human form through the medium of portrait art.",
  structure: [
    "Team Size: Individual (1)",
    "Participation: 1 Member per class",
    "Venue: Between Main & IT Building",
    "Date: Day 2 (Thursday, 30th January 2025)",
    "Time: 10:00 AM - 12:00 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances."
  ],
  contacts: [
    { name: "Sejal Patil", phone: "9373447616" },
    { name: "Samruddhi Pawar", phone: "9850558436" }
  ],
  registerLink: "https://example.com/portrait-register"
},

painting: {
  image: require("../images/art.png"),
  title: "Painting - Color Combat",
  subtitle: "Express through colors",
  details: "Showcase your artistic talent and creativity by creating artwork based on a given theme within a specified time.",
  structure: [
    "Team Size: Individual (1)",
    "Participation: 1 Member per class",
    "Venue: Between Main & IT Building",
    "Date: Day 1 (Wednesday, 29th January 2025)",
    "Time: 2:30 PM - 4:30 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Theme Relevance: Participants must create artwork relevant to the given theme.",
    "Originality: Artwork must be original and created on the spot. Pre-prepared artwork will result in immediate disqualification.",
    "Allowed Mediums: Participants may use watercolors, acrylics, oil paints, pastels, and other similar mediums.",
    "Material Requirements: Participants must bring their own materials (e.g., paints, brushes).",
    "Completion Time: Participants will have 2 hours to complete their artwork."
  ],
  contacts: [
    { name: "Vaishnavi Morge", phone: "9022696146" },
    { name: "Sanjana Tupe", phone: "9156102292" }
  ],
  registerLink: "https://example.com/painting-register"
},

makeup: {
  image: require("../images/art.png"),
  title: "Makeup - Cosmetic Clash",
  subtitle: "Timeless Glam: Makeup Through the Ages",
  details: "Explore the art of beauty across time and create makeup looks inspired by various eras and cultures.",
  structure: [
    "Team Size: 2 members (1 makeup artist and 1 model)",
    "Participation: 1 team per class",
    "Venue: Instru Garden/Mech Circle",
    "Date: Day 3 (Friday, 31st January 2025)",
    "Time: 11:00 AM - 1:00 PM"
  ],
  rules: [
    "Team Structure: Each team must consist of 2 members: 1 artist and 1 model.",
    "Theme Requirement: The makeup and hairstyle should represent a specific era and culture. The chosen theme must be clearly communicated during the presentation.",
    "Time Limit: Total time allocated is 90 minutes for makeup and hairstyling, plus 30 minutes for judging. No additional time will be provided.",
    "Prohibited Tools: The use of electronic or heating tools (such as hairdryers, straighteners, or curling irons) is strictly prohibited.",
    "Materials: Teams must bring their own makeup kits and tools.",
    "Cleanliness: Teams must maintain cleanliness in their workspace throughout the competition.",
    "Cultural Sensitivity: Entries must respect cultural sensitivities and avoid stereotypes."
  ],
  contacts: [
    { name: "Yugandhara Padhye", phone: "7038188582" },
    { name: "Sanskruti Jawade", phone: "8668294865" }
  ],
  registerLink: "https://example.com/makeup-register"
}
,
rangoli: {
  image: require("../images/art.png"),
  title: "Rangoli - The Vibes",
  subtitle: "Vibrant creations",
  details: "Participate in this vibrant competition and showcase your Rangoli-making skills with organic and creative designs.",
  structure: [
    "Team Size: 2 members",
    "Participation: 2 members per class",
    "Venue: Between Main & IT Building",
    "Date: Day 4 (Saturday, 1st February 2025)",
    "Time: 12:00 PM - 3:00 PM"
  ],
  rules: [
    "Team Size and Participation: Each team must consist of 2 participants. Individual entries are not allowed.",
    "Finality of Registration: Registrations are considered final upon submission.",
    "Design Dimensions: Designs must fit within the allotted space and adhere to the specified dimensions.",
    "Allowed Materials: Participants must bring their own materials, including colors, stencils, and decorative items. Only organic or natural colors are permitted.",
    "Misconduct: Misconduct, cheating, or any form of rule violation will result in immediate disqualification.",
    "Judging Criteria: Bonus points may be awarded for eco-friendly or innovative elements."
  ],
  contacts: [
    { name: "Vaishnavi Borkar", phone: "9307982886" },
    { name: "Sakshi Bansode", phone: "8600591667" }
  ],
  registerLink: "https://example.com/rangoli-register"
},
classDrama: {
  image: require("../images/drama.png"),
  title: "The Drama Premiere League",
  subtitle: "Class Drama Competition",
  details: "Embark on an 8-minute storytelling extravaganza in Hindi/English/marathi—where props are your magical companions. Paint a vivid tale on the canvas of creativity. Let your performance echo, as decisions by coordinators and judges become the grand finale of your narrative journey!",
  structure: [
    "Team Size: 5 (minimum) / 10 (maximum) + 3 volunteers (if needed)",
    "Participation: 20 teams (First come first serve basis)",
    "Venue: Main Building Quadrangle",
    "Date: Day 4 (Saturday, 1st February 2025)",
    "Time: 1:00 PM - 4:30 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Language Options: Performances can be conducted in Hindi, English, or Marathi.",
    "Competition Round: The competition will consist of a single round.",
    "Performance Time: Total performance time is 8 minutes, with an additional 2 minutes for setup.",
    "Total Teams: A maximum of 20 teams will perform on the day of the event.",
    "Props Usage: Use simple props that can be carried around easily. All props required by the team are subject to verification by event coordinators.",
    "Sound Setup: If sound setup is required, the track must be provided to event coordinators on time as instructed. No changes can be made to the soundtrack once it has been submitted.",
    "Prohibited Materials: Any material that has the potential to damage the area or harm participants is strictly not allowed.",
    "Prohibited Content: The use of abusive language, obscenity, direct implications, plagiarism, and racial, religious/linguistic, sexual, or political views is strictly prohibited and will lead to immediate disqualification.",
    "Judging and Coordination: Decisions taken by event coordinators and judges will be final and binding.",
    "Additional Notes: Compliance with all rules and guidelines is mandatory to avoid penalties or disqualification. Ensure soundtracks and props align with the event's requirements."
  ],
  contacts: [
    { name: "Sanskruti Inamdar", phone: "8888003927" },
    { name: "Palavi Hardikar", phone: "9021797311" }
  ],
  registerLink: "https://example.com/drama-premiere-league-register"
},

interCollegeNukkad: {
  image: require("../images/drama.png"),
  title: "Nazariya",
  subtitle: "Inter-College Nukkad Natak (Street Play)",
  details: "The Inter-College Nukkad Natak Competition is a vibrant platform for colleges to showcase creativity and address social issues. With a prize pool of ₹25,000, the event celebrates the spirit of street theater and impactful performances.",
  structure: [
    "Team Size: 8-20 members (Including all music accompanists)",
    "Participation: Open to all colleges in Pune",
    "Venue: Stage 2",
    "Date: Day 4 (Saturday, 1st February 2025)",
    "Time: 12:00 PM - 4:00 PM"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Team Registration: The list of all team members, including music accompanists, must be provided to the event head during registration.",
    "Eligibility: The competition is open to all college students aged 16-25.",
    "Competition Structure: The competition will consist of a single round. Teams can perform on topics of their choice.",
    "Performance Area: Performances must be confined to an area of 10-12 meters in diameter, with the audience on all sides. The venue will be an open-air space.",
    "Props and Materials: Costumes, props, instruments, and scripts are subject to verification. Any kind of fluids, live animals, flame, heavy objects, or materials that could damage the area or harm people are strictly prohibited. Props or materials that litter the performance area are not allowed. If littering occurs, participants must clean the area.",
    "Music and Equipment: Only live music is allowed, and teams must bring their own instruments. No electrical appliances are allowed during the performance, either inside or outside the performance circle.",
    "Prohibited Content: Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/linguistic, sexual, or political views is strictly prohibited and will lead to immediate disqualification.",
    "Additional Notes: Ensure compliance with all rules and guidelines to avoid penalties or disqualification. The decision of the event organizers is final and binding in case of disputes."
  ],
  contacts: [
    { name: "Yugandhara Padhye", phone: "7038188582" },
    { name: "Vaishnavi Patil", phone: "7447629569" }
  ],
  registerLink: "https://example.com/nukkad-register"
},
djembe: {
  image: require("../images/workshop.png"),
  title: "Djembe Workshop",
  subtitle: "Percussion Workshop",
  details: "Join us for an engaging Djembe Workshop and learn the basics of playing the djembe. Explore rhythms, hand techniques, and enjoy the experience of creating music together. No prior experience needed—just bring your enthusiasm!",
  structure: [
    "Team Size: Individual participation",
    "Venue: Stage 2",
    "Date: Day 1 (Wednesday, 29th January 2025)",
    "Time: 12:00 PM - 2:00 PM"
  ],
  rules: [
    "Only students of Cummins College are allowed to participate.",
    "Participants must present a valid college ID at the event.",
    "Participants are required to arrive 10 minutes before the session begins to complete the registration process.",
    "All percussion instruments will be provided at the venue.",
    "Respect the rhythm and flow of the group. Listen to the facilitator’s instructions and maintain harmony.",
    "Avoid disrupting others by playing excessively loud or off-beat. Collaboration and inclusivity are the key elements of a drum circle.",
    "Any form of misconduct, inappropriate behavior, or damage to the instruments will result in immediate disqualification and disciplinary action.",
    "Upon completion of registration, kindly note that it will be considered as final, no alterations will be accommodated under any circumstances."
  ],
  contacts: [
    { name: "Eva Deswal", phone: "9920267634" },
    { name: "Bhargavi Girisagar", phone: "9373602852" }
  ],
  registerLink: "https://forms.gle/WjDEeKH1kVoizrgP6 "
},
*/
  ukulele: {
    image: require("../images/workshop.png"),
    title: "Ukulele Workshop",
    subtitle: "Learn Ukulele",
    details:
      "Join us for a hands-on Ukulele Workshop where you can learn the basics of playing this delightful instrument. Explore chords, strumming techniques, and play some tunes together!",
    structure: [
      "Team Size: Individual participation",
      "Venue: IT Building",
      "Date: Day 2 (Thursday, 30th January 2025) & Day 3 (Friday, 31st January 2025)",
      "Time: 12:30 PM - 4:30 PM for Day 2, 10:00 AM - 2:00 PM for Day 3",
    ],
    rules: [
      {
        heading: "Final Registration",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, and no alterations will be accommodated under any circumstances.",
        ],
      },
    ],

    contacts: [
      { name: "Vaishnavi Patil", phone: "7447629569" },
      { name: "Anushka Mamane", phone: "8668698667" },
    ],
    registerLink: "https://forms.gle/4vGFDSHzn6vq6S2w7",
  },

  textureMoon: {
    image: require("../images/workshop.png"),
    title: "Texture Moon Workshop",
    subtitle: "Craft a Celestial Masterpiece",
    details:
      "Unleash your creativity at the Texture Moon Workshop! Discover the art of crafting mesmerizing moon textures and create your own celestial masterpiece.",
    structure: [
      "Team Size: Individual participation",
      "Venue: Mech Building",
      "Date: Day 2 (Thursday, 30th January 2025)",
      "Time: 12:30 PM - 2:30 PM",
    ],
    rules: [
      {
        heading: "Final Registration",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, and no alterations will be accommodated under any circumstances.",
        ],
      },
    ],

    contacts: [
      { name: "Arya Hawaldar", phone: "8452820567" },
      { name: "Sharvari Ughade", phone: "7823804166" },
    ],
    registerLink: "https://example.com/texturemoon-register",
  },

  fluidArt: {
    image: require("../images/workshop.png"),
    title: "Fluid Art Workshop",
    subtitle: "Create Mesmerizing Fluid Art",
    details:
      "Explore the beauty of Fluid Art, where colors flow and blend into beautiful patterns. Unleash your inner artist in this hands-on workshop!",
    structure: [
      "Team Size: Individual participation",
      "Participation: Open for all",
      "Venue: Mech Building",
      "Date: Day 3 (Friday, 31st January 2025)",
      "Time: 12:00 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Final Registration",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, and no alterations will be accommodated under any circumstances.",
        ],
      },
    ],

    contacts: [
      { name: "Shruti Shinkar", phone: "7620460172" },
      { name: "Gayatri Kadu", phone: "9209115390" },
    ],
    registerLink: "https://forms.gle/4zpbFKr1N9efs4gt6 ",
  },

  punchNeedle: {
    image: require("../images/workshop.png"),
    title: "Punch Needle Workshop",
    subtitle: "Explore Punch Needle Art",
    details:
      "Dive into the world of Punch Needle and learn how to create beautiful textured art. No prior experience is needed—just bring your creativity!",
    structure: [
      "Team Size: Individual participation",
      "Participation: Open for all",
      "Venue: Instru Quadrangle",
      "Date: Day 4 (Saturday, 1st February 2025)",
      "Time: 12:00 PM - 2:00 PM",
    ],
    rules: [
      {
        heading: "Final Registration",
        points: [
          "Upon completion of registration, kindly note that it will be considered as final, and no alterations will be accommodated under any circumstances.",
        ],
      },
    ],

    contacts: [
      { name: "Samruddhi Patil", phone: "9763811008" },
      { name: "Shruti Srinivasan", phone: "8208996654" },
    ],
    registerLink: "https://forms.gle/hVLnL9kEyf1oY61X8",
  },
  /*
adOMania: {
  image: require("../images/online.png"),
  title: "Ad-O-Mania: Advertisement Competition",
  subtitle: "Create Your Quirky Ad Campaign",
  details: "This advertising competition challenges teams to create and present a witty, imaginative, and compelling ad campaign for a fictional product or service under the theme 'Quirky Inventions.' Participants will use humor, storytelling, and creativity to market their unique invention in a fun and engaging way.",
  structure: [
    "Team Size: 4-6 members",
    "Participation: 1 team per class",
    "Venue: To be announced",
    "Date: To be announced",
    "Time: To be announced"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Submission Deadline: All teams must submit their final video by the given deadline. Late submissions will not be accepted under any circumstances.",
    "File Format and Naming: Final submissions must be in high-quality MP4 format. File naming format: ClassName_TeamName.mp4.",
    "Content Quality: Ensure clear audio and video for better judging. Teams must maintain decorum and ensure all content is appropriate for a general audience. Any offensive, discriminatory, or inappropriate content will result in disqualification.",
    "Theme and Creativity: The invention must be fictional, humorous, or unusual. Creativity and alignment with the 'Quirky Inventions' theme are essential.",
    "Ad Duration: The ad must be 2 minutes long. Exceeding or falling short of the time limit will result in point deductions.",
    "Language: Ads can be in Hindi, Marathi, or English.",
    "Originality: The ad must be original and created by the team. Plagiarism of content, scripts, or ideas will lead to disqualification.",
    "Team Effort: Each member must contribute significantly to the ad creation process. Evident participation of all team members in the final product will be judged.",
    "Judging Criteria: Concept and Theme, Engagement, Quality and Professionalism"
  ],
  contacts: [
    { name: "Tanvi Dudhagundi", phone: "9699910524" },
    { name: "Sanskruti Nilawar", phone: "9834907483" }
  ],
  registerLink: "https://example.com/adOMania-register"
},

expressionDance: {
  image: require("../images/online.png"),
  title: "Face The Beat: Expression Dance",
  subtitle: "Convey Emotions Through Expression",
  details: "The Expression Dance competition focuses solely on the participant's ability to convey emotions and tell a story through their facial expressions, gestures, and emotive movements without involving physical dance. There is no fixed theme, allowing participants to choose a song that inspires and empowers their emotional range.",
  structure: [
    "Team Size: Individual participation",
    "Participation: 1 from each class",
    "Venue: To be announced",
    "Date: To be announced",
    "Time: To be announced"
  ],
  rules: [
    "Finality of Registration: Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
    "Registration Process: Participants must register online by the specified deadline. Group performances must list the names of all members during registration.",
    "Song Selection: Participants must choose a song that allows them to showcase a wide range of expressions (e.g., happiness, sorrow, anger, excitement). Songs can be in any language (Hindi, English, or Marathi) or genre but must be appropriate for a general audience.",
    "Performance Duration: Each performance must be between 1.5 to 2 minutes. Exceeding the time limit may result in point deductions.",
    "Focus on Expressions: Movements should be minimal; the emphasis should remain on facial expressions and emotive gestures. The use of props is not allowed; the focus must entirely be on expressions.",
    "Video Submission: Performances must be recorded and submitted in MP4 format before the deadline. Videos should have clear audio and visuals, with a clear and well-lit background for better visibility of expressions.",
    "Judging Criteria: Expression Clarity, Creativity and Originality, Alignment with Theme"
  ],
  contacts: [
    { name: "Shreya Rathi", phone: "9028828128" },
    { name: "Bhargavi Girisagar", phone: "9373602852" }
  ],
  registerLink: "https://example.com/expressionDance-register"
}
,octopusRace: {
  image: require("../images/sports.png"),
  title: "Octopus Race",
  subtitle: "Team Coordination, Balance, and Strategy",
  details: "The Octopus Race is a unique and entertaining team-based activity designed to test participants’ coordination, teamwork, and balance. Drawing inspiration from the movements of an octopus, this game requires creativity, strategy, and synchronization to achieve victory.",
  structure: [
    "Team Size: 4 Members",
    "Participation: 1 team per class",
    "Venue: Samstha Ground",
    "Date: Day 2 (Friday, 30th January 2025)",
    "Time: 8:00 AM - 10:00 AM"
  ],
  rules: [
    "Team Composition: Each team will consist of 4 players.",
    "Team Formation: Team members must attach their backs to one another, interlock hands securely with adjacent team members, and bend their legs slightly to ensure balance. This posture is essential to mimic an octopus's movement.",
    "Connection Rule: The team must remain connected in this formation throughout the race. No team member is allowed to disconnect or break formation.",
    "Winning Criteria: The first team to cross the finish line without breaking formation or violating any rules will be declared the winner.",
    "Movement: Teams must shuffle their feet or waddle, resembling the coordinated movement of an octopus. Running is strictly prohibited.",
    "Penalties: Breaking connection results in a 10-second penalty. Shortcuts result in disqualification.",
    "Judging Criteria: The winning team will be determined based on the shortest total time, including penalties."
  ],
  contacts: [
    { name: "Devyani Patil", phone: "9403494735" },
    { name: "Samruddhi Pawar", phone: "9850558436" }
  ],
  registerLink: "https://example.com/octopusRace-register"
},

dodgeballInCircle: {
  image: require("../images/sports.png"),
  title: "Dodgeball in Circle",
  subtitle: "Exciting and Fast-Paced Game",
  details: "Dodgeball in a Circle is an exciting and fast-paced game where players stand in a circle. One player throws the ball to someone, and that person must catch it. After the catch, the two players beside them must sit down. If the side players don’t sit in time, they’re out. The game continues until only three players remain standing.",
  structure: [
    "Team Size: 1",
    "Participation: 1 from each class",
    "Venue: Samstha Ground",
    "Date: Day 3 (Friday, 31st January 2025)",
    "Time: 10:00 AM - 11:00 AM"
  ],
rules: [
  {
    heading: "Registration and Eligibility",
    points: [
      "This event is exclusively for final-year students.",
      "Registration of themes will be on a first-come, first-serve basis. In case of repetition of themes or tracks, the team that registered first will retain the right to use the theme/track.",
      "Upon completion of registration, it will be considered final, and no alterations will be accommodated under any circumstances.",
      "The slots allotted by the organizers will be final and will not be changed."
    ]
  },
  {
    heading: "Performance Guidelines",
    points: [
      "Performance time for each team is 13 minutes, plus 1 minute for stage setup and clearance.",
      "The music track for the performance must be submitted as instructed by the coordinators. Any delay in track submission will result in a reduction of points.",
      "There is no specific theme for the fashion show. Teams are free to select any theme and will be judged accordingly."
    ]
  },
  {
    heading: "Props and Costumes",
    points: [
      "The use of simple props that can be carried in and out of the stage immediately before and after the performance is allowed.",
      "All outfits should be approved by the coordinators. Failure to share outfits when requested may result in disqualification.",
      "Prop preparations and arrangements will be the team's responsibility."
    ]
  },
  {
    heading: "Conduct and Decorum",
    points: [
      "Participants must maintain a certain amount of decency. Any act or move deemed vulgar or indecent will lead to disqualification.",
      "Participants are strictly instructed to NOT use college property like the library or reading halls during their practice. Violations will result in disqualification.",
      "Only females will be involved in costume fittings for the performance."
    ]
  },
  {
    heading: "Meetings and Reporting",
    points: [
      "Participants must report 1.5 hours before their event and confirm their presence with the event coordinator.",
      "Any delay in the schedule will cause a reduction of points.",
      "The team leader must complete any specific requirements form as instructed by the coordinators."
    ]
  },
  {
    heading: "Judging and Results",
    points: [
      "Marking will be based on the originality of ideas, props, costumes, and choreography.",
      "The decision of the coordinators will be final and binding."
    ]
  },
  {
    heading: "Practice and Permissions",
    points: [
      "Permission for practice venues and outside choreographers is the team’s responsibility, and the event coordinators must be informed in advance.",
      "There will be only one team head in a team."
    ]
  }
],

  contacts: [
    { name: "Apurva Gapchup", phone: "7666687656" },
    { name: "Arya Desai", phone: "8767029511" }
  ],
  registerLink: "https://example.com/dodgeballInCircle-register"
},

upDownRace: {
  image: require("../images/sports.png"),
  title: "Up-Down Race",
  subtitle: "Teamwork and Speed Challenge",
  details: "Up-Down Race is an energetic and fast-paced group game where players race back and forth. The game tests speed, coordination, and focus, making it perfect for team-building activities.",
  structure: [
    "Team Size: 4 members in each team",
    "Participation: 1 team per class",
    "Venue: Samstha Ground",
    "Date: Day 3 (Friday, 31st January 2025)",
    "Time: 8:00 AM - 10:00 AM"
  ],
  rules: [
    "Gameplay Objective: The team that reaches the finish line first, while maintaining proper coordination and without breaking their formation, wins the race.",
    "Team Composition: 4 players in each team, divided into two pairs. One pair will be sitting, the other standing. Both pairs must hold hands.",
    "Movement Mechanism: Players must complete the race by moving forward while maintaining their positions (one player sitting and the other standing). Each pair moves by passing over one another.",
    "General Rules: Teams will be disqualified if they fail to follow the sit-and-stand formation consistently or if their formation breaks.",
    "Final Decision: Coordinators' decisions will be final and binding."
  ],
  contacts: [
    { name: "Apurva Gapchup", phone: "7666687656" },
    { name: "Arya Desai", phone: "8767029511" }
  ],
  registerLink: "https://example.com/upDownRace-register"
},

coneRush: {
  image: require("../images/sports.png"),
  title: "Cone Rush",
  subtitle: "A Fun and Competitive Game",
  details: "Unleash the child hidden in you by playing this game in which the players have to place their cones in the middle of the circle when the music stops.",
  structure: [
    "Team Size: Individual",
    "Participation: 1 from each class",
    "Venue: Samstha Ground",
    "Date: Day 2 (Thursday, 30th January 2025)",
    "Time: 10:00 AM - 11:00 AM"
  ],
  rules: [
    "Final Registration Policy: Upon completion of registration, it will be considered final, and no alterations will be accommodated.",
    "Gameplay Objective: The game continues until only one player remains, and that player is declared the winner.",
    "Game Setup: Players stand in a circle, each with a cone placed in front of them.",
    "Gameplay Flow: When the music stops, players must quickly place their cone in the middle of the circle.",
    "Elimination Rule: If a player knocks over another player's cone, they are out of the game.",
    "Final Decision: Coordinators' decisions will be final."
  ],
  contacts: [
    { name: "Sneha Ranade", phone: "9172457943" },
    { name: "Jui Khambe", phone: "8379008019" }
  ],
  registerLink: "https://example.com/coneRush-register"
}


*/
};

// Component to Display Events
function AllEvents() {
  const { eventKey } = useParams(); // Fetch eventKey from URL
  const event = events[eventKey];

  if (!event) {
    return <p>Event not found</p>;
  }

  // Pass the event data to the EventPage component
  return <EventPage event={event} />;
}

export default AllEvents;
