import { useState } from "react";

const content = [
    {
        tab: "Section 1",
        content: "1",
    },
    {
        tab: "Section 2",
        content: "2",
    },
];
const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex,
    };
};
function App() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <div>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)} key={index}>
                    {section.tab}
                </button>
            ))}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
