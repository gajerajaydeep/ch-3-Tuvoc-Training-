import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
           

            "Work": "Laptops empower us to work from anywhere, anytime. They facilitate remote collaboration, boost productivity, and provide access to essential tools and resources.",

            "Education": " Laptops have become integral to modern education. They provide students with access to online learning platforms, digital textbooks, and research materials. They also foster digital literacy and prepare students for the technology-driven world they will inherit.",

            "Communication": "Laptops connect us to the world.Through email, social media, and video conferencing, they enable us to stay in touch with family and friends, regardless of distance.They also facilitate global communication and collaboration on a scale never before imagined.",

            "Creativity": "Laptops are powerful tools for creative expression.They provide access to a vast array of software for graphic design, video editing, music production, and more.They empower artists, designers, and content creators to bring their visions to life."

            

        }
    },
    sp: {
        translation: {
            "Welcome to React": "Bienvenido a React y react-i18next",

            "Work": "Las computadoras portátiles nos permiten trabajar desde cualquier lugar y en cualquier momento. Facilitan la colaboración remota, aumentan la productividad y brindan acceso a herramientas y recursos esenciales.",

            "Education": "Las computadoras portátiles se han convertido en parte integral de la educación moderna. Proporcionan a los estudiantes acceso a plataformas de aprendizaje en línea, libros de texto digitales y materiales de investigación. También fomentan la alfabetización digital y preparan a los estudiantes para el mundo impulsado por la tecnología que heredarán.",

            "Communication": "Las computadoras portátiles nos conectan con el mundo. A través del correo electrónico, las redes sociales y las videoconferencias, nos permiten mantenernos en contacto con familiares y amigos, independientemente de la distancia. También facilitan la comunicación y la colaboración globales a una escala nunca antes imaginada.",

            "Creativity": "Las computadoras portátiles son herramientas poderosas para la expresión creativa. Proporcionan acceso a una amplia gama de software para diseño gráfico, edición de video, producción musical y más. Permiten a los artistas, diseñadores y creadores de contenido dar vida a sus visiones."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", 
        fallbackLng: "en", 

    });

export default i18n;