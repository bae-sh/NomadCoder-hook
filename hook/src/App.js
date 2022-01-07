import { useEffect, useRef } from "react";

const useConfirm = (messege = "", callback, rejection) => {
    if (callback && typeof callback !== "function") {
        return;
    }
    console.log(123);
    const confirmAction = () => {
        if (window.confirm(messege)) {
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

function App() {
    const deleteWorld = () => console.log("Deleting the wolrd");
    const abort = () => console.log("abort");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
    return (
        <div>
            <button onClick={confirmDelete}>hi</button>
        </div>
    );
}

export default App;
