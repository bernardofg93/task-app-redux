export const getStateLocalStorage = () => {
    const taskStorage = localStorage.getItem("tasks");
    if( taskStorage === null) return undefined;
    return JSON.parse(taskStorage);
};

export const setStateLocalStorage = (state) => {
    localStorage.setItem("tasks", JSON.stringify(state));
}