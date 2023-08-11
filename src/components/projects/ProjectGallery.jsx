const ProjectGallery = ({ project }) => {
    // on pc 2/5 is pretty good
    // on mobile 3/4

    // if there's only one image make it 2/5 otherwise each one is 1/3
    // const w = project.page_images.length + project.page_videos.length === 1 ? "w-2/5" : "w-3/4"

    // const w = "w-2/5"; // pc
    // const w = "w-5/12";
    // const w = "w-1/2";
    // const w = "w-2/3";
    // const w = "w-3/4";
    // const w = "w-10/12"; // mobile
    // const w = "";

    return (
        // <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-10">
        <div className="flex flex-wrap gap-10 mt-5 mb-5 sm:mb-10 justify-center">
            {project.page_videos.map((video, i) => {
                return (
                    // the width here can be changed depending on how many images are used
                    <div
                        className={"flex mb-0 sm:mb-0 w-10/12 sm:w-5/12"}
                        key={i}
                    >
                        <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            poster={video.poster}
                            className="rounded-lg shadow-lg sm:shadow-none"
                        >
                            <source src={video.video} />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                );
            })}
            {project.page_images.map((image, i) => {
                return (
                    // the width here can be changed depending on how many images are used
                    <div
                        className={"flex mb-0 sm:mb-0 w-10/12 sm:w-5/12"}
                        key={i}
                    >
                        <img
                            src={image}
                            className="rounded-lg shadow-lg sm:shadow-none"
                            alt={"image " + i}
                            key={i}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectGallery;
