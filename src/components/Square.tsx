import type { Level } from "../types/types";

interface SquareProps {
    level: Level;
}

// 達成度(0-4)とTailwindクラスのマッピング
const levelColors: Record<Level, string> = {
    0: "bg-gray-100", // グレー
    1: "bg-green-200", // 薄い緑
    2: "bg-green-400", // 中くらいの緑
    3: "bg-green-600", // 濃い緑
    4: "bg-green-800", // 一番濃い緑
};

export const Square = ({ level }: SquareProps) => {
    // マッピングからクラスを取得
    const colorClass = levelColors[level];

    return <div className={`w-4 h-4 rounded-sm ${colorClass} transition-colors duration-200 cursor-pointer`}></div>;
};
