const useNotification = () => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = (title, options) => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
            console.log(options);
        }
    };
    return fireNotif;
};

function App() {
    const triggerNotif = useNotification("hi", { body: "bye" });
    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}

export default App;
