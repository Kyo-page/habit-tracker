// levelは0(未達成)から4(最高)の5段階
export type Level = 0 | 1 | 2 | 3 | 4;

// 日付(YYYY-MM-DD形式のstring)をキーにする
export interface DailyRecord {
    [date: string]: Level;
}
