const Notauth = () => {

    const home_handler = () => {
        window.location.href = "/"
    }
    return(
        <div>
            <h1>notauth</h1>
            <button onClick={home_handler}>home</button>
        </div>
    )
}

export default Notauth