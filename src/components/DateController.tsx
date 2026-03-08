type DateControllerProps = {
    selectedDate: string;
    onDateChange: (date: string) => void;
};

export const DateController = ({ selectedDate, onDateChange }: DateControllerProps) => {
    const handleDateChange = (amount: number) => {
        const current = new Date(selectedDate);
        current.setDate(current.getDate() + amount);
        onDateChange(current.toISOString().split("T")[0]);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-2">
                <button onClick={() => handleDateChange(-1)}>←</button>
                <button onClick={() => handleDateChange(1)}>→</button>
            </div>
            <p>{selectedDate}</p>
        </div>
    );
};
