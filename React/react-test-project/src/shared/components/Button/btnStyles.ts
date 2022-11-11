//genral style for all buttons
export const general = {
    borderRadius: "6px",
    fontSize: "1rem",
    padding: "0.75rem 1.25rem",
}

//colors
const primary = {
    color: "#ffffff",
    backgroundColor: "#6366F1",
}

//shadow
const raised = {
    boxShadow: "0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
}

//sizes
const small = {
    fontSize: "0.875rem",
    padding: "0.65625rem 1.09375rem"
}
const large = {
    fontSize: "1.25rem",
    padding: "0.9375rem 1.5625rem"
}

const rounded = {
    borderRadius: "2rem"
}
//presets
const basic = {
    ...general,
    ...primary,
    border: "1px solid #6366F1",
    //transition: "background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
}
const loading = {
    ...general,
    ...primary,
    opacity: "0.6"
}
 const outlined = {
    ...general,
    backgroundColor: "transparent",
    border: "1px solid",
    //color: "#6366F1",
}
const text = {
    ...general,
    backgroundColor: "transparent",
    color: "#6366F1",
    borderColor: "transparent",
}
const danger = {
    ...general,
    color: "#ffffff",
    backgroundColor: "#EF4444",
    border: "1px solid #EF4444"
}
const dangerOutline = {
    ...danger,
    color: "#EF4444",
    backgroundColor: "transparent",
}

export const Styles = new Map<string, {}>([
    ["basic", basic],
    ['loading', loading],
    ['outlined', outlined],
    ['text', text],
    ['raised', raised],
    ['small', small],
    ['large', large],
    ['danger', danger],
    ['dangerOutline', dangerOutline],
    ['rounded', rounded]
]);
