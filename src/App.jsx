import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Hello from './components/Hello'
// import Message from './components/Class'
// import Name from './components/Add-JS-to-XML'
// import Props from './components/Props'
// import Counter from './components/Statecounter'
// import Resume from './components/ResumeClass'
// import FunctionEvent from './components/FunctionEvent'
// import ClassEvent from './components/ClassEvent'
// import FunctionalCounter from './components/State-in-FunctionalComponent'
// import ConditionalComponent from './components/ConditionalComponent'
// import Product from './components/Product-List-Rendering'
import Form from './components/Form-user-input'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*     <div> <Hello /> </div>
 
      <div> <Message /> </div>

      <div> <Name /> </div> */}

      {/* <Props FirstName="Pranay" SurName ="Kalyanam" >
        <h3>How Are You?</h3>
      </Props> */}
      {/* <Props FirstName="Shalini" SurName ="Kalyanam" />
      <Props FirstName="Nandhini" SurName ="Kalyanam" />
      <Props FirstName="Chandhana" SurName ="Kalyanam" /> */}

      {/* props are Read Only we can't change it dynamically so
      we use states to do that */}
      {/* <div> <Message messagecode="01" contentMessage ="Message passing from props"/> </div> */}

      {/* <div>
        <Counter />
      </div> */}

      {/* <div>
        <Props FirstName="Pranay" SurName="Kalyanam" />
        <h3>How Are You?</h3>
      </div> */}
      
      {/* <div> 
        <Resume name="Pranay" /> 
      </div>  */}

      {/* <FunctionEvent /> */}

      {/* <ClassEvent /> */}

      {/* <FunctionalCounter /> */}

      {/* <ConditionalComponent></ConditionalComponent> */}

      {/* <Product></Product> */}
      
      <Form></Form>
    </>

  );
}

export default App
