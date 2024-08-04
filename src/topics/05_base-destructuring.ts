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

//! Destructuring de Objetos
const  song = 'Nueva Cancion';

//renombrar
const {song:Another} = audioPlayer;

const {details}=audioPlayer;
const {author} = details;

console.log(`${song} - ${Another} - ${author}`);


//!Destructuring de arreglos

//const[p1,p2,trunks] = ['goku','vegeta','trunks'];
//const[,,trunks]:string[] = ['goku','vegeta','trunks'];
const[,,trunks = 'Not Found']:string[] = ['goku','vegeta'];


console.log('Personaje 3 :' , trunks);


export {};
