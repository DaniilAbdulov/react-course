import { useState } from "react";
import UserContext from "../context/UserContext";
import User from "../components/User";

function Home() {
    const [userName, setUserName] = useState("");

    return (
        <UserContext.Provider value={{ userName, changeUserName: setUserName }}>
            <User />
        </UserContext.Provider>
    );
}

export default Home;
