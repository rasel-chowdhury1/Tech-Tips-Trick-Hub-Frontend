# Tech Tips & Tricks Hub

The **Tech Tips & Tricks** project is a dynamic full-stack web application designed to help tech enthusiasts navigate and master the ever-evolving world of technology. Users will have access to expert advice, personal experiences, and user-generated content covering everything from troubleshooting common tech issues to learning about new software, apps, gadgets, and digital tools. The platform will cater to individuals seeking practical tech solutions, tutorials, reviews, and recommendations on products and services that enhance their digital lives. The application will feature user registration, user-generated content, premium subscriptions, and more.

---

## Live URL

> [Tech Tips & Tricks Hub](https://your-live-site-link.com)

### Credentials

#### User:

- **Email**: `user@gmail.com`
- **Password**: `123456`

#### Admin:

- **Email**: `admin@gmail.com`
- **Password**: `123456`

---

## Technology Stack

- **Frontend**: React, Next.js, TypeScript
- **State Management**: Redux Toolkit (RTK Query)
- **UI Library**: NextUI, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, TypeScript, JWT-based authentication
- **Payment Integration**: Aamarpay

---

## Features

### User Roles

- **Standard Users**: Can follow/unfollow others, upvote/downvote posts, comment, and manage their own content.
- **Admins**: Can manage users, posts, payments, and moderate content.
  
### Premium Users

- Verified through payments, becoming premium users.
- Can publish premium posts visible only to other premium users.

### Rich Content Creation

- Support for **Rich Text Editor** (Quill.js, Draft.js, TinyMCE) to create tech tips, tutorials, and articles.
- Users can attach images, screenshots, or visual aids.

### Dynamic Search & Sorting

- Users can search, filter, and sort articles based on various criteria.

### Payment Integration

- Integrated with **Aamarpay** for premium content subscriptions.
- Premium users gain access to exclusive posts for $20/month.

### Commenting System

- Users can comment, edit, and delete comments on posts.

### Upvote & Downvote System

- Users can upvote or downvote posts based on quality or relevance.

### Social Features

- Follow/Unfollow system to track other users' content and activities.

### PDF Generation

- Users can generate PDFs of posts for offline access.

### News Feed

- Infinite scroll displaying the latest tech tips, tutorials, and guides.
- Sorting options for most upvoted and relevant content.

---

## Admin Features

- Manage users: block/unblock, delete accounts, and assign admin roles.
- Post management: admins can delete inappropriate posts and approve premium content.
- **Activity Logs**: View login activity, including role, time, and user info.

---

## Pages

1. **Login/Registration Page**: Secure forms for user sign-up and login.
<!-- 2. **User Dashboard**: Personalized dashboard to manage profiles, posts, and payment history. -->
3. **Admin Dashboard**: Admin control panel to manage users, content, and payments.
4. **Profile Page**: Manage posts, view followers/following, and edit personal details.
5. **News Feed**: Displays posts from the community with search and filtering options.
6. **Post Details Page**: Shows post description, category, comments, and upvotes.
7. **About Us Page**: Information about the platform, mission, and team.
8. **Contact Us Page**: A form for user inquiries and support.

---

## Installation Guide

### Step 1: Clone the repository

```bash
git clone https://github.com/your-repo/tech-tips-hub.git
