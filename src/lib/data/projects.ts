export interface ProjectDefinition {
  title: string;
  link: string;
  desc: string;
}

export const ALL_PROJECTS: ProjectDefinition[] = [
  {
    title: "qn",
    link: "https://github.com/elsantiF/qn",
    desc: `qn was a way to learn about programming languages and compilers. It's a simple programming language written in TypeScript, 
    that transpiles to JavaScript and TypeScript. Tries to be a simple, minimalistic and expressive.`,
  },
  {
    title: "Crane",
    link: "https://github.com/elsantiF/Crane",
    desc: `Crane is a simple 2D game engine written in C++23. It uses SDL3, Box2D, ImGui and entt. Based on an Entity-Component-System architecture.
				It was designed to be used in a game jam but don't finished in time, so I continued the development after the jam. I actually want to
				make my own physics engine to replace Box2D. The engine is in a very early stage.`,
  },
  {
    title: "Banshee",
    link: "https://github.com/elsantiF/Banshee",
    desc: `Banshee is a simple 3D render engine written in C++23 and OpenGL. Inspired by the page "LearnOpenGL".
				Uses modern C++ features, also the libraries used are: GLFW, GLM, stb_image, ImGui and Assimp.
				Was a personal project to learn more about C++ and OpenGL, and become the base of a future game engine in Vulkan and SDL3.`,
  },
  {
    title: "KOPMod",
    link: "https://github.com/elsantiF/KOPMod",
    desc: `As a rocket fan, when Kerbal Space Program 2 was launched I immediately buy it, but the game had a poor performance.
                So I wrote this little mod to slightly increase the performance, and surprisingly it worked, some people went from 8 FPS to 20.
                As new patches are released to the game, the performance is getting better, so I suspend the development of the mod for a while.
                I made the mod in 48 hours after the release of the game, so isn't well programmed, but works.`,
  },
  {
    title: "TeLoFunca",
    link: "https://github.com/elsantiF/TeLoFunca",
    desc: `TeLoFunca was our end-of-year project during the second year of high school. It's essentially a copy of Can You RUN It, 
                and the name is a play on words with "funcar," which means "works well" in Spanish (at least in Uruguay).
                We couldn't use any database, so the data is in multiple JSON files. 
                Additionally, it incorporates a (mini)template system. I plan to upload it to this page in the future.`,
  },
  {
    title: "Quads",
    link: "https://github.com/elsantiF/Quads",
    desc: `It was my first attempt to make a videogame, a 2D Minecraft clone written in Java and LWJGL2
                (is the same project that is mentioned in the biography). I was 14 years old at the time when I worked on it, so it is a very special project for me.`,
  },
];
