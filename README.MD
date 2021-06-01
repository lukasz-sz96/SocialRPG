# SocialRPG


This project was generated with [superplate](https://github.com/pankod/superplate).

## Getting Started
First things first:
```bash
npm install
OR
yarn
```
## Database Setup
At this stage of development, there's no public database for this project. You'll need to set it up on your own for your local development.

You'll need to install [MariaDB](https://mariadb.org/) server.
Then, create `.env` file at the root of the project directory.
Put this line inside it:
```json
DATABASE_URL="mysql://user:password@localhost:3306/db_name" //change accordingly to your database credentials and database name
```

After that, execute this at the root of the project directory:
```bash
npx prisma migrate dev --name init
```
Your database should be ready to use now.

## Available Scripts

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

### Linting & formatting your code.

```bash
    npm run lint
```


## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).


### **TailwindCSS**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Go To Documentation](https://tailwindcss.com/docs)


### **CSS / styled-jsx**

Next.js comes with built-in support for CSS and styled-jsx. Styled-jsx is full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).

[Go To Documentation](https://github.com/vercel/styled-jsx)


### **Axios**

Promise based HTTP client for the browser and node.js.

[Go To Documentation](https://github.com/axios/axios)


### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)


### **Reverse Proxy**

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

[Go To Documentation](https://webpack.js.org/configuration/dev-server/#devserverproxy)


### **Bundle Analyzer**

Use webpack-bundle-analyzer in your Next.js project. Visualize size of webpack output files with an interactive zoomable treemap.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)


### **React Query**

Hooks for fetching, caching and updating asynchronous data in React.

[Go To Documentation](https://react-query.tanstack.com/overview)


### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)


### **next-i18next**

next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

[Go To Documentation](https://github.com/isaachinman/next-i18next)


### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)


### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)



## License

MIT
