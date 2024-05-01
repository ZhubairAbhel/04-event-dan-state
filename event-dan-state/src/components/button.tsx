import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export function Tombol_1(){
    function handleClick(){
        alert("tombol telah ditekan")
    }

    // function handleMouseOver(){
    //     alert("Eits, mau mencet tombol ya")
    // }
    return(
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
            onClick={handleClick}
            onMouseLeave={() => {
                alert("Loh, kok sudah pergi")
            }
        }
            >
                ini tombol
            </button>
        </div>
    );
}

export function Tombol_2({isiPesan, namaTombol}: {isiPesan: any, namaTombol: any}){
    return(
            <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
            onClick={() => alert(isiPesan)}>
                {namaTombol}
            </button>
    );
}

export function Tombol_3({isiPesan, namaTombol}: {isiPesan: any, namaTombol: any}){
    return(
        <button className="bg-green-500 hover:bg-green-700 text-white p-2 rounded-md m-2"
        onClick={(e) => {
                e.stopPropagation();
                alert(isiPesan)
            }
        }>
            {namaTombol} 
        </button>
    );
}
