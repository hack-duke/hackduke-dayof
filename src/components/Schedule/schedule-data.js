// export default [
//   {
//     // Months are zero-indexed for whatever reason
//     // This is a historical artifact from the Java (yes, Java) APIs
//     date: new Date(2018, 9, 13),
//     events: [
//       {
//         time: '9:00AM - 10:45AM',
//         name: 'Check-In',
//         locations: ['Schiciano Atrium']
//       },
//       {
//         time: '11:00AM - 12:30PM',
//         name: 'Opening Ceremony',
//         locations: ['Reynolds Theatre']
//       },
//       {
//         time: '1:00PM - 2:00PM',
//         name: 'Lunch',
//         locations: ['Schiciano Atrium']
//       },
//       { time: '2:00PM', name: 'Hacking Commences' },
//       {
//         time: '2:00PM - 2:30PM',
//         name: 'Team Formation Mixer',
//         locations: ['Schiciano Lobby']
//       },
//       {
//         time: '2:00PM - 8:00PM',
//         name: 'Frisbee, Football, Volleyball',
//         locations: ['Harrington Quad']
//       },
//       {
//         time: '2:30PM - 3:30PM',
//         name: 'Intro to Hardware Hacking by August Ning',
//         locations: ['Hudson 201']
//       },
//       {
//         time: '2:30PM - 3:30PM',
//         name: 'VR Workshop by Mark Steelman',
//         locations: ['Hudson 232']
//       },
//       {
//         time: '3:00PM - 3:30PM',
//         name: 'Health Track Kickoff with Jason Liu',
//         locations: ['Hudson 222']
//       },
//       {
//         time: '3:00PM - 4:30PM',
//         name: 'Javascript Workshop by Co-Lab',
//         locations: ['Hudson 216']
//       },
//       {
//         time: '3:30PM - 5:00PM',
//         name: 'Puppies!!!!!',
//         locations: ['Harrington Quad']
//       },
//       {
//         time: '4:30PM - 5:30PM',
//         name: 'API Workshop by Archana Ahlawat',
//         locations: ['Hudson 115A']
//       },
//       {
//         time: '4:45PM - 6:15PM',
//         name: 'Mobile Workshop by Co-Lab',
//         locations: ['Hudson 216']
//       },
//       {
//         time: '6:30PM - 8:00PM',
//         name: 'Dinner',
//         locations: ['Schiciano Atrium']
//       },
//       {
//         time: '8:00PM - 9:00PM',
//         name: 'MLH Werewolf',
//         locations: ['Schiciano Lobby']
//       },
//       {
//         time: '9:00PM - 10:00PM',
//         name: 'Mixer for Female-Identifying and Non-Binary Hackers',
//         locations: ['Innovation Co-Lab']
//       },
//       {
//         time: '10:00PM - 11:00PM',
//         name: 'Nerf War',
//         locations: ["Twinnie's 2nd Floor"]
//       },
//       {
//         time: '11:00PM - 11:45PM',
//         name: 'Spicy Noodle Challenge',
//         locations: ['Schiciano Atrium']
//       }
//     ]
//   },
//   {
//     date: new Date(2018, 9, 14),
//     events: [
//       {
//         time: '12:00AM - 8:00AM',
//         name: 'Midnight Snacks',
//         locations: ["Twinnie's"]
//       },
//       {
//         time: '12:00AM - 8:00AM',
//         name: 'Nap Time',
//         locations: ['Hudson (222, 224, 232)']
//       },
//       {
//         time: '9:00AM - 9:45AM',
//         name: 'Breakfast',
//         locations: ['Schiciano Atrium']
//       },
//       {
//         time: '11:00AM - 11:30PM',
//         name:
//           'The Future of Healthcare Technology by Dr. Michael Kerzner (Duke Hospital)',
//         locations: ['Hudson 216']
//       },
//       {
//         time: '11:00AM - 12:00PM',
//         name: 'Turning Hack into Startup by Kasper Kubica',
//         locations: ['Hudson 222']
//       },
//
//       {
//         time: '12:00PM - 1:30PM',
//         name: 'Lunch',
//         locations: ['Schiciano Atrium']
//       },
//       { time: '1:30PM', name: 'Hacking Ends' },
//       {
//         time: '2:00PM - 4:00PM',
//         name: 'Judging and Demos',
//         locations: ['Schiciano Lobby']
//       },
//       {
//         time: '4:00PM',
//         name: 'HackDuke Ends'
//       },
//       {
//         time: '4:30PM - 5:30PM',
//         name: 'Closing Ceremony',
//         locations: ['Reynolds Theatre']
//       },
//       {
//         time: '6:00PM',
//         name: 'VTech Bus Leaves',
//         locations: ['Science Drive']
//       }
//     ]
//   }
// ];
export default [
  {
    // Months are zero-indexed for whatever reason
    // This is a historical artifact from the Java (yes, Java) APIs
    // Correct month data is one index less --> month later fixed in Schedule.js
    date: new Date(2019, 10, 2),
    events: [
      {
        time: '9:00AM - 10:45AM',
        name: 'Check-In',
        locations: ['Schiciano Foyer'],
        type: 'important'
      },
      {
        time: '11:00AM - 12:15PM',
        name: 'Opening Ceremony',
        locations: ['Page Auditorium'],
        type: 'important'
      },
      {
        time: '12:30PM - 1:00PM',
        name: 'Track Talks',
        locations: [
          'Scichiano A - Education, Scichiano B - Health, Hudson 207 - Energy, Hudson 208 - InequalityHudson 201 - Nonprofit'
        ],
        type: 'event'
      },
      {
        time: '1:00PM - 2:00PM',
        name: 'Lunch',
        locations: ['CIEMAS 1st Floor'],
        type: 'meal'
      },
      { time: '2:00PM',
        name: 'Hacking Commences',
        type: 'important'
      },
      {
        time: '2:00PM - 2:30PM',
        name: 'Team Formation Mixer',
        locations: ['Schiciano Foyer'],
        type: 'event'
      },
      {
        time: '2:00PM - 8:00PM',
        name: 'Workshops',
        locations: ['Hudson Hall, Various Rooms'],
        type: 'event'
      },
      {
        time: '3:00PM - 5:00PM',
        name: 'Puppies!!!!!',
        locations: ['Harrington Quad']
      },
      {
        time: '3:00PM - 7:00PM',
        name: 'Spikeball & Frisbee',
        locations: ['Harrington Quad']
      },
      {
        time: '6:00PM - 7:00PM',
        name: 'Mixer for Female-Identifying and Non-Binary Hackers with Houzz',
        locations: ['Innovation Co-Lab'],
        type: 'event'
      },
      {
        time: '6:30PM - 8:00PM',
        name: 'Dinner',
        locations: ['Schiciano Foyer'],
        type: 'meal'
      },
      {
        time: '7:30PM - 8:00PM',
        name: 'Pie an Organizer',
        locations: ['CIEMAS 1st Floor']
      },
      {
        time: '8:00PM - 9:00PM',
        name: 'MLH Minigame',
        locations: ['CIEMAS 1st Floor']
      },
      {
        time: '10:00PM - 10:45PM',
        name: 'Nerf War',
        locations: ["Twinnie's 2nd Floor"]
      },
      {
        time: '11:00PM - 11:45PM',
        name: 'Spicy Noodle Challenge',
        locations: ['Schiciano Foyer']
      }
    ]
  },
  {
    date: new Date(2019, 10, 3),
    events: [
      {
        time: '12:00AM - 8:00AM',
        name: 'Midnight Snacks',
        locations: ["Twinnie's"],
        type: 'meal'
      },
      {
        time: '12:00AM - 8:00AM',
        name: 'Nap Time',
        locations: ['–'],
        type: 'important'
      },
      {
        time: '9:00AM - 9:45AM',
        name: 'Breakfast',
        locations: ['Schiciano Foyer'],
        type: 'meal'
      },
      {
        time: '10:00AM - 12:00PM',
        name: 'Workshops',
        locations: ['Locations TBA'],
        type: 'event'
      },
      {
        time: '12:00PM - 1:30PM',
        name: 'Lunch',
        locations: ['Schiciano Foyer'],
        type: 'meal'
      },
      { time: '1:30PM',
        name: 'Hacking Ends',
        type: 'important'
      },
      { time: '2:00PM - 4:00PM',
        name: 'Judging',
        locations: ['CIEMAS 1st Floor & Schiciano Foyer'],
        type: 'event'
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'Closing Ceremony',
        locations: ['Page Auditorium'],
        type: 'important'
      },
      {
        time: '6:00PM',
        name: 'Buses Leave',
        locations: ['Science Drive'],
        type: 'important'
      }
    ]
  }
]
