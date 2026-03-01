import { useState } from "react";
import type { DailyRecord, Level } from "./types/types";
import { Square } from "./components/Square";

// ダミーデータ
const dummyData: DailyRecord = {
    "2026-02-01": 1,
    "2026-02-02": 4,
    "2026-02-05": 2,
    "2026-02-06": 3,
    "2026-02-07": 0,
    "2026-02-08": 1,
    "2026-02-09": 2,
    "2026-02-10": 3,
    "2026-02-11": 4,
    "2026-02-12": 0,
    "2026-02-13": 1,
};

function App() {
    const [records, setRecords] = useState<DailyRecord>(dummyData);

    // オブジェクトを「キー（日付）」と「値（Level）」のペアの配列に変換
    const recordEntries = Object.entries(records);

    return (
        <div className="container p-6 space-y-4">
            <h1 className="text-3xl font-bold">Habit Tracker</h1>
            <div className="flex flex-wrap gap-1 w-full max-w-4xl">
                {/* map の引数で分割代入を使って受け取る */}
                {recordEntries.map(([date, level]) => (
                    // タイルを並べる
                    <Square key={date} level={level} />
                ))}
            </div>
        </div>
    );
}

export default App;
