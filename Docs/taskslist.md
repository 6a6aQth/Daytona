# Daytona Malawi — Full System Task List

> This task list defines the full remaining development scope for the system under MC-DOS, based strictly on the SSD and the current codebase.

---

## 1.0 Database Setup & Schema

### 1.1 Set up Supabase project
Create a new Supabase project for Daytona Malawi with appropriate region and credentials.

### 1.2 Create `users` table migration
Implement the users table with columns: id (uuid), email (unique), password_hash, name, role (admin/manager), phone, created_at, updated_at.

### 1.3 Create `vehicles` table migration
Implement the vehicles table with columns: id (uuid), title, make, model, year, trim, condition (enum), price, mileage, vin, reg_number, location, description, status (enum: available/reserved/sold), created_by (FK to users), created_at, updated_at.

### 1.4 Create `vehicle_images` table migration
Implement vehicle_images table with columns: id (uuid), vehicle_id (FK), url, alt_text, sort_order.

### 1.5 Create `bookings` table migration
Implement bookings table with columns: id (uuid), booking_ref (string), customer_name, customer_phone, customer_email, vehicle_reg, service_type (enum), preferred_date, preferred_time, status (enum: requested/confirmed/rescheduled/checked_in/in_progress/completed/cancelled), notes, admin_note, reminder_sent, created_at, updated_at.

### 1.6 Create `leads` (inquiries) table migration
Implement leads table with columns: id (uuid), vehicle_id (FK nullable), name, phone, email, type (enum: price_request/test_drive_request/general), message, status (enum: new/contacted/closed), created_at, updated_at.

### 1.7 Create `notifications` table migration
Implement notifications table with columns: id (uuid), type (email/sms/whatsapp), recipient, payload (jsonb), status, sent_at, error.

### 1.8 Create `audit_logs` table migration (optional)
Implement audit_logs table with columns: id (uuid), user_id, action, resource_type, resource_id, timestamp, details (jsonb).

### 1.9 Set up database connection pooling
Configure Supabase/Neon connection pooling for efficient DB connections.

### 1.10 Create database seed script
Create seed script to populate initial admin user and sample data for development/testing.

---

## 2.0 Authentication & Authorization

### 2.1 Set up Supabase Auth integration
Configure Supabase Auth with email/password authentication for admin users.

### 2.2 Replace hardcoded password auth with Supabase Auth
Remove the current hardcoded password (`"1234"`) and integrate proper Supabase Auth in `admin-auth-context.tsx`.

### 2.3 Implement JWT session management
Add JWT token storage, validation, and automatic refresh logic.

### 2.4 Protect admin API routes with middleware
Create Next.js middleware to validate JWT on all `/admin/*` API routes.

### 2.5 Implement role-based access control
Add role checking (admin vs manager) to restrict certain operations.

### 2.6 Create admin user management page
Build UI for creating/editing admin users (for super-admin role).

### 2.7 Implement strong password policy enforcement
Add password strength requirements (minimum 8 chars, mixed case, numbers).

### 2.8 Add optional 2FA for admin accounts
Implement two-factor authentication setup and verification flow.

### 2.9 Implement session timeout and logout
Add automatic session timeout after inactivity and proper logout functionality.

---

## 3.0 Booking System Backend

### 3.1 Create `POST /api/bookings` endpoint
Implement API route to create a new booking with validation, generates booking_ref (format: DAY-YYYYMMDD-XXX), stores in database, returns booking reference.

### 3.2 Create `GET /api/bookings/:ref` endpoint
Implement public API route to lookup booking by reference and phone number (simple auth).

### 3.3 Connect BookingFormWizard to API
Replace mock `handleSubmit` with actual API call to `POST /api/bookings`.

### 3.4 Implement server-side booking validation
Add Zod schema validation for booking creation (name, phone, service_type, date, time required).

### 3.5 Create `GET /api/admin/bookings` endpoint
Implement paginated, filterable booking list endpoint for admin dashboard.

### 3.6 Create `GET /api/admin/bookings/:id` endpoint
Implement booking detail endpoint for admin view.

### 3.7 Create `PATCH /api/admin/bookings/:id` endpoint
Implement booking update endpoint for status changes, admin notes, rescheduling.

### 3.8 Create `POST /api/admin/bookings/:id/checkin` endpoint
Implement check-in action that updates status to `checked_in`.

### 3.9 Connect admin bookings page to API
Replace dummy data with actual API calls for listing, viewing, and updating bookings.

### 3.10 Implement booking status state machine
Add validation to ensure valid status transitions (requested → confirmed → checked_in → in_progress → completed).

### 3.11 Add booking confirmation notifications
Trigger email/SMS confirmation when booking is created and when admin confirms.

### 3.12 Implement booking reminder system
Create scheduled job to send reminders 24 hours before scheduled service.

### 3.13 Connect booking lookup page to API
Replace dummy data lookup with actual `GET /api/bookings/:ref` API call.

---

## 4.0 Vehicle Inventory Backend

### 4.1 Create `GET /api/vehicles` public endpoint
Implement public vehicle list endpoint with filters (make, year, price_range, status).

### 4.2 Create `GET /api/vehicles/:id` public endpoint
Implement public vehicle detail endpoint.

### 4.3 Connect public vehicles page to API
Replace `lib/dummy-data.ts` vehicles with actual API calls.

### 4.4 Connect vehicle detail page to API
Fetch vehicle details from API instead of dummy data.

### 4.5 Create `POST /api/admin/vehicles` endpoint
Implement vehicle creation endpoint for admin with validation.

### 4.6 Create `PATCH /api/admin/vehicles/:id` endpoint
Implement vehicle update endpoint for admin.

### 4.7 Create `DELETE /api/admin/vehicles/:id` endpoint
Implement vehicle deletion (soft delete recommended) endpoint for admin.

### 4.8 Connect admin vehicles page to API
Replace dummy data with actual API calls for CRUD operations.

### 4.9 Implement vehicle status management
Add functionality to mark vehicles as available/reserved/sold with UI controls.

### 4.10 Add vehicle views tracking
Track and store view counts for each vehicle listing.

---

## 5.0 Image Upload & Storage

### 5.1 Set up Supabase Storage bucket
Create a storage bucket for vehicle images with appropriate policies.

### 5.2 Create `POST /api/admin/vehicles/:id/images` endpoint
Implement image upload endpoint that stores in Supabase Storage, returns URL.

### 5.3 Implement image upload in vehicle form
Connect the file input in the "Add Vehicle" dialog to the upload API.

### 5.4 Add image gallery management for vehicles
Build UI to reorder, set primary, and delete vehicle images.

### 5.5 Implement image optimization
Add server-side image resizing/compression before storage.

### 5.6 Configure CDN caching for images
Set up Cloudflare CDN to cache vehicle images for performance.

### 5.7 Add upload progress indicator
Show upload progress when adding vehicle images.

---

## 6.0 Lead/Inquiry System Backend

### 6.1 Create `POST /api/inquiries` endpoint
Implement inquiry creation endpoint for vehicle inquiries (price request, test drive, general).

### 6.2 Connect vehicle detail inquiry form to API
Replace mock form submission with actual API call to create lead.

### 6.3 Create `GET /api/admin/leads` endpoint
Implement paginated, filterable leads list endpoint for admin.

### 6.4 Create `PATCH /api/admin/leads/:id` endpoint
Implement lead status update endpoint (new → contacted → closed).

### 6.5 Connect admin leads page to API
Replace dummy data with actual API calls.

### 6.6 Add lead notification to admin
Trigger email/notification to admin when new lead is created.

### 6.7 Implement lead-to-vehicle linking
Show which vehicle the lead is interested in with link to vehicle detail.

---

## 7.0 Notification System

### 7.1 Set up SendGrid integration
Configure SendGrid for transactional email sending.

### 7.2 Create email templates
Design email templates for: booking confirmation, booking reminder, booking status update, lead notification, inquiry confirmation.

### 7.3 Implement `POST /api/admin/notifications/test` endpoint
Create test endpoint to verify notification channels are working.

### 7.4 Create email notification service
Build service layer for sending templated emails with SendGrid.

### 7.5 Set up SMS provider integration
Configure Twilio or local SMS provider (BulkSMS Malawi) for SMS.

### 7.6 Implement SMS notification service
Build service layer for sending SMS notifications.

### 7.7 Add notification preferences per booking
Allow admin to toggle SMS/email reminders per booking.

### 7.8 Create notification log viewer
Build admin UI to view sent notifications and their status.

### 7.9 Implement WhatsApp Business API integration (optional)
Add WhatsApp notifications as an additional channel.

---

## 8.0 Reporting & Analytics

### 8.1 Create `GET /api/admin/reports/daily` endpoint
Implement daily metrics endpoint: bookings per day, pending leads, completed services.

### 8.2 Connect admin reports page to API
Replace dummy calculations with actual aggregated data from database.

### 8.3 Implement bookings by date range report
Add date filter to reports page with dynamic data fetching.

### 8.4 Implement CSV export for bookings
Add export button that generates CSV download of filtered bookings.

### 8.5 Implement CSV export for leads
Add export button that generates CSV download of filtered leads.

### 8.6 Add vehicle views analytics
Show vehicle view counts and most-viewed vehicles in reports.

### 8.7 Implement service type breakdown by period
Add time-based filtering to service type analytics.

### 8.8 Add booking completion rate metric
Calculate and display booking completion rate (completed / total).

---

## 9.0 Security & Rate Limiting

### 9.1 Implement rate limiting middleware
Add rate limiting on public endpoints (bookings, inquiries) to prevent spam.

### 9.2 Add input sanitization
Sanitize all user inputs to prevent XSS attacks.

### 9.3 Implement CSRF protection
Add CSRF token validation for form submissions.

### 9.4 Add request validation with Zod schemas
Create comprehensive Zod schemas for all API endpoints.

### 9.5 Implement secrets management
Move all secrets to environment variables / Vercel secrets.

### 9.6 Add IP allowlist for admin (optional)
Implement optional IP restriction for admin endpoints.

### 9.7 Implement upload validation
Validate uploaded files (type, size, malware scan).

### 9.8 Add security headers
Configure security headers (CSP, HSTS, X-Frame-Options) in Next.js config.

---

## 10.0 Form Validation & Error Handling

### 10.1 Add comprehensive form validation to BookingFormWizard
Implement complete field validation with error messages for all required fields.

### 10.2 Add form validation to vehicle inquiry form
Validate name, phone, email, message fields with proper error display.

### 10.3 Add form validation to contact form
Implement validation for contact form fields.

### 10.4 Create global error boundary
Implement React error boundary for graceful error handling.

### 10.5 Implement API error handling utilities
Create standardized error response format and handler utilities.

### 10.6 Add toast notifications for actions
Show success/error toasts for form submissions, updates, and other actions.

### 10.7 Implement loading states for all async operations
Add loading indicators for form submissions and data fetching.

---

## 11.0 Public Pages Completion

### 11.1 Create About page content
Build out the About page with company history, mission, team section per SSD requirements.

### 11.2 Create Services page content
Implement services page with detailed service descriptions, pricing, and booking CTAs.

### 11.3 Create Privacy Policy page
Implement privacy policy page with consent information and data retention policy.

### 11.4 Update contact information across site
Replace placeholder phone numbers and addresses with real contact info.

### 11.5 Add Google Maps embed to Contact page
Replace map placeholder with actual Google Maps embed.

### 11.6 Implement contact form submission
Connect contact form to backend/email service.

### 11.7 Add SEO meta tags to all pages
Implement proper meta titles, descriptions, and Open Graph tags.

### 11.8 Add structured data for vehicles (JSON-LD)
Implement schema.org markup for vehicle listings.

---

## 12.0 Admin Dashboard Enhancements

### 12.1 Implement real-time dashboard updates
Add polling or WebSocket connection for live dashboard updates.

### 12.2 Add today's schedule view
Create a calendar/timeline view of today's bookings.

### 12.3 Implement quick actions from dashboard
Add one-click actions (confirm, check-in) directly from dashboard cards.

### 12.4 Add admin settings page
Create settings page for business hours, notification preferences, etc.

### 12.5 Implement booking calendar view
Add calendar interface for viewing bookings by day/week/month.

### 12.6 Add search across all entities
Implement global search that searches bookings, leads, and vehicles.

---

## 13.0 Mobile Responsiveness & UX

### 13.1 Test and fix mobile layouts for all public pages
Ensure all public pages render correctly on mobile devices.

### 13.2 Test and fix mobile layouts for admin pages
Ensure admin dashboard is usable on tablets and mobile.

### 13.3 Implement mobile-friendly booking flow
Optimize booking wizard for touch interfaces.

### 13.4 Add PWA capabilities
Implement service worker and manifest for PWA functionality.

### 13.5 Optimize page load performance
Implement lazy loading, image optimization, and code splitting.

---

## 14.0 Observability & Monitoring

### 14.1 Set up Sentry for error tracking
Configure Sentry for frontend and API error monitoring.

### 14.2 Implement structured logging
Add centralized logging (Papertrail/LogDNA) for API requests and errors.

### 14.3 Set up uptime monitoring
Configure uptime monitoring with alerts for downtime.

### 14.4 Add performance monitoring
Implement response time tracking for API endpoints.

### 14.5 Set up alert notifications
Configure Slack/email alerts for critical errors and high error rates.

---

## 15.0 CI/CD & Deployment

### 15.1 Set up GitHub Actions CI pipeline
Create workflow for linting, type checking, and testing on PRs.

### 15.2 Configure Vercel deployment
Set up Vercel project with environment variables and deployment hooks.

### 15.3 Set up staging environment
Create staging branch with separate Supabase project for testing.

### 15.4 Implement database migration automation
Add migration scripts to CI/CD pipeline for database schema updates.

### 15.5 Configure production environment variables
Set up all required secrets in Vercel production environment.

---

## 16.0 Testing

### 16.1 Set up testing framework
Configure Jest/Vitest with React Testing Library.

### 16.2 Write unit tests for utility functions
Add tests for validation, formatting, and helper functions.

### 16.3 Write integration tests for API routes
Add tests for booking, vehicle, and lead API endpoints.

### 16.4 Write component tests for critical UI
Add tests for BookingFormWizard, vehicle inquiry form, and admin components.

### 16.5 Implement E2E testing
Set up Playwright for end-to-end booking flow testing.

---

## 17.0 Documentation

### 17.1 Create API documentation
Document all API endpoints with request/response examples.

### 17.2 Create admin user guide
Write documentation for admin users on how to use the dashboard.

### 17.3 Create developer setup guide
Document local development setup and contribution guidelines.

### 17.4 Create runbook for operations
Document common operational tasks and troubleshooting steps.

---

*Generated based on the Daytona Malawi System Design Document (SSD) and current codebase analysis.*
