const Home = () => {
    const contact_button = () => {
        window.location.href = "/contact"
    }

    const login_button = () => {
        window.location.href = "/login"
    }

    return(
        <div>
            <button onClick={contact_button}>contact us</button>
            <button onClick={login_button}>login</button> 
            <h1>Congrats You're In</h1>
            <br/>
            <p>A place to bring small coding project and independent developers together</p>
        </div>
    )
}

export default Home