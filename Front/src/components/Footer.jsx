import styles from "./styles.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h4>Enlaces útiles</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4>Redes Sociales</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export {Footer}