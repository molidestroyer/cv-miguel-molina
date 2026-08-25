const PDF_FILE_NAME = 'Miguel Molina Montilla - CV';

/**
 * Opens the browser print dialog with the print-only CV layout.
 * The document title drives the default file name in "Save as PDF".
 */
export function downloadCvPdf() {
  const originalTitle = document.title;
  document.title = PDF_FILE_NAME;

  const restore = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restore);
  };

  window.addEventListener('afterprint', restore);
  window.print();
  // Safari/Firefox do not always fire afterprint reliably.
  window.setTimeout(restore, 1000);
}
