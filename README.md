# Technical Issue Helpdesk System

This project is a technical issue helpdesk system developed for the "Agile and DevOps" course. Built with [Next.js](https://nextjs.org), it provides a secure platform for managing technical support tickets with robust authentication and role-based access control.

Try it out [**here**](https://sappot.vercel.app/)

Test credentials (common password for all accounts: `testpass`):

- Support:
  - support1@test.com
  - support2@test.com
- User:
  - user1@test.com
  - user2@test.com
  - user3@test.com

## Project Overview

The Technical Issue Helpdesk System enables users to create, track, and resolve technical support tickets. Key features include:

- **Secure Authentication**: Never roll your own auth :)
- **Role-Based Access Control (RBAC)**: Ensures users can only access their own tickets and information
- **Ticket Management**: Create, track, and resolve technical issues

## Features

- **User Authentication**

  - Secure login/registration
  - Password encryption
  - Session management

- **Role-Based Access Control**

  - Admin role: Full system access (no test credentials due to safety reasons)
  - Support staff: Only access to close and resolve tickets
  - Users: Access only to their submitted tickets

- **Ticket System**
  - Create new tickets
  - Track ticket status
  - Close or reopen tickets (support staff only)

## Technologies Used (average 2025 tech stack):

- **Frontend**: Next.js, ShadCn UI, Tailwind CSS
- **Backend**: Next.js (gotta love not having to write a separate backend)
- **Database**: PostgreSQL (it simply works)
- **Authentication**: PostgreSQL with Supabase
- **Deployment**: Vercel
