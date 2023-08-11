import { FiClock, FiTag } from "react-icons/fi";

const ProjectSingleHeader = ({ project }) => {
    return (
        <div>
            <p className="font-general-medium text-left text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mt-0 sm:mt-0 mb-2">
                {project.title}
            </p>
            <div className="flex">
                <div className="flex items-center mr-10">
                    <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
                    <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        {project.publish_date}
                    </span>
                </div>
                {/* <div className="flex items-center">
                    <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
                    <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
                        {project.tags}
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectSingleHeader;
