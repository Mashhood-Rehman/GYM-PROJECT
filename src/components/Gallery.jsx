import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];
  return (
    <div className=" gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
      {/* <div className="gallery">
        <img src="img1.webp" alt="picture" height={250} width={300} />
        <img src="img2.jpg" alt="picture" height={250} width={300} />
        <img src="img3.jpg" alt="picture" height={250} width={300} />
        <img src="img4.jpg" alt="picture" height={220} width={330} />
        <img src="img7.jpg" alt="picture" height={250} width={250} />
        <img src="img8.jpg" alt="picture" height={450} width={220} />
        <img src="img5.jpg" alt="picture" height={500} width={200} />
        <img src="img6.jpg" alt="picture" height={250} width={300} />
      </div> */}
    </div>
  );
};

export default Gallery;
