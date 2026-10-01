# GitHub Actions secrets

The current CI workflow only runs backend lint/tests and frontend lint/build. It does not connect to external services or deploy the application, so no GitHub Actions secrets are required.

No secrets were added or created. If a future workflow needs credentials, add them in the repository's **Settings > Secrets and variables > Actions** and reference them as `${{ secrets.SECRET_NAME }}` instead of putting their values in workflow files.