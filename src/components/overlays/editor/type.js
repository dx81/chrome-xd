const TYPE = (any) => {
    if (typeof any === "object") {
        if (Array.isArray(any)) return "array";
        if (any === null) return "null";

        return "object";
    }

    return typeof any;
}

export default TYPE;