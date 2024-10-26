# Course Platform

Welcome to the Course Platform project! This application allows users to explore, enroll, and learn from a variety of online courses. With a user-friendly interface and dynamic content, it enhances the learning experience for users of all backgrounds.

## Features

- **User Authentication**: Users can sign in using email/password, Google, or Facebook accounts through Firebase.
- **Course Details**: Displays comprehensive information about each course, including title, author, duration, price, ratings, level, number of students, lessons, and assessments.
- **Image Gallery**: Showcases course images fetched dynamically from an API.
- **How It Works**: A step-by-step guide to help users navigate the platform.
- **Contact Us**: A form for users to submit inquiries or feedback.

## Components

### CourseDetails

Displays the details of a selected course, including:

- Course title
- Course image
- Author, duration, price, ratings, level, number of students, lessons, and assessments.
- Buttons to preview the course and add it to the cart.

### Sample

Fetches and displays a gallery of course images. If images are loading, a loading message is shown.

### HowWorks

Explains how to use the platform in six simple steps, from signing up to earning a certificate.

### ContactUs

Contains a contact form for users to reach out with questions or comments. Upon submission, a toast notification confirms receipt of the message.

### SignIn

Provides options for users to sign in using email/password, Google, or Facebook authentication through Firebase.

## Firebase Authentication

The platform utilizes Firebase for user authentication. Users can sign in using:

- **Email/Password**: Standard authentication method.
- **Google**: Sign in using Google accounts.
- **Facebook**: Sign in using Facebook accounts.

### Setup Firebase

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Email/Password, Google, and Facebook authentication methods in the Firebase Authentication settings.
3. Copy the Firebase configuration settings into your project.

## API Integration

The platform fetches data from the following endpoints:

- **Courses**: `/courses/{id}` to get details for a specific course.
- **Images**: `/images` to fetch course images.

Ensure that the `API_URL` constant is configured correctly in your project.

## Installation

1. git clone https://github.com/mehadi13/skillup-ui.git
2. npm install
3. npm run dev
