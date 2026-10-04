-- A draft course may omit its price. Publishing requires one.
-- NULL means the price is not configured. 0 means genuinely free.
-- Amounts are whole currency units: 2500 with LKR is LKR 2,500.
-- currency stays required and still defaults to LKR.
-- The existing courses_price_amount_check still rejects negative amounts.
-- A CHECK allows NULL, so that constraint does not need to change.

alter table public.courses
  alter column price_amount drop not null;

alter table public.courses
  add constraint courses_published_price_check
  check (status <> 'published' or price_amount is not null);
