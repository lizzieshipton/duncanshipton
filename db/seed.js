const db = require('./config');
const Video = require('./schema').Video;
const Photo = require('./schema').Photo;
const Gig = require('./schema').Gig;


Video.bulkCreate([
  {
    title: 'Love is a Losing Game - Kat Factor and Duncan Shipton',
    url: 'https://www.youtube.com/watch?v=OK1ZAXE1_2A',
    filmographer: 'Gorilla Tornado Photography and Video',
    date_filmed: 'August 31, 2016',
    snippet: 'Filmed in Studio A at Cabrillo College',
  },
  // {
  //   title: ,
  //   url: ,
  //   filmographer: ,
  //   date_filmed: ,
  //   snippet: ,
  // }
])
.then(() => {
  return Photo.bulkCreate([
    {
      url: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/15726970_10210746076266414_7456810324513829174_n.jpg?oh=dc67cc62f344a7673043d8d4f24c3b0b&oe=58E158C9',
      photographer: 'Rebecca Barnes',
      date_taken: 'December 17, 2016',
      snippet: 'Taken at the Cabrillo College Jazz Combos Concert',
    },
    // {
    //   url: ,
    //   photographer: ,
    //   date_taken: ,
    //   snippet: ,
    // }
  ])
  .then(() => {
    console.log('Photos seeded')
  })
  .catch((err) => {
    console.log('Error seeding photos', err);
  });
})
.then(() => {
  return Gig.bulkCreate([
    {
      location: 'Ella\'s at the Airport',
      date: 'Sunday, January 8th',
      time: '8PM',
    },
    // {
    //   location: ,
    //   date: ,
    //   time: ,
    // }
  ])
  .then(() => {
    console.log('Gigs seeded')
  })
  .catch((err) => {
    console.log('Error seeding gigs', err);
  });
})
.then(() => {
  console.log('Database Seeded');
});
