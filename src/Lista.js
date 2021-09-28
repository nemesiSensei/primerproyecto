import ListaProductos from "./ListaProductos";
import img1 from "./media/MarkRosterlogo.png" 

const Products = [
    {      
      "name":" Nombre: Hikvision DS-K1T804EF",
      "img":"https://www.anuncioya.com/uplimg/100126/img_A_858348da5a62487a180177ded34a119612b9c8.jpg",
      "Tipo": " Tipo: Lector de Pared",
      "Describe":" Lector huella digital es usado en una gran cantidad de empresas para registrar las entradas y salidas del personal. Este producto registra cada una de las personas van generando información de quienes entran, salen y los horarios en los que lo hacen. Los usos importantes del lector huella digital necesitan registrar la identidad de las personas para así autentificar a los usuarios de estas y por lo tanto darles seguridad de que son ellos quien reporta su asistencia. Este tipo de sistemas no son costosos como se pensaría y a la larga te reducen muchos gastos sobre todo si hablamos de un tema de tarjetas de acceso, duplicados de llaves y tarjetas de memoria (ya que el sistema no las necesita).De igual manera el mantenimiento no es algo para lo que se requiera una gran inversión a comparación de otros sistemas. Los grandes beneficios de este lector de huella digital HIKVISION son el gran ahorro de tiempo, la practicidad que este sistema te brinda por supuesto la alta seguridad que da a tu información."
      
  },
  {
    "name":" Nombre: silk 20 usb zkteco",
    "img":"https://zk-software.com/Images/lector-huella-digital-SiLK20R-s1.jpg",
    "Tipo":" Tipo: Lector de escritorio",
    "Describe":" Lector de Huella Digital silk 20r id zkteco es un potente sensor de huellas digitales diseñado por el laboratorio Sillicon Valley, el cual adopta un avanzado diseño óptico. Cuenta con una avanzada habilidad para detección de huellas falsas y captura las imágenes de las huellas digitales con una alta calidad de 2 megapíxeles. Es la mejor opción en cuanto a un dispositivo de escritorio para enrolar e identificar debido a su comodidad y asequibilidad. es un lector de huellas digitales con conexión USB de alto rendimiento diseñado para su uso en aplicaciones de software empresarial."
  
  },
  {
    "name":" Nombre: Sensor de huella dactilar",
    "img":"https://cdn.masmovil.es/embed/e258864e9b932daa68a2898c657f201604687297/lector-huellas-movil-seguridad.jpg?imagick=1&size=1000",    
    "Tipo":" Tipo: Smartphone",
    "Describe":" Lector de huellas capacitivo: Este es uno de los primeros lectores de huellas que pudimos conocer y se relaciona directamente con los que se colocan en el botón home o bien, en la parte trasera del smartphone. Su funcionamiento se basa en la carga eléctrica de los dedos, la que nos permite con la piel transmitir una imagen concreta de la huella. Si no tuviéramos carga eléctrica este no podría funcionar, por lo tanto hace muy seguro nuestro móvil y evita que se puedan copiar las huellas. Este fue el impulsor de la tecnología que poco a poco ha ido evolucionando y, aunque se ha quedado atrás, sigue siendo muy segura."  
  },
  {
    "name":" Nombre: lectores de huellas dactilares de Windows",
    "img":"https://i.blogs.es/ecb299/650_1000_hp_probook_4330s/1366_2000.jpg", 
    "Tipo":" Tipo: PC",
    "Describe":" En numerosos ordenadores personales como los que tenemos, especialmente en portátiles, podemos encontrar un lector de huellas dactilares digital (ver imagen). Nada de la CIA ni la NASA, sencillamente una forma de proteger nuestro ordenador más allá de la clásica contraseña y de una forma bastante cómoda; ya sea con un dispositivo externo o integrado. Basta con pasar cualquiera de los dedos que registremos por encima lector de huellas para que complete la acción programada. Ejecutar aplicaciones, introducir contraseñas, entre otras."  
  }
  ]
  
  const Lista = () => (
    <div class="bg-secondary">
       <nav class="navbar navbar-ligth bg-white">
        <img src={img1} width="200" height="auto"></img>        
        <div class="container">                         
        <a class="btn btn-dark btn-lg" href="/"><strong>Inicio de Sesión</strong></a> 
        <a class="btn btn-warning btn-lg" style={{color:"black"}} ><strong>Contacto</strong></a>     
        </div>
        </nav>       
        <br></br>
        <br></br>
        <center><h1 style={{color: '#309EFF', fontSize: 50}}><strong>Comparativa de Productos</strong></h1></center>
        <br></br>
        <br></br>
    {
        Products.map( c => <ListaProductos name={c.name} tipo={c.Tipo} describe ={c.Describe} img={c.img} /> )
      }
    <footer>
      <figure class="text-center">
     <blockquote class="blockquote">
       <p>Hecho por Juan Jiménez </p>
      <p></p>
        <a href ="https://www.facebook.com/juandavid.jimenezfranco.52" style={{color:"blue"}}>  Facebook     <i class="fab fa-facebook"></i> </a><br></br>
        <a href="https://github.com/nemesiSensei" style={{color:"purple"}}> github    <i class="fab fa-github"></i> </a><br></br>
        <a  href="https://www.linkedin.com/in/juan-david-jiménez-franco-276675206/"style={{color:"#396BFF"}}> Linkedin   <i class="fab fa-linkedin"></i> </a>
     </blockquote>
     <figcaption class="blockquote-footer">
        <cite title="Source Title">Adsi:2184573</cite>
     </figcaption>
   </figure>
   </footer>
    </div>
  )  
  export default Lista;