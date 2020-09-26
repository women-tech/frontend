import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PonentesService {

  private ponentes:any[]=[
    {
        nombre: "Daniella Servín Cervantes",
        descripcion:"Estudiante de 5to semestre de Ingeniería en Biotecnología en el Tecnológico de Monterrey campus Puebla. Fue integrante de la primera generación de “Mujeres líderes en STEAM”; fue Junior Member en la Academia de Ciencias de Nueva York 2016-2017; quedó en 2do lugar del Reto Emprendedor 2016 en campus Puebla; además, fue integrante de la primera etapa de la elaboración de un medicamento con Roseoflavina. Colaboración con Universidades de Alemania y el Tecnológico de Monterrey, campus Puebla. Le gustaría enfocarme en la Biotecnología Roja, crear algún medicamento nuevo o vacuna. Asimismo, le encantaría trabajar en alguna empresa importante nacional o extranjera. Le gusta hacer ejercicio, escuchar música, estudiar documentos cientificos y pasar tiempo con sufamilia y amigos.",
        imagen:"assets/feria/daniella.jpeg",
        carrera: "Ingeniería Agroquímica",
        fecha: "5 de noviembre",
        horario: "19:00 pm"
    },
    {
      nombre: "Wendy Michelle Arellano Martínez",
      descripcion:"Estudiante de 5to semestre de Ingeniería en Biotecnología en el Tecnológico de Monterrey campus Puebla. Fue integrante de la primera generación de “Mujeres líderes en STEAM”; quedó en 2do lugar del Reto Emprendedor 2016 en campus Puebla; además, fue integrante de la primera etapa de la elaboración de un medicamento con Roseoflavina. Colaboración con Universidades de Alemania y el Tecnológico de Monterrey, campus Puebla. Le gustaría enfocarme en la Biotecnología Roja, crear algún medicamento nuevo o vacuna. Asimismo, le encantaría trabajar en alguna empresa importante nacional o extranjera. Le gusta hacer ejercicio, escuchar música, estudiar documentos cientificos y pasar tiempo con sufamilia y amigos.",
      carrera: "Ingeniería en Biotecnología",
      imagen:"assets/feria/Wendy.jpeg",
      fecha: "2 de noviembre",
      horario: "16:00 pm"
  },
  {
      nombre: "Estefanía Pitol Martínez",
      descripcion:"Estudiante de 9no semestre de Ingeniería en Tecnologías Computacionales en el Tecnológico de Monterrey Campus Puebla. Ha tenido estancias como Ingeniero de Software en Twitter, Microsoft y Google. Sus intereses profesionales son la educación, la inteligencia artificial y las aplicaciones de la computación en la medicina y biología, el desarrollo de software, entre otros. Es ajedrecista y esta becada en el deporte en la universidad, siendo así parte del equipo representativo de ajedrez. Disfruta cantar y dibujar.",
      carrera: "Ingeniería en Tecnologías Computacionales",
      imagen:"assets/feria/fanny.jpg",
      fecha: "6 de noviembre",
      horario: "18:00 pm"
  },
  {
      nombre: "Nashely Martínez Chan",
      descripcion:"Estudiante de 9no semestre de Ingeniería en Sistemas Digitales y Robótica en el Tecnológico de Monterrey campus Puebla.",
      carrera: "Ingeniería en Sistemas Digitales y Robótica",
      fecha: "2 de noviembre",
      imagen:"assets/feria/nash2.jpeg",
      horario: "19:00 pm"
  },
  {
      nombre: "Ana Sofía Juárez Cruz",
      descripcion:"Estudiante de 9no semestre de Ingeniería Mecatrónica en el Tecnológico de Monterrey campus Puebla. Su experiencia académica incluye el desarrollo de un sistema de detección de obstáculos en colaboración con Volkswagen México, participación en el desarrollo de un dispositivo ergonómico para un operador industrial. Cuenta con una conentración en Estudios de Género en (Uis) Stavanger, Noruega. Entre sus intereses profesionales se encuentran el diseño en software CAD, mecanismos y automatización. Sus intereses personales incluyen el Tenis, el cine y leer.",
      carrera: "Ingeniería en Mecatrónica",
      imagen:"assets/feria/sofia.jpeg",
      fecha: "5 de noviembre",
      horario: "16:00 pm"
  },
  {
      nombre: "Karla Gabriela Domínguez Pérez",
      descripcion:"Estudiante de 6to semestre de Ingeniería Biomedica en el Tecnológico de Monterrey campus Guadalajara. Ha participado en diferentes servicios sociales como ayudar a niños de casas hogares. Actualmente apoya a la empresa Tecnologías al Servicio de la Comunidad, la cual se encarga de apoyar a que personas que han sufrido alguna amputación a que puedan volver a realizar sus actividades diarias con una prótesis.",
      carrera: "Ingeniería en Mecatrónica",
      fecha: "5 de noviembre",
      imagen:"assets/feria/karla.jpg",
      horario: "17:00 pm"
  },
  {
      nombre: "Arlem Villegas Praga",
      descripcion:"Estudiante de 7mo semestre de Ingeniería Industrial y de Sistemas en el Tecnológico de Monterrey campus Hidalgo. Le apasiona la logística, la administración de producción y el emprendimiento. Junto a su equipo, fue ganadora del Reto Emprendedor 2017 en campus Hidalgo; ha colaborado con dos empresas para resolver problemas operativos; además, ha sido staff en eventos como INGENIUS. Actualmente participa en dos proyectos de emprendimiento social, trabaja en Coca-Cola y es dueña de Chocograph.",
      carrera: "Ingeniería en Mecatrónica",
      fecha: "4 de noviembre",
      imagen:"assets/feria/arlemia.jpeg",
      horario: "18:00 pm"
  },
  {
      nombre: "Jaime Cervantes García",
      descripcion:"Estudiante de 7mo semestre de Ingeniería en Robótica Industrial en la Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME) Azcapotzalco del Instituto Politécnico Nacional. Ha capacitado a productores agrícolas en innovación tecnológica cómo es la agricultura de precisión. Se encuentra tomando cursos online sobre Machine learning. En un futuro, le gustaría tener un centro de investigación integral e interdisciplinario. Lo que más le apasiona de su carrera es la ingeniería asistida por computadora: la simulación y diseño de elementos mecánicos, electrónicos, hidráulicos y de sistemas de manufactura. Además, le gusta leer y aprender sobre física.",
      carrera: "Ingeniería en Robótica Industrial",
      fecha: "4 de noviembre",
      imagen:"assets/feria/jaime.jpeg",
      horario: "16:00 pm"
  },
  {
      nombre: "Zaida Lizeth Perea Guerra",
      descripcion:"Estudiante de 7mo semestre de Ingeniería Civil en le Tecnológico de Monterrey campus Puebla. Ha participado en proyectos de urbanismo y mecánica de suelos, dentro de la universidad. Actualmente ae encuentra tomando un curso en Harvard Bussiness School Online sobre emprendimiento. En un futuro, le gustaría tener una constructora y descubrir formas de optimizar costos en obra. Uno de sus temas favoritos es la ingeniería de carreteras. En su tiempo libre le gusta leer, tomar cursos online y atender su tienda en línea.",
      carrera: "Ingeniería Civil",
      fecha: "4 de noviembre",
      imagen:"assets/feria/zaida.jpeg",
      horario: "19:00 pm"
  },
  {
      nombre: "Pamela Monserrat Negrete López",
      descripcion:"Estudiante de 7mo semestre de Ingeniería en Dirección de Negocios en la Universidad Anáhuac Puebla. Lo que más le encanta su carrera es cómo se fusionan la ingeniería con los negocios. Le gusta aprender cosas nuevas todo el tiempo y estar con las personas que ama.",
      carrera: "Ingeniería en Dirección de Negocios",
      fecha: "3 de noviembre",
      imagen:"assets/feria/pamela.jpeg",
      horario: "16:00pm"
  },
  {
      nombre: "Diana Martínez Estavillo",
      descripcion:"Estudiante de 7to semestre de Ingeniería en Innovación y Desarrollo en el Tecnológico de Monterrey campus Puebla. Sus intereses tanto profesionales y personales van de la mano; se considera una persona creativa y capaz de solucionar problemas. Le encanta participar en grupos sociales y en voluntariado, o cualquier actividad que se realice en equipo. Forma parte del equipo representativo de basketball del campus. Además, tiene experiencia coordinando el grupo social SuperCompuCampo.",
      carrera: "Ingeniería en Innovación y Desarrollo",
      fecha: "4 de noviembre",
      imagen:"assets/feria/diana.jpeg",
      horario: "17:00pm"
  },
  {
      nombre: "Erandy Salgado Valladares",
      descripcion:"Estudiante de 7mo semestre de Química Farmacéutica Biológica de la Facultad de Química en la UNAM. Ha participado en concursos académicos de su facultad, en Clubes de Ciencia y distintas estancias cortas de investigación. Gracias a estos proyectos, se ha acrecentado su genuino amor a la ciencia, especialmente en la investigación de microbiota y enfermedades metabólicas. Le gusta aprender sobre biotecnología y farmacia para participar en un futuro en las soluciones a las problemáticas de salud; le interesa laborar en la industria farmacéutica. Unas de sus mayores metas profesionales es formar parte del SNI e inspirar a más mujeres a ser parte de la comunidad científica. A parte de estudiar, disfruta hacer deporte, practicar yoga, correr al aire libre y jugar juegos de mesa con sus amigas, amigos y familia. Ama descubrir sitios nuevos y enamorarse de la naturaleza.",
      carrera: "Licenciatura en Química Farmacéutica Biológica",
      fecha: "3 de noviembre",
      imagen:"assets/feria/erandy.jpg",
      horario: "19:00 pm"
  },
  {
      nombre: "Cynthia Elizabeth Castillo Silva",
      descripcion:"Estudiante de 6to semestre de Matemáticas en la UANL. Le gustan las ciencias, en especial las que están relacionadas con las matemáticas, la biología y la computación. Actualmente es la presidenta de COMEMAT y se encuentra trabajando en proyectos de bioinformática en un equipo multidisciplinario.",
      carrera: "Licenciatura en Matemáticas",
      fecha: "2 de noviembre",
      imagen:"assets/feria/cynthia.jpg",
      horario: "17:00pm"
  },
  {
      nombre: "Claudia Daniela Rubio Ruíz",
      descripcion:"Estudiante de 7mo semestre de Física en la Facultad de Ciencias de la UNAM. Ingresó a la carrera motivada por su curiosidad acerca de la Astrofísica/astronomía. Una vez dentro tomó cursos optativos de Filosofía e Historia de la Física que hicieron que se interesara en ambos aspectos y en la epistemología (la teoría del conocimiento). También en su carrera desarrolló un gusto por la computación, la geometría y el álgebra lineal. Le encantan los temas de electromagnetismo. Extracurricularmente dibuja, lee y toca el piano.",
      carrera: "Licenciatura en Física",
      fecha: "6 de noviembre",
      imagen:"assets/feria/daniela.jpg",
      horario: "16:00pm"
  },
  {
      nombre: "Mireya Daniela Arreguín Ávila",
      descripcion:"Estudiante de 7mo semestre de Biología en la Universidad de Colima. Lo que más le gusta de su carrera es viajar y al mismo tiempo estar en contacto con la naturaleza, principalmente con la fauna. Algunas de las cosas que ha hecho es monitoreo de cocodrilos y búsqueda e identificación de reptiles y anfibios, principalmente. Por otro lado, sus prácticas en laboratorio abarcan cultivo de bacterias, hongos microscópicos e incluso taxidermia. Además de ello, pertenece a un club encargado de la difusión de la biodiversidad de Colima.",
      carrera: "Licenciatura en Biología",
      fecha: "2 de noviembre",
      imagen:"assets/feria/danielaa.png",
      horario: "18:00 pm"
  },
  {
      nombre: "Karen Gómez García",
      descripcion:"Estudiante de 4to semestre de la Ingeniería en Recursos Naturales Renovables del Departamento de Estudios e Investigación Superior de SUELOS en la Universidad Autónoma Chapingo, en donde igual funge como consejera departamental por su generación. Estudió en la preparatoria agrícola de la misma universidad. Representó a su departamento en la feria nacional de la cultura rural 2019. Asistió a la 2ª conferencia sobre manejo y conservación de fauna silvestre organizado por el Campus San Luis Potosí del Colegio de Postgraduados. Estuvo presente en el V congreso internacional de investigación socioeconómica y ambiental de la producción pecuaria. Organizado por la facultad de medicina veterinaria y zootecnia de la UNAM, Universidad Autónoma Chapingo, COLPOS y CIESTAAM.",
      carrera: "Ingeniería en Recursos Naturales Renovables",
      fecha: "6 de noviembre",
      imagen:"assets/feria/karen.jpeg",
      horario: "19:00 pm"
  },
  {
      nombre: "Mónica Fuentecilla Rivera",
      descripcion:"Estudiante de 7mo semestre de Ingeniería en Diseño Automotriz en el Tecnológico de Monterrey campus Puebla. Le interesa la industria automotriz, ya que es parte de nuestra vida diaria y con el paso del tiempo ha implementando diversos avances tecnológicos. Aspira a trabajar con automóviles deportivos implementando nuevas tecnologías amigables con el medio ambiente pero, sobre todo, mejorando su desempeño. Su pasión hacia las carreras aumentó cuando empezó la universidad, ya que en sus primeros semestres se unió a una escudería donde aprendió todo lo que es mecánica básica y las herramientas del laboratorio de manufactura. En su primer año participó en una carrera de Gravity en la Malinche; en el segundo, en un Downhill challenge; en el cuarto, en Gravity Race car.",
      carrera: "Ingeniería en Diseño Automotriz",
      fecha: "3 de noviembre",
      imagen:"assets/feria/monica.jpeg",
      horario: "18:00pm"
  },
  {
      nombre: "Natalia Isabel Ramírez Estrada",
      descripcion:"Técnico en mecatrónica por el CBTis 118, y estudiante de 7mo semestre de Tecnología en la UNAM campus Juriquilla, donde pertenece al Centro de Física Aplicada y Tecnología Avanzada. Es miembro de la Sociedad Científica Juvenil sede Querétaro, participó en Technovation Girls 2017 y actualmente participa en un proyecto PAPIIT a cargo del Dr. Jorge X. Velasco Hernández sobre 'Modelación matemática de procesos infecciosos y su generalización al estudio de la conducta humana'. Sus intereses son principalmente la ciencia, la electrónica y la física. Le gusta leer, las plantas, ver series y películas, sobre todo las del estudio Ghibli y todo lo que sea animado. Su principal interés son las matemáticas y ha tenido experiencia en proyectos sobre epidemiología y también en estabilidad de sistemas dinámicos",
      carrera: "Licenciatura en Tecnología",
      fecha: "6 de noviembre",
      imagen:"assets/feria/natalia.jpeg",
      horario: "17:00pm"
  },
  {
      nombre: "María Alexandra Blanco Soriano",
      descripcion:"Estudiante de 6to semestre de Ingeniería Biónica en el Instituto Politécnico Nacional. Ha tenido la oportunidad de representar a su escuela en concursos de ciencias a nivel estatal y nacional. Es apasionada por la participación de las mujeres en la ciencia, cosa que la ha llevado a ser la vicepresidenta del grupo de afinidad 'Women in Engineering' de UPIITA-IPN. Le gusta mucho participar y organizar eventos donde se divulge la ciencia y el lado más humanitario de las ingenierías. Se considera amante de la historia del arte, de los atardeceres y de aprender palabras que no tienen traducción al español.",
      carrera: "Ingeniería Biónica",
      fecha: "3 de noviembre",
      imagen:"assets/feria/male1.jpg",
      horario: "17:00pm"
  },
  ]
  constructor() { }
  getPonentes(){
    return this.ponentes;
  }
}
