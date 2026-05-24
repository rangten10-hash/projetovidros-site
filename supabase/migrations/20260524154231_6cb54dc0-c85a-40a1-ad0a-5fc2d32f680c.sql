
-- Create internal config table to store the monitor shared secret
CREATE TABLE IF NOT EXISTS public._monitor_config (
  key text PRIMARY KEY,
  value text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public._monitor_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deny all client access to _monitor_config"
  ON public._monitor_config
  AS RESTRICTIVE
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- Insert a randomly generated monitor secret (only if not already set)
INSERT INTO public._monitor_config (key, value)
VALUES ('monitor_secret', encode(gen_random_bytes(32), 'hex'))
ON CONFLICT (key) DO NOTHING;

-- Recreate the cron job to send the secret as a header
SELECT cron.unschedule('seo-daily-monitor');

SELECT cron.schedule(
  'seo-daily-monitor',
  '0 12 * * *',
  $$
  SELECT net.http_post(
    url := 'https://wkyxpuagzspyuvwbtngh.supabase.co/functions/v1/seo-daily-monitor',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndreXhwdWFnenNweXV2d2J0bmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MjM3NDIsImV4cCI6MjA5NDM5OTc0Mn0.8uMm-8CaXs-cJwhua8XoqGngSvPc86qbbnCZFcmDPMg',
      'x-monitor-secret', (SELECT value FROM public._monitor_config WHERE key = 'monitor_secret')
    ),
    body := '{}'::jsonb
  ) AS request_id;
  $$
);
