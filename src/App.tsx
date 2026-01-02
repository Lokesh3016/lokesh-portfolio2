import { Mail, Linkedin, Github, Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              LOKESH.V
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#certificates" className="text-slate-600 hover:text-blue-600 transition-colors">Certificates</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">LOKESH.V</span>
            </h1>
            <p className="text-2xl text-slate-600">
              Full Stack Developer | Web Developer
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              Passionate about building innovative web solutions and solving complex problems through code.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:lokeshvasu301206@gmail.com"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/image.png"
                alt="LOKESH.V"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Engineering Student</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Pursuing B.Tech in Information Technology at SRM Easwari Engineering College.
                    Maintaining a strong academic record with 8.47 CGPA.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-600 rounded-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Web Development Intern</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Completed a 2-week virtual internship at InternPE, gaining hands-on experience
                    in web development and industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Technical Proficiency</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['C', 'Java', 'Python', 'C++'].map((lang) => (
                  <span key={lang} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS', 'JavaScript'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Canva', 'Git', 'GitHub'].map((tool) => (
                  <span key={tool} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Data Structures', 'Troubleshooting', 'Problem Solving', 'Team Collaboration'].map((comp) => (
                <span key={comp} className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-slate-700 rounded-full text-sm font-medium border border-blue-200">
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hostel Room Allocation System",
                description: "A system designed to efficiently allocate hostel rooms by managing student details and room availability, improving the allocation process."
              },
              {
                title: "Indian Tourism Safety",
                description: "A web-based project focused on enhancing safety awareness for tourists in India by providing essential information and guidance."
              },
              {
                title: "Smart Fabric Procurement",
                description: "A project aimed at streamlining the fabric procurement process using smart technologies for better inventory and order management."
              },
              {
                title: "Modern Calculator",
                description: "A modern, responsive calculator application with a clean user interface, built using web technologies."
              },
              {
                title: "E-Commerce Tech Website",
                description: "A technology-focused e-commerce website showcasing products with a user-friendly design and structured layout."
              }
            ].map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Privacy and Security in Online Social Media", issuer: "NPTEL" },
              { name: "MongoDB Basics", issuer: "MongoDB University" },
              { name: "Python Essentials", issuer: "Cisco" },
              { name: "Network Basics", issuer: "Cisco" },
              { name: "Introduction to Modern AI", issuer: "Cisco" },
              { name: "Computer Hardware Basics", issuer: "Cisco" }
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{cert.name}</h3>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">LOKESH.V</h3>
              <p className="text-slate-400">Full Stack Developer | Web Developer</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-slate-400">Let's Connect</p>
              <div className="flex gap-6">
                <a
                  href="mailto:lokeshvasu301206@gmail.com"
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lokesh-v-1a337735a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/lokesh-3016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} LOKESH.V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
