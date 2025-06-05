# 📰 Real-World Blog App: Microservices & Event-Driven Architecture

A sophisticated, production-grade blog application meticulously crafted with a **microservices architecture**. This project leverages cutting-edge technologies for scalability, performance, and developer experience, enhanced with **AI-powered content assistance**. It's a comprehensive demonstration of **inter-service communication**, **robust caching**, **diverse data storage**, **secure authentication**, and **streamlined cloud deployment**.

---

## 🔥 Key Features

### 🧩 Microservices Architecture
Decomposed into independent, scalable services for improved maintainability and fault isolation:

- **User Service**: Manages user authentication, profiles, and associated data.
- **Blog Service**: Handles core blog post operations, content management, and retrieval.
- **Author Service**: Dedicated to author-specific data and orchestrating blog creation workflows.
- **API Gateway**: A single, unified entry point for all frontend requests, routing them to the appropriate backend service.

### 🔁 Event-Driven Communication with RabbitMQ
Services communicate asynchronously via a powerful message broker, ensuring **loose coupling**, **resilience**, and **responsive interactions**.

### ⚡ Smart Caching with Redis
Implements efficient caching with Redis (via **Upstash**), including intelligent cache invalidation to guarantee **data consistency** across services.

### 🧠 Optimized Data Storage
- **PostgreSQL (Neon DB)**: For structured, relational data like blog posts and authors.
- **MongoDB**: For flexible, document-based data like user profiles and sessions.

### 🔐 Google Authentication (OAuth 2.0)
Provides secure and seamless user login using **Google OAuth**, improving UX and security.

### ✨ AI-Powered Grammar Correction
Uses **Google Gemini API** to automatically correct and refine grammar in blog posts.

### 🐳 Dockerized Services
All microservices are **containerized** using Docker, enabling consistent development and deployment environments.

### ☁️ Cloud Deployment
- **Render**: Node.js microservices hosting.
- **AWS EC2**: Hosts RabbitMQ for robust messaging.
- **Neon DB**: Scalable, serverless PostgreSQL.
- **Upstash**: Managed Redis for high-speed caching.
- **Vercel**: Frontend deployment with global CDN.

---

## 🚀 Technologies Used

### 🛠️ Backend (Node.js / Express)
- **Node.js**: JavaScript runtime
- **Express.js**: Fast, minimalist web framework
- **RabbitMQ**: Message broker for async comms
- **Redis (Upstash)**: In-memory caching
- **PostgreSQL (Neon DB)**: Relational DB
- **MongoDB**: Document database
- **Google OAuth 2.0**: User authentication
- **Google Gemini API**: AI grammar correction
- **Cloudinary**: Image/video management
- **Docker**: Containerization
- **jsonwebtoken**: JWT-based authentication

### 🎨 Frontend (Next.js)
- **Next.js**: Full-stack React framework
- **React**: UI library

### ☁️ Deployment & Infrastructure
- **Render**: Web service deployment
- **AWS EC2**: RabbitMQ hosting
- **Neon DB**: Serverless PostgreSQL
- **Upstash**: Serverless Redis
- **Vercel**: Frontend hosting

---

## 🧱 Architecture Overview

The application follows a **microservices architecture**, where each core functionality (User, Blog, Author) is an **independent service**.

- **API Gateway**: Central entry point for all requests
- **RabbitMQ**: Handles asynchronous communication and cache invalidation
- **Redis**: Used for smart caching across services
- **Docker**: Ensures consistent containerization and deployment

---

## 🛠️ Environment Setup

### 🔐 `user/.env`

```env
PORT=<your_service_port>                     # e.g., 5005
MONGO_URI=<your_mongodb_connection_uri>
JWT_SEC=<your_user_jwt_secret>

Cloud_Name=<your_cloudinary_cloud_name>
Cloud_Api_Key=<your_cloudinary_api_key>
Cloud_Api_Secret=<your_cloudinary_api_secret>

Google_Client_id=<your_google_oauth_client_id>
Google_client_secret=<your_google_oauth_client_secret>
GOOGLE_REDIRECT_URI=<your_google_oauth_redirect_uri>  # Update for production
```
### `blog/.env`

```env
PORT=<your_service_port>                     # e.g., 5002
DB_URL=<your_neon_db_connection_uri>
JWT_SEC=<your_blog_jwt_secret>

Cloud_Name=<your_cloudinary_cloud_name>
Cloud_Api_Key=<your_cloudinary_api_key>
Cloud_Api_Secret=<your_cloudinary_api_secret>

REDIS_URL=<your_upstash_redis_connection_uri>

Rabbimq_Host=<your_rabbitmq_ec2_public_ip>
Rabbimq_Username=<your_rabbitmq_username>
Rabbimq_Password=<your_rabbitmq_password>

USER_SERVICE=<your_render_user_service_url>
AUTHOR_SERVICE=<your_render_author_service_url>
```
### `author/.env` 

```env
PORT=<your_service_port>                     # e.g., 5001
DB_URL=<your_neon_db_connection_uri>
JWT_SEC=<your_author_jwt_secret>

Cloud_Name=<your_cloudinary_cloud_name>
Cloud_Api_Key=<your_cloudinary_api_key>
Cloud_Api_Secret=<your_cloudinary_api_secret>

REDIS_URL=<your_upstash_redis_connection_uri>

Rabbimq_Host=<your_rabbitmq_ec2_public_ip>
Rabbimq_Username=<your_rabbitmq_username>
Rabbimq_Password=<your_rabbitmq_password>

Gemini_Api_Key=<your_google_gemini_api_key>

BLOG_SERVICE=<your_render_blog_service_url>
```

