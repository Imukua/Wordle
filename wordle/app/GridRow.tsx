import React from "react";


const GridRow = () => {
    let guess = "geess"
    let word = "tttts"
    const isGuessed = true
    return(
    <div className="mb-2 grid grid-cols-5 gap-2">
        { new Array(5).fill(0).map((_, i) => {
            const bgColor = !isGuessed
            ? 'bg-black'
            : guess[i] === word[i]
            ? 'bg-green-700'
            :word.includes(guess[i])
            ?'bg-yellow-600'
            :'bg-black'
            return (
                <div key={_} className={`flex tezt-2xl h-14 w-14 justify-center items-center ${bgColor} border border-grey-400 uppercase font-bold`}>
                    {guess[i]}
                </div>
            )         
        })

        }

    </div>
    );
}

export default GridRow;