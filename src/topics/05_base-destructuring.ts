interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Adele",
    year: 2020,
  },
};

const  song = 'Nueva Cancion';

//renombrar
const {song:Another} = audioPlayer;

const {details}=audioPlayer;
const {author} = details;

console.log(`${song} - ${Another} - ${author}`);

export {};
