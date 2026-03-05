export function loadState() {
    if (typeof window === "undefined") return undefined;

    try {
        const serialized = sessionStorage.getItem("count");

        console.log("Serialized object is ", serialized)

        if (!serialized) return undefined;

        return  JSON.parse(serialized)
    } catch {
        return undefined;
    }
}