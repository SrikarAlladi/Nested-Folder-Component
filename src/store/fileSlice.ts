import { createSlice } from "@reduxjs/toolkit";

import mockData from "../mockData/folderData";

import {
  recursiveHandleToggle,
  recursiveSelectedFile,
  recursiveDeleteFile,
  recursiveAddFileFolder,
} from "../utils/functions";

import File from "../components/types";

const fileSlice = createSlice({
  name: "fileSlice",
  initialState: {
    data: mockData,
    selected: mockData[0] as File | null,
  },
  reducers: {
    // action = {type: String, payload: {}}
    addFileFolder: (state, action) => {
      console.log("Action Payload:", action.payload, state.selected);
      state.data = recursiveAddFileFolder(
        state.data,
        state.selected?.id || "",
        action.payload
      );
    },
    deleteFile: (state) => {
      console.log(state.selected?.id);
      state.data = recursiveDeleteFile(state.data, state.selected?.id || "");
    },
    handleSelection: (state, action) => {
      console.log(action.payload.id);
      state.selected = recursiveSelectedFile(state.data, action.payload.id);
      console.log(state.selected);
    },
    handleClick: (state, action) => {
      state.data = recursiveHandleToggle(state.data, action.payload.id);
    },
  },
});

export const { addFileFolder, deleteFile, handleClick, handleSelection } =
  fileSlice.actions;

export default fileSlice;
