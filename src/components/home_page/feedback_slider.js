import PersonFeedback from "./PersonFeedback";
import './feedback_slider.css'
import { useEffect, useState } from "react";

const FeedbackSlider = () => {
    const [currentFeedback, setCurrentFeedback] = useState(0)
    const [feedbacks, setFeedbacks] = useState([])
    const feedbacksNum = feedbacks.length
    // f L - t R

    const getNextIdx = (currIdx) => {
        return currIdx === feedbacksNum - 1 ? 0 : currIdx + 1
    }

    const nextFeedback = () => {
        setCurrentFeedback(getNextIdx(currentFeedback))
    }

    const getPrevIdx = (currIdx) => {
        return currIdx === 0 ? feedbacksNum - 1 : currIdx - 1
    }

    const prevFeedback = () => {
        setCurrentFeedback(getPrevIdx(currentFeedback))
    }

    useEffect(() => {
        fetch('feedbacks').then(response => response.json()).then(feedback => {
            setFeedbacks(feedback)
        })
    }, [])

    return (
        <ul className="feedback_list">
            <button className="slider_left_button" onClick={prevFeedback}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.93315 1.62671L2.45315 7.10671C2.20482 7.35653 2.06543 7.69446 2.06543 8.04671C2.06543 8.39896 2.20482 8.73689 2.45315 8.98671L7.78649 14.32" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                </svg>
            </button>
            {feedbacks.map((feedback, index) =>
                index === getPrevIdx(currentFeedback) && <PersonFeedback active={0} feedback={feedbacks[index]} />
            )}
            {
                feedbacks.map((feedback, index) =>
                    index === currentFeedback && <PersonFeedback active={1} feedback={feedbacks[index]} />
                )}
            {feedbacks.map((feedback, index) =>
                index === getNextIdx(currentFeedback) && <PersonFeedback active={0} feedback={feedbacks[index]} />
            )}
            <button className="slider_right_button" onClick={nextFeedback}>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.06641 14.3734L7.54641 8.89339C7.79474 8.64357 7.93413 8.30563 7.93413 7.95339C7.93413 7.60114 7.79474 7.2632 7.54641 7.01339L2.21307 1.68005" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
                </svg>
            </button>
        </ul>
    )
}

export default FeedbackSlider