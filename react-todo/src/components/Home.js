import { useState } from "react";
import User from "../components/User";
function Home() {
    const [user, setUser] = useState("Daniil");

    return (
        <>
            <User user={user} />
        </>
    );
}
export default Home;
