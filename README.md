# Legal Olympiad Website

A comprehensive website for Legal Olympiad with student registration system.

## Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Student Registration**: Complete registration form with validation
- **Data Persistence**: Backend API to save registration data to JSON file
- **Form Validation**: Client-side and server-side validation
- **Success Feedback**: User-friendly success messages and error handling

## Project Structure

```
LegalOlympiad-Website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Reusable UI components
│   │   │   └── ...         # Other components
│   │   └── pages/          # Page components
├── backend/                 # Node.js backend server
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── registrations.json  # Data file (created automatically)
└── README.md              # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   For development with auto-restart:

   ```bash
   npm run dev
   ```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

## Registration System

### Features

- **Comprehensive Form**: Collects all necessary student information
- **Validation**: Both client-side and server-side validation
- **Data Storage**: Saves registration data to `backend/registrations.json`
- **Duplicate Prevention**: Prevents duplicate email registrations
- **Error Handling**: Proper error messages and user feedback

### Form Fields

**Personal Information:**

- First Name (required)
- Last Name (required)
- Email Address (required, validated)
- Phone Number (required, 10-digit validation)
- Date of Birth (required)

**Address Information:**

- Complete Address (required)
- City (required)
- State (required)
- Pincode (required, 6-digit validation)

**Educational Information:**

- Highest Education Level (required)
- Institution Name (required)
- Graduation Year (required)
- Course of Interest (required)

**Additional Information:**

- Legal Experience (optional)
- Motivation Statement (required)

### API Endpoints

- `POST /api/register` - Register a new student
- `GET /api/registrations` - Get all registrations
- `GET /api/registrations/:id` - Get specific registration
- `DELETE /api/registrations/:id` - Delete registration
- `GET /api/health` - Health check

## Data Storage

Registration data is stored in `backend/registrations.json` with the following structure:

```json
[
  {
    "id": "1703123456789",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "9876543210",
    "dateOfBirth": "1995-01-15",
    "address": "123 Main Street",
    "city": "Mumbai",
    "state": "Maharashtra",
    "pincode": "400001",
    "education": "Bachelor's Degree",
    "institution": "Mumbai University",
    "graduationYear": "2023",
    "courseInterest": "Constitutional Law",
    "experience": "Internship at law firm",
    "motivation": "I want to make a difference in legal education",
    "registrationDate": "2023-12-21T10:30:00.000Z"
  }
]
```

## Usage

1. Start both backend and frontend servers
2. Navigate to the registration form
3. Fill out all required fields
4. Submit the form
5. Check `backend/registrations.json` for saved data

## Development

### Adding New Features

1. **Frontend Components**: Add new components in `frontend/src/components/`
2. **UI Components**: Add reusable UI components in `frontend/src/components/ui/`
3. **Backend Routes**: Add new API endpoints in `backend/server.js`

### Styling

The project uses Tailwind CSS for styling. Custom styles can be added in:

- `frontend/src/index.css`
- `frontend/tailwind.config.js`

### Validation

- **Client-side**: Form validation in `RegistrationForm.jsx`
- **Server-side**: API validation in `backend/server.js`

## Troubleshooting

### Common Issues

1. **Backend not starting**: Check if port 5000 is available
2. **Frontend can't connect to backend**: Ensure backend is running on localhost:5000
3. **Form submission fails**: Check browser console for CORS errors

### Error Messages

- "Email already registered" - Email is already in the system
- "Missing required fields" - One or more required fields are empty
- "Failed to submit registration" - Network or server error

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
