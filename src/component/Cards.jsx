function Cards(props) {
    return (
        <div style={{backgroundColor:props.bgcolor}} className="border rounded-md text-center py-5 px-4 grow">
            <h1 className="text-2xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Cards