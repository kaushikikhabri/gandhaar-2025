const day1Elements = [
  {
    id: 1,
    title: "Inauguration",
    location: "Main Building Quadrangle",
    description:
      "Opening ceremony of the event with chief guests and keynote speakers.",
    link: "/inauguration",
    buttonText: "Register",
    date: "Day 1",
    time: "10:00 AM - 12:00 PM",
    icon: "event",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 2,
    title: "Zumba Zing (Zumba Party)",
    location: "Stage 2",
    description:
      "Get energized and join the Zumba party with professional instructors.",
    link: "/zumba-party",
    buttonText: "Register",
    date: "Day 1",
    time: "12:00 PM - 12:30 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/ff9/fff.png?text=Zumba+Party",
  },
  {
    id: 3,
    title: "Dil se Dance (Intra College Dance)",
    location: "Main Building Quadrangle",
    description:
      "Watch students showcase their dance talents in this intra-college competition.",
    link: "/dance-competition",
    buttonText: "Register",
    date: "Day 1",
    time: "12:30 PM - 6:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/99f/fff.png?text=Dance+Competition",
  },
];

const day2Elements = [
  {
    id: 4,
    title: "Ad-Mad (Advertising Competition)",
    location: "Stage 2",
    description:
      "Participants create and present unique ads to impress the audience and judges.",
    link: "/ad-mad",
    buttonText: "Register",
    date: "Day 2",
    time: "12:30 PM - 3:30 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/ff6/fff.png?text=Ad-Mad",
  },
  {
    id: 5,
    title: "Sketch Saga (Sketching Competition)",
    location: "Between Main & IT Building",
    description: "Showcase your sketching skills in this creative competition.",
    link: "/sketch-saga",
    buttonText: "Register",
    date: "Day 2",
    time: "12:30 PM - 2:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/6f9/fff.png?text=Sketch+Saga",
  },
  {
    id: 6,
    title: "Masked Masterpieces (Face Painting Competition)",
    location: "Mechanical Circle",
    description: "Participants display their artistry through face painting.",
    link: "/face-painting",
    buttonText: "Register",
    date: "Day 2",
    time: "12:30 PM - 2:30 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/ff3/fff.png?text=Face+Painting",
  },
];

const day3Elements = [
  {
    id: 7,
    title: "Suron Ka Safar (Department Antakshari - Faculty)",
    location: "Auditorium",
    description: "A fun antakshari competition between faculty members.",
    link: "/antakshari",
    buttonText: "Register",
    date: "Day 3",
    time: "3:00 PM - 5:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/ff0/fff.png?text=Antakshari",
  },
  {
    id: 8,
    title: "Tech Talk: AI & Future",
    location: "IT Seminar Hall",
    description:
      "Learn about the future of AI with insights from industry experts.",
    link: "/tech-talk",
    buttonText: "Register",
    date: "Day 3",
    time: "10:00 AM - 12:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/3f3/fff.png?text=Tech+Talk",
  },
  {
    id: 9,
    title: "Hackathon",
    location: "Computer Lab",
    description:
      "Coding challenge with a chance to win prizes for the best projects.",
    link: "/hackathon",
    buttonText: "Register",
    date: "Day 3",
    time: "12:30 PM - 6:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/3ff/fff.png?text=Hackathon",
  },
];

const day4Elements = [
  {
    id: 10,
    title: "Quiz-O-Mania (Quiz Competition)",
    location: "Library Hall",
    description: "A general knowledge quiz competition for enthusiasts.",
    link: "/quiz-competition",
    buttonText: "Register",
    date: "Day 4",
    time: "11:00 AM - 1:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/f90/fff.png?text=Quiz-O-Mania",
  },
  {
    id: 11,
    title: "Robotics Workshop",
    location: "Engineering Workshop Room",
    description: "Hands-on robotics session for beginners and enthusiasts.",
    link: "/robotics-workshop",
    buttonText: "Register",
    date: "Day 4",
    time: "2:00 PM - 5:00 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/f00/fff.png?text=Robotics+Workshop",
  },
  {
    id: 12,
    title: "Closing Ceremony",
    location: "Main Building Quadrangle",
    description: "Join us as we conclude the event and announce the winners.",
    link: "/closing-ceremony",
    buttonText: "Register",
    date: "Day 4",
    time: "6:00 PM - 7:30 PM",
    icon: "event",
    image: "https://via.placeholder.com/300/0f0/fff.png?text=Closing+Ceremony",
  },
];

export { day1Elements, day2Elements, day3Elements, day4Elements };
