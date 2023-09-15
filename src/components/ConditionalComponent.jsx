import { useState } from "react";
import FunctionalCounter from "./State-in-FunctionalComponent";
import Counter from "./Statecounter"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true);
    // const [display, setDisplay] = useState(false);

    // // 1st way Conditional Rendering (mostly not used)
    // if (display) {
    //     return (
    //         <div>
    //             {/* <h2>This is a Conditional Component</h2> */}
    //             <Counter></Counter>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             {/* <h2>There is nothing to see</h2> */}
    //             <FunctionalCounter></FunctionalCounter>
    //         </div>
    //     )
    // }

    // // 2nd way Conditional Rendering With Elements
    // let output;
    // if (display) {
    //     output = <div><h2>This is a Conditional Component</h2>
    //         {/* <Counter></Counter> */}
    //     </div>
    // } else {
    //     output = <div>
    //         <h2>There is nothing to see</h2>
    //             {/* <FunctionalCounter></FunctionalCounter> */}
    //     </div>
    // }

    // return output

    // 3rd way  Ternary Conditional (mostly used)
    return display ? (
        <div><h2>This is a Conditional Component</h2>
            {/* <Counter></Counter> */}
        </div>
    ) : (
        <div>
            <h2>There is nothing to see</h2>
                {/* <FunctionalCounter></FunctionalCounter> */}
        </div>
    )

}