# Sufiyana Threads: E-commerce Website (Work in Progress)

**Live @ sufiyanathreads.com**

A modern ecommerce website being built for my mother’s clothing business, focused on creating a clean, elegant, and scalable online shopping experience for traditional South Asian fashion collections.

This project started as a way to help digitize and modernize the business while also serving as a hands-on opportunity for me to learn full-stack web development through a real-world application.

## Current Features

* Dynamic product and collection pages
* Responsive modern UI
* Product image galleries
* Supabase database integration
* Cloud image storage
* Dynamic routing with Next.js App Router
* Product collections and filtering
* Mobile-responsive layouts
* Reusable component architecture

## Tech Stack

### Frontend

* Next.js 16
* React
* CSS Modules
* App Router

### Backend / Data

* Supabase

  * PostgreSQL database
  * Storage buckets for product images
  * API querying
  * Row Level Security configuration

### Deployment

* Vercel

### Planned Integrations

* Payment processing
* User accounts & authentication
* Shopping cart
* Order management
* Inventory syncing
* Admin dashboard
* Email notifications
* Automated workflows with n8n
* Zoho Inventory integration

---

## What I Learned

This project has been a major learning experience in:

* Full-stack application architecture
* Dynamic routing in Next.js
* Database design and querying
* Image storage and CDN handling
* Environment variables and deployment workflows
* Responsive design for ecommerce
* Git and branch-based workflows
* API integration and data shaping
* Debugging production deployment issues

I also learned the importance of structuring scalable systems early, especially around routing, product organization, and database design.

---

## Collaboration

Huge thanks to Mohtasham for helping significantly with frontend development, UI structure, and implementation ideas throughout the project.

---

## Project Status

🚧 Work in Progress

The goal is to turn this into a fully-fledged ecommerce platform capable of handling:

* Online payments
* Product inventory
* Customer orders
* Collection management
* Analytics
* Automated business workflows

This is an actively evolving project and will continue to improve over time as I learn more and expand functionality.

---

## Vision

The long-term vision is to create a polished, production-ready ecommerce experience tailored specifically for boutique fashion businesses, while building a scalable foundation for future growth and automation.

---

## Local Development

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## License

Personal project for learning and business use.
