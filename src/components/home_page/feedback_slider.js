import PersonFeedback from "./PersonFeedback";
import './feedback_slider.css'

const FeedbackSlider = () => {
    return (
        <ul className="feedback_list">
            <button className="slider_left_button">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.93315 1.62671L2.45315 7.10671C2.20482 7.35653 2.06543 7.69446 2.06543 8.04671C2.06543 8.39896 2.20482 8.73689 2.45315 8.98671L7.78649 14.32" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                </svg>
            </button>
            <PersonFeedback/>
            <PersonFeedback/>
            <PersonFeedback/>
            <button className="slider_right_button">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.06641 14.3734L7.54641 8.89339C7.79474 8.64357 7.93413 8.30563 7.93413 7.95339C7.93413 7.60114 7.79474 7.2632 7.54641 7.01339L2.21307 1.68005" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel"/>
                </svg>
            </button>
        </ul>
    )
}

export default FeedbackSlider