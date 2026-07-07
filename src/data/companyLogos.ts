// Maps a company name (as used in cvData.ts) to its official domain.
// Logos are resolved via Google's public favicon service at render time
// (ExperienceSection), so this file only needs a verified domain per company.
// Companies without a confirmed domain are omitted on purpose — the UI falls
// back to a generic icon rather than risk showing an unrelated logo.
export const COMPANY_DOMAINS: Record<string, string> = {
  Sage: 'sage.com',
  Raona: 'raona.com',
  'UNIT4 Agresso ES': 'unit4.com',
  CholloLocura: 'chollolocura.es',
  'Universitat Autònoma de Barcelona': 'uab.cat',
};

// A few companies get a hand-picked logo asset (bundled in public/logos/)
// instead of the favicon fallback — used when the favicon lookup is
// unreliable or a better-quality logo was supplied directly.
export const COMPANY_LOGO_OVERRIDES: Record<string, string> = {
  ERNI: '/cv-miguel-molina/logos/erni.png',
  Raona: '/cv-miguel-molina/logos/raona.png',
};

// Logos that already ship with their own solid/opaque background (as opposed
// to a transparent favicon) — rendered without the extra white backdrop chip
// so they don't show a mismatched border.
export const COMPANY_LOGO_OPAQUE = new Set(['ERNI', 'Raona']);

export function getCompanyLogoUrl(company: string): string | null {
  if (COMPANY_LOGO_OVERRIDES[company]) return COMPANY_LOGO_OVERRIDES[company];
  const domain = COMPANY_DOMAINS[company];
  return domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;
}
