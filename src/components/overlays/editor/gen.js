import TYPE from "./type";
import mappings from "./mappings";

const GEN = (data, path, key) => {
    let Element = mappings.defaults[TYPE(data)];

    //console.log(mappings.defaults);

    let pathString = [...path, key].join(".");
    Object.keys(mappings.overrides).forEach(key => {
        if (key.includes(pathString)) Element = mappings.overrides[key];
    });

    return <Element name={key}
                    key={key}
                    path={Array.from(path)}
                    data={data}
    />;
}

export default GEN;