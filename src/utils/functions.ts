import File from "../components/types";

export const recursiveHandleToggle = (nodes: File[], id: string) => {
  return nodes.map((node: File) => {
    if (node.id === id) {
      return { ...node, isOpened: !node.isOpened };
    }
    if (node.items.length > 0) {
      return { ...node, items: recursiveHandleToggle(node.items, id) };
    }
    return node;
  });
};

export const recursiveSelectedFile = (nodes: File[], id: string) => {
  for (let node of nodes) {
    if (node.id === id) {
      return node;
    }

    if (node.items.length > 0) {
      const found = recursiveSelectedFile(node.items, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

export const recursiveDeleteFile = (nodes: File[], id: string) => {
  return nodes.filter((node: File) => {
    if (node.id === id) return false;

    if (node.items.length > 0) {
      node.items = recursiveDeleteFile(node.items, id);
    }
    return true;
  });
};

export const recursiveAddFileFolder = (
  nodes: File[],
  id: string,
  newFile: File
) => {
  return nodes.map((node: File) => {
    if (node.id === id) {
      if (node.type === "folder") {
        return {
          ...node,
          items: [...node.items, newFile],
        };
      } else {
        return node;
      }
    }
    if (node.items.length > 0) {
      return {
        ...node,
        items: recursiveAddFileFolder(node.items, id, newFile),
      };
    }
    return node;
  });
};
