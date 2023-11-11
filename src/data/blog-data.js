// images
import img_1 from '@assets/img/blog/2.jpg';
import img_2 from '@assets/img/blog/4.jpg';
import img_3 from '@assets/img/blog/3.jpg';
import img_4 from '@assets/img/blog/1.jpg';
import img_5 from '@assets/img/blog/5.jpg';
import img_6 from '@assets/img/blog/6.jpg';
import img_7 from '@assets/img/blog/7.jpg';
import img_8 from '@assets/img/blog/8.jpg';
import img_9 from '@assets/img/blog/9.jpg';
import imgCongreso from '@assets/img/utl/imgCongreso.jpg';
import imgRobotic from '@assets/img/utl/imgRobotica.jpg';
import imgHablidades from '@assets/img/utl/tallerHabilidadesBlandas.png';
import imgTallerTics from '@assets/img/utl/tallerTICS.jpg';
import imgTallerElectronica from '@assets/img/utl/tallerElectronica.png';
import imgImpostor from '@assets/img/utl/tallerImpostor.png';
import imgDeportes from '@assets/img/utl/deportesUTL.jpg';



const blog_data = [
  // home blogs

  /*{
    id: 1,
    img: img_1,
    title: 'Tips to Understand Your Child Better - A Guide for Parents!',
    date: '22 Jan 2023',
    user: 'Alex',
    comments: 0,
    childreen: true,
    tag: '',
    teaser: "Nearly every trade and art has its place in Froebel’s system, which gives the child the alphabet of them all by calling upon him to master.",
  },
  {
    id: 2,
    img: img_2,
    title: 'Why Toys for Preschoolers are Important - a small ready setup',
    date: '23 Jan 2023',
    user: 'Peter',
    comments: 5,
    preschool: true,
    tag: '',
    teaser: "With the practical experience of public kindergarten work contributed by two cities; with a State law passed within the last few months.",
  },
  {
    id: 3,
    img: img_3,
    title: 'Which Toys are Best for Preschool Kids in USA',
    date: '24 Jan 2023',
    user: 'Steve',
    comments: 8,
    preschool: true,
    tag: '',
    teaser: "Many quote the testimony of public school teachers to the effect that the influence of the kindergarten is seen often in the older brothers.",
  },
  // blog page
  {
    id: 4,
    img: img_4,
    title: 'How to be Learn Map Glove Easy Way for Garten',
    date: '25 Jan 2023',
    user: 'Sayem',
    comments: 7,
    kindergarten: true,
    tag: '',
    teaser: "In 1880, we find Milwaukee, Wis., considering the advisability of following the wise lead of St. Louis. A kindergarten was opened in.",
  },
  {
    id: 5,
    img: img_5,
    title: 'How to Start Your Own Kindedo Preschool in USA',
    date: '24 Jan 2023',
    user: 'Saif',
    comments: 5,
    daycare: true,
    tag: '',
    teaser: "Nearly every trade and art has its place in Froebel’s system, which gives the child the alphabet of them all by calling upon him to master.",
  },
  {
    id: 6,
    img: img_6,
    title: 'Best Way to Prepare Your Child for Preschool',
    date: '23 Jan 2023',
    user: 'Andrew',
    comments: 3,
    kindergarten: true,
    tag: '',
    teaser: "With the practical experience of public kindergarten work contributed by two cities; with a State law passed within the last few months.",
  },
  {
    id: 7,
    img: img_7,
    title: 'How to Prepare Your Child for Preschool: 8 Steps',
    date: '26 Jan 2023',
    user: 'Watson',
    comments: 9,
    daycare: true,
    tag: '',
    teaser: "Many quote the testimony of public school teachers to the effect that the influence of the kindergarten is seen often in the older brothers.",
  },*/
  //noticias UTL
  {
    id: 1,
    img: imgCongreso,
    title: 'Conferencias de la UTL en el Congreso Internacional de Educación',
    date: '22 Jan 2023',
    user: 'Alex',
    comments: 0,
    childreen: true,
    tag: '',
    teaser: "Gran participación de la UTL en el Congreso Internacional de Educación, con la participación de la de la rectora.",
  },
  {
    id: 2,
    img: imgRobotic,
    title: 'Participación de la UTL en el evento de robótica',
    date: '23 Jan 2023',
    user: 'Peter',
    comments: 5,
    preschool: true,
    tag: '',
    teaser: " Los alumos de la UTL demosraron sus habilidades en el evento de robótica, consiguiendo el tercer lugar en la categoría de robótica.",
  },
  {
    id: 3,
    img: imgHablidades,
    title: 'Unete al taller de habilidades blandas',
    date: '24 Jan 2023',
    user: 'Steve',
    comments: 8,
    preschool: true,
    tag: '',
    teaser: "Aprende a desarrollar tus habilidades blandas, con el taller que se impartirá en la UTL, el cual es totalmente gratuito.",
  },
  // blog page
  {
    id: 4,
    img: imgTallerTics,
    title: 'Conferencia de Tecnologías de la Información',
    date: '25 Jan 2023',
    user: 'Sayem',
    comments: 7,
    kindergarten: true,
    tag: '',
    teaser: "Las conferencias fueron impartidas por especialistas en el área de las tecnologías de la información, con el fin de que los alumnos aprendan más sobre el tema.",
  },
  {
    id: 5,
    img: imgTallerElectronica,
    title: 'Taller de electrónica  basica',
    date: '24 Jan 2023',
    user: 'Saif',
    comments: 5,
    daycare: true,
    tag: '',
    teaser: "El taller de electrónica básica, es impartido por un especialista en el área, con el fin de que los alumnos aprendan más sobre el tema.",
  },
  {
    id: 6,
    img: imgImpostor,
    title: 'Conferencia sobre el sindrome del impostor',
    date: '23 Jan 2023',
    user: 'Andrew',
    comments: 3,
    kindergarten: true,
    tag: '',
    teaser: "La conferencia sobre el sindrome del impostor, es impartida por un especialista en el área, con el fin de que los alumnos aprendan más sobre el tema.",
  },
  {
    id: 7,
    img: imgDeportes,
    title: 'Semana de actividades deportivas',
    date: '26 Jan 2023',
    user: 'Watson',
    comments: 9,
    daycare: true,
    tag: '',
    teaser: "El mes de agosto se llevo a cabo la semana de actividades deportivas, en la cual los alumnos de la UTL demostraron sus habilidades en el deporte.",
  },
  {
    id: 8,
    img: img_8,
    title: 'How does Preschool Help in Children Deavelopment',
    date: '27 Jan 2023',
    user: 'Miller',
    comments: 6,
    childreen: true,
    tag: '',
    teaser: "In 1880, we find Milwaukee, Wis., considering the advisability of following the wise lead of St. Louis. A kindergarten was opened in.",
  },
  {
    id: 9,
    img: img_9,
    title: 'Which Toys are Best for Preschool Kids in USA',
    date: '28 Jan 2023',
    user: 'Duminy',
    comments: 8,
    childreen: true,
    tag: '',
    teaser: "Nearly every trade and art has its place in Froebel’s system, which gives the child the alphabet of them all by calling upon him to master.",
  }
]

export default blog_data;