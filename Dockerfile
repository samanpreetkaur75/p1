# Step 1: Build the React App using Node.js
FROM node:18-alpine as build

# Set the working directory
WORKDIR /kaur_samanpreet_final_site

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Set up Nginx to serve the production build
FROM nginx:alpine

# Copy the built files from the previous step into the Nginx container
COPY --from=build /kaur_samanpreet_final_site/build /usr/share/nginx/html

# Expose the port the app will run on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
