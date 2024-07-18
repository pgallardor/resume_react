import { useContext } from "react"
import { LangContext } from "../contexts"

export default function AboutMe({ setLang }) {
    const t = useContext(LangContext);

    return (
        <>
            <div className="text-right p-4">
                Language
                <button className="mx-1 h-6 w-8 fib fi-us" onClick={() => setLang("en")} />
                <button className="mx-1 h-6 w-8 fib fi-cl" onClick={() => setLang("es")} />
            </div>
            <section className='pt-10 pb-4 flex'>
                <div className="ml-auto mr-2 md:mr-12">
                    <img className="h-32 w-32 min-w-32 md:h-72 md:w-72 rounded-full" src="/img/me.jpeg" alt="Me" />
                </div>
                <div className="mr-auto my-auto">
                    <p className="text-xl">Pedro Gallardo Robinson</p>
                    <h1 className='text-3xl font-bold'>
                        {t("profession")}
                    </h1>
                    <div className="py-10 font-italic justify-center">
                        I enjoy software development!
                    </div>
                </div>
            </section>
            <section className="mx-auto mb-10 flex justify-center">
                <button className="mx-2 py-2 px-4 bg-cyan-600 rounded-md">Linkedin</button>
                <button className="mx-2 py-2 px-4 bg-white rounded-md text-black">Resume</button>
            </section>
        </>
    )
}