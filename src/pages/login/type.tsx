export interface Point {
    x: number;
    y: number;
}
export interface TDot extends Point {
    radius: number;
    xa: number;
    ya: number;
}

export type TRandom = (min: number, max: number) => number;

export type TDrawLine = (dist: number, dot: TDot, nextDot: Point) => void;
