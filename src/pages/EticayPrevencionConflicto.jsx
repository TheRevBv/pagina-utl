import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import imgEtica from "@assets/img/utl/eticaP.jpg";
import Image from 'next/image'


const EticayPrevencionConflicto = () => {
  return (
    <Wrapper>
    <SEO pageTitle={'Comité Ética y Prevención de Conflictos de Interés'} />
    <HeaderFour />
    <Breadcrumb title="Comite Etica y Prevencion" subTitle="Comité Ética y Prevención de Conflictos de Interés" />
    <h3 style={{textAlign: "center", marginTop: "50px"}}>Comité Ética y Prevención de Conflictos de Interés</h3>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Image src={imgEtica} alt="Difusion e Imagen Institucional" style={{width: "80%", height: "auto", alignItems: "center"}}/>
    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>
    <p> El objetivo del Comité de Ética y Prevención del conflicto de Interés, tendrá por objeto promover y difundir la observancia de valores éticos y la prevención del conflicto de interés, en las actividades que realiza la comunidad universitaria.</p>
</div>
    
    <div style={{marginTop: "50px", marginBottom: "50px", fontSize: "1.5rem", width: "80%"}}>
      
      

     <h4>Comité Interno de Ética y Prevención del Conflicto de Interés CIEPCI</h4>
     <hr style={{border: "2px solid #000000"}}/>
     <br/>

     <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem", marginBottom: "2rem"}}>
        <thead className="thead-dark">
        <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Puesto</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>Yoloxóchitl Bustamante Díez</td>
                <td>Rectora</td>
                <td>Presidenta</td>
            </tr>
            <tr>
                <td>José Ernesto López Juárez</td>
                <td>Suplente de la Presidenta</td>
                <td>Suplente de la Presidenta</td>
            </tr>
            <tr>
                <td>Rubén Pablo García Ortegón</td>
                <td>Representante de Nivel Superior</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>José de Jesus Mendoza Rivas</td>
                <td>Representante de Nivel Directivo</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>Laura Paulina Badillo Canchola</td>
                <td>Representante de Nivel Mando Medio</td>
                <td>Secretaria Ejecutiva</td>
            </tr>
            <tr>
                <td>Anahí Montserrat Torres Tinoco</td>
                <td>Representante de Nivel Operativo</td>
                <td>Vocal</td>
            </tr>
            <tr>
                <td>Blanca Estela Luna Sotelo</td>
                <td>Representante de Nivel Operativo</td>
                <td>Vocal</td>
            </tr>
        </tbody>
    </table>

     <h4 style={{marginTop: "2rem"}}>Invitados Permanentes del Comité Interno de Ética y Prevención del Conflicto de Interés CIEPCI</h4>
     <hr style={{border: "2px solid #000000"}}/>
     <br/>

        <table className="table table-bordered table-hover table-striped" style={{marginTop: "2rem"}}>
        <thead className="thead-dark">
        <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Puesto</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td>Francisco Javier González Álvarez</td>
                <td>Titular del Órgano Interno de Control</td>
                <td>Invitado Permanente</td>
            </tr>
            <tr>
                <td>Miriam Silva Frias</td>
                <td>Abogada General</td>
                <td>Invitado Permanente</td>
            </tr>
            <tr>
                <td>Luz Fabiola Cifuentes Vázquez</td>
                <td>Jefa de Departamento de Desarrollo Humano y Organizacional</td>
                <td>Enlace institucional de Ética</td>
            </tr>
            <tr>
                <td>Fanni Ochoa Mares</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
        

      </div>
      
    </div>
    
    
    <Footer/>
  </Wrapper>
  )
}

export default EticayPrevencionConflicto