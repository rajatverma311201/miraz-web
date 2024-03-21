interface SpeakerAdminPageProps {}

const SpeakerAdminPage: React.FC<SpeakerAdminPageProps> = ({}) => {
    return (
        <div className="flex w-lvw flex-col items-center gap-5">
            <ul className="flex w-4/5 flex-col items-center gap-5">
                <li className="flex h-5 w-full items-center justify-between border-4 border-solid border-black px-3 py-3">
                    <h2 className="font-bold">Name</h2>
                    <p className="font-bold">Id</p>
                </li>
            </ul>
        </div>
    );
};

export default SpeakerAdminPage;
