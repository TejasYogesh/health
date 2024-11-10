import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

// Mock API to simulate AI-powered feedback
const getMockFeedback = (code) => {
    // Placeholder logic for evaluating code quality
    if (code.includes('for') || code.includes('while')) {
        return "Code contains loop structures - looks efficient.";
    }
    return "Try using loop structures for better performance.";
};

const getMockLearningPlan = () => {
    // Randomly generate personalized suggestions
    const topics = ["Data Structures", "Algorithms", "React Fundamentals", "AI Basics"];
    return topics[Math.floor(Math.random() * topics.length)];
};

// Main Online Assessment Component
const OnlineAssessment = () => {
    const [code, setCode] = useState("");
    const [feedback, setFeedback] = useState("");
    const [learningPlan, setLearningPlan] = useState("");
    const [cheatingAlert, setCheatingAlert] = useState(false);

    useEffect(() => {
        // Simulate adaptive learning plan on component mount
        setLearningPlan(getMockLearningPlan());
    }, []);

    const handleCodeSubmit = () => {
        setFeedback(getMockFeedback(code));
    };

    const handleProctoringCheck = () => {
        // Placeholder function for AI-powered proctoring
        // Ideally here would go ML algorithms or external service calls
        const randomCheatingDetected = Math.random() < 0.2; // 20% chance of detecting cheating
        setCheatingAlert(randomCheatingDetected);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Online Assessment: Revolutionizing Education</h2>

            {/* Automated Coding Assessment */}
            <div style={{ marginBottom: '20px' }}>
                <h3>Coding Assessment</h3>
                <textarea
                    rows="6"
                    style={{ width: '100%', padding: '10px' }}
                    placeholder="Write your code here..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                ></textarea>
                <button onClick={handleCodeSubmit} style={{ marginTop: '10px' }}>Submit Code</button>
                {feedback && <p><strong>Feedback:</strong> {feedback}</p>}
            </div>

            {/* AI Proctoring System */}
            <div style={{ marginBottom: '20px' }}>
                <h3>AI Proctoring System</h3>
                <Webcam style={{ width: '100%', marginBottom: '10px' }} />
                <button onClick={handleProctoringCheck}>Check Exam Integrity</button>
                {cheatingAlert && <p style={{ color: 'red' }}><strong>Alert:</strong> Suspicious behavior detected!</p>}
            </div>

            {/* Personalized Learning */}
            <div>
                <h3>Personalized Learning Plan</h3>
                <p>Your suggested next topic: <strong>{learningPlan}</strong></p>
                <p>Complete exercises to earn points and unlock new levels!</p>
            </div>
        </div>
    );
};

export default OnlineAssessment;