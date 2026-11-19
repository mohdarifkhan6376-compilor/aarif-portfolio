import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AARIF
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-500/25"
          >
            Hire Me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl text-center md:text-left">
          <span className="inline-block px-3 py-1 mb-6 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Cloud FinOps • AI &amp; RAG • Python Automation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Cutting Cloud Costs &amp; Building{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Smart AI Systems
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-8">
            I help teams optimize AWS and AI inference expenses, build RAG pipelines, and automate workflows with Python and Next.js.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium transition-all shadow-lg shadow-indigo-500/25"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-medium transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="w-full md:w-[430px] p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <div className="text-sm font-mono text-indigo-400 mb-3">// stack.ts</div>
          <div className="space-y-2 font-mono text-xs text-slate-300">
            <p className="text-emerald-400">// Focus Areas</p>
            <p>const finops = [&quot;AWS Cost Optimization&quot;, &quot;CloudShield&quot;];</p>
            <p>const ai = [&quot;RAG&quot;, &quot;Python Automation&quot;, &quot;AI Workflows&quot;];</p>
            <p>const web = [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;SQL&quot;, &quot;C#&quot;];</p>
            <p className="text-cyan-400">const status = &quot;Available for Freelance&quot;;</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Services I Offer</h2>
          <p className="text-slate-400">Practical, high-impact engineering for startups and businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/10 flex items-center justify-center text-cyan-400 mb-6 font-bold text-xl">
              ☁️
            </div>
            <h3 className="text-xl font-semibold mb-3">AWS &amp; Cloud Cost Optimization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Identify wasted cloud spend, idle resources, and high AI compute costs with clear FinOps improvements.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 mb-6 font-bold text-xl">
              🤖
            </div>
            <h3 className="text-xl font-semibold mb-3">AI &amp; RAG Integrations</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Build retrieval-augmented generation (RAG) assistants and AI-powered features connected to your data.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 mb-6 font-bold text-xl">
              ⚙️
            </div>
            <h3 className="text-xl font-semibold mb-3">Python Automation &amp; Web Apps</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Automate repetitive tasks with Python and ship fast, modern web apps using Next.js.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Project</h2>
        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="text-2xl font-bold text-indigo-400">CloudShield — Cloud Cost Optimization</h3>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
              Cloud FinOps
            </span>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            A cloud cost-optimization solution focused on reducing unnecessary AWS and AI infrastructure expenses while keeping systems fast and reliable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Have a cloud cost, Python automation, or AI integration project? Send a message.
          </p>
          <a
            href="mailto:aarif.dev.contact@gmail.com"
            className="inline-block px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium transition-all shadow-xl shadow-indigo-600/20"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-slate-500 border-t border-slate-900">
        © {new Date().getFullYear()} Aarif. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </div>
  );
}
