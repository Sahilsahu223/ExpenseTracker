# Go-React Expense Tracker

A simple and efficient expense tracker application built using Go for the backend and React for the frontend.

## Features
- Add, edit, and delete expense entries
- Categorize expenses by purpose and reason
- Interactive UI using React and Bootstrap
- Backend powered by Go

## Installation

### Backend (Go)
1. Install Go from [official site](https://golang.org/dl/).
2. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/go-react-expense-tracker.git
   cd go-react-expense-tracker/backend
   ```
3. Install dependencies:
   ```sh
   go mod tidy
   ```
4. Run the server:
   ```sh
   go run main.go
   ```

### Frontend (React)
1. Install Node.js and npm from [official site](https://nodejs.org/).
2. Navigate to the frontend directory:
   ```sh
   cd go-react-expense-tracker/frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Navigate to `http://localhost:3000/` in your browser.
- Add expense entries and manage them dynamically.

## File Structure
```
/go-react-expense-tracker
│── backend
│   ├── main.go
│   ├── handlers.go
│   ├── models.go
│   ├── routes.go
│── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── SingleEntry.js
│   │   │   ├── ExpenseList.js
│   │   ├── App.js
│   ├── package.json
│   ├── index.js
```

## Contributing
Feel free to fork this repository and submit pull requests.
