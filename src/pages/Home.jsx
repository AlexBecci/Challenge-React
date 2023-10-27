
import { useEffect, useState } from "react";
import { CardPublication } from "../components/CardPublications.jsx";
import { HomeInit } from "../components/Home.jsx";


export function Home() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const publications = await response.json();
            setPublications(publications);
            console.log(publications);
        };

        fetchData();
    }, []);





    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <HomeInit title={"Prueba Técnica para Programadores Frontend - React y APIs"} subtitle={"Consumo de API"} description={"Publicaciones"} />
                    <div className="flex flex-wrap m-auto shadow-lg">

                        {publications.map((publications) => {
                            return (

                                <>
                                    <CardPublication key={publications.userId} title={publications.title} body={publications.body} />
                                </>
                            )
                        })}

                    </div>
                </div>
            </section>


        </>
    )


}