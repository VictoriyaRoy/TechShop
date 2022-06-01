import './person_feedback.css'

const PersonFeedback = ({active, feedback}) => {
    return (
        <li className={active ? "feedback_item active" : "feedback_item"}>
            <p className="person_feedback">
                {feedback.feedback}
            </p>
            <span className="name_surname">
                {feedback.name + ' ' + feedback.surname}
            </span>
        </li>
    )
}

export default PersonFeedback;