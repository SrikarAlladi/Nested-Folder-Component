type FileType = "folder" | "file";

export default interface File {
  id: string;
  type: FileType;
  name: string;
  isOpened: boolean;
  items: File[];
}
