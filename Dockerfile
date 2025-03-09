# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all files
COPY . .

# Build the app
RUN yarn build

# Runner stage
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose Vite's preview port
EXPOSE 4173

# Start Vite in preview mode (production build)
CMD ["yarn", "preview", "--host"] 