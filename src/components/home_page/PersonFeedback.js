import './person_feedback.css'

const PersonFeedback = ({direction, active, feedback}) => {
    const getItemStyle = () => {
        let itemStyle = "feedback_item"
        if (active && direction) {
            itemStyle += " fadeRight"
        } else if (active && !direction) {
            itemStyle += " fadeLeft"
        } else if (!active && direction)  {
            itemStyle += " fadeoutRight"
        } else {
            itemStyle += " fadeoutLeft"
        }
        return itemStyle
    }
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