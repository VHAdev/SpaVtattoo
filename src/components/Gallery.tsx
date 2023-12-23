import PhotoAlbum from "react-photo-album";

const photos = [

  { src: "https://source.unsplash.com/random/?tattoo/1", width: 900, height: 1200},
  { src: "https://source.unsplash.com/random/?tattoo/2", width: 300, height: 500},
  { src: "https://source.unsplash.com/random/?tattoo/3", width: 700, height: 700},
  { src: "https://source.unsplash.com/random/?tattoo/4", width: 900, height: 1200},
  { src: "https://source.unsplash.com/random/?tattoo/5", width: 600, height: 600},
  { src: "https://source.unsplash.com/random/?tattoo/6", width: 500, height: 1000},
  { src: "https://source.unsplash.com/random/?tattoo/7", width: 300, height: 600},
  { src: "https://source.unsplash.com/random/?tattoo/8", width: 300, height: 500},
  { src: "https://source.unsplash.com/random/?tattoo/9", width: 300, height: 500},
  { src: "https://source.unsplash.com/random/?tattoo/10", width: 600, height: 800},

];

export default function Gallery() {
  return <PhotoAlbum layout="masonry" photos={photos} />
}
