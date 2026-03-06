export const DateController = ({ selectedDate }: { selectedDate: string }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-2">
                <button>Prev</button>
                <button>Next</button>
            </div>
            <p>{selectedDate}</p>
        </div>
    );
};
