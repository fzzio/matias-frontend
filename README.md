
# Misión Catequética

This is a mobile application designed to facilitate the management and organization of catechetical activities within a parish. This app helps catechists collect demographic data from catechumen' families, manage surveys, and generate reports. The app aims to streamline the catechetical process and ensure that all necessary sacramental data is collected and easily accessible.

## Features

- **Data Synchronization**: Syncs data with the backend API to ensure the app has the latest information on catechists, catechumens, locations, courses, and sacraments.
- **Survey Management**: Conduct multi-step surveys to collect comprehensive data on students and their families.
- **Offline Support**: Store data locally and sync it when an internet connection is available.
- **Reports Generation**: Generate reports on visited catechumens and other relevant data for review and analysis.
- **User Authentication**: Secure login and access control to ensure data privacy.

## Connecting to the Backend API

Misión Catequética connects to a backend API to fetch and store data. The API URL is configured in the `.env` file:

```env
EXPO_PUBLIC_MATIAS_API_URL=https://matias-backend-fzzio-fabricio-orralas-projects.vercel.app/
```

The app uses Apollo Client for GraphQL queries and mutations to interact with the backend. The Apollo Client is set up in the `services/apollo-client.ts` file.

## Key Dependencies

- **React Native**: For building the mobile application.
- **Expo**: For development and building the app.
- **React Native Paper**: For UI components.
- **Apollo Client**: For interacting with the GraphQL API.
- **AsyncStorage**: For local data storage.
- **Date-Fns**: For date manipulation and formatting.
- **Pullstate**: For state management.

## Installation and Setup

To get started with the project, follow these steps:

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Start the app**:

    ```bash
    npx expo start
    ```

3. **Run on a specific platform**:

    - For Android: `expo start --android`
    - For iOS: `expo start --ios`
    - For Web: `expo start --web`

## Screenshots

[Add your screenshots here]

## Conclusion

Misión Catequética is a robust and feature-rich application designed to improve the efficiency and organization of catechetical activities within a parish. With its offline support, data synchronization, and comprehensive survey management, it ensures that catechists can collect and manage data effectively.

## Contact

For any inquiries or further information, please contact:

- **Name**: Fabricio Orrala
- **Email**: fabricio.orrala@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/fzzio/
- **GitHub**: https://github.com/fzzio

Thank you for using Misión Catequética!
