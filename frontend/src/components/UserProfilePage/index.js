import { useSelector } from "react-redux";
import "./UserProfilePage.css";

function UserProfilePage() {
    const sessionUser = useSelector(state => state.session.user);

    return(
        <div className="user-profile-page">
            <div className="user-profile-page-header">
                <h2>Hello, {sessionUser.firstName}</h2>
            </div>
            <div className="upcoming-events">
                <h3>Your Upcoming Events</h3>
                <div className="upcoming-events-container">

                </div>
            </div>
            <div className="created-quests">
                <h3>Your Created Quests</h3>
                <div className="created-quests-container">

                </div>
            </div>
        </div>
    )
}

export default UserProfilePage;