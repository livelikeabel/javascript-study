const { useDebugValue } = require("react");

function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const onToggle = () => setValue(!value);
    useDebugValue(value ? 'on' : 'off');
    return [value, setValue];
}