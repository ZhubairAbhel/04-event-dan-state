import { sculptureList } from "@/data/article";
import { useState } from 'react';

export default function Gallery(){
    const [index, setIndex] = useState(0);

    function handleClick(){
        setIndex(prevIndex => (prevIndex + 1) % sculptureList.length);  
    }

    function handlePrevClick(){
        setIndex(PrevIndex => (PrevIndex - 1 + sculptureList.length) % sculptureList.length)
    }

    let sculpture = sculptureList[index];
    return(
        <>
            <button
                onClick={handlePrevClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded-md">
                    Artikel Sebelumnya
            </button>

            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded-md">
                    Artikel Selanjutnya
            </button>
            <h2><i>{sculpture.name}</i>oleh{sculpture.artist}</h2>
            <h3>({index + 1}) dari {sculpture.artist}</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}