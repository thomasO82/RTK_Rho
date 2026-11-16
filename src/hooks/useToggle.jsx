import { useState } from 'react'
function useToggle(initValue) {
  const [toggle, setToggle] = useState(initValue)
  const handleToggle = () => {
    return setToggle((value) => {
      return !value
    })
  }
  return {
    toggle,
    handleToggle,
  }
}
export default useToggle
