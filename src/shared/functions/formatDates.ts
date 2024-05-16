function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Sumamos 1 al mes porque en JavaScript los meses van de 0 a 11
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export { formatDate }