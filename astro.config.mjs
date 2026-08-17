import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const configuredSite = process.env.SITE_URL?.trim();
const configuredBase = process.env.BASE_PATH?.trim();
const isUserSite = Boolean(
  owner && repository && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`,
);

const site = configuredSite || (owner ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = configuredBase || (configuredSite || isUserSite || !repository ? '/' : `/${repository}`);

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
