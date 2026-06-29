import './index.css'

const navItems = ['Work', 'Skills', 'About', 'Blog', 'Contact']

const projects = [
  {
    title: 'Weather App',
    type: 'Web App',
    year: '2024',
    image: '/img/weatherapp.png',
    link: 'https://itl-411-weather-app.netlify.app',
    TechStack: ['React/Vite', 'Express', 'Node.js', 'OpenWeather API'],
  },
  {
    title: 'HCM Time Tracking System',
    type: 'Web App',
    year: '2026',
    image: '/img/HCM.png',
    link: 'https://vciassessment.netlify.app',
    TechStack: ['React/Vite', 'Express', 'Node.js', 'Firebase'],
  },
  {
    title: 'Municiplaity Online Document Processing System',
    type: 'Web App',
    year: '2025',
    image: '/img/capstone.png',
    TechStack: ['React', 'Node.js', 'Express', 'Mysql'],
  },
  {
    title: 'Smart Bottle Recycling Rewards System',
    type: 'IOT Project',
    year: '2025',
    image: '/img/IOT.png',
    link: 'https://stem-project.netlify.app/',
    TechStack: ['React/Vite', 'Node.js', 'Express', 'Supabase', 'Esp32'],
  },
  {
    title: 'Left Side Logo',
    type: 'Web Design',
    year: '2022',
    image: '/img/work-left-logo.gif',
  },
  {
    title: 'Web Banner',
    type: 'Web Design',
    year: '2022',
    image: '/img/work-banner.jpg',
  },
  {
    title: 'Center Logo',
    type: 'Web Design',
    year: '2022',
    image: '/img/work-center-logo.gif',
  },
]

const skills = [
  'React',
  'Express',
  'Node.js',
  'Python',
  'SQL',
  'Google Sheets',
  'Google Apps Script',
  'MEAN Stack',
  'MERN Stack',
]

const techStack = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', "Next.js", "Angular", 'Web Design'],
  },
  {
    title: 'Backend',
    items: ['Express', 'PHP', 'Node.js', 'Python'],
  },
  {
    title: 'Data & Automation',
    items: ['SQL', 'Firebase', 'Mongo DB', 'Supabase', 'Google Sheets', 'Google Apps Script'],
  },
  {
    title: 'Full Stack',
    items: ['MERN Stack', 'MEAN Stack'],
  },
]

const posts = [
  {
    title: 'My Best App Design',
    category: 'App Design',
    copy: 'A focused look at mobile interface design, user experience, and the creative choices that make an app feel intuitive.',
  },
  {
    title: 'Best Web Design',
    category: 'Web Design',
    copy: 'Notes on layout, typography, color, and the details that turn a clean website into a memorable user experience.',
  },
  {
    title: 'My Best JS Works',
    category: 'JavaScript',
    copy: 'Interactive projects that show how I use JavaScript to build responsive, useful, and dynamic web applications.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#171511]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f3ea]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Chris Art Getida home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#171511] text-sm font-bold text-[#f7f3ea]">
              CG
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold uppercase tracking-[0.18em]">Chris Art Getida</span>
              <span className="block text-xs text-[#6c665a]">Full Stack Developer</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#545044] md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#171511]">
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-[#171511] px-5 py-3 text-sm font-bold text-[#f7f3ea] transition hover:bg-[#8a5d3b]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#6c665a]">
              Full Stack Developer
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
              Building clean, functional, and user-friendly web applications.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5b554b]">
              Hello! I'm Chris Art, a fresh graduate and full stack developer with a
              passion for creating responsive, efficient, and user-friendly digital experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="rounded-full bg-[#171511] px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8a5d3b]"
              >
                View Work
              </a>
              <a
                href="#about"
                className="rounded-full border border-black/20 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#171511] transition hover:border-[#8a5d3b] hover:text-[#8a5d3b]"
              >
                About Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-36 w-36 rounded-full bg-[#b6b09f] md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[#d9d1bf] shadow-2xl shadow-black/10">
              <img src="/img/ee.jpeg" alt="Chris Art Getida portrait" className="h-[560px] w-full object-cover object-center lg:h-[620px]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-[#f7f3ea]/90 p-4 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a5d3b]">Available</p>
                    <p className="text-lg font-black">For full stack web projects</p>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.18)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#171511] py-5 text-[#f7f3ea]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 text-sm font-bold uppercase tracking-[0.18em] md:px-8">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5d3b]">Tech stack</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Frameworks and tools I use.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5b554b]">
            I work across frontend, backend, databases, and automation tools to build responsive web
            applications and practical full stack systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <article key={group.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5">
              <h3 className="text-xl font-black">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-[#f7f3ea] px-4 py-2 text-sm font-bold text-[#514b42]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5d3b]">Selected work</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Projects with visual clarity.</h2>
          </div>
          <p className="max-w-md text-[#5b554b]">
            A refreshed selection from my original web design projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-xl shadow-black/5"
            >
              {/* Uniform image height for all projects */}
              <div className="h-72 overflow-hidden bg-[#d9d1bf]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a5d3b]">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-black/10 px-4 py-2 text-sm font-bold whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                
                {/* Display Tech Stack if available */}
                {project.TechStack && project.TechStack.length > 0 && (
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.TechStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#f7f3ea] px-3 py-1 text-xs font-semibold text-[#514b42] border border-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Display Link if available */}
                {project.link && (
                  <div className="mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#8a5d3b] hover:text-[#171511] transition"
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#e7dfcf] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#cfc4ad]">
            <img src="/img/pico.jpg" alt="Chris Art workspace and design preview" className="h-[520px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5d3b]">About me</p>
            <h2 className="mt-3 text-4xl font-black md:text-6xl">Who am I?</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#514b42]">
              <p>
                Hello! I'm Chris Art, a fresh graduate and full stack developer with a
                passion for creating clean, functional, and user-friendly digital experiences. I have
                developed several academic and personal projects using modern web technologies,
                focusing on building responsive and efficient applications.
              </p>
              <p>
                My approach to development is all about balancing design and functionality. I believe
                that a well-built application should not only look good, but also provide a smooth and
                intuitive user experience for every user.
              </p>
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-[#171511] p-6 text-[#f7f3ea]">
              <p className="text-xl font-semibold leading-9">
                "Great web developers and app designers do more than build screens. They craft
                intuitive experiences that bring ideas to life."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8a5d3b]">Read me</p>
          <h2 className="mt-3 text-4xl font-black md:text-6xl">Sometimes I write something smart.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a5d3b]">{post.category}</p>
              <h3 className="mt-4 text-2xl font-black">{post.title}</h3>
              <p className="mt-4 leading-7 text-[#5b554b]">{post.copy}</p>
              <a href="#contact" className="mt-6 inline-flex font-bold text-[#171511] transition hover:text-[#8a5d3b]">
                Read more
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[#171511] px-5 py-14 text-[#f7f3ea] md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b6b09f]">Contact</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Let's build your next idea.</h2>
            <p className="max-w-xl text-lg leading-8 text-[#d7cfbd]">
              Have a project, collaboration, or opportunity in mind? Send a message and I can connect
              this form to my email in the future.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b6b09f]">Phone</p>
                <a href="tel:09467629128" className="mt-2 block text-xl font-black">
                  09467629128
                </a>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b6b09f]">Address</p>
                <p className="mt-2 text-xl font-black leading-7">Brgy. Zone V, Murcia, Negros Occidental</p>
              </div>
               
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b6b09f]">Email</p>
                <a href="mailto:your@email.com" className="mt-2 block text-xl font-black">
                  chrisartgetida20  @email.com
                </a>
              </div>
          </div>

          <form className="rounded-[1.75rem] border border-white/10 bg-[#f7f3ea] p-5 text-[#171511] shadow-2xl shadow-black/20 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6c665a]">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8a5d3b]"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6c665a]">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8a5d3b]"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6c665a]">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none transition focus:border-[#8a5d3b]"
              />
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="rounded-full bg-[#171511] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#8a5d3b]"
              >
                Leave Message
              </button>
              <p className="text-sm leading-6 text-[#6c665a]">
                This form is ready for future email integration.
              </p>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#b6b09f] md:flex-row md:items-center md:justify-between">
          <p>(c) 2026 Chris Art Getida. All rights reserved.</p>
          <p>Web Design / Full Stack Development / Automation</p>
        </div>
      </footer>
    </main>
  )
}

export default App