import File from "../components/types";

const mockData: File[] = [
  {
    id: "1",
    type: "folder",
    name: "folder 1",
    isOpened: true,
    items: [
      {
        id: "2",
        type: "folder",
        name: "folder 2",
        isOpened: true,
        items: [
          {
            id: "3",
            type: "folder",
            name: "folder 3",
            isOpened: true,
            items: [
              {
                id: "4",
                type: "file",
                name: "file 4",
                isOpened: true,
                items: [],
              },
              {
                id: "5",
                type: "file",
                name: "file 5",
                isOpened: true,
                items: [],
              },
            ],
          },
          {
            id: "6",
            type: "file",
            name: "file 6",
            isOpened: true,
            items: [],
          },
          {
            id: "7",
            type: "folder",
            name: "folder 7",
            isOpened: true,
            items: [
              {
                id: "8",
                type: "file",
                name: "file 8",
                isOpened: true,
                items: [],
              },
              {
                id: "9",
                type: "file",
                name: "file 9",
                isOpened: true,
                items: [],
              },
            ],
          },
        ],
      },
      {
        id: "10",
        type: "file",
        name: "file 10",
        isOpened: true,
        items: [],
      },
      {
        id: "11",
        type: "folder",
        name: "folder 11",
        isOpened: true,
        items: [
          {
            id: "12",
            type: "file",
            name: "file 12",
            isOpened: true,
            items: [],
          },
          {
            id: "13",
            type: "folder",
            name: "folder 13",
            isOpened: true,
            items: [
              {
                id: "14",
                type: "file",
                name: "file 14",
                isOpened: true,
                items: [],
              },
              {
                id: "15",
                type: "file",
                name: "file 15",
                isOpened: true,
                items: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "16",
    type: "folder",
    name: "folder 16",
    isOpened: true,
    items: [
      {
        id: "17",
        type: "folder",
        name: "folder 17",
        isOpened: true,
        items: [
          {
            id: "18",
            type: "file",
            name: "file 18",
            isOpened: true,
            items: [],
          },
          {
            id: "19",
            type: "file",
            name: "file 19",
            isOpened: true,
            items: [],
          },
        ],
      },
      {
        id: "20",
        type: "folder",
        name: "folder 20",
        isOpened: true,
        items: [
          {
            id: "21",
            type: "folder",
            name: "folder 21",
            isOpened: true,
            items: [
              {
                id: "22",
                type: "file",
                name: "file 22",
                isOpened: true,
                items: [],
              },
              {
                id: "23",
                type: "file",
                name: "file 23",
                isOpened: true,
                items: [],
              },
            ],
          },
        ],
      },
      { id: "24", type: "file", name: "file 24", isOpened: true, items: [] },
      { id: "25", type: "file", name: "file 25", isOpened: true, items: [] },
    ],
  },
];

export default mockData;
