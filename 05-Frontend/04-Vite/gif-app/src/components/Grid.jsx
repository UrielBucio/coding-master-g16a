import React, { useEffect, useState} from "react"
import Item from "./Item";

const Grid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category)
  }, []);

  const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dEHnNtrWpr7gbzOKfi0yVRQdC5X8uy3g&q=${category}&limit=20`
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(item => (
      {
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
      }
    ))

    setImages(gifs)
  }
  
  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {
          images.map(image => (
            <Item key={image.id} {...image}/>
          ))
        }
        <Item/>
      </div>
    </>
  )
}

export default Grid;