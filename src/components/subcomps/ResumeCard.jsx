export default function ResumeCard({
    role, place, duration, location, overview, contributions, stackList, relevantLinks
}) {

    return (
        <div className="bg-slate-700 rounded-xl mt-4 p-4 md:m-6 md:p-10 shadow">
            <h2 className="text-xl font-bold">
                {role} @ {place}
            </h2>
            <div className="flex justify-between mb-2">
                <p className="text-md italic">{duration}</p>
                <p className="text-md italic">{location}</p>
            </div>
            <p>{overview}</p>
            <ul className="list-disc list-inside">
                {
                    contributions.map((cont) => (
                        <li key={"cont" + cont.id}>{cont.text}</li>
                    ))
                }
            </ul>
            <div className="italic">Skills: {stackList}</div>
            <div>
                { relevantLinks.length > 0 && <h2 className="mt-1 text-lg font-bold">Some links:</h2> }
                {
                    relevantLinks.map((link) => (
                        <p>{link.title}
                            <a className="underline ml-1" href={link.link} target="_blank">
                                (Click here)
                            </a>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}