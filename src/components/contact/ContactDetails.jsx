import { FiPhone, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const contacts = [
    {
        id: 0,
        name: "michaelwolfsonkin@gmail.com",
        icon: <FiMail />,
    },
    {
        id: 1,
        name: "646 618 2611",
        icon: <FiPhone />,
    },
    {
        id: 2,
        name: "github.com/mikee478",
        icon: <FiGithub />,
        link: "https://github.com/mikee478",
    },
    {
        id: 3,
        name: "linkedin.com/in/michaelwolfsonkin",
        icon: <FiLinkedin />,
        link: "https://www.linkedin.com/in/michaelwolfsonkin/",
    },
];

const ContactDetails = () => {
    return (
        <div className="w-full lg:w-1/2">
            <div className="text-left max-w-xl px-6">
                <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
                    Contact Details
                </h2>
                <ul className="font-general-regular">
                    {contacts.map((contact) =>
                        contact.link ? (
                            <a
                                className="flex "
                                key={contact.id}
                                href={contact.link}
                                target="_blank"
                            >
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    {contact.icon}
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-500 duration-300">
                                    {contact.name}
                                </span>
                            </a>
                        ) : (
                            <li className="flex " key={contact.id}>
                                <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                                    {contact.icon}
                                </i>
                                <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                                    {contact.name}
                                </span>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ContactDetails;
