import { useState } from "react"

const FunctionalCounter = () => {

    const [counter, setCount] = useState(0)

    const increment = () => {
        setCount(counter + 1)
    }
    return (
        <div>
            <div>Count is : {counter}</div>
            <div >
                <button onClick={increment}>Increment</button>
                </div>
        </div>
    )
}
export default FunctionalCounter