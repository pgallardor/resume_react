import ResumeCard from "./subcomps/ResumeCard"
import { LangContext } from "../contexts"
import { useContext } from "react"

export default function Resume() {
    const t = useContext(LangContext);
    console.log(t("experience.utalca.contributions"))
    return (
        <section className="justify-center mt-20 px-5 lg:px-20 pb-10">
            <h2 className="text-3xl text-center">
                My working experience
            </h2>
            <ResumeCard 
                role={t("experience.utalca.role")}
                place="Universidad de Talca"
                duration={t("experience.utalca.duration")}
                location={t("experience.utalca.location")}
                overview={t("experience.utalca.overview")}
                contributions={t("experience.utalca.contributions", {returnObjects: true})}
                stackList={"Unity, Vuforia, Xcode" + t("experience.utalca.skills")}
                relevantLinks={[]}
            />
            <ResumeCard 
                role={t("experience.alerce.role")}
                place="ALeRCE"
                duration={t("experience.alerce.duration")}
                location={t("experience.alerce.location")}
                overview={t("experience.alerce.overview")}
                contributions={t("experience.alerce.contributions", {returnObjects: true})}
                stackList={"Python, FastAPI, Javascript, Vue, AWS (EKS, EC2, S3), Github (Git, Github Actions), PostgreSQL, MongoDB, SCRUM" 
                            + t("experience.alerce.skills")}
                relevantLinks={t("experience.alerce.links", {returnObjects: true})}
            />
            <ResumeCard
                role={t("experience.uds.role")}
                place="CDIA UdeC"
                duration={t("experience.uds.duration")}
                location={t("experience.uds.location")}
                overview={t("experience.uds.overview")}
                contributions={t("experience.uds.contributions", {returnObjects: true})}
                stackList={"Javascript, TypeScript, NestJS, NodeJS, React, Vue, Python, GCP (GCE, Pub/Sub, GKE), PostgreSQL, PostGIS, SCRUM"
                            + t("experience.uds.skills")}
                relevantLinks={t("experience.uds.links", {returnObjects: true})}
            />
        </section>
    )
    // Remember to add soft skills!
}