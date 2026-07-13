# Taraz Lift Service

Modern React + Tailwind landing site with Kazakh/Russian localization, animated pages, Axios contact form submission, and a foundational Django API service.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

## Production Build

```bash
cd frontend
npm run build
```

## Docker Compose

```bash
docker compose up --build
```

Frontend container: `http://localhost:5173`
Backend health endpoint: `http://localhost:8000/api/health/`
