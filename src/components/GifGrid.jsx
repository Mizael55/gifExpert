
import { useFechGif } from "../hooks/useFechGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  let {imagenes, isLoading} = useFechGif(category)
  

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <p>Loading...</p>
      }
      <div className="card-grid">
        {imagenes.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
