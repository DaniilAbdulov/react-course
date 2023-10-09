import UserInfo from "./UserInfo";
import UserContext from "../../context/UserContext";
import { useState } from "react";
function User() {
    const [userName, setUserName] = useState("");

    return (
        <UserContext.Provider value={{ userName, changeUserName: setUserName }}>
            <UserInfo />
        </UserContext.Provider>
    );
}
export default User;
