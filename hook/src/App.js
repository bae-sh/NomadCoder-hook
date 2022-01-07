import { useEffect, useState } from "react";

const useTitle = (initailTitle) => {
    const [title, setTitle] = useState(initailTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

function App() {
    const titleUpdate = useTitle("Loading...");
    setTimeout(() => titleUpdate("Home"), 3000);
    return <div></div>;
}

export default App;
