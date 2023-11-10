import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import imgComite from "@assets/img/utl/comiteIgualdad.jpg";
import Image from 'next/image'

const comiteIgualdad = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Comité Ética y Prevención de Conflictos de Interés'} />
    <HeaderFour />
    <Breadcrumb title="Comite Etica y Prevencion" subTitle="Comité Ética y Prevención de Conflictos de Interés" />
    <h2 style={{textAlign: "center", marginTop: "50px"}}>Comité Ética y Prevención de Conflictos de Interés</h2>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Image src={imgComite} alt="Difusion e Imagen Institucional" style={{width: "80%", height: "auto", alignItems: "center"}}/>
    
    
    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>
      
    <h3>Protocolo de Prevención de la Violencia y el Acoso Institucional</h3>
     <hr style={{border: "2px solid #000000"}}/>

       <div style={{color: "blue", fontSize: "1.3rem"}}>
         <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/Manual%20para%20la%20atenci%C3%B3n%20de%20la%20Violencia%20Laboral,%20Hostigamiento%20y%20Acoso%20UTL.pdf" >Protocolo de Prevención de la Violencia y el Acoso Institucional</a></li>
         <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/2017_IMUG_Protolo_prevenir_violencia_laboral_acoso_hostigamiento_sexual.pdf" >Protocolo para prevenir y atender la violencia laboral, el acoso y el hostigamiento sexual en la administración pública del Estado de Guanajuato</a></li>
      </div>
     <br/>

     <h3>Política de igualdad Laboral y NO Discriminación Adoptado por la UTL</h3>
     <hr style={{border: "2px solid #000000"}}/>

     <div style={{color: "blue", fontSize: "1.3rem"}}>
     <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/05%20Politica%20de%20Igualdad%20Laboral%20y%20No%20Discriminacion.pdf" >Política de Igualdad Laboral y No Discriminación para la Administración Pública del Estado de Guanajuato</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/Politica%20de%20Igualdad%20Laboral%20y%20No%20Discriminacion_resumida.pdf" >Política de Igualdad Laboral y No Discriminación para la Administración Pública del Estado de Guanajuato (resumida)</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/Dra_Sofia_Ayala_Rodriguez_UTL.pdf" >Enlace Institucional</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/Guia_Basica_Uso_Lenguaje_2015.pdf" >Guía de Recomendaciones para el uso incluyente y no sexista</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/Guia_lenguaje_inc2015_001.pdf" >Acuerdo de uso de lenguaje incluyente</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/POLITICA%20DE%20ILND.pdf" >Adopción de la Política de Igualdad Laboral y no Discriminación</a></li>
    <li><a href="https://www.utleon.edu.mx/public_html/responsabilidad-social/equidad-de-genero/pdf/CARTA%20COMPROMISO.pdf" >Carta compromiso de adopción de política</a></li>
      </div>
     

     {/* Insertar video */}
     <iframe width="560" height="315" style={{margin: "40px 0"}} src="https://www.youtube.com/embed/qJmQR0Ql_to" 
     title="video igualdad sin entrevistas" frameborder="0" allow="accelerometer; autoplay; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     <h3>Integrantes</h3>
     <hr style={{border: "2px solid #000000"}}/>
     <br/>

     <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <thead className="thead-dark">
        <tr>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Cargo Comite</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>Yoloxóchitl Bustamante Díez</td>
                <td>Rectora</td>
                <td>Presidenta</td>
            </tr>
            <tr>
                <td>Miriam Silva Frias</td>
                <td>Abogada General</td>
                <td>Suplente de Presidenta</td>
            </tr>
            <tr>
                <td>Paolo Mario Moretto Piovensan</td>
                <td></td>
                <td>Ombudsperson</td>
            </tr>
            <tr>
                <td>Nahum Ignacio Angulo Camarena</td>
                <td>Jefe de Departamento de Planeación y Proyectos</td>
                <td>Vocal de Sistema de Gestión Integral</td>
            </tr>
            <tr>
                <td>Juan Gabriel González Godínez</td>
                <td>Subdirector de Difusión e Imagen Institucional</td>
                <td>Citizen Manager</td>
            </tr>
            <tr>
                <td>Luz Fabiola Cifuentes Vázquez</td>
                <td>Jefa de Departamento de Desarrollo Humano y Organizacional</td>
                <td>Enlace Institucional</td>
            </tr>
            <tr>
                <td>José Francisco Hernández García</td>
                <td>Director de Servicios de Apoyo al Sector Productivo y Social</td>
                <td>Vocal de la Secretaría de Vinculación</td>
            </tr>
            <tr>
                <td>Laura Monserrat Castillo</td>
                <td>Jefe del Departamento de Asuntos Jurídicos</td>
                <td>Secretaría Técnica / Vocal Asuntos Jurídicos</td>
            </tr>
            <tr>
                <td>Martín Gustavo Murillo Almaguer</td>
                <td>Jefe de Departamento de Salud Integral</td>
                <td>Vocal Administración</td>
            </tr>
            <tr>
                <td>Olga Rebeca Ledesma García</td>
                <td>Directora de Desarrollo Académico y Docente</td>
                <td>Vocal Académica</td>
            </tr>
            <tr>
                <td>Laura Margarita Aguilar Cervantes</td>
                <td>PTC Titular "A" de la Jefatura del Departamento de Centro de Idiomas</td>
                <td>Vocal Académica</td>
            </tr>
            <tr>
                <td>Gerardo Reyna Vallejo</td>
                <td>Jefe de Departamento de Mantenimiento e Instalaciones</td>
                <td>Vocal Administración</td>
            </tr>
            <tr>
                <td>Ivette Palacios Torres</td>
                <td>Jefa de Departamento de Desempeño de Egresados y Bolsa de Trabajo</td>
                <td>Vocal Vinculación</td>
            </tr>
            <tr>
                <td>María de Jesús Armenta Ortiz</td>
                <td>Subdirectora Campus II</td>
                <td>Vocal Campus II</td>
            </tr>
            <tr>
                <td>José Jaime Ávila Morales</td>
                <td>Subdirector Campus Acámbaro</td>
                <td>Vocal UAS</td>
            </tr>
        </tbody>
    </table>


       
        

      </div>
      
    </div>
    
    
    <Footer/>
  </Wrapper>
  )
}

export default comiteIgualdad