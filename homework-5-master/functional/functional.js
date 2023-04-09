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

        // function deleteItem() {
        //     setItems(items.slice(items.length - 2));
        // }

        function openModal() {
            modal.classList.remove("hidden");
        }

        function closeModal() {
            modal.classList.add("hidden");
        }

        const root = document.createElement("div");
        root.classList.add("root");
        const titleRoot = document.createElement("text");
        titleRoot.textContent = "To Do List";
        titleRoot.classList.add("titleRoot");

        const wrapperInputButton = document.createElement("div");
        wrapperInputButton.classList.add("wrapper");

        const inputRoot = document.createElement("input");
        inputRoot.classList.add("inputRoot");
        inputRoot.placeholder = "Search Task";

        const buttonNewTask = Button({ text: "+ New Task", onClick: openModal });
        buttonNewTask.classList.add("buttonNewTask");

        const allTasksSection = document.createElement("div");
        allTasksSection.classList.add("allTasksSection");

        const titleAllTasksSection = document.createElement("text");
        titleAllTasksSection.textContent = "All Tasks";
        titleAllTasksSection.classList.add("titleAllTasksSection");

        const checkbox1 = document.createElement("input");
        checkbox1.type = "checkbox";
        checkbox1.name = "The very first task";

        const checkbox2 = document.createElement("input");
        checkbox2.type = "checkbox";
        checkbox2.name = "The second task";

        const checkbox3 = document.createElement("input");
        checkbox3.type = "checkbox";
        checkbox3.name = "3 task";

        const checkbox4 = document.createElement("input");
        checkbox4.type = "checkbox";
        checkbox4.name = "4 task";

        const completedTasksSection = document.createElement("div");
        completedTasksSection.classList.add("completedTasksSection");
        const titlecompletedTasksSection = document.createElement("text");
        titlecompletedTasksSection.textContent = "Completed Tasks";
        titlecompletedTasksSection.classList.add("titlecompletedTasksSection");

        const checkbox5 = document.createElement("input");
        checkbox5.type = "checkbox";
        checkbox5.name = "5th task";

        const checkbox6 = document.createElement("input");
        checkbox6.type = "checkbox";
        checkbox6.name = "6th task";

        const modal = document.createElement("div");
        modal.classList.add("modal", "hidden");

        const inputModal = document.createElement("input");
        const titleModal = "Add New Task";
        inputModal.placeholder = "Task Title";

        const list = List({ items });

        const buttonAdd = Button({ text: "Add Task", onClick: addItem });
        buttonAdd.style.width = "100px";
        buttonAdd.style.height = "30px";
        buttonAdd.style.borderRadius = "4%";

        const buttonCancel = Button({ text: "Cancel", onClick: closeModal });
        buttonCancel.style.width = "100px";
        buttonCancel.style.height = "30px";

        // const buttonCancel = Button({ text: "Cancel", onClick: deleteItem });
        // buttonCancel.style.width = "100px";
        // buttonCancel.style.height = "30px";

        completedTasksSection.append(titlecompletedTasksSection, checkbox5, checkbox6);

        allTasksSection.append(titleAllTasksSection, checkbox1, checkbox2, checkbox3, checkbox4);

        wrapperInputButton.append(inputRoot, buttonNewTask);

        modal.append(titleModal, inputModal, buttonCancel, buttonAdd);
        //modal.append(buttonsWrapper);
        //mainWindow.append(modal);

        root.append(titleRoot, modal, wrapperInputButton, allTasksSection, completedTasksSection);

        return root;
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
