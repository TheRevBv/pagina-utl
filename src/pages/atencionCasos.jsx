import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import imgComite from "@assets/img/utl/comiteIgualdad.jpg";
import Image from 'next/image'

const atencionCasos = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Comité Ética y Prevención de Conflictos de Interés'} />
    <HeaderFour />
    <Breadcrumb title="Comite Etica y Prevencion" subTitle="Comité Ética y Prevención de Conflictos de Interés" />
    <h2 style={{textAlign: "center", marginTop: "50px"}}>Sub Comité de Atención a Presuntos Casos de Violencia, Acoso y Hostigamiento Sexual</h2>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    
    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>
      
    <h3>Antecedentes</h3>
     <hr style={{border: "2px solid #000000"}}/>
       <h4>En el ámbito laboral:</h4>
       <div style={{fontSize: "1rem"}}>
        <p>2016 a la fecha</p>
         <li><a>Derivado de la NOM 025, se instala el 25 de agosto de 2017el Comité de Atención a la Violencia, Hostigamiento y Acoso laboral. Una acción que se distingue es contar con el Ombudsperson externo y que apoya los casos una vez activado el protocolo.</a></li>
         <li><a>Se cuenta con el Manual de PAVH para el ámbito administrativo</a></li>
      </div>
      <h4>En el ámbito académico:</h4>
       <div style={{fontSize: "1rem"}}>
        <p>2008 a la fecha Se cuenta con el Reglamento de la Comisión de Honor y Justicia, a través del cual se generan las medidas disciplinarias entre estudiantes, facultando a las Direcciones Académicas para las acciones correspondientes.</p>
    <p>2019 a la fecha Creación de la figura de Citizen Manager para la coordinación colegiada de atención a presuntos casos.</p> 
      <p>Se comienza la elaboración de un Protocolo de Atención específico para los casos de Violencia, Hostigamiento y Acoso entre estudiantado.</p>
      </div>
     <br/>

     <h3>Objetivo</h3>
     <hr style={{border: "2px solid #000000"}}/>

     <div style={{fontSize: "1rem"}}>
      <p>Atender las situaciones que en el ámbito de la Universidad Tecnológica de León puedan constituir violencia, acoso y hostigamiento sexual en el ámbito tanto escolar ( generadas entre estudiantado, en la relación alumno-docente o alumno-administrativo) y en la esfera administrativa.</p>
      <p>Marco de Referencia</p>
       <li><a>Ley General para la Igualdad entre Mujeres y Hombres</a></li>
       <li><a>Ley General de Acceso de las mujeres para una Vida libre de Violencia.</a></li>
       <li><a>Ley para una convivencia libre de violencia en el entorno escolar para el estado de Guanajuato y sus Municipios.</a></li>
        <li><a>Protocolo para prevenir y atender la violencia laboral, el acoso y el hostigamiento sexual en la Admintración Pública del estado de Guanajuato.</a></li>
      </div>
      <br/>
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
                <td>Juan Gabriel González Godínez</td>
                <td>Subdirector de Difusión e Imagen Institucional</td>
                <td>Presidente</td>
            </tr>
            <tr>
                <td>Paolo Mario Moretto Piovensan</td>
                <td></td>
                <td>Ombudsperson</td>
            </tr>
            <tr>
                <td>María de Jesús Armenta Ortiz</td>
                <td>Subdirectora Campus II</td>
                <td>Secretaría Técnica</td>
            </tr>
            <tr>
                <td>Laura Monserrat Castillo</td>
                <td>Jefe del Departamento de Asuntos Jurídicos</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>Luz Fabiola Cifuentes Vázquez</td>
                <td>Jefa de Departamento de Desarrollo Humano y Organizacional</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>Martín Gustavo Murillo Almaguer</td>
                <td>Jefe de Departamento de Salud Integral</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>Olga Rebeca Ledesma García</td>
                <td>Directora de Desarrollo Académico y Docente</td>
                <td>Vocal</td>
            </tr>
        </tbody>
    </table>

 

      </div>
      
    </div>
    
    
    <Footer/>
  </Wrapper>
  )
}

export default atencionCasos