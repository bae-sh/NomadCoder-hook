import { useState } from "react";

const useInput2 = (initialValue, validator) => {
    const [value2, setValue] = useState(initialValue);
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;

        willUpdate = validator(value);
        // if (typeof validator === "function") {
        // }
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value: value2, onChange };
};
function App() {
    const validator = (value) => !value.includes("@");
    const name = useInput2("Mr.", validator);
    return (
        <div>
            <input placeholder="Name" {...name} />
        </div>
    );
}

export default App;
