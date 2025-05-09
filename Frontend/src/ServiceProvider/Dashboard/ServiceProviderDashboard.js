import { useState, useEffect } from "react";
import Header from "../../Components/Shared/Header";

const ServiceProviderDashboard = () => {
  // Business-related quotes
  const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The secret to getting ahead is getting started.",
    "Opportunities don't happen, you create them.",
    "Don’t watch the clock; do what it does. Keep going.",
    "You don’t have to be great to start, but you have to start to be great.",
    "A service well-delivered is the cornerstone of customer satisfaction.",
    "Great things never come from comfort zones.",
    "Business opportunities are like buses, there’s always another one coming.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success usually comes to those who are too busy to be looking for it.",
  ];

  const [currentQuote, setCurrentQuote] = useState("");

  // Function to change quote every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    // Set the initial quote immediately
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <div className="image-container">
        <img
          src="premium_photo.avif"
          alt="Service Provider Background"
          className="background-image"
        />
        <div className="quote-overlay">
          <p>{currentQuote}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
