import TYPE from "./type";
import mappings from "./mappings";

const GEN = (data, path, key) => {
    let Element = mappings.defaults[TYPE(data)];

    let pathString = [...path, key].map(element => {
        if (!isNaN(Number(element))) return "x";
        return element;
    }).join(".");

    Object.entries(mappings.overrides).forEach(([ key, value ]) => {
        if (pathString.includes(key)) Element = value;
    });

    return <Element name={key}
                    key={key}
                    path={Array.from(path)}
                    data={data}
                    type={TYPE(data)}
    />;
}

export default GEN;