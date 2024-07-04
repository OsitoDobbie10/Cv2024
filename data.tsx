import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Facebook,Rss, Twitch, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carlos-antonio-archaga-martinez-b7a494171/",
    },
    {
        id: 2,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "https://github.com/OsitoDobbie10",
    },
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/profile.php?id=100009068534290&mibextid=ZbWKwL",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/Sobremi",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/Servicios",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonios",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Analista GIS",
        subtitle: "TICO CONSULTORES DE INGENERIA Y TOPOGRAFIA",
        description: "Analista SIG en el proyecto reubicación de personas afectadas por los huracanes ETA, IOTA mapeode zonas inundadas con imágenes de RADAR, Fotogrametría obtención en campo vuelo de Drone apoyado con GPS de precisión y productos de interés para la identificación de los zonas de reubicación de las personas afectadas.",
        date: "2021",
    },
    {
        id: 2,
        title: "Analista y desarrollador GIS",
        subtitle: "INGENERIA GERENCIAL",
        description: `Analista SIG en el departamento de GIS de ingeniería gerencial y desarrollador en la creación de publicaciones de mapas web con tecnología ESRI en un sistema portal de servicios Enterprise de ArcGIS usando las tecnologías esenciales y api de JavaScript, Procesamiento de imágenes de drones con el software Pix4di Mapper y Matic, Automatización de procesos con ARCPY en ARCGISPRO, Creación de caja de herramientas para procesamiento de gran volumen de datos`,
        date: "2022-2023",
    },
    {
        id: 3,
        title: "Dibujante y supervisor de construcción",
        subtitle: "TEKCOM",
        description: "Creación de planos de instalación de fibra óptica, aplicaciones enfocadas en coordenadas para visualización de zonas de interés, aplicaciones web de mapas para toma de daciones",
        date: "2023",
    },
    {
        id: 4,
        title: "Técnico GIs1",
        subtitle: "INE censo nacional agropecuario y vivienda",
        description: "Supervisor en la actualización cartográfica por municipios para la carga y distribución de aplicaciones móvil para cuadrillas de actualización, Creación de herramientas de automatización de digitalización con Python y ModelBuilder",
        date: "2024",
    },
    {
        id: 5,
        title: "Operador Pase Batch",
        subtitle: "ENEE Distribucion",
        description: `Operador de proceso de facturación y recepción de datos en el cobro de energía eléctrica a nivel nacional, Creación de aplicaciones de visualización de los indicadores de a base de datos usando NestJS en el backend y React en el frontEnd conectando a la base de datos de producción de Oracle de UTCD, Monitoreo SQL en la ejecución de pase batch inCMS.`,
        date: "ACTUALIDAD",
    }

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño de aplicaciones full stack enfocadas a la nesecidad del cliente",
    },
    {
        icon: <Book />,
        title: "Analisis SIG",
        description: "Analisis de datos espaciales enfocada en tematicas como Percepcion remota, catastro, cartografia, gestion de riesgo de desastres, hidrologia, geoestadistica y analisis de redes",
    },
    {
        icon: <Rocket />,
        title: "Analisis de datos",
        description: "Analisis, representacion y almancenamiento de datos, depuracion y limpieza de datos, analisis estadistico y modelo de datos SQL ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "IDESGC",
        image: "/web1.PNG",
        urlGithub: "https://github.com/OsitoDobbie10/web-demo-idesgc",
        urlDemo: "https://web-sig-demo.netlify.app/",
    },
    {
        id: 2,
        title: "Aplicacion de venta de comidas",
        image: "/web2.PNG",
        urlGithub: "https://github.com/OsitoDobbie10/DaniDonasweb",
        urlDemo: "https://tiendavirtualcompras.netlify.app/",
    },
    {
        id: 3,
        title: "Aplicacion de vista de peliculas YT Movies",
        image: "/MovieYT.png",
        urlGithub: "https://github.com/OsitoDobbie10/MoviesYT_APP_React",
        urlDemo: "https://superb-sunburst-bdc8cf.netlify.app/",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Arcgis PRO, entorno web de Arcgis online y entherprise",
        description:"Manejo en el ecosistema de ESRI desde arcgis desktop y pro, arcgis online y portal para entherprise, manejo de aplicaciones escenciales y customizacion con esri developer usando la api de Javascript y React",
        imageUrl: "/ESRI-ecosistema.jpg",
    },
    {
        id: 2,
        name: "QGIS y desarrollo GIS opensource",
        description:
            "Manejo del software QGIS, cliente web leaflet,mapbox y open layers, despliegue y mantenimiento de servicios GIS web con geoserver, mapstore, geonetwork y postgis como gestor de base de datos",
        imageUrl: "/GIS-OPEN.png",
    },
    {
        id: 3,
        name: "Desarrollo web",
        description:
            "Esquema de desarrollo enfocado en Javascript usando como cliente ReactJS con NextJS14, backend uso NestJS, Supabase con PostgresSQL y Strapi con PostgresSQL",
        imageUrl: "/Ecosistema-JS.jpg",
    },
    {
        id: 4,
        name: "Analisis de datos",
        description:
            "Analisis de datos enfocada a la inteligencia de negocios y representacion de datos usando R, Python, SQL, PowerBi y excel",
        imageUrl: "/Ecosistema-analisisdatos.webp",
    },
    {
        id: 5,
        name: "Topografia, CAD y fotogametria",
        description:
            "Manejo de software CAD, Civil CAD y software para procesamiento de fotogametria y nube densa de puntos como pix4di y pix4matic y open source open drone map",
        imageUrl: "/Fotogametria.webp",
    }

];   
