import { useState } from "react";
import type { DailyRecord } from "./types/types";

// ダミーデータ
const dummyData: DailyRecord = {
    "2026-02-01": 1,
    "2026-02-02": 4,
    "2026-02-05": 2,
};

function App() {
    const [records, setRecords] = useState<DailyRecord>(dummyData);

    console.log(records);

    return (
        <div className="container p-6">
            <h1 className="text-3xl font-bold underline">Habit Tracker Start</h1>
            <button className="btn btn-primary">Click me</button>
        </div>
    );
}

export default App;
