import { useState } from "react";
import type { DailyRecord } from "./types/types";
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
    "2026-02-14": 4,
    "2026-02-13": 1,
    "2026-02-15": 2,
    "2026-02-16": 3,
    "2026-02-17": 4,
    "2026-02-18": 0,
    "2026-02-19": 1,
    "2026-02-20": 2,
    "2026-02-21": 3,
    "2026-02-22": 4,
    "2026-02-23": 0,
    "2026-02-24": 1,
    "2026-02-25": 2,
    "2026-02-26": 3,
    "2026-02-27": 4,
    "2026-02-28": 0,
    "2026-03-01": 1,
    "2026-03-02": 2,
    "2026-03-03": 3,
};

function App() {
    const [records, setRecords] = useState<DailyRecord>(dummyData);

    // オブジェクトを「キー（日付）」と「値（Level）」のペアの配列に変換
    const recordEntries = Object.entries(records).sort((a, b) => a[0].localeCompare(b[0]));

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold">Habit Tracker</h1>
            <div className="card">
                <div className="card-body space-y-4 items-start">
                    <div className="inline-flex flex-wrap flex-col gap-1 max-h-34">
                        {/* map の引数で分割代入を使って受け取る */}
                        {recordEntries.map(([date, level]) => (
                            // タイルを並べる
                            <Square date={date} key={date} level={level} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
