import { useState } from "react";
function Login() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({ username: "", password: "" });
    function handleFormSubmit(event) {
        event.preventDefault();
        // const userDate = {
        //     username, //username: username,
        //     password, //password: password,
        // };
        console.log(JSON.stringify(data));
        // setUsername('')
        // setPassword('')
        setData({ username: "", password: "" });
    }
    function handleInput(e, name) {
        setData({ ...data, [name]: e.target.value });
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleInput(e, "username")}
                        required
                    ></input>
                </label>
                {/* value={data.username}
                        onChange={(e) =>
                            setData({ ...data, username: e.target.value })
                        } 
                        в value текущее значение. onChange обновляет значение
                        
                        */}
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleInput(e, "password")}
                        required
                    ></input>
                </label>
                <button type="submit">LogIn</button>
            </form>
        </div>
    );
}
export default Login;
