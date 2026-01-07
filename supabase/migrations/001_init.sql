-- UrbanStay initial schema
create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  user_type text check (user_type in ('user', 'owner', 'admin')) default 'user',
  is_premium boolean default false,
  premium_expiry timestamptz,
  contact_limit_used integer default 0,
  created_at timestamptz default now()
);

create table if not exists listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references users (id) on delete cascade,
  title text not null,
  description text,
  type text check (type in ('pg', 'hostel', 'flat', 'dormitory')) not null,
  price numeric not null,
  location text not null,
  lat numeric,
  lng numeric,
  amenities text[],
  images text[],
  verified boolean default false,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users (id) on delete cascade,
  listing_id uuid references listings (id) on delete cascade,
  rating integer check (rating between 1 and 5) not null,
  comment text,
  created_at timestamptz default now()
);

create table if not exists saved_properties (
  user_id uuid references users (id) on delete cascade,
  listing_id uuid references listings (id) on delete cascade,
  primary key (user_id, listing_id)
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users (id) on delete cascade,
  listing_id uuid references listings (id) on delete cascade,
  message text,
  created_at timestamptz default now()
);

-- simple view for analytics
create view listing_with_owner as
select l.*, u.name as owner_name, u.email as owner_email
from listings l
left join users u on l.owner_id = u.id;

