const Home = () => {
    const contact_button = () => {
        window.location.href = "/contact"
    }

    const login_button = () => {
        window.location.href = "/login"
    }

    const admin_button = () => {
        window.location.href = "/admin"
    }

    const dev_button = () => {
        window.location.href = "/devpage"
    }

    return(
        <div>
            <button onClick={contact_button}>contact us</button>
            <button onClick={login_button}>login</button> 
            <h1>Welcome to Node Nation</h1>
            <br/>
            <p>A place to bring small coding project and independent developers together</p>
            <br/>
            <br/>
            <p>remove these buttons before submission</p>
            <button onClick={admin_button}>admin</button>
            <button onClick={dev_button}>devpage</button>
        </div>
    )
}

export default Home