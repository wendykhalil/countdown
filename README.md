🎆 New Year Countdown

A simple and elegant New Year Countdown Timer built with HTML, CSS, and JavaScript.
It dynamically counts down to the upcoming New Year (January 1st, 2026) and displays the remaining days, hours, minutes, and seconds in real time.

🌐 Live Demo: quiet-starlight-001ea5.netlify.app

🚀 Features

Real-time countdown timer to New Year’s Day

Smooth updates every second

Automatic zero display after the countdown ends

Simple, minimal, and responsive layout

Built using pure HTML, CSS, and JavaScript (no libraries)

🧱 Tech Stack
Technology	Description
HTML5	Page structure and content
CSS3	Styling and layout
JavaScript (ES6)	Countdown logic and DOM manipulation
Netlify	Deployment and hosting
🧩 Project Structure
new-year-countdown/
│
├── index.html       # Main HTML structure
├── style.css        # Styles for layout and design
└── script.js        # Countdown timer logic

⚙️ How It Works

The target date is set in JavaScript:

const date = new Date("01-01-2026").getTime();


Every second, JavaScript calculates the time difference between the current time and the target date.

The remaining time (days, hours, minutes, seconds) is updated dynamically on the page.

When the countdown reaches zero, all values display "00".

🖥️ Installation & Usage

To run locally:

# Clone the repository
git clone https://github.com/your-username/new-year-countdown.git

# Open the project folder
cd new-year-countdown

# Run in your browser
open index.html


Or just open index.html directly in your browser.

🪄 Customization

To change the countdown date, edit this line in script.js:

const date = new Date("MM-DD-YYYY").getTime();
