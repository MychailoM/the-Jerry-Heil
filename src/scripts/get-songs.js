let allSongs = [];

const url = 'https://itunes.apple.com/search?term=jerry+heil&entity=musicTrack';

const loadMusic = async(url) => {
    try{
        const res = await fetch(url);
        const music = await res.json();
        allSongs = music.results;
        console.log(allSongs);
    }
    catch(error){
        console.error(error)
    }
}

loadMusic(url);
export default allSongs();