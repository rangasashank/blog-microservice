Real-World Blog App: Microservices & Event-Driven Architecture
A sophisticated, production-grade blog application meticulously crafted with a microservices architecture. This project leverages cutting-edge technologies for scalability, performance, and developer experience, enhanced with AI-powered content assistance. It's a comprehensive demonstration of inter-service communication, robust caching, diverse data storage, secure authentication, and streamlined cloud deployment.

🔥 Key Features
Microservices Architecture: Decomposed into independent, scalable services for improved maintainability and fault isolation:
User Service: Manages user authentication, profiles, and associated data.
Blog Service: Handles core blog post operations, content management, and retrieval.
Author Service: Dedicated to author-specific data and orchestrating blog creation workflows.
API Gateway: A single, unified entry point for all frontend requests, routing them to the appropriate backend service.
Event-Driven Communication with RabbitMQ: Services communicate asynchronously via a powerful message broker, ensuring loose coupling, resilience, and responsive interactions.
Smart Caching with Redis: Implements efficient data caching with Redis (powered by Upstash), including intelligent cache invalidation to guarantee data consistency across services.
Optimized Data Storage:
PostgreSQL (via Neon DB): Utilized for structured, relational data such as blog posts, authors, and other core entities, offering strong consistency.
MongoDB: Employed for flexible, document-based data, ideal for user profiles, session management, or other less structured information.
Google Authentication (OAuth 2.0): Provides secure and seamless user authentication via Google OAuth, simplifying the login process and enhancing user experience.
AI-Powered Grammar Correction (Google Gemini): Integrates the Google Gemini API to automatically correct and refine grammar for new blog posts, ensuring high-quality content.
Dockerized Services: Every microservice is containerized using Docker, ensuring consistent development, testing, and production environments.
Cloud Deployment:
Backend on Render: All Node.js microservices are hosted on Render for scalable and reliable deployment.
RabbitMQ on AWS EC2: A dedicated EC2 instance hosts the RabbitMQ message broker for robust inter-service communication.
PostgreSQL on Neon DB: Leverages Neon's serverless PostgreSQL for a highly scalable and managed relational database experience.
Redis on Upstash: Utilizes Upstash's managed Redis for zero-management caching infrastructure.
Frontend on Vercel: The Next.js frontend is deployed on Vercel, benefiting from its global CDN and optimized performance.
Production-Ready Performance & Clean Architecture: Built with an emphasis on high performance, maintainability, and adherence to clean architecture principles, promoting modularity and testability.

🚀 Technologies Used
Backend (Node.js/Express):

Node.js: JavaScript runtime.
Express.js: Fast, unopinionated, minimalist web framework.
RabbitMQ: Robust message broker for asynchronous communication.
Redis (Upstash): High-performance in-memory data store for caching.
PostgreSQL (Neon DB): Powerful open-source relational database.
MongoDB: Flexible NoSQL document database.
Google OAuth 2.0: For secure user authentication.
Google Gemini API: For AI-driven grammar correction.
Cloudinary: Cloud-based image and video management.
Docker: Containerization platform.
jsonwebtoken: For implementing JWT-based authentication.
Frontend (Next.js):

Next.js: React framework for hybrid rendering and optimized performance.
React: Declarative JavaScript library for building user interfaces.
Deployment & Infrastructure:

Render: Cloud platform for deploying web services.
AWS EC2: Scalable virtual servers in Amazon's cloud.
Neon DB: Serverless PostgreSQL.
Upstash: Serverless Redis and Kafka.
Vercel: Platform for frontend deployment and serverless functions.

🧱 Architecture Overview
The application follows a microservices architecture, where each core functionality (User, Blog, Author) is an independent service. An API Gateway acts as the unified entry point for all frontend requests, directing them to the appropriate backend service. Asynchronous communication via RabbitMQ is central to inter-service events and cache invalidation.

user-service/.env
PORT=<your_service_port> (e.g., 5005)
MONGO_URI=<your_mongodb_connection_uri> (From MongoDB Atlas or your MongoDB provider)
JWT_SEC=<your_user_jwt_secret> (A strong, unique secret key)
Cloud_Name=<your_cloudinary_cloud_name> (From Cloudinary Dashboard)
Cloud_Api_Key=<your_cloudinary_api_key> (From Cloudinary Dashboard)
Cloud_Api_Secret=<your_cloudinary_api_secret> (From Cloudinary Dashboard)
Google_Client_id=<your_google_oauth_client_id>
Google_client_secret=<your_google_oauth_client_secret>
GOOGLE_REDIRECT_URI=<your_google_oauth_redirect_uri> (For local testing, update for production)

blog-service/.env
PORT=<your_service_port> (e.g., 5002)
DB_URL=<your_neon_db_connection_uri> (Your Neon DB connection string)
JWT_SEC=<your_blog_jwt_secret> (A strong, unique secret key)
Cloud_Name=<your_cloudinary_cloud_name>
Cloud_Api_Key=<your_cloudinary_api_key>
Cloud_Api_Secret=<your_cloudinary_api_secret>
REDIS_URL=<your_upstash_redis_connection_uri> (Your Upstash Redis connection string)
Rabbimq_Host=<your_rabbitmq_ec2_public_ip> (The public IP of your RabbitMQ EC2 instance)
Rabbimq_Username=<your_rabbitmq_username>
Rabbimq_Password=<your_rabbitmq_password>
USER_SERVICE=<your_render_user_service_url> (The public URL of your deployed User Service on Render)
AUTHOR_SERVICE=<your_render_author_service_url> (The public URL of your deployed Author Service on Render)

author-service/.env
PORT=<your_service_port> (e.g., 5001)
DB_URL=<your_neon_db_connection_uri> (Your Neon DB connection string - same as Blog service if sharing DB)
JWT_SEC=<your_author_jwt_secret> (A strong, unique secret key)
Cloud_Name=<your_cloudinary_cloud_name>
Cloud_Api_Key=<your_cloudinary_api_key>
Cloud_Api_Secret=<your_cloudinary_api_secret>
REDIS_URL=<your_upstash_redis_connection_uri> (Your Upstash Redis connection string)
Rabbimq_Host=<your_rabbitmq_ec2_public_ip> (The public IP of your RabbitMQ EC2 instance)
Rabbimq_Username=<your_rabbitmq_username>
Rabbimq_Password=<your_rabbitmq_password>
Gemini_Api_Key=<your_google_gemini_api_key>
BLOG_SERVICE=<your_render_blog_service_url> (The public URL of your deployed Blog Service on Render)
