import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarreerasService {
  private carreras:any[]=[
    {
      nombre:"Ingeniero Civil",
      descripcion: "La ingeniería civil es la disciplina de la ingeniería que emplea conocimientos de cálculo, mecánica, hidráulica y física para encargarse del diseño, construcción y mantenimiento de las infraestructuras emplazadas en el entorno, incluyendo carreteras, ferrocarriles, puentes, canales, presas, puertos, aeropuertos, diques y otras construcciones relacionadas.",
      perfil:"Haber concluido el bachillerato en el área de las ciencias exactas o ciencias físico-matemáticas para que cuente con una sólida base en estas ciencias.",
      campo: " Empresas constructoras e inmobiliaria, despachos de diseño estructural para proyectos de edificación, vías de comunicación y transporte, empresas que proyectan obras hidráulicas y de tratamiento de agua, así como empresas que realizan estudios de impacto ambiental, gerencias de proyectos y empresas de supervisión de obras de infraestructura pública y privada, sector gobierno y desarrollo de políticas públicas para el desarrollo urbano y social, etc.",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero en Innovación y Desarrollo",
      descripcion: "El Ingeniero en Innovación y Desarrollo es un profesionista que identifica oportunidades de innovación sistemáticamente y crea soluciones de base tecnológica integrales, innovadoras y sostenibles en campos emergentes de la ingeniería. Domina metodologías de innovación sistémicas y de vanguardia, y con un enfoque interdisciplinario, genera consistentemente nuevas formas de crear valor para las organizaciones y ecosistemas en los que participa. Tiene la capacidad de conducir procesos de transferencia tecnológica, y de gestionar portafolios, programas y proyectos de innovación tecnológica de acuerdo con la estrategia organizacional.",
      perfil:" Conocimientos sólidos de física y matemáticas.",
      campo: " Empresas con enfoque en la innovación, creación y desarrollo de nuevos productos y servicios de base tecnológica, diseño de nuevos modelos de negocio para empresas de base tecnológica, etc. ",
      imagen: "imagen"
    },

    {
      nombre:"Ingeniero Mecánico",
      descripcion: "El Ingeniero Mecánico tiene como objetivo el diseño e innovación de sistemas electromecánicos, con habilidades para seleccionar los materiales adecuados para la fabricación de productos; para seleccionar, diseñar e integrar  procesos de manufactura convencionales y avanzados; también para realizar esquemas de mantenimiento, llevar a cabo análisis de fallas, integrar sistemas de transformación de energía mecánica y para integrar de manera innovadora la manufactura y la administración de proyectos a procesos productivos. Todo esto tomando como referencia el desarrollo sostenible.",
      perfil:" Haber concluido el bachillerato en el área de las ciencias exactas o ciencias físico-matemáticas para que cuente con una sólida base en estas ciencias.",
      campo: " Giro automotriz, aeronáutico, metal mecánico, energético, de refrigeración y aire acondicionado, electrodomésticos, entre otros, centros de investigación y desarrollo tecnológico, centros de diseño e ingeniería, etc ",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero en Mecatrónica",
      descripcion: "El ingeniero Mecatrónico mediante la aplicación de conocimientos físico-matemáticos y técnicas avanzadas de ingeniería, contribuye al desarrollo tecnológico, es un experto en el diseño y creación de procesos y productos en una amplia gama de áreas, incluyendo robótica, líneas de producción, sistemas automáticos y dispositivos médicos, automotrices y aeroespaciales, entre otros.",
      perfil:"Conocimientos sólidos de física y matemáticas, manejo de la computación y del idioma inglés. ",
      campo: " La industria automotriz, manufacturera, petrolera, de generación de energía eléctrica, minera, siderúrgica, agroindustrial, de alimentación y salud, así como los servicios de transporte. ",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero en Electrónica",
      descripcion: "El ingeniero Electrónico es el profesional capaz de crear, diseñar y generar tecnología; así como de, innovar, planear y poner en operación sistemas eléctricos y electrónicos; en el desarrollo de tecnologías contribuye a aplicar estas innovaciones en más productos, con el objetivo de mejorar la calidad de vida de las personas e incrementar la competitividad de organizaciones y empresas. Tienen la capacidad de generar tecnología mediante el uso de sensores y dispositivos inteligentes que se utilizan en áreas como las telecomunicaciones, los sistemas autónomos, la transformación de la energía eléctrica, los robots, los automóviles y los accesorios médicos, con el objetivo de elevar la productividad y la competitividad de las empresas y el bienestar de la sociedad.",
      perfil:"Conocimientos sólidos de matemáticas, física, química, computación e inglés.",
      campo: " Empresas públicas y privadas del sector eléctrico, electrónico, de telecomunicaciones, energético,  metal-mecánica, siderúrgica, de la transformación y petrolera. Desarrollo de dispositivos electrónicos inteligentes. Diseño de sistemas de telecomunicaciones. Consultoría en áreas de electrónica, telecomunicaciones y sistemas de energía, Centros de investigación en las áreas de electrónica, telecomunicaciones y electrónica de potencia. ",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero Industrial y de Sistemas",
      descripcion: "El ingeniero Industrial y de Sistemas tiene un enfoque integral para gestionar proyectos y procesos de cambio que incrementan la calidad y productividad, utilizando la modelación matemática, la analítica de datos y las tecnologías de información para tomar las mejores decisiones. Diseña el proceso de transformación para una empresa, a partir del de un producto o servicio, aplicando las técnicas y estrategias de ingeniería industrial, con la finalidad optimizar el uso de recursos. Así como también los procesos de administración eficientes, a través del uso adecuado de los recursos, para mejorar la entrega, el proceso y el servicio de las organizaciones. Desarrolla estrategias de negocios que respondan a las áreas de oportunidad de una organización, a través del uso de técnicas de estudio de mercado, planeación, control de la producción y administración de proyectos de inversión, con la finalidad de mejorar la productividad y la competitividad de la organización con un enfoque de sustentabilidad.",
      perfil:"Las ciencias básicas y tecnologías de cómputo análisis y síntesis de información, Criterio y razonamiento lógico para la solución de problemas",
      campo: " Sector público: Participa automatizando procesos administrativos en entidades gubernamentales en todos sus niveles así como desarrollando software especializado para satisfacer los requerimientos específicos de dependencias gubernamentales.Sector privado: Se desempeñan como diseñadores y desarrolladores líderes y administradores de proyectos computacionales en empresas de transformación servicios y comerciales nacionales e internacionales.",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero Biomédico",
      descripcion: "La Ingeniería Biomédica es una disciplina de reciente creación. Su definición más aceptada podría ser la aplicación de los principios de la ingeniería a las ciencias de la vida. Combina los criterios de diseño en ingeniería y las herramientas de análisis provenientes de las matemáticas, la física y la química a la resolución de problemas en medicina, biología, biotecnología, farmacia, etc.",
      perfil:" Ciencias básicas, biológicas y exactas, informática básica, temas de actualidad en ciencia y tecnología bases de metodología de la investigación, inglés básico.",
      campo: "Al egresar, ten la certeza de emplearte en una empresa nacional o transnacional en la que puedas diseñar equipo para hospitales y atención de pacientes o, crea tu propio negocio para comercializar productos biomédicos.",
      imagen: "imagen" 
    },

    {
      nombre:"Ingeniero en Sistemas Digitales y Robótica ",
      descripcion: "El programa de Ingeniero en Robótica y Sistemas Digitales tiene como objetivo formar  profesionistas con sólidos conocimientos en las áreas de diseño digital, ingeniería computacional y electrónica, con énfasis en su aplicación a la robótica. Esta preparación le permite al egresado generar soluciones tecnológicas al servicio de las personas y las organizaciones a través de dispositivos electrónicos y robóticos así como sus correspondientes sistemas de software embebido.",
      perfil:" Conocimientos sólidos de física y matemáticas, manejo de la computación y del idioma inglés. ",
      campo: "Diseño y construcción de sistemas digitales. Desarrollo de componentes de inteligencia de robots.Desarrollo de sistemas embebidos para uso específico.Creación de interfaces para la interacción inteligente entre dispositivos digitales.Centros de investigación y desarrollo de nuevas tecnologías.Administración y/o consultoría en sistemas digitales.",
      imagen: "imagen" 
    }
    

    
  ]
  constructor() { }

  getCarreras(){
    return this.carreras;
  }
}
