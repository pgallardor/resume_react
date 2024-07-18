import { useContext } from "react"
import { LangContext } from "../contexts"

export default function TechStack() {
    const t = useContext(LangContext);
    return (
        <section className="mx-auto text-center">
            <p>
                I've worked with the techonologies shown below.
                They're ordered by the experience I have with them.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <h2 className="text-3xl my-10">
                        {t("stack1")}
                    </h2>
                    <div className="flex justify-center">
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/js.svg" alt="JavaScript" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/ts.svg" alt="TypeScript" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/python.svg" alt="Python" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/cpp.svg" alt="C++" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl my-10">
                        {t("stack2")}
                    </h2>
                    <div className="flex justify-center">
                        <img className="w-14 h-14 mx-2 lg:h-28 lg:w-28 lg:mx-4" src="/img/svgs/nodejs.svg" alt="NodeJS" />
                        <img className="w-14 h-14 mx-2 lg:h-28 lg:w-28 lg:mx-4" src="/img/svgs/nestjs.svg" alt="NestJS" />
                        <img className="w-14 h-14 mx-2 lg:h-28 lg:w-28 lg:mx-4" src="/img/svgs/fastapi.svg" alt="FastAPI" />
                        <img className="w-14 h-14 mx-2 lg:h-28 lg:w-28 lg:mx-4" src="/img/svgs/react.svg" alt="React" />
                        <img className="w-14 h-14 mx-2 lg:h-28 lg:w-28 lg:mx-4" src="/img/svgs/vue.svg" alt="Vue" />
                    </div>
                </div>
                <div className="justify-center">
                    <h2 className="text-3xl my-10">
                        {t("stack3")}
                    </h2>
                    <div className="flex justify-center">
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/postgresql.svg" alt="PostgreSQL" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/mongodb.svg" alt="MongoDB" />
                    </div>
                </div>
                <div className="justify-center">
                    <h2 className="text-3xl my-10">
                        {t("stack4")}
                    </h2>
                    <div className="flex justify-center">
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/aws.svg" alt="AWS" />
                        <img className="w-16 h-10 mx-2 my-2 lg:w-32 lg:h-20 lg:mx-4 lg:my-4" src="/img/svgs/gcp.png" alt="Google Cloud" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/docker.svg" alt="Docker" />
                        <img className="w-14 h-14 lg:h-28 lg:w-28 mx-4" src="/img/svgs/kubernetes.svg" alt="Kubernetes" />
                    </div>
                </div>
            </div>

        </section>
    )
}