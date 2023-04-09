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

        // const listItems = items.map((item) => `<li>${item}</li>`).join("");
        // const ul = document.createElement("ul");
        // li.appendChild(document.createElement("input").attributes({ type: "checkbox" }));
        // ul.appendChild(li);
        // ul.innerHTML = listItems;
        // return ul;

        // const listItems = items.map((item) => `<li>${item}</li>`).join("");
        // const ul = document.createElement("ul");
        // ul.innerHTML = listItems;
        // li.appendChild(
        //     document.createElement("input").attr({
        //         id: "myCheckbox",
        //         name: "myCheckbox",
        //         value: "myValue",
        //         type: "checkbox",
        //     })
        // );
        // ul.appendChild(li);
        // return ul;

        // var ul = document.getElementById("ul"); //ul
        // var li = document.createElement("li"); //li
        // var text = document.getElementById("texto");

        // var checkbox = document.createElement("input");
        // checkbox.type = "checkbox";
        // checkbox.name = "name";
        // checkbox.value = "value";
        // checkbox.id = "id";

        // li.appendChild(checkbox);
        // li.appendChild(document.createTextNode(text));
        // ul.appendChild(li);
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
        const [items, setItems] = useState(["Text 1", "Text 2", "Text 3"]);

        function addItem() {
            setItems([...items, `Item ${items.length + 1}`]);
        }

        // function deleteItem() {
        //     setItems(items.slice(items.length - 2));
        // }

        function openModal() {
            modal.classList.remove("hidden");
            modalBackground.classList.remove("hidden");
        }

        function closeModal() {
            modal.classList.add("hidden");
        }

        const root = document.createElement("div");
        root.classList.add("root");
        const titleRoot = document.createElement("text");
        titleRoot.textContent = "To Do List";
        titleRoot.classList.add("titleRoot");

        const list = List({ items });

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

        // const modalBackground = document.createElement("div");
        // modalBackground.classList.add("modalBackground", "hidden");

        const inputModal = document.createElement("input");
        inputModal.classList.add("inputModal");
        const titleModal = document.createElement("text");
        titleModal.textContent = "Add New Task";
        inputModal.placeholder = "Task Title";
        titleModal.classList.add("titleModal");

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.classList.add("buttonsWrapper");

        const buttonAdd = Button({ text: "Add Task", onClick: addItem });
        buttonAdd.classList.add("buttonAdd");

        const buttonCancel = Button({ text: "Cancel", onClick: closeModal });
        buttonCancel.classList.add("buttonCancel");

        // const buttonCancel = Button({ text: "Cancel", onClick: deleteItem });
        // buttonCancel.style.width = "100px";
        // buttonCancel.style.height = "30px";

        completedTasksSection.append(titlecompletedTasksSection, checkbox5, checkbox6);

        allTasksSection.append(
            titleAllTasksSection,
            list,
            checkbox1,
            checkbox2,
            checkbox3,
            checkbox4
        );

        wrapperInputButton.append(inputRoot, buttonNewTask);

        modal.append(titleModal, inputModal, buttonsWrapper);

        buttonsWrapper.append(buttonCancel, buttonAdd);

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
