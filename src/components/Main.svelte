<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "Legacy Robotics",
      icon: "fa-solid fa-robot",
      href: "https://teamlegacy.site/about/",
      description:
        "At Legacy Robotics, we developed an autonomous targeting system using Python and Jetson Nano. We utilized the YOLO object detection for rapid enemy tracking and enhanced camera precision with the Zed SDK.",
    },
    {
      name: "Twitter Bot",
      icon: "fa-brands fa-twitter",
      href: "https://github.com/gregkab/twbot",
      description:
        "Developed a dynamic bot leveraging the Twitter API to automate actions based on specific hashtags. Deployed seamlessly with PythonAnywhere, the bot can handle up to 10,000 daily interactions.",
    },
    {
      name: "UC Irvine Portal",
      icon: "fa-solid fa-university",
      href: "https://github.com/gregkab/fastapi-mongodb-crudapp",
      description:
        "Designed a school management system at UC Irvine with FastAPI and MongoDB, facilitating efficient student record management. The backend was powered by Flask, and it features a Twitter bot for automating tasks based on hashtags.",
    },
  ];

  let benefits = [
    {
      metric: "10x",
      name: "a dedicated computer engineer with solid roots in mathematics and physics",
      description:
        "My passion for software ignited during my high school AP CS class, where I was introduced to the boundless potential of coding and the power of creating software. Beyond just the allure of technology, it is the relentless problem-solving, the joy of facing new challenges, and the thrill of continuous learning that keeps me on this path.",
    },
    {
      name: "a backend development enthusiast",
      description:
        "I have always been drawn to the logic and the intricate inner workings of systems. To me, backend development is not just about writing code; it is about weaving together the very fabric of an application, ensuring its stability and functionality. I appreciate the foundation it lays down, much like the rigorous structures in mathematics and physics that I have studied, making all the flashy features on the frontend possible.",
    },
    {
      name: "a design-conscious communicator",
      description:
        "In my approach, design and communication are intertwined. I excel in demystifying complex software functionalities, transforming them into tangible business values. For me, effective communication transcends mere dialogue; it is about forging a mutual understanding. This philosophy does not just bridge the technological and business worlds; it nurtures collaborative, meaningful professional relationships.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Greg</span> Kabakian
        <br />Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes Python (Django),
        Node.js & MySQL!
      </p>
      <a
        href="https://www.linkedin.com/in/gregorykabakian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
        >
          <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
          />
          <h4 class="relative z-9">Get in touch &rarr;</h4>
        </button>
      </a>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile1.png"}
        alt="Zetane Engine"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
    <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>
    <!-- <a
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
    >
      <i class="fa-regular fa-circle-play" />
      <p>Watch the video</p>
    </a> -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Legacy Robotics is at the forefront of autonomous targeting,
          harnessing the power of <strong class="text-violet-400"
            >Python and Jetson Nano</strong
          >. With the integration of YOLO object detection, we've achieved rapid
          enemy tracking. Our systems further elevate camera precision through
          the <strong class="text-violet-400">Zed SDK</strong>.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Developed a dynamic bot leveraging the <strong class="text-violet-400"
            >Twitter API</strong
          >
          to automate actions based on specific hashtags. Deployed seamlessly with
          <strong class="text-violet-400">PythonAnywhere</strong>, the bot can
          handle up to 10,000 daily interactions.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The UC Irvine Portal is a school management platform backed by <strong
            class="text-violet-400">FastAPI and MongoDB</strong
          >. Developed at UC Irvine, it streamlines student record operations
          with a robust backend powered by
          <strong class="text-violet-400">Flask</strong>. Additionally, a unique
          feature incorporates a
          <strong class="text-violet-400">Twitter bot</strong> that automates tasks
          based on specific hashtags.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>
    <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
      The <span class="text-violet-400">Complete</span> Package
    </h5>
    <div
      class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
    >
      <table class="bg-white text-slate-700 rounded text-center">
        <thead class={"border-b border-solid border-slate-200  "}>
          <tr class="">
            <th />
            <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
            <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
              >Me</th
            >
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Dedication</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-b border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Critical Thought</td
            >
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr>
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Interpersonal Skills</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
          <tr class="border-t border-solid border-slate-200">
            <td
              class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm"
              >Progamming Ability</td
            >
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-xmark text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-slate-500" /></td>
            <td><i class="fa-solid fa-check text-green-500" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
      <p>Scroll to see more &rarr;</p>
    </div>
    <p class="mx-auto">
      Ready to elevate your team with a game-changer? Let's talk!
    </p>
  </section>
</main>
