# Use the official nginx image as the base
FROM nginx:stable-alpine

# Copy your static files to the nginx html directory
COPY ./ /usr/share/nginx/html

# Expose the default port for nginx
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
