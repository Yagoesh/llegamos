function formatearFecha (date) {
  
  const partes_fecha = date.split("-");
  const dia = partes_fecha[0];
  const mes = partes_fecha[1];
  const anio = partes_fecha[2];
  
  // Formatea la fecha en el formato "yyyy-mm-dd"
  const fecha_formateada = `${anio}-${mes}-${dia}`;

return fecha_formateada

}  

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
function dateOneYear() {
  // Obtener la fecha actual
  const today = new Date();

  // Sumar un año a la fecha actual
  const oneYearLater = new Date(today);
  oneYearLater.setFullYear(today.getFullYear() + 1);

  // Formatear la fecha en el formato dd-mm-yyyy
  const day = String(oneYearLater.getDate()).padStart(2, '0');
  const month = String(oneYearLater.getMonth() + 1).padStart(2, '0'); 
  const year = oneYearLater.getFullYear();

  // Retornar la fecha formateada
  return `${day}-${month}-${year}`;
}

module.exports={ formatearFecha , calculateAge , dateOneYear}