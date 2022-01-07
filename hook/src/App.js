import { useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();
    console.log(element);
    useEffect(() => {
        console.log(element);
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};

function App() {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
    );
}

export default App;
