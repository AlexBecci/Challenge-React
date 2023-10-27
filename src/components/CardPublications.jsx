
import { BiUserCircle } from "react-icons/bi";

export function CardPublication({ key, title, body }) {


    return (
        <div key={key} className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl shadow-gray-400">
                <div className="p-6">

                    <BiUserCircle className="text-center justify-center items-center text-indigo-500" size={40} />
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                    <p className="leading-relaxed mb-3">{body}</p>

                    <button className="px-4 py-2 bg-indigo-500 text-white rounded-full text-xl" onClick={() => document.getElementById('my_modal_2').showModal()}>Ver</button>
                    <dialog id="my_modal_2 " className="modal rounded-md p-2">
                        <div className="modal-box mx-auto">
                            <h3 className="font-bold text-lg sm:mx-8">{title}</h3>
                            <p className="py-4 sm:mx-8">{body}</p>
                        </div>
                        <form method="dialog" className="modal-backdrop text-center">
                            <button className="px-4 py-2 bg-indigo-500 rounded-full text-white text-xl">close</button>
                        </form>
                    </dialog>
                </div>

            </div>
        </div>
    )
}