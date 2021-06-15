import { RootState } from "../../type";

export const strokesLengthSelector = (state: RootState) => state.strokes.length;
export const strokesSelector = (state: RootState) => state.strokes;
