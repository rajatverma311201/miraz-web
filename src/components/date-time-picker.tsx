import ReactDatePicker from "react-datepicker";

interface DateTimePickerProps {
    datetime: Date;
    setDatetime: (date: Date) => void;
}
export const DateTimePicker: React.FC<DateTimePickerProps> = ({
    datetime,
    setDatetime,
}) => {
    return (
        <ReactDatePicker
            className="rounded-md border px-3 py-2 text-sm"
            showTimeInput
            showTimeSelect
            selected={datetime}
            onChange={(date) => {
                setDatetime(new Date(date as Date));
                console.log(date);
            }}
            dateFormat="dd/MM/yyyy, h:mmaa"
        />
    );
};
