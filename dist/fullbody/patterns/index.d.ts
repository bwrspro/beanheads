export interface PatternDef {
    /** SVG path data for the tile motif; may contain several subpaths. */
    d: string;
    /** Tile width in user units — the motif must wrap cleanly at the tile edges. */
    w: number;
    /** Tile height in user units. */
    h: number;
}
export declare const patternMap: Record<string, PatternDef>;
export declare function registerPattern(key: string, def: PatternDef): void;
