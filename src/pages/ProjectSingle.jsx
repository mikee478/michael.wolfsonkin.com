import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectInfo from "../components/projects/ProjectInfo";
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from "../context/SingleProjectContext";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectSingle = () => {
    const { id } = useParams();

    const project = projectsData.filter(function (data) {
        return data.url_id === id;
    })[0];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: "easeInOut",
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-5 mb-10"
        >
            <SingleProjectProvider>
                <ProjectHeader project={project} />
                <ProjectGallery project={project} />
                <ProjectInfo project={project} />
                {/* <ProjectRelatedProjects /> */}
            </SingleProjectProvider>
        </motion.div>
    );
};

export default ProjectSingle;
