export const login_fetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const signin_fetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}