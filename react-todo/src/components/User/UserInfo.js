import { useContext } from "react";
import UserContext from "../../context/UserContext";

function UserInfo() {
    const { userName, changeUserName } = useContext(UserContext);

    return (
        <div>
            <h2>{userName}</h2>
            <input
                value={userName}
                onChange={(e) => changeUserName(e.target.value)}
            />
        </div>
    );
}

export default UserInfo;
