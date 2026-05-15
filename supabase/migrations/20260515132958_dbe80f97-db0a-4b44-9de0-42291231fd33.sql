
SELECT cron.schedule(
  'seo-daily-monitor',
  '0 12 * * *',
  $$
  SELECT net.http_post(
    url := 'https://wkyxpuagzspyuvwbtngh.supabase.co/functions/v1/seo-daily-monitor',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndreXhwdWFnenNweXV2d2J0bmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MjM3NDIsImV4cCI6MjA5NDM5OTc0Mn0.8uMm-8CaXs-cJwhua8XoqGngSvPc86qbbnCZFcmDPMg'
    ),
    body := '{}'::jsonb
  ) AS request_id;
  $$
);
