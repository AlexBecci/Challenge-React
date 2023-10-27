export function HomeInit({title,subtitle,description}) {

    return (
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-2xs sm:text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Becci Alex</h2>

                    <h2 className="text-xl sm:text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">{title}</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{subtitle}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-xl sm:text-2xl">{description}</p>
                </div>

            </div>
        </div>
    )

}