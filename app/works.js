'use client'

export default function Work({ onDelete , counter }){

    return(
        <div key={counter.id} className="card border-black border-2 w-[100%] bg-white flex justify-center items-center gap-7 rounded-xl"> 
            <div className="w-[10%] my-4 ml-4">
                <h1 className="text-2xl font-bold text-center ">
                {counter.title}
                </h1>
            </div>

            <div className="explien w-[80%] ml-7">
                {counter.explain}
            </div>

            <button onClick={() => onDelete(counter.id)} className="delete w-[10%] rounded-xl font-bold mx-4 py-2">
                Done
            </button>
      </div>
    )
}