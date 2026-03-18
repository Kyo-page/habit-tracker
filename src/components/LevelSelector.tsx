import { type Level } from "../types/types";

type LevelSelectorProps = {
    level: Level; // 現在選択中のレベルを表示に反映させるため追加
    onSelect: (level: Level) => void;
};

export const LevelSelector = ({ level, onSelect }: LevelSelectorProps) => {
    // レベル(0-4)をパーセント(0-100)に変換する表示用テーブル
    const percentMap = ["0%", "25%", "50%", "75%", "100%"];

    return (
        <div className="flex flex-col items-center gap-6 p-6 bg-base-100 rounded-2xl border border-base-200 w-full max-w-sm">
            <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-bold opacity-60 uppercase tracking-widest">Achievement</span>
                {/* 現在のパーセントを大きく表示 */}
                <span className="text-4xl font-black text-primary transition-all">{percentMap[level]}</span>
            </div>

            <div className="w-full px-2">
                {/* FlyonUI / DaisyUI の Range Slider */}
                <input
                    type="range"
                    min="0"
                    max="4"
                    value={level}
                    step="1"
                    className="range range-primary"
                    aria-label="range"
                    onChange={(e) => onSelect(Number(e.target.value) as Level)}
                />

                {/* スライダー下の目盛りラベル */}
                <div className="flex w-full justify-between px-1 mt-2 text-xs font-medium opacity-50">
                    <span>Min</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <span>Max</span>
                </div>
            </div>
        </div>
    );
};
