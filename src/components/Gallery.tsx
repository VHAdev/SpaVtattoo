import PhotoAlbum from "react-photo-album";

const photos = [

  { src: "assets/38c5c.jpg", width: 900, height: 1200},
  { src: "assets/38c5c.jpg", width: 300, height: 500},
  { src: "assets/38c5c.jpg", width: 700, height: 700},
  { src: "assets/38c5c.jpg", width: 900, height: 1200},
  { src: "assets/38c5c.jpg", width: 600, height: 600},
  { src: "assets/38c5c.jpg", width: 500, height: 1000},
  { src: "assets/38c5c.jpg", width: 300, height: 600},
  { src: "assets/38c5c.jpg", width: 300, height: 500},
  { src: "assets/38c5c.jpg", width: 300, height: 500},
  { src: "assets/38c5c.jpg", width: 600, height: 800},

];

export default function Gallery() {
  return <PhotoAlbum layout="masonry" photos={photos} />
}
