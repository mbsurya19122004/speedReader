# SpeedReader

A simple web-based speed reading application that displays words one at a time to improve reading speed and focus.

## Overview

SpeedReader is a lightweight JavaScript application designed to help users read text faster by presenting words sequentially at a controlled speed. This reduces eye movement and improves concentration, allowing users to process information more efficiently.

This project is built using pure HTML and JavaScript with no external dependencies.

## Features

* Displays text word-by-word
* Adjustable reading speed (WPM)
* Minimal and distraction-free interface
* Fast and lightweight
* Runs entirely in the browser

## How It Works

The application:

1. Takes input text
2. Splits it into individual words
3. Displays one word at a time
4. Controls display timing using JavaScript timers
5. Highlights a focus letter to improve recognition speed

This approach is inspired by RSVP (Rapid Serial Visual Presentation), a technique used in speed reading tools.

## Project Structure

```
speedReader/
│
├── index.html    # Main HTML structure
├── script.js     # Speed reading logic
└── README.md     # Project documentation
```

## Installation

No installation required.

Just clone the repository:

```bash
git clone https://github.com/mbsurya19122004/speedReader.git
cd speedReader
```

Then open:

```bash
index.html
```

in your browser.

## Usage

1. Open the application in your browser
2. Enter or load text
3. Start the reader
4. Words will appear one at a time at the configured speed

## Technologies Used

* HTML
* JavaScript
* DOM manipulation
* Browser timers (setTimeout / setInterval)

## Future Improvements

Possible enhancements:

* Adjustable WPM slider
* Pause / Resume support
* Upload text files
* Progress bar
* Focus letter alignment optimization
* Dark mode

## Why This Exists

Speed reading reduces the bottleneck caused by eye movement. By showing one word at a time, the brain can process text faster.

Traditional reading speed:
200–300 WPM

Speed reading tools:
400–800+ WPM
