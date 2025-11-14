import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/fileStore";
import { addFileFolder, handleClick, handleSelection, deleteFile } from "../store/fileSlice";
import File from "./types";

import "./styles.css"
import { SlArrowRight , SlArrowDown } from "react-icons/sl";
import { MdCreateNewFolder, MdDelete} from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";



const NestedComponent= () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector((state: RootState) => (state.fileSlice.data)) 

    const selectedFile = useSelector((state: RootState) => (state.fileSlice.selected))

    const [showInput,setShowInput] = useState<boolean>(false);
    const [folderOrFile,setFolderOrFile] = useState<"folder" | "file">("folder");

    const [inputValue,setInputValue] = useState<string>("");

    const handleAddFolderClick = () => {
        setShowInput(true);
        setFolderOrFile("folder");

    }

    const handleAddFileClick = () => {
        setShowInput(true);
        setFolderOrFile("file");
    }

    const handleDeleteClick = () => {
        setShowInput(false);
        dispatch(deleteFile());
    }

    const addFile = () => {
        if(inputValue.trim()=== ""){
            alert("Please enter a valid name");
            return;
        }
        const newFile: File = {
            id: Date.now().toString(),
            type: folderOrFile,
            name: inputValue,
            isOpened: true,
            items: []
        }
        dispatch(addFileFolder(newFile))
        setInputValue("");
        setShowInput(false);
    }


    const renderTree = (nodes: any) => {
        return (
            <ul className="folder">
                {(nodes).map((node: File) => {
                    return (
                        <li key={node.id} >   

                            <div className={`list-div ${node.id} ${selectedFile?.id == node.id ? "selected-div" : ""}`}  onClick={() => dispatch(handleSelection({id: node.id}))}>                        
                                {node.type == "folder" ? (
                                    <button className="arrow-button" onClick={() => dispatch(handleClick({id: node.id}))}>
                                       {node.isOpened ? (
                                            <SlArrowDown className="arrow-icon" />
                                        ):(
                                            <SlArrowRight className="arrow-icon"/>
                                        )}
                                    </button>
                                ):( 
                                    null 
                                )} 
                            
                                {node.name}
                            </div>

                            {node.isOpened && node.items.length > 0 && renderTree(node.items)}
                        </li>
                    )
                } )}
            </ul>
        )
    }


    return( 
        <div className="nested-component">
            <div className="add-file-section">
                {selectedFile && <div className="button-section">
                    <button className="button-icon" onClick={handleAddFolderClick}>
                        <span><MdCreateNewFolder/></span>
                    </button>
                    <button className="button-icon" onClick={handleAddFileClick}>
                        <span><AiFillFileAdd/></span>
                    </button>
                    <button className="button-icon" onClick={handleDeleteClick}>
                        <span><MdDelete/></span>
                    </button>
                </div>}
                {showInput && <div className="input-section">
                    <input type="text" className="name-input" placeholder={`Enter ${folderOrFile} Name`} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className="add-button" onClick={addFile} >Add</button>
                    <button className="cancel-button" onClick={() => setShowInput(false)}>Cancel</button>
                </div>}
            </div>
            {renderTree(data)}
        </div>
    )

}

export default NestedComponent;