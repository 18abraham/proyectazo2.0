import { Container, Row, Col } from "react-bootstrap"
import { Cards } from "./components/Cards"

export const Gallery = () => {
    const movies = [
        {
            "title": "The Last Horizon",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "In a post-apocalyptic world, a lone pilot embarks on a dangerous mission to find the last safe haven for humanity."
        },
        {
            "title": "Eternal Night",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A group of survivors in a city where the sun never rises must uncover the truth behind the eternal darkness."
        },
        {
            "title": "Cyber Revolt",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "In a future dominated by AI, a group of hackers must fight to reclaim their freedom from a tyrannical supercomputer."
        },
        {
            "title": "Whispers in the Forest",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A family’s retreat into a remote cabin turns into a nightmare when they discover the forest is alive with dark spirits."
        },
        {
            "title": "Quantum Shift",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A scientist accidentally opens a portal to a parallel universe, where he must fight to return to his reality."
        },
        {
            "title": "Savage Seas",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A pirate crew must navigate treacherous waters as they hunt for a legendary treasure guarded by ancient sea creatures."
        },
        {
            "title": "The Midnight Heist",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A group of elite thieves plan the perfect heist, but things quickly spiral out of control when they’re double-crossed."
        },
        {
            "title": "Echoes of Time",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A time traveler must undo the mistakes of the past to prevent a dystopian future from becoming reality."
        },
        {
            "title": "Frostbite",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "In the frozen Arctic, a team of explorers must survive not only the extreme cold but also an unknown predator lurking in the ice."
        },
        {
            "title": "Neon Skies",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "In a futuristic metropolis, a rogue detective uncovers a conspiracy that threatens to destroy the entire city."
        },
        {
            "title": "Moonlit Curse",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A cursed amulet brings misfortune to anyone who possesses it, but one woman is determined to break its spell before it consumes her."
        },
        {
            "title": "Galactic Outlaws",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A crew of space mercenaries must team up with their former enemies to stop an intergalactic war."
        },
        {
            "title": "Shattered Memories",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A man suffering from amnesia must piece together his fragmented memories to solve a mystery that could change his life forever."
        },
        {
            "title": "Beneath the Waves",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "An underwater expedition leads to the discovery of an ancient civilization buried deep beneath the ocean."
        },
        {
            "title": "The Silent Assassin",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A legendary assassin is forced out of retirement when a new threat emerges in the criminal underworld."
        },
        {
            "title": "Phoenix Rising",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "After losing everything, a fallen hero must rise from the ashes to take down the corrupt organization that destroyed his life."
        },
        {
            "title": "The Dragon's Wrath",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "In a world of magic and dragons, a young warrior must stop an ancient dragon from unleashing its wrath on the kingdom."
        },
        {
            "title": "City of Shadows",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A detective must navigate the dark underbelly of a city plagued by crime and corruption to catch a notorious serial killer."
        },
        {
            "title": "Tempest",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "A mysterious storm brings chaos to a small coastal town, and a young woman must unravel its secrets to save her family."
        },
        {
            "title": "The Forgotten Kingdom",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "An adventurer stumbles upon"
        },
        {
            "title": "El Padrino",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un poderoso jefe de la mafia italiana en Nueva York intenta mantener a su familia unida mientras enfrenta el conflicto con otras organizaciones criminales."
        },
        {
            "title": "Titanic",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Una joven de clase alta y un artista pobre se enamoran a bordo del lujoso transatlántico Titanic, que enfrenta un destino trágico."
        },
        {
            "title": "Inception",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un ladrón especializado en infiltrarse en los sueños de las personas recibe una tarea imposible: implantar una idea en la mente de un objetivo."
        },
        {
            "title": "Matrix",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un hacker descubre que la realidad que conoce es una simulación y se une a un grupo de rebeldes para luchar contra las máquinas."
        },
        {
            "title": "Jurassic Park",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un parque temático que alberga dinosaurios clonados de ADN antiguo enfrenta un desastre cuando las criaturas escapan de su recinto."
        },
        {
            "title": "Forrest Gump",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "La vida de un hombre con un coeficiente intelectual bajo se entrelaza con eventos históricos a través de su inocencia y bondad."
        },
        {
            "title": "Gladiator",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un general romano es traicionado y convertido en esclavo, luchando por su venganza en la arena del Coliseo."
        },
        {
            "title": "El Señor de los Anillos: La Comunidad del Anillo",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un grupo de héroes se embarca en una misión épica para destruir un anillo que tiene el poder de someter a la Tierra Media."
        },
        {
            "title": "La La Land",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un músico y una actriz luchan por alcanzar sus sueños en Los Ángeles mientras se enfrentan a los desafíos de su relación."
        },
        {
            "title": "El Origen",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un ladrón que roba secretos a través de los sueños debe realizar un último trabajo para poder redimirse."
        },
        {
            "title": "Los Vengadores",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un grupo de superhéroes se une para proteger el mundo de una amenaza extraterrestre."
        },
        {
            "title": "Star Wars: Episodio IV - Una Nueva Esperanza",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un joven granjero se une a un grupo de rebeldes para luchar contra un imperio tiránico y rescatar a una princesa."
        },
        {
            "title": "Coco",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un niño mexicano sueña con convertirse en músico y se embarca en un viaje por el mundo de los muertos para descubrir sus raíces."
        },
        {
            "title": "Pulp Fiction",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Las vidas de varios criminales se entrelazan en una narrativa no lineal llena de diálogos memorables y situaciones inesperadas."
        },
        {
            "title": "El Club de la Pelea",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un hombre desencantado encuentra un propósito en una sociedad secreta de peleas, que pronto se convierte en algo más."
        },
        {
            "title": "The Dark Knight",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Batman enfrenta al Joker, un criminal anárquico que busca sembrar el caos en Gotham City."
        },
        {
            "title": "Toy Story",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Las aventuras de juguetes que cobran vida cuando sus dueños no están presentes."
        },
        {
            "title": "Avatar",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "En un mundo alienígena, un ex-marine se infiltra en la cultura nativa para ayudar a su gente a proteger su hogar de la explotación."
        },
        {
            "title": "Mad Max: Furia en la carretera",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "En un mundo post-apocalíptico, un guerrero solitario se une a un grupo de rebeldes para luchar contra un tirano."
        },
        {
            "title": "El silencio de los corderos",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Una joven agente del FBI busca la ayuda de un asesino en serie encarcelado para atrapar a otro asesino."
        },
        {
            "title": "Zootopia",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Una conejita policía y un astuto zorro forman una inusual alianza para resolver un misterio en una ciudad de animales."
        },
        {
            "title": "El resplandor",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un escritor toma un trabajo como cuidador de un hotel aislado, donde fuerzas sobrenaturales amenazan su cordura."
        },
        {
            "title": "Los Increíbles",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Una familia de superhéroes debe abandonar su vida normal para enfrentarse a un villano que amenaza al mundo."
        },
        {
            "title": "Her",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un hombre solitario se enamora de un sistema operativo con inteligencia artificial, explorando la naturaleza del amor y la conexión."
        },
        {
            "title": "Toy Story 3",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Los juguetes de Andy enfrentan el cambio cuando su dueño se prepara para ir a la universidad y se enfrentan a un nuevo hogar."
        },
        {
            "title": "El gran Lebowski",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Un 'dude' se ve envuelto en un caso de identidad equivocada que lo lleva a una serie de enredos hilarantes."
        },
        {
            "title": "Alicia en el País de las Maravillas",
            "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpblbbodlEAk_YJ0l3MFWcAO68RZEcSwmCow&s",
            "desc": "Una joven cae por un agujero y descubre un mundo mágico lleno de personajes extraños y maravillosos."
        }


    ]
    return (
        <Container>
            <Row>

                {
                    movies.map(({ title, urlImg, desc }) => (
                        <Cards title={title} urlImg={urlImg} desc={desc} />
                    ))
                }

            </Row>
        </Container>
    )
}
