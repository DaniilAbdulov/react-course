import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
    const { userName, changeUserName } = useContext(UserContext);

    return (
        <div>
            <h2>{userName}</h2>
            <button
                onClick={() =>
                    changeUserName(
                        userName === "Daniil Abdulov" ? "Dan" : "Abd"
                    )
                }
            >
                Change user
            </button>
            <input
                value={userName}
                onChange={(e) => changeUserName(e.target.value)}
            />
        </div>
    );
}

export default UserInfo;
