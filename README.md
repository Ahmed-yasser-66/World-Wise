# 🌍 World-Wise

World-Wise is a React application that allows you to record your travel destinations and collect memories. With an interactive map interface, you can select places you've traveled to, add notes, and save them for future reference.

## ✨ Features

- 🗺️ **Interactive Map**: Utilize the Leaflet map to select and mark your travel destinations.
- 📝 **Add Notes**: Attach personal notes to each location to remember your experiences.
- 🔐 **Fake Authentication**: Experience a simulated authentication flow with a fake auth context.
- 🌐 **Routing**: Navigate seamlessly through different pages using React Router.
- 📡 **Data Management**: Simulate data interactions with JSON Server and manage state using Context API.


## 🛠️ Technologies Used

- ⚛️ **React**: JavaScript library for building user interfaces.
- 🗺️ **Leaflet**: Open-source JavaScript library for interactive maps.
- 🌐 **React Router**: Declarative routing for React applications.
- 📄 **JSON Server**: Full fake REST API for simulating backend interactions.
- 🔧 **Context API**: For managing global state in React.
- 🔐 **Fake Auth Context**: Simulated authentication context for demonstration purposes.
- 🎨 **CSS**: Styling the application.


## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- 🖥️ **Node.js**: [Download and install Node.js](https://nodejs.org/)
- 📦 **npm**: Comes with Node.js, but ensure it's up to date.

### Installation

1.**Clone the repository**:

   ```bash
   git clone https://github.com/Ahmed-yasser-66/World-Wise.git
   cd World-Wise
   ```
   
2 .**Install dependencies**:

   ```bash
   npm install 
   ```

3. **Set up JSON Server**:

  Install JSON Server globally if you haven't already:

  ```bash
npm install -g json-server
  ```
  4.**Start the JSON Server**:

  ```bash
json-server --watch data/db.json --port 8000
 ```

 5.**Start the React application**:

```bash
npm run dev
```
