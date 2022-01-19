export const login_fetch = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                password: password,
            }),
            
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const signup_fetch = async (username, password, fname, sname, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                firstname: fname,
                surname: sname,
                email: email,
                password: password,
                status: ""
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}