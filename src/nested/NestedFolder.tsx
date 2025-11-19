import React from "react";

import useNestedOperations from "../hooks/useNestedOperations";

import File from "../components/types";

import { SlArrowRight , SlArrowDown } from "react-icons/sl";
import { MdCreateNewFolder, MdDelete} from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { handleClick } from "../store/fileSlice";



const NestedFolder = () => {

    const {data} = useNestedOperations();

    const generateTree = (nodes:File []) => {
        return (
            <ul>
                {nodes.map((node:File) => 
                    <li key={node.id}>
                        <div className="folder-container">
                            <div className="folder-name">
                                <button className="folder-toggle-button" onClick={() => handleClick(node.id)}>
                                    {node.type === "folder" && <span>{node.isOpened ? <SlArrowDown/> : <SlArrowRight/>}</span>}
                                </button>
                                <span>{node.name}</span>
                            </div>
                            {node.type === "folder" && node.isOpened && generateTree(node.items)}
                        </div>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className="nested-folder-container">
           {generateTree(data)}
        </div>
    )

}

export default NestedFolder;