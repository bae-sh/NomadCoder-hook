import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);
    return { ref: element, style: { opacity: 0 } };
};
function App() {
    const FadeInH1 = useFadeIn(1, 2);
    const FadeInP = useFadeIn(5, 10);

    return (
        <div>
            <h1 {...FadeInH1}>Hello</h1>
            <p {...FadeInP}>lalala</p>
        </div>
    );
}

export default App;
