import { TableauViz, TableauEventType } from "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";

document.addEventListener('DOMContentLoaded', () => {
  const tableauViz = document.querySelector('tableau-viz');

  tableauViz.addEventListener(TableauEventType.FirstInteractive, () => {
    document.getElementById('export-image').onclick = async () => { 
      try {
        const image = await tableauViz.exportImageAsync();
        const link = document.createElement('a');
        link.href = image;
        link.download = 'tableau-viz.png';
        link.click();
      } catch (error) {
        console.error('Error exporting image:', error);
      }
    };
  });
});
