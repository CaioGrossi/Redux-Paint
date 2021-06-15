import { createAction } from "@reduxjs/toolkit";
import { Stroke } from "../type";

export const endStroke =
  createAction<{
    stroke: Stroke;
    historyIndex: number;
  }>("endStroke");
