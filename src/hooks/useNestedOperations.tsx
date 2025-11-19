import mockData from "../mockData/folderData";

import { useState } from "react";

import File from "../components/types";

const useNestedOperations = () => {

    const [data, setData] = useState<File []> (mockData);

    const [selected,setSelected] = useState<File | null>(null);

    return {
        data,
    }

}

export default useNestedOperations;