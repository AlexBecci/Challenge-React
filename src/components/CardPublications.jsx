
import { BiUserCircle } from "react-icons/bi";

export function CardPublication({ key, title, body }) {


    return (
        <div key={key} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-gray-400">
                <div className="p-6">

                    <BiUserCircle className="text-center justify-center items-center text-indigo-500" size={40} />
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{body}</p>
                </div>
            </div>
        </div>
    )
}