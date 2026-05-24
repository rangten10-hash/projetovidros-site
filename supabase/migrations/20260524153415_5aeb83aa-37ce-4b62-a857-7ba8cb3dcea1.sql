-- Deny-all RLS policies for internal SEO monitoring tables.
-- These tables are written/read exclusively by the seo-daily-monitor edge function
-- (service role bypasses RLS). Clients (anon/authenticated) must have zero access.

CREATE POLICY "Deny all client access to seo_alerts"
  ON public.seo_alerts
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny all client access to seo_daily_snapshots"
  ON public.seo_daily_snapshots
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Deny all client access to seo_tracked_pages"
  ON public.seo_tracked_pages
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);