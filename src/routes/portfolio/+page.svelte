<svelte:head>
  <title>Portfolio | Daniel Miretsky</title>
  <meta name="description" content="Showcase of projects and experience." />
</svelte:head>

<section class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <a href="/" class="back-link">← Back</a>
      <p class="eyebrow">Portfolio</p>
    </div>
  </div>
</section>

<section id="projects" class="section">
  <div class="section-header">
    <h2>My Coding Projects</h2>
    <p>
      A curated selection of my coding projects (in no particular order).
      <br><br>
      If you encounter any issues with any of my projects or have any suggestions, please feel free to submit an issue or pull request on the respective project's GitHub repository.
    </p>
  </div>

  <div class="grid">
    <article class="card project">
      <h3>Durak</h3>
      <p class="card-subtitle">
        A popular Russian card game played with a 36-card deck (6-Ace). Players can either attack or defend.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/durak" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Wordle</h3>
      <p class="card-subtitle">
        A word guessing game where you have to guess a word in 6 tries.

        JavaFX version was written in collaboration with <a href="https://github.com/Boris098" target="_blank" class="link">@Boris098</a>.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>JavaFX</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/wordle" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Mastermind</h3>
      <p class="card-subtitle">
        A code-breaking game where you have to guess the code in 10 tries.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>C#</li>
          <li>WinForms</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/mastermind" target="_blank" class="link">Java source code</a>
          <a href="https://github.com/DMFriends/mastermind-gui" target="_blank" class="link">C# source code (WinForms)</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Battleship</h3>
      <p class="card-subtitle">
        A naval battle game where you have to guess the location of the opponent's ships.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/battleship" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Uno</h3>
      <p class="card-subtitle">
        1. (JUno) Java-based Uno game for mine and <a href="https://github.com/Cattn" target="_blank" class="link">@Cattn</a>'s CS2 Project at Wentworth Institute of Technology.<br><br>
        2. (Uno-GUI) A JavaFX version of JUno (written in collaboration with <a href="https://github.com/Boris098" target="_blank" class="link">@Boris098</a>).<br>
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>JavaFX</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/Cattn/JUno" target="_blank" class="link">JUno source code</a>
          <a href="https://github.com/DMFriends/uno-gui" target="_blank" class="link">Uno-GUI source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Personal Website</h3>
      <p class="card-subtitle">
        This website, built with SvelteKit and Tailwind CSS.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>SvelteKit</li>
          <li>Tailwind CSS</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/portfolio-site" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Weather App</h3>
      <p class="card-subtitle">
        A weather mobile app that uses the OpenWeatherMap API to get the weather for a given location.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Svelte/SvelteKit</li>
          <li>Vite</li>
          <li>TypeScript</li>
          <li>WeatherAPI</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/weather-app" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>MadLibs</h3>
      <p class="card-subtitle">
        A MadLibs game that generates a story based on a template and a list of words.

        JavaFX version was written in collaboration with <a href="https://github.com/Boris098" target="_blank" class="link">@Boris098</a>.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>JavaFX</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/madlibs" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Sequence</h3>
      <p class="card-subtitle">
        The objective of the game is to get a "sequence" of 4 pegs either vertically, horizontally, or diagonally. The first player to get 2 "sequences" wins the game! You can play more than 2 sequences if desired.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>JavaFX</li>
          <li>Python</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/sequence" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>Scrabble</h3>
      <p class="card-subtitle">
        A 2-4 player Scrabble game written in Java. Standard Scrabble rules apply.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
          <li>JavaFX</li>
          <li class="pill-list-completed">Completed</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/scrabble" target="_blank" class="link">Source code</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section id="aoc" class="section">
  <div class="section-header">
    <h2>Advent of Code</h2>
    <p>
      A collection of my solutions to Advent of Code puzzles that I have solved in Java.
    </p>
  </div>

  <div class="grid">
    <article class="card project">
      <h3>2025</h3>
      <p class="card-subtitle">
        My solutions to the 2025 Advent of Code puzzles.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/aoc/tree/main/src/main/java/_2025" target="_blank" class="link">Solutions</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>2023</h3>
      <p class="card-subtitle">
        My solutions to the 2023 Advent of Code puzzles.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/aoc/tree/main/src/main/java/_2023" target="_blank" class="link">Solutions</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>2022</h3>
      <p class="card-subtitle">
        My solutions to the 2022 Advent of Code puzzles.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/aoc/tree/main/src/main/java/_2022" target="_blank" class="link">Solutions</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>2021</h3>
      <p class="card-subtitle">
        My solutions to the 2021 Advent of Code puzzles.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Java</li>
        </ul>
        <div class="card-footer">
          <a href="https://github.com/DMFriends/aoc/tree/main/src/main/java/_2021" target="_blank" class="link">Solutions</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section id="open-source" class="section">
  <div class="section-header">
    <h2>My Open Source Contributions</h2>
  </div>

  <div class="grid grid-two">
    <article class="card project">
      <h3>Sir Lancebot</h3>
      <p class="card-subtitle">
        During the COVID pandemic, I contributed to an open source project, maintained by Python Discord,
        called Sir Lancebot, written in Python, as the name "Python Discord" suggests.
        It is a Discord bot hosted on the Python Discord server, the primary goal of which is to host
        fun games that can be played on the Discord server (both singleplayer and multiplayer),
        as well as some small utilities that members of the Discord server use for their convenience.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Python</li>
          <li>Discord.py</li>
          <li class="pill-list-inactive-contributor">Inactive Contributor</li>
        </ul>
        <div class="card-footer">
          <a href="https://www.pythondiscord.com/" target="_blank" class="link">Website</a>
          <a href="https://github.com/python-discord/sir-lancebot" target="_blank" class="link">Source Code</a>
          <a href="https://discord.gg/python" target="_blank" class="link">Discord Server</a>
          <a href="https://github.com/python-discord" target="_blank" class="link">PyDis GitHub</a>
          <a href="https://github.com/python-discord/sir-lancebot/pulls?q=is%3Apr+is%3Amerged+author%3ADMFriends+" target="_blank" class="link">My Contributions</a>
        </div>
      </div>
    </article>

    <article class="card project">
      <h3>WIT-Calendar</h3>
      <p class="card-subtitle">
        WIT-Calendar is a tool that allows you to sync your class schedule from Wentworth Institute of Technology's registration
        system to any calendar app, along with other features such as course registration planning help.
        It is written in Svelte/SvelteKit for the frontend and Ruby on Rails for the backend.
        <br><br>
        Most of my contributions were to the frontend, but I also contributed to the backend.
        As one of three core maintainers of the project, I helped steer the overall direction and
        design of the project when I started it last year (September 2025),
        and now I just maintain the project and contribute new features and bug fixes as needed.
      </p>
      <div class="card-bottom">
        <ul class="pill-list">
          <li>Svelte/SvelteKit</li>
          <li>HTML/CSS</li>
          <li>TypeScript</li>
          <li>Ruby on Rails</li>
          <li class="pill-list-active-contributor">Active Contributor</li>
        </ul>
        <div class="card-footer">
          <a href="https://calendar.witcc.dev" target="_blank" class="link">Website</a>
          <a href="https://github.com/WITCodingClub/calendar-extension" target="_blank" class="link">Frontend Source Code</a>
          <a href="https://github.com/WITCodingClub/calendar-backend" target="_blank" class="link">Backend Source Code</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section id="skills" class="section section-alt">
  <div class="skills-container">
    <h3>Skills</h3>
    <ul class="pill-list">
      <li>Java</li>
      <li>Python</li>
      <li>C#</li>
      <li>Svelte / SvelteKit</li>
      <li>SQL</li>
      <li>HTML / CSS</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>Ruby on Rails</li>
      <li>Discord.py</li>
    </ul>
  </div>
</section>

<footer class="footer">
  <span>© {new Date().getFullYear()} Daniel Miretsky. All rights reserved.</span>
</footer>

<style>
  section {
    width: 100%;
    box-sizing: border-box;
  }

  .hero {
    padding: 2rem 1.5rem 0rem;
  }

  .hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr);
    gap: 3rem;
    align-items: center;
  }

  .eyebrow {
    margin: 0;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #9ca3af;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    color: #e5e7eb;
    text-decoration: none;
    border: 1px solid rgba(148, 163, 184, 0.35);
    background: rgba(15, 23, 42, 0.55);
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    font-size: 0.85rem;
    width: fit-content;
    margin-bottom: 0.75rem;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.1s ease;
  }

  .back-link:hover {
    background: rgba(30, 64, 175, 0.45);
    border-color: rgba(129, 140, 248, 0.6);
    transform: translateY(-1px);
  }

  .section {
    padding: 2.5rem 1.5rem;
  }

  #projects.section {
    padding-top: 1.5rem;
  }

  .section-alt {
    background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.3));
  }

  .section-header {
    max-width: 1120px;
    margin: 0 auto 1.75rem;
  }

  .section-header h2 {
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
  }

  .section-header p {
    margin: 0;
    color: #9ca3af;
    /* max-width: 32rem; */
  }

  .grid {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .grid-two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .card {
    background: rgba(15, 23, 42, 0.9);
    border-radius: 1rem;
    padding: 1.35rem 1.4rem 1.3rem;
    border: 1px solid rgba(148, 163, 184, 0.25);
    box-shadow: 0 18px 45px rgba(15, 23, 42, 0.85);
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .project h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  .card-subtitle {
    margin: 0;
    color: #9ca3af;
    font-size: 0.9rem;
  }

  .pill-list {
    list-style: none;
    padding: 0;
    margin: 0.2rem 0 0.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .pill-list li {
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.35);
    font-size: 0.75rem;
    color: #e5e7eb;
    background: rgba(15, 23, 42, 0.8);
  }

  .pill-list li.pill-list-completed,
  .pill-list li.pill-list-active-contributor {
    border-color: rgba(34, 197, 94, 0.6);
    color: #86efac;
    background: rgba(22, 101, 52, 0.35);
  }

  .pill-list li.pill-list-inactive-contributor {
    border-color: rgba(239, 68, 68, 0.6);
    color: #fca5a5;
    background: rgba(127, 29, 29, 0.35);
  }

  .card-bottom {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .card-footer {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1rem;
    font-size: 0.85rem;
  }

  .link {
    color: #38bdf8;
    text-decoration: none;
    position: relative;
  }

  .card-footer .link {
    white-space: nowrap;
  }

  .link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.1rem;
    width: 0;
    height: 1px;
    background: #38bdf8;
    transition: width 0.2s ease;
  }

  .link:hover::after {
    width: 100%;
  }

  .skills-container {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    gap: 0.5rem;
  }

  .skills-container h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
  }

  .footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(31, 41, 55, 0.85);
    text-align: center;
    font-size: 0.8rem;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
  }

  /* Responsive */
  @media (max-width: 960px) {
    .hero-inner {
      grid-template-columns: minmax(0, 1fr);
    }

    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding-top: 3rem;
      padding-bottom: 1.5rem;
    }

    .section {
      padding-inline: 1.25rem;
    }

    .grid,
    .grid-two {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>