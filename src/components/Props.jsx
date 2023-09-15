function Props(props){
    //Deconstructing the props
    const {
        FirstName, SurName
    } = props;
    return(
        // <h1>Hello {props.SurName} {props.FirstName}
        // {props.children}</h1>
        <h1>Hello {SurName} {FirstName}</h1>
    );
}

export default Props