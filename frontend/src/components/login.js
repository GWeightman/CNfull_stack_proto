import { Link } from "react-router-dom";

const Login = ({setUsername, setPassword, login_handler}) => {
    return(
        <div>
            <h1>Awesome Company</h1>
            <br/>
            <form onSubmit={login_handler}>
                <p>Username:</p>
                <input onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <p>Password:</p>
                <input onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <br/>
                <br/>
                <button type='submit'>submit</button>
                <button type='submit'><Link to={"/signup"}>sign up</Link></button>
            </form>
        </div>
    )
}

export default Login;