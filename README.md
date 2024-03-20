# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

### Home Page (Landing Page)

- Built a landing page for users to explore the application.
- Additional features like "Explore" and "Try It Out" can be added in the future.

### Models Page

- Developed a models page where data is fetched from a JSON placeholder.
- Utilized dummy data from the JSON placeholder API to populate cards.
- Combined data from two different API endpoints to populate the cards accordingly.
- Implemented a filter for cards based on the `albumID` attribute and whether the cards are featured.
- Currently, a random function is used to designate some cards as featured. However, with a user database, this could be further refined based on user interactions, such as likes.

## Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Uses [SWC](https://swc.rs/) for Fast Refresh.

## Usage

- Clone this repository.
- Install dependencies using `npm install`.
- Start the development server using `npm run dev`.
- Build for production using `npm run build`.

# FrameWork Plugins and Packages Used

"devDependencies": {
"@heroicons/react": "^2.1.1",
"@mantine/core": "^7.6.2",
"@mantine/hooks": "^7.6.2",
"@material-tailwind/react": "^2.1.9",
"@tabler/icons-react": "^3.1.0",
"@types/react": "^18.2.64",
"@types/react-dom": "^18.2.21",
"@vitejs/plugin-react-swc": "^3.5.0",
"autoprefixer": "^10.4.18",
"axios": "^1.6.8",
"eslint": "^8.57.0",
"eslint-plugin-react": "^7.34.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.5",
"particles.js": "^2.0.0",
"postcss": "^8.4.35",
"react-router-dom": "^6.22.3",
"react-tsparticles": "^2.12.2",
"sass": "^1.72.0",
"tailwindcss": "^3.4.1",
"vite": "^5.1.6"
}
![Alt text](image link)

Feel free to explore and extend this template according to your project needs!
