type DateControllerProps = {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
};

export const DateController = ({ selectedDate, setSelectedDate }: DateControllerProps) => {
    const handleDateChange = (amount: number) => {
        const current = new Date(selectedDate);
        // 現在の日付に amount (+1 または -1) を加算
        current.setDate(current.getDate() + amount);
        // 再び YYYY-MM-DD 形式の文字列に戻してStateを更新
        setSelectedDate(current.toISOString().split("T")[0]);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-2">
                <button onClick={() => handleDateChange(-1)}>
                    <div className="icon-[lucide--arrow-left] size-8"></div>
                </button>
                <div className="relative p-2rounded-lg transition group">
                    {/* 見た目用のアイコン */}
                    <div className="icon-[lucide--calendar-days] size-10 text-gray-600 group-hover:text-blue-500"></div>

                    {/* 実際の入力エリア（透明にして重ねる） */}
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer size-8"
                    />
                </div>
                <button onClick={() => handleDateChange(1)}>
                    <div className="icon-[lucide--arrow-right] size-8"></div>
                </button>
            </div>
            <p>{selectedDate}</p>
        </div>
    );
};
