<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

Here's the roadmap for building "GitHub-Worthy" in Markdown format:

````markdown
# Roadmap to Build "GitHub-Worthy"

Here’s a step-by-step roadmap for building your app, including features, package recommendations, and priority order:

## 1. Project Setup

1. **Initialize React Project**
   ```bash
   npx create-react-app github-worthy
   cd github-worthy
   ```
````

2. **Install Core Dependencies**

   ```bash
   npm install axios react-router-dom styled-components @reduxjs/toolkit react-redux
   ```

3. **Install Additional Packages**
   ```bash
   npm install chart.js react-chartjs-2 html2canvas
   ```

## 2. Project Structure

1. **Set Up File Structure**
   - `src/`
     - `components/`
     - `pages/`
     - `redux/`
     - `styles/`
     - `utils/`
     - `App.js`
     - `index.js`

## 3. Routing Setup

1. **Configure React Router**

   - Install `react-router-dom` for routing.
   - Set up routes in `App.js`.

   ```javascript
   import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
   import HomePage from "./pages/HomePage";
   import UserPage from "./pages/UserPage";

   const App = () => (
     <Router>
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/user/:username" component={UserPage} />
       </Switch>
     </Router>
   );
   ```

## 4. State Management

1. **Set Up Redux Toolkit**

   - Configure the store and create slices in `redux/`.

   ```javascript
   // src/redux/store.js
   import { configureStore } from "@reduxjs/toolkit";
   import userReducer from "./userSlice";

   export const store = configureStore({
     reducer: {
       user: userReducer,
     },
   });

   // src/redux/userSlice.js
   import { createSlice } from "@reduxjs/toolkit";

   export const userSlice = createSlice({
     name: "user",
     initialState: {
       data: {},
       repos: [],
       activities: [],
     },
     reducers: {
       setUserData: (state, action) => {
         state.data = action.payload;
       },
       setRepos: (state, action) => {
         state.repos = action.payload;
       },
       setActivities: (state, action) => {
         state.activities = action.payload;
       },
     },
   });

   export const { setUserData, setRepos, setActivities } = userSlice.actions;
   export default userSlice.reducer;
   ```

2. **Integrate Redux in `index.js`**

   ```javascript
   import React from "react";
   import ReactDOM from "react-dom";
   import { Provider } from "react-redux";
   import { store } from "./redux/store";
   import App from "./App";

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById("root")
   );
   ```

## 5. Fetch and Display Data

1. **Create API Utilities**

   - Use Axios to fetch data from GitHub API.

   ```javascript
   // src/utils/api.js
   import axios from "axios";

   export const fetchUserData = async (username) => {
     return axios.get(`https://api.github.com/users/${username}`);
   };

   export const fetchUserRepos = async (username) => {
     return axios.get(`https://api.github.com/users/${username}/repos`);
   };

   export const fetchRecentActivities = async (username) => {
     return axios.get(`https://api.github.com/users/${username}/events`);
   };
   ```

2. **Create Components**

   - **Profile Component**

   ```javascript
   // src/components/Profile.js
   import React from "react";
   import { useSelector } from "react-redux";

   const Profile = () => {
     const user = useSelector((state) => state.user.data);

     return (
       <div>
         <img src={user.avatar_url} alt={user.login} />
         <h1>{user.name}</h1>
         <p>{user.bio}</p>
         {/* Additional user details */}
       </div>
     );
   };

   export default Profile;
   ```

   - **Repos Component**

   ```javascript
   // src/components/Repos.js
   import React from "react";
   import { useSelector } from "react-redux";

   const Repos = () => {
     const repos = useSelector((state) => state.user.repos);

     return (
       <div>
         {repos.map((repo) => (
           <div key={repo.id}>
             <h2>{repo.name}</h2>
             <p>{repo.description}</p>
             <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
               Repo Link
             </a>
           </div>
         ))}
       </div>
     );
   };

   export default Repos;
   ```

   - **Activities Component**

   ```javascript
   // src/components/ActivitiesChart.js
   import React from "react";
   import { Line } from "react-chartjs-2";
   import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     Title,
     Tooltip,
     Legend,
   } from "chart.js";

   ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);

   const ActivitiesChart = ({ activities }) => {
     const data = {
       labels: activities.map((activity) => activity.date),
       datasets: [
         {
           label: "Commits/PRs",
           data: activities.map((activity) => activity.count),
           borderColor: "rgba(75,192,192,1)",
           backgroundColor: "rgba(75,192,192,0.2)",
         },
       ],
     };

     return <Line data={data} />;
   };

   export default ActivitiesChart;
   ```

## 6. Add Features

1. **Calculate and Display Estimated Worth**

   ```javascript
   // src/utils/calculateWorth.js
   export const calculateWorth = (data) => {
     const { commits, prs, repos, stars, followers } = data;
     return (
       commits * 0.1 + prs * 0.5 + repos * 2 + stars * 0.3 + followers * 0.2
     );
   };
   ```

2. **Generate and Share Image**

   ```javascript
   // src/components/ShareButtons.js
   import React from "react";
   import html2canvas from "html2canvas";

   const generateShareLinks = async () => {
     const element = document.getElementById("data-to-download");
     const canvas = await html2canvas(element);
     const dataUrl = canvas.toDataURL("image/png");

     return {
       fbShareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
         dataUrl
       )}`,
       twitterShareUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
         "Check out my GitHub worth!"
       )}&url=${encodeURIComponent(dataUrl)}`,
       telegramShareUrl: `https://t.me/share/url?url=${encodeURIComponent(
         dataUrl
       )}&text=${encodeURIComponent("Check out my GitHub worth!")}`,
     };
   };

   const ShareButtons = () => {
     const handleShare = async () => {
       const { fbShareUrl, twitterShareUrl, telegramShareUrl } =
         await generateShareLinks();
       window.open(fbShareUrl, "_blank");
       window.open(twitterShareUrl, "_blank");
       window.open(telegramShareUrl, "_blank");
     };

     return <button onClick={handleShare}>Share Data as Image</button>;
   };

   export default ShareButtons;
   ```

## 7. Styling

1. **Set Up Styled Components**

   ```bash
   npm install styled-components
   ```

   ```javascript
   // src/styles/GlobalStyles.js
   import { createGlobalStyle } from "styled-components";

   const GlobalStyle = createGlobalStyle`
     body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
     }
   `;

   export default GlobalStyle;
   ```

   ```javascript
   // src/components/StyledButton.js
   import styled from "styled-components";

   const StyledButton = styled.button`
     background-color: #007bff;
     color: white;
     border: none;
     padding: 10px 20px;
     border-radius: 5px;
     cursor: pointer;
     &:hover {
       background-color: #0056b3;
     }
   `;

   export default StyledButton;
   ```

## 8. Testing

1. **Set Up Testing Library**

   ```bash
   npm install @testing-library/react @testing-library/jest-dom
   ```

2. **Write Unit Tests**
   - Create tests for components and functionalities to ensure reliability.

## 9. Deployment

1. **Build and Deploy**
   - Build your app for production.
     ```bash
     npm run build
     ```
   - Deploy using platforms like Vercel, Netlify, or GitHub Pages.

## Summary of Packages

- **Core Packages:** `axios`, `react-router-dom`, `styled-components`, `@reduxjs/toolkit`, `react-redux`
- **Charting:** `chart.js`, `react-chartjs-2`
- **Image Generation:** `html2canvas`
- **Testing:** `@testing-library/react`, `@testing-library/jest-dom`

This roadmap should help you
