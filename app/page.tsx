import Image from "next/image";

export default function Home() {
  const navItems = [
    { label: "Overview", href: "#overview", icon: "M3 5h18v14H3z" },
    { label: "Dashboard", href: "#dashboard", icon: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" },
    { label: "Keahlian", href: "#services", icon: "M12 3l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5z" },
    { label: "Proyek", href: "#portfolio", icon: "M3 7h18M3 12h18M3 17h12" },
    { label: "Pengalaman", href: "#projects", icon: "M4 5h16v14H4zM8 3v4M16 3v4" },
    { label: "Kontak", href: "#contact", icon: "M3 6l9 6 9-6v12H3V6z" },
  ];

  const codingStats = [
    { label: "Coding This Week", value: "29h 40m", source: "WakaTime" },
    { label: "Avg. Daily Session", value: "4h 14m", source: "Auto Sync" },
    { label: "Typing Speed", value: "102 WPM", source: "Monkeytype" },
    { label: "Longest Focus", value: "3h 08m", source: "Deep Work" },
  ];

  const codingFeeds = [
    {
      title: "Build Portfolio Analytics Widget",
      meta: "Next.js API Route · 2 jam lalu",
      status: "completed",
    },
    {
      title: "Refactor Project Cards Animation",
      meta: "Framer-like motion style · 4 jam lalu",
      status: "in-progress",
    },
    {
      title: "Sync Typing Score to UI",
      meta: "Monkeytype parser · hari ini",
      status: "completed",
    },
  ];

  const techLogoMap: Record<string, string> = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Flutter": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "Dart": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "RESTful API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  };

  const highlights = [
    "Fullstack Developer",
    "Next.js / Laravel",
    "Responsive UI",
  ];

  const skills = [
    {
      title: "Frontend Development",
      description:
        "Menguasai HTML, CSS, JavaScript, React, Next.js, TypeScript, dan Tailwind CSS untuk membangun antarmuka web responsif.",
    },
    {
      title: "Backend & Database",
      description:
        "Berpengalaman dengan Laravel, RESTful API, serta pengelolaan database MySQL dan PostgreSQL untuk aplikasi fullstack.",
    },
    {
      title: "Mobile Development",
      description:
        "Mengembangkan aplikasi mobile dengan Flutter dan Dart, fokus pada user experience dan performa lintas platform.",
    },
  ];

  const experiences = [
    {
      name: "Koordinator WEB - IDLE",
      category: "Ilkom Developer League · Feb 2025",
      result: "Deployment website Laravel ke server dengan CPanel dan integrasi database PhpMyAdmin",
    },
    {
      name: "Ketua Pelaksana RASIO",
      category: "BEM FASILKOM · Feb 2025",
      result: "Menyusun SOP administrasi, TOR, dan proposal untuk UKM serta komunitas fakultas",
    },
    {
      name: "Staff Advokasi Kesatuan Mahasiswa",
      category: "BEM FASILKOM · Des 2024 - Sekarang",
      result: "Menindaklanjuti aspirasi mahasiswa dan mengkaji informasi untuk warga FASILKOM",
    },
  ];

  const education = [
    "S1 Teknologi Informasi, Universitas Jember (Agustus 2023 - Saat ini) dengan IPK 3.70/4.00.",
    "SMAN 3 Jember jurusan Sains (Juli 2020 - Maret 2023) dengan fokus pada ilmu pengetahuan alam.",
    "Selalu aktif belajar dan berkembang melalui project akademis, capstone, dan program pengembangan organisasi.",
  ];

  const projects = [
    {
      name: "Sekolah Kopi Raisa",
      role: "Koordinator Front End Developer",
      description: "Platform pembelajaran kopi yang dirancang untuk menghadirkan pengalaman belajar informatif, modern, dan mudah digunakan.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      highlight: "Capstone Project 2025",
      githubRepo: "https://github.com/fahrilafnd/FE-SekolahKopiRaisa",
      image: "/kopiraisaa.png",
    },
    {
      name: "PocketFarm",
      role: "Koordinator Front End & UI/UX",
      description: "Aplikasi pemetaan lahan yang membantu Petugas Penyuluh Pertanian mengelola data lapangan dengan lebih rapi, cepat, dan akurat.",
      techStack: ["Flutter", "Dart", "RESTful API"],
      highlight: "Mobile App Development",
      githubRepo: "https://github.com/fahrilafnd/pocketfarm",
      image: "/pocketfarm.png",
    },
    {
      name: "CoffeOptic",
      role: "Programmer Best Project",
      description: "Aplikasi sortasi biji kopi berbasis visual yang mendukung proses klasifikasi warna dan ukuran secara efisien dan konsisten.",
      techStack: ["Laravel", "MySQL"],
      highlight: "Best Project Award",
      githubRepo: "https://github.com/fahrilafnd/CoffeOptic",
      image: "/coffee.png",
    },
    {
      name: "Ilkom Developer League",
      role: "Fullstack Developer",
      description: "Sistem perlombaan developer di lingkungan Fakultas Ilmu Komputer.",
      techStack: ["Laravel", "MySQL"],
      highlight: "Ilkom Developer League 2025",
      githubRepo: "https://github.com/fahrilafnd/idle_2025",
      image: "/idle_2025.png",
    },
    {
      name: "Swara App",
      role: "Front End Support",
      description: "Website latihan public speaking yang menghadirkan ruang belajar interaktif untuk melatih percaya diri dan kemampuan berbicara.",
      techStack: ["Next.js", "TypeScript"],
      highlight: "LIDM Competition",
      githubRepo: "https://github.com/fahrilafnd/swara_app",
      image: "/swara.png",
    },
    {
      name: "Freelancer Job Platform",
      role: "Fullstack Developer",
      description: "Platform pencari kerja freelancer yang dirancang untuk mempertemukan talenta dan peluang kerja secara lebih efektif.",
      techStack: ["Laravel", "MySQL", "Tailwind CSS"],
      highlight: "Fullstack Development",
      githubRepo: "https://github.com/fahrilafnd/Freelance_Connect_",
      image: "/freelance.png",
    }
    
  ];

  const dashboardTech = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Laravel",
    "Flutter",
    "Dart",
    "MySQL",
    "PostgreSQL",
  ];

  const sidebarTech = dashboardTech.slice(0, 8);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07111f] text-slate-100 lg:h-screen">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.16),transparent_24%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_30%)]" />
      <main className="relative grid min-h-screen w-full lg:h-screen lg:grid-cols-[280px_minmax(0,1fr)] lg:overflow-hidden">
        <aside className="border-b border-white/10 bg-[#0d1828]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-5 lg:h-screen lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-6">
          <div className="border-b border-white/10 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Fahril Profile</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20">
                <Image src="/Fahril.jpg" alt="Foto Fahril" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Fahril Afandi</p>
                <p className="text-xs text-slate-400">Fullstack Developer</p>
              </div>
            </div>
          </div>

          <nav className="mt-4 grid gap-1 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5 text-slate-400 transition group-hover:text-cyan-200"
                  >
                    <path d={item.icon} />
                  </svg>
                </span>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-xs leading-5 text-cyan-100/90">
            Open to internship, freelance, dan kolaborasi project web atau mobile.
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Tech Stack</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {sidebarTech.map((tech) => (
                <div
                  key={tech}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60"
                  title={tech}
                >
                  {techLogoMap[tech] ? (
                    <img
                      src={techLogoMap[tech]}
                      alt={`${tech} logo`}
                      className="h-5 w-5 object-contain saturate-150 contrast-125 drop-shadow-[0_0_6px_rgba(34,211,238,0.35)]"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-200">{tech.slice(0, 1)}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="flex flex-col gap-16 px-4 py-6 sm:gap-20 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:px-10 lg:py-10">

        <section id="overview" className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="space-y-8">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-100 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.85)]" />
              Siap terhubung untuk proyek, freelance, dan kolaborasi tim
            </div>

            <div className="space-y-5">
              <p className="max-w-xl text-sm uppercase tracking-[0.3em] text-slate-400">
                Fahril Afandi
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Fullstack &amp; Front-End Developer
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:text-xl">
                Mahasiswa Teknologi Informasi Universitas Jember dengan passion di web
                development. Berpengalaman dengan HTML, CSS, JavaScript, Laravel, Next.js, dan
                Flutter. Siap berkontribusi dalam tim pengembangan digital yang berdampak.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="#projects"
              >
                Lihat pengalaman
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                href="#contact"
              >
                Diskusi proyek
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-4xl bg-cyan-300/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-6">
              <div className="flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
                  <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/15 bg-white/10 sm:h-56 sm:w-56 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
                    <Image
                      src="/Fahril.jpg"
                      alt="Foto profil Fahril Afandi"
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 320px, (min-width: 1024px) 30vw, 80vw"
                      quality={100}
                      priority
                    />
                  </div>
                  <div className="text-center sm:text-left">
                  <p className="text-sm text-slate-400">Profil Singkat</p>
                  <p className="text-lg font-semibold text-white sm:text-xl">Fullstack &amp; Front-End Developer</p>
                </div>
                </div>
                <div className="self-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200 sm:self-start lg:self-center">
                  Available
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Deskripsi Singkat</p>
                  <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Menjelajahi Web, Membangun Solusi
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["3.70", "Current GPA"],
                    ["2+", "Org Roles"],
                    ["10+", "Tech Stack"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-sm text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/10 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/70">
                    Keunggulan
                  </p>
                  <p className="mt-2 text-sm leading-7 text-cyan-50/90">
                    Fokus pada implementasi fitur, kualitas antarmuka, dan deployment aplikasi
                    agar solusi yang dibangun siap dipakai dan mudah dikembangkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="grid gap-6 rounded-4xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-6">
              <h2 className="text-xl font-semibold text-white">{skill.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{skill.description}</p>
            </article>
          ))}
        </section>

        <section id="dashboard" className="grid gap-6 rounded-4xl border border-cyan-300/20 bg-slate-950/60 p-6 backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Coding Transparency</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Progress Coding Harian yang Terlihat Real-time
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Terinspirasi dari konsep reels: portfolio tidak hanya menampilkan hasil akhir,
              tetapi juga proses. Section ini menampilkan snapshot produktivitas coding agar
              recruiter dan client bisa melihat ritme kerja secara lebih transparan.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {codingStats.map((stat) => (
                <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs text-cyan-200/80">Source: {stat.source}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Bahasa Pemrograman & Tools</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dashboardTech.map((tech) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-100"
                  >
                    {techLogoMap[tech] ? (
                      <img
                        src={techLogoMap[tech]}
                        alt={`${tech} logo`}
                        className="h-[18px] w-[18px] object-contain saturate-150 contrast-125 drop-shadow-[0_0_6px_rgba(34,211,238,0.35)]"
                        loading="lazy"
                      />
                    ) : (
                      <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border border-cyan-300/40 bg-slate-900/70 text-[10px] font-bold text-cyan-100">
                        {tech.slice(0, 1)}
                      </span>
                    )}
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f1d30] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="text-sm font-semibold text-white">Live Dev Feed</p>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-200">
                Synced
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {codingFeeds.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-widest ${
                        item.status === "completed"
                          ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                          : "border border-amber-300/30 bg-amber-300/10 text-amber-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">{item.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="space-y-8">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Proyek Unggulan</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Deretan Proyek Pilihan dari Ide Hingga Implementasi
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Setiap project dikerjakan dengan pendekatan fullstack atau spesialisasi frontend,
              menunjukkan kemampuan dalam membangun produk digital yang fungsional dan terstruktur.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((proj) => (
              <a
                key={proj.name}
                href={proj.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-white/10 bg-slate-950/50 overflow-hidden transition hover:border-cyan-300/30 hover:bg-slate-950/70 cursor-pointer flex flex-col"
              >
                {proj.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900/50 sm:h-60 lg:h-64">
                    <Image
                      src={proj.image}
                      alt={`${proj.name} documentation`}
                      fill
                      className="object-contain object-center transition group-hover:scale-105"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/80">
                        {proj.highlight}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white group-hover:text-cyan-300 transition">{proj.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">{proj.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300 flex-1">
                    {proj.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                      >
                        {techLogoMap[tech] ? (
                          <img
                            src={techLogoMap[tech]}
                            alt={`${tech} logo`}
                            className="h-[18px] w-[18px] object-contain saturate-150 contrast-125 drop-shadow-[0_0_6px_rgba(34,211,238,0.35)]"
                            loading="lazy"
                          />
                        ) : (
                          <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border border-cyan-300/40 bg-slate-900/70 text-[10px] font-bold text-cyan-100">
                            {tech.slice(0, 1)}
                          </span>
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Pengalaman kerja</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pengalaman Organisasi dan Project Teknis yang Menyorot Kontribusi Saya
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Berkontribusi dalam koordinasi tim, administrasi organisasi, serta implementasi web
              development dari sisi frontend, backend, sampai deployment di berbagai project dan event.
            </p>
          </div>

          <div className="grid gap-4">
            {experiences.map((project) => (
              <article
                key={project.name}
                className="group rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6 transition hover:border-cyan-300/30 hover:bg-slate-950/70"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-cyan-200">{project.result}</p>
                </div>
                <div className="mt-5 h-px w-full bg-linear-to-r from-white/0 via-white/15 to-white/0" />
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Project dan peran organisasi difokuskan pada eksekusi terstruktur, komunikasi
                  tim yang efektif, serta hasil yang relevan dengan kebutuhan pengguna dan stakeholder.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-linear-to-br from-white/8 to-white/6 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Pendidikan & Pembelajaran</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Perjalanan Akademik dan Proses Pembelajaran Berkelanjutan
            </h2>
            <div className="mt-8 space-y-4">
              {education.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                    0{index + 1}
                  </div>
                  <p className="pt-2 text-sm leading-7 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-4xl border border-cyan-300/15 bg-cyan-300/10 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/75">Mari Terhubung</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Punya proyek, ide, atau peluang kolaborasi?
            </h2>
            <p className="mt-4 text-sm leading-7 text-cyan-50/90">
              Saya siap terhubung dan berdiskusi tentang website development, freelance, atau peluang
              kerja sama lainnya. Hubungi melalui email, GitHub, LinkedIn, atau Instagram.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50"
                href="mailto:fahrilafnd01@gmail.com"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Kirim Email
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                href="https://github.com/fahrilafnd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                href="https://linkedin.com/in/fahrilafandi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.737h3.554v1.376c.429-.66 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.371v5.59zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.951.771-1.71 1.915-1.71 1.144 0 1.914.759 1.914 1.71 0 .951-.77 1.71-1.914 1.71zm1.575 11.597H3.762V9.571h3.15v10.881zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
                href="https://www.instagram.com/fahril.afnd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
