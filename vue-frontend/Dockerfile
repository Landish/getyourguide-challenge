# Build Stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the package.json file
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Run the `vite preview` command
CMD [ "npm", "run", "preview" ]

# Expose the necessary port
EXPOSE 4173