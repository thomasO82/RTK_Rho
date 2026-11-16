import { useState } from "react"

function useToggle(initValue) {
    const [toggle, setToggle] = useState(initValue);
    const handleToggle = () => setToggle((value) => !value);

    return (
        {toggle, handleToggle}
    )
}

export default useToggle