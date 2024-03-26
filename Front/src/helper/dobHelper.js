function convertDOB(date) {
  // Dividir la fecha en año, mes y día
  const dateParts = date.split('-');

  // Crear un nuevo objeto de fecha en el formato 'yyyy-mm-dd'
  const newDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  // Obtener el día, el mes y el año del nuevo objeto de fecha
  const day = newDate.getDate().toString().padStart(2, '0');
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  const year = newDate.getFullYear();

  // Devolver la fecha en el formato 'dd-mm-yyyy'
  return `${day}-${month}-${year}`;
}


export {convertDOB}