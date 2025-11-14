import fileStore from "./store/fileStore";
import NestedComponent from "./components/NestedComponent";
import { Provider } from "react-redux";


function App() { 
  return <> 

  <Provider store={fileStore}>
    <NestedComponent/>
  </Provider>

  </>
}

export default App;



// Folder Tree Implementation
// Milestone 0 (M0)
// Goal: Render a folder tree structure in a nested view.

// Requirements:

// Show folders and files in hierarchical format.
// Each folder should be expandable/collapsible.
// All folders should be expanded initially.
// Milestone 1 (M1)
// Goal: Enable adding a file to a specific folder.

// Requirements:

// Each folder should support an action to add a new file.
// The added file should appear under that folder in the tree.
// Milestone 2 (M2)
// Goal: Support deletion of files and folders.

// Requirements:

// Allow deleting any file or folder from the tree.
// When a folder is deleted, all its contents should also be removed.

/*
  [
    {
      id: string,
      type : "folder" | "file",
      name : string,
      items : [
        {
          id: string,
          type : "folder" | "file",
          name : string,
        },{
          id: string,
          type : "folder" | "file",
          name : string,
        }
      ] 
    }
  ]
*/