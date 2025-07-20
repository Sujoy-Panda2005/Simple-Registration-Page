# Registration Website with WhatsApp Sharing

A sleek registration form website with WhatsApp sharing integration, built using HTML, CSS, and JavaScript.

## 🚀 Features

- **Clean Registration Form**
  - Name input
  - Phone number input
  - Email verification
  - College/Department field
  - File upload for screenshots/resumes

- **WhatsApp Integration**
  - Share button with counter (0/5)
  - Custom message sharing
  - Progress tracking
  - Local storage persistence

- **Form Validation**
  - Required field checking
  - Email format validation
  - Share count verification
  - Single submission enforcement

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API
- WhatsApp Web API

## 💻 Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/registration-website.git
```

2. Navigate to project directory:
```bash
cd registration-website
```

3. Open `index.html` in your browser or use a local server

## 📝 Project Structure

```
registration-website/
│
├── index.html          # Main HTML file
├── style.css          # Styling
├── script.js          # JavaScript functionality
└── README.md          # Documentation
```

## 🎨 Features & Usage

1. **Registration Form**
   - Fill in all required fields
   - Upload screenshot/resume
   - Submit only after sharing requirement is met

2. **WhatsApp Sharing**
   - Click "Share" button
   - Share with 5 different contacts
   - Counter tracks progress
   - Sharing must be completed before form submission

3. **Form Submission**
   - All fields must be filled
   - Sharing requirement must be met
   - Only one submission allowed per session

## 🔒 Data Persistence

- Share count is saved in localStorage
- Form submission status is tracked
- Prevents multiple submissions

## 🎯 Future Improvements

- [ ] Add email verification
- [ ] Implement backend integration
- [ ] Add form data validation
- [ ] Include progress indicators
- [ ] Add success/error animations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request