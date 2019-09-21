//Exercise 1
console.log("Exercise 1-Item array removal")
console.log("//------------------------------")
//------------------------------

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ahmad") {
    names.splice(i, 1);
  }
  console.log(names[i]);
}

console.log("//------------------------------")
console.log("Exercise 2-When will we be there??")
//------------------------------
//Exercise 2

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function convertTime(travelInformation) {
  const timeInMins = (travelInformation.destinationDistance / travelInformation.speed) * 60
  const hours = Math.floor(timeInMins / 60);
  const mins = Math.round(timeInMins % 60);
  return hours + " hours and " + mins + " mins ";
}
const travelTime = convertTime(travelInformation)
console.log("Will be there in:", travelTime);

console.log("//------------------------------")
console.log("Exercise 3-Series duration of my life")
//------------------------------
//Exercise 3

function lifesTimeAverage() {

  const seriesDurations = [{
      title: 'Breaking bad',
      days: 1,
      hours: 22,
      minutes: 30,
    },
    {
      title: 'How I Met Your Mother',
      days: 5,
      hours: 2,
      minutes: 46,
    },
    {
      title: 'Friends',
      days: 8,
      hours: 17,
      minutes: 18,
    }
  ];
  let totalSum = 0;
  let sum = 0;
  const yearsInMinutes = 80 * 365 * 24 * 60;

  for (let i = 0; i < seriesDurations.length; i++) {
    sum = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
    console.log(`${seriesDurations[i].title} took ${(( sum * 100 ) / yearsInMinutes ).toFixed(2)}% of my life`);
    totalSum += sum;
  }
  let Sum = ((totalSum * 100) / yearsInMinutes).toFixed(3);
  return `In Average that is ${Sum}% of my life`;
}
console.log(lifesTimeAverage());

console.log("//------------------------------")
console.log("Exercise 4-My favorite songs")
//------------------------------
//Exercise 4

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(title, artist) {
  if (typeof (title) === 'string' && typeof (artist) === 'string' && title && artist) {
    songDatabase.push({
      songId: songDatabase.length + 1,
      title: title,
      artist: artist
    });
  }
}
addSongToDatabase('Ride it', 'Jay Sean');
console.table(songDatabase);


function getSongByTitle(title) {
  for (let i = 0; i < songDatabase.length; i++) {
    const titleKey = songDatabase[i].title;
    if (titleKey === title) {
      return songDatabase[i];
    }
  }
}
const searchSong = getSongByTitle('Ride it');
console.log(searchSong);

console.log("//------------------------------")
console.log("Exercise 5-NOnoN0nOYes (Note taking app)")
//------------------------------
//Exercise 5

const notes = [];

function addNote(content, id) {
  notes.push({
    content,
    id
  })
}
addNote('First note', 1);
addNote('Second note', 2);

console.log(notes);

function getNoteFromId(id) {
  if (typeof (id) === 'number') {
    for (let i = 0; i < notes.length; i++) {
      const idNote = notes[i].id;
      if (idNote === id) {
        const content = notes[i].content;
        return content;
      } else {
        return 'ID does not exist';
      }
    }
  }
}