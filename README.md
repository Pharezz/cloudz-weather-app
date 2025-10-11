Weather lookup app that consumes public weather APIs and presents forecasts.

Live demo: https://clouddz.netlify.app

Repo: https://github.com/Pharezz/cloudz-weather-app.git




Tech:

React 

Public weather API (OpenWeatherMap)

Netlify hosting 


Features:

City search and current conditions

Error states for invalid lookups and rate limits

Responsive layout and accessibility considerations

Quickstart (3 commands):
git clone https://github.com/Pharezz/cloudz-weather-app.git
cd cloudz-weather
cp .env.example .env
npm install && npm run dev

Architecture:

Frontend calls external weather API directly.


Tests & CI:

Basic unit tests for data parsing logic and UI snapshots.

CI runs tests and deploys to Netlify on merge to main.

Demo info:

No authentication required — public demo.

Learnings & notes:

Focused on resilient API integration and error handling for different HTTP failure modes.


License:

MIT

Contact

Open an issue or email oguegbuikechukwu@gmail.com.
