(function () {
    let state = undefined;

    /**
     * Global application state
     * @template T
     * @param {T} initialValue
     * @returns {[T, function(T): void]}
     */
    function useState(initialValue) {
        state = state || initialValue;

        function setValue(newValue) {
            state = newValue;
            renderApp();
        }

        return [state, setValue];
    }

    /**
     * Functional component for the list
     * @param items {string[]}
     * @returns {HTMLElement} - List element
     */
    function List({ items }) {
        const listItems = items.map((item) => `<li>${item}</li>`).join("");
        const ul = document.createElement("ul");
        ul.innerHTML = listItems;
        return ul;
    }

    /**
     * Button component
     * @param text {string}
     * @param onClick {function}
     * @returns {HTMLButtonElement} - Button element
     */
    function Button({ text, onClick }) {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.onclick = onClick;
        return button;
    }

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App() {
        const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

        function addItem() {
            setItems([...items, `Item ${items.length + 1}`]);
        }

        function deleteItem() {
            setItems(items.slice(items.length - 2));
        }

        const div = document.createElement("div");
        const modal = document.createElement("div");
        const input = document.createElement("input");
        const title = "Add New Task";
        input.placeholder = "Task Title";

        const list = List({ items });
        const button = Button({ text: "Add Task", onClick: addItem });
        button.style.width = "227.5px";
        button.style.height = "52px";

        const buttonCancel = Button({ text: "Cancel", onClick: deleteItem });
        buttonCancel.style.width = "227.5px";
        buttonCancel.style.height = "52px";
        modal.append(input);

        div.append(list, button, buttonCancel, modal, input, title);

        return div;
    }

    /**
     * Render the app.
     * On change whole app is re-rendered.
     */
    function renderApp() {
        const appContainer = document.getElementById("functional-example");
        appContainer.innerHTML = "";
        appContainer.append(App());
    }

    // initial render
    renderApp();
})();
