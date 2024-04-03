interface EventLayoutProps {
    children: React.ReactNode;
}

const EventLayout: React.FC<EventLayoutProps> = ({ children }) => {
    return (
        <div className="bg-rd-500 h-screen overflow-y-scroll pb-14">
            {children}
        </div>
    );
};
export default EventLayout;
