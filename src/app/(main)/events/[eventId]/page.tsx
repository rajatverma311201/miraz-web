interface EventDetailPageProps {
    params: {
        eventId: string;
    };
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ params }) => {
    const { eventId } = params;

    return <h1>EventDetailPage - {eventId}</h1>;
};
export default EventDetailPage;
