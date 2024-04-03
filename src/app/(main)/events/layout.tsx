interface EventLayoutProps {
    children: React.ReactNode;
}

const EventLayout: React.FC<EventLayoutProps> = ({ children }) => {
    return <div className="h-screen overflow-y-scroll pb-14">{children}</div>;
};
export default EventLayout;
