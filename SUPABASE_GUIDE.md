# Supabase Setup Guide 🛠️

To make **Campus Hub** fully functional with real-time data and authentication, follow these steps to set up your Supabase project.

## 1. Create a Project
1. Go to [supabase.com](https://supabase.com) and sign in.
2. Click **New Project** and select your organization.
3. Give your project a name (e.g., `Campus-Hub`) and set a secure database password.
4. Wait for the database to provision.

## 2. Get Your Credentials
1. In your Supabase dashboard, go to **Project Settings** (gear icon) > **API**.
2. Find your **Project URL** and **Anon Key**.
3. Copy these into your local `.env` file:
   ```env
   VITE_SUPABASE_URL=your_project_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

## 3. Set Up Tables (Database Schema)
Run the following SQL in the **SQL Editor** of your Supabase dashboard to create the necessary tables:

```sql
-- Announcements Table
create table announcements (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  content text not null,
  author_name text,
  is_anonymous boolean default false,
  likes_count integer default 0
);

-- Notes Table
create table notes (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  course_code text not null,
  file_url text, -- If using storage
  author_name text,
  download_count integer default 0
);

-- Marketplace Table
create table marketplace (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  price decimal not null,
  category text,
  condition text,
  seller_name text
);

-- Timetable Table
create table timetable (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users not null,
  day text not null,
  start_time time not null,
  course_name text not null,
  room text
);
```

## 4. Enable Real-time
To see posts and notes update instantly without refreshing:
1. Go to **Database** > **Replication**.
2. Enable replication for the `announcements`, `notes`, and `marketplace` tables by toggling the **Source** switch.

## 5. Deployment Secrets
When hosting on GitHub Pages, add your credentials as **Repository Secrets**:
1. In your GitHub repo, go to **Settings** > **Secrets and variables** > **Actions**.
2. Click **New repository secret**.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

---
Your app is now ready for the university community! 🚀
