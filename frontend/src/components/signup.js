const Signup = ({setUsername, setPassword, signin_handler}) => {
    return(
        <div>
            <h1>Join the Team!</h1>
            <br/>
            <form onSubmit={signin_handler}>
                <p>Username:</p>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <p>Password:</p>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <br/>
                <br/>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Signup