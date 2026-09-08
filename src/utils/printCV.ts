import { Language } from '../types/cv';

/**
 * Opens the browser print dialog with the print-only CV layout.
 * The document title drives the default file name in "Save as PDF".
 */
export function downloadCvPdf(lang: Language = 'en') {
  const originalTitle = document.title;
  const suffix = lang === 'es' ? ' (ES)' : ' (EN)';
  document.title = `Miguel Molina Montilla - CV${suffix}`;

  const restore = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restore);
  };

  window.addEventListener('afterprint', restore);
  window.print();
  // Safari/Firefox do not always fire afterprint reliably.
  window.setTimeout(restore, 1000);
}
