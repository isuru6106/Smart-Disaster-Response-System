# Smart Disaster Response & Resource Management System

## Overview

The Smart Disaster Response & Resource Management System is a microservices-based enterprise application designed to improve disaster management, emergency response coordination, shelter management, and resource allocation.

The system enables authorities, responders, and citizens to collaborate through a centralized platform that provides real-time incident tracking, emergency request management, shelter allocation, and resource monitoring.

---

## Features

### User Management
- User Registration
- User Login & Authentication
- Role-Based Access Control
  - Citizen
  - Responder
  - Administrator

### Incident Management
- Report Disaster Incidents
- View Active Incidents
- Update Incident Status
- Track Disaster Severity

### Resource Management
- Manage Emergency Resources
- Monitor Resource Availability
- Track Resource Quantities
- Allocate Resources to Disaster Areas

### Shelter Management
- Register Shelters
- Monitor Shelter Capacity
- Track Occupancy Levels
- Manage Shelter Availability

### Emergency Request Management
- Submit Emergency Requests
- Track Request Status
- Assign Requests to Responders
- Real-Time Monitoring

### Dashboard & Analytics
- Live Statistics
- Incident Analytics
- Shelter Utilization
- Resource Monitoring
- Emergency Request Tracking

---

## System Architecture

The application follows a Microservices Architecture Pattern.

### Backend Services

| Service | Port |
|----------|--------|
| User Service | 8081 |
| Incident Service | 8082 |
| Resource Service | 8083 |
| Shelter Service | 8084 |
| Request Service | 8086 |

Each service has:
- Independent Database
- Independent REST API
- Spring Boot Backend
- PostgreSQL Integration

---

## Technology Stack

### Frontend
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React
- React CountUp

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven
- REST APIs

### Database
- PostgreSQL

### Development Tools
- IntelliJ IDEA
- VS Code
- Postman
- pgAdmin 4
- Git
- GitHub

---

## Project Structure

```text
Smart-Disaster-Response-System
│
├── frontend
│
├── user-service
│
├── incident-service
│
├── resource-service
│
├── shelter-service
│
└── request-service
```

---

## Database Setup

Create the following PostgreSQL databases:

```sql
CREATE DATABASE disaster_user_db;

CREATE DATABASE disaster_incident_db;

CREATE DATABASE disaster_resource_db;

CREATE DATABASE disaster_shelter_db;

CREATE DATABASE disaster_request_db;
```

---

## Running Backend Services

Open each microservice separately.

### User Service

```bash
cd user-service
mvn spring-boot:run
```

### Incident Service

```bash
cd incident-service
mvn spring-boot:run
```

### Resource Service

```bash
cd resource-service
mvn spring-boot:run
```

### Shelter Service

```bash
cd shelter-service
mvn spring-boot:run
```

### Request Service

```bash
cd request-service
mvn spring-boot:run
```

---

## Running Frontend

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## API Endpoints

### User Service

```http
POST /api/auth/register
POST /api/auth/login
GET /api/users
```

### Incident Service

```http
GET /api/incidents
POST /api/incidents
PUT /api/incidents/{id}
DELETE /api/incidents/{id}
```

### Resource Service

```http
GET /api/resources
POST /api/resources
PUT /api/resources/{id}
DELETE /api/resources/{id}
```

### Shelter Service

```http
GET /api/shelters
POST /api/shelters
PUT /api/shelters/{id}
DELETE /api/shelters/{id}
```

### Request Service

```http
GET /api/requests
POST /api/requests
PUT /api/requests/{id}
DELETE /api/requests/{id}
```

---

## User Roles

### Citizen
- Register/Login
- Report Incidents
- Submit Emergency Requests
- View Shelters
- View Resources

### Responder
- Manage Incidents
- Manage Requests
- Coordinate Emergency Response

### Administrator
- Manage Users
- Manage Resources
- Manage Shelters
- Monitor Entire System

---

## Future Enhancements

- JWT Authentication
- API Gateway
- Service Discovery (Eureka)
- Docker Containerization
- Kubernetes Deployment
- SMS Notifications
- Email Notifications
- GIS Map Integration
- AI-Based Disaster Prediction
- Real-Time Alert System

---

## Contributors

### Himara Liyanage
- Backend Development
- Spring Boot Microservices
- Database Design

### Isuru Udeshitha
- Frontend Development
- Next.js UI/UX Design
- System Integration

---

## License

This project is developed for academic and educational purposes.

© 2026 Smart Disaster Response & Resource Management System.
