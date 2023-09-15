function FunctionEvent(){

   const handleEvent = ()=>{
        console.log("Button is Clicked")
    }

    return(
        <div>
            <h3>Functional Event</h3> <br />
            <button onClick={handleEvent}>Click Here</button>
        </div>
    )
}

export default FunctionEvent