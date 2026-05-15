import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  ShieldCheck,
  Award,
  GraduationCap,
  FileCheck2,
  Phone,
  MapPin,
  Mail,
  Globe,
  CheckCircle2,
  Users,
  BriefcaseBusiness,
  Laptop,
  Database,
  Cloud,
  Rocket,
  Menu,
  X,
  Scale,
  ShoppingCart,
  Server,
  Palette,
  Megaphone,
  Wrench,
} from "lucide-react";

const whatsappLink = "https://wa.me/237697244606";

const courses = [
  {
    icon: BrainCircuit,
    title: "Machine Learning & AI",
    duration: "3 to 6 months",
    level: "Beginner to Advanced",
    desc: "Learn Python, data processing, machine learning models, deep learning, NLP and computer vision through real projects.",
    topics: ["Python for AI", "Data preprocessing", "Supervised learning", "Deep learning basics", "NLP", "Computer vision"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    duration: "2 to 6 months",
    level: "Beginner to Intermediate",
    desc: "Understand security fundamentals, network protection, ethical hacking basics, web security and cyber awareness.",
    topics: ["Network security", "Web security", "Ethical hacking basics", "SOC awareness", "Password security", "Pen testing basics"],
  },
  {
    icon: Code2,
    title: "ReactJS Full Stack",
    duration: "3 to 6 months",
    level: "Beginner to Professional",
    desc: "Build modern full stack web applications with React, Tailwind CSS, Node.js, Express, MongoDB and deployment tools.",
    topics: ["React components", "Tailwind CSS", "Node.js", "Express APIs", "MongoDB", "Vercel deployment"],
  },
  {
    icon: Laptop,
    title: "Web Development",
    duration: "2 to 4 months",
    level: "Beginner Friendly",
    desc: "Create responsive websites using HTML, CSS, JavaScript, WordPress and modern web design principles.",
    topics: ["HTML", "CSS", "JavaScript", "Responsive design", "WordPress", "Website hosting"],
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    duration: "3 to 6 months",
    level: "Beginner to Intermediate",
    desc: "Learn how to analyze data, build dashboards and make business decisions using Excel, Python, Pandas and Power BI.",
    topics: ["Excel analytics", "Python", "Pandas", "Data cleaning", "Power BI", "Dashboard reporting"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    duration: "2 to 5 months",
    level: "Intermediate",
    desc: "Learn cloud deployment, GitHub, Docker, CI/CD, Azure basics, AWS basics and modern hosting workflows.",
    topics: ["Azure basics", "AWS basics", "GitHub", "Docker", "CI/CD", "Cloud hosting"],
  },
];

const services = [
  { icon: Code2, title: "Software Development", text: "Websites, dashboards, business systems and custom applications." },
  { icon: ShieldCheck, title: "Cybersecurity Services", text: "Security awareness, basic audits, protection setup and safe systems." },
  { icon: Scale, title: "Weighing Solutions", text: "Digital weighing software, scale integration and inventory tracking." },
  { icon: Server, title: "Hosting & Domain Setup", text: "Domain configuration, hosting setup, SSL and professional email support." },
  { icon: Palette, title: "Graphic Design", text: "Flyers, logos, banners, business cards and social media visuals." },
  { icon: Megaphone, title: "Digital Marketing", text: "Facebook ads, Google presence, social media strategy and business promotion." },
  { icon: Wrench, title: "IT Support", text: "Computer support, network setup, maintenance and technical assistance." },
  { icon: GraduationCap, title: "Professional Training", text: "Practical training programs with attestation, certification and diploma." },
];

const products = [
  "Custom Website Development",
  "ReactJS Web Applications",
  "School Management Systems",
  "Business Management Software",
  "POS & Inventory Systems",
  "Cybersecurity Services",
  "Networking & IT Support",
  "Mobile Application Development",
  "Cloud Hosting Solutions",
  "Domain Name Registration",
  "Professional Email Setup",
  "AI & Machine Learning Solutions",
  "Graphic Design Services",
  "Digital Marketing Services",
  "Computer Training Programs",
  "E-commerce Websites",
  "Portfolio & Company Websites",
  "Maintenance & Technical Support",
  "Electronic Weighing Scale Systems",
  "Digital Weight Management Software",
  "Industrial Weighing Machines",
  "Truck Weighbridge Systems",
  "Smart POS Weighing Machines",
  "Retail Shop Weight Scales",
  "Warehouse Weight Monitoring Systems",
  "Weight Calibration Solutions",
  "Weight Printing Scale Systems",
  "Bluetooth Smart Weighing Devices",
  "Supermarket Weighing Solutions",
  "Barcode & Weight Integration Systems",
  "Restaurant Weight Management Systems",
  "Inventory & Weight Tracking Software",
];

const awards = [
  {
    icon: FileCheck2,
    title: "Attestation",
    text: "Proof of participation for workshops, internships, seminars and short programs.",
  },
  {
    icon: Award,
    title: "Certification",
    text: "Certificate of completion for short professional skill-based training programs.",
  },
  {
    icon: GraduationCap,
    title: "Diploma",
    text: "Professional diploma for complete career-focused programs and advanced training.",
  },
];

const benefits = [
  "Practical project-based training",
  "Beginner-friendly and career-focused courses",
  "Online, physical and hybrid learning options",
  "Internship and career guidance",
  "Affordable training fees",
  "Recognized attestation, certification and diploma",
];

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-orange-400">
      {children}
    </a>
  );
}

export default function BellAppTechWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl font-black text-blue-900 shadow-lg">B</div>
            <div>
              <h1 className="text-xl font-black tracking-tight">Bell<span className="text-orange-500">App</span>Tech</h1>
              <p className="text-xs text-slate-300">Learn Skills. Build Careers.</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#courses">Courses</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition hover:bg-green-600 md:inline-flex">
            Enroll on WhatsApp
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl border border-white/10 p-2 md:hidden">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
            <div className="grid gap-2">
              <NavLink href="#home" onClick={closeMobile}>Home</NavLink>
              <NavLink href="#about" onClick={closeMobile}>About</NavLink>
              <NavLink href="#courses" onClick={closeMobile}>Courses</NavLink>
              <NavLink href="#services" onClick={closeMobile}>Services</NavLink>
              <NavLink href="#products" onClick={closeMobile}>Products</NavLink>
              <NavLink href="#contact" onClick={closeMobile}>Contact</NavLink>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-2 rounded-full bg-green-500 px-5 py-3 text-center text-sm font-bold text-white">Enroll on WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative scroll-mt-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,.28),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">Professional Digital Skills Training in Douala</p>
              <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">Learn Today. <span className="text-orange-500">Build Tomorrow.</span></h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">BellAppTech provides practical technology training, software development, weighing solutions and IT services for students, businesses and professionals.</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-500 px-7 py-3 text-center font-bold shadow-lg shadow-green-500/25 transition hover:bg-green-600">Enroll on WhatsApp</a>
                <a href="#courses" className="rounded-full border border-white/20 px-7 py-3 text-center font-bold transition hover:bg-white hover:text-slate-950">View Courses</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {courses.slice(0, 4).map((course) => {
                    const Icon = course.icon;
                    return (
                      <a href="#courses" key={course.title} className="rounded-2xl bg-white/5 p-5 transition hover:bg-white/10">
                        <Icon className="mb-4 h-8 w-8 text-orange-400" />
                        <h3 className="font-bold">{course.title}</h3>
                      </a>
                    );
                  })}
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600 to-orange-500 p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider">We Offer</p>
                  <h3 className="mt-1 text-2xl font-black">Attestation • Certification • Diploma</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-white py-20 text-slate-950">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-bold text-blue-700">About BellAppTech</p>
                <h2 className="mt-4 text-4xl font-black">Empowering Digital Innovation</h2>
                <p className="mt-6 leading-8 text-slate-600">BellAppTech is a technology and training company based in Ndogbong, Douala, Cameroon. We specialize in modern software development, AI solutions, digital transformation, weighing systems and professional IT training programs.</p>
                <p className="mt-5 leading-8 text-slate-600">Our mission is to equip students, entrepreneurs and businesses with practical technology skills and powerful digital solutions.</p>
              </div>
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-orange-500" />
                    <p className="font-semibold text-slate-800">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold text-orange-400">Course Page</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Our Training Courses</h2>
            <p className="mt-5 text-slate-300">Each course contains practical lessons, exercises, real projects, final assessment and recognized documents.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <motion.div key={course.title} whileHover={{ y: -8 }} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-xl">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-black">{course.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-blue-300">{course.duration}</span>
                    <span className="rounded-full bg-orange-500/15 px-3 py-1 text-orange-300">{course.level}</span>
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{course.desc}</p>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="mb-3 text-sm font-bold text-white">What you will learn:</p>
                    <ul className="space-y-2">
                      {course.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full justify-center rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600">Enroll for this course</a>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold text-orange-400">Services Page</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Professional IT & Business Services</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                    <Icon className="mb-5 h-9 w-9 text-orange-400" />
                    <h3 className="text-lg font-black">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-24 py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-bold text-orange-400">Products Page</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Digital Products & Weighing Solutions</h2>
              <p className="mt-5 text-slate-300">BellAppTech develops modern digital products, business software and weighing solutions for organizations, schools, shops, warehouses and entrepreneurs.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-orange-400/60 hover:bg-white/[0.09]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                    <p className="font-semibold text-slate-100">{product}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="awards" className="scroll-mt-24 bg-white py-20 text-slate-950">
          <div className="mx-auto max-w-7xl px-5">
            <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
              <div>
                <p className="font-bold text-blue-700">Recognized Documents</p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">We offer Attestation, Certification and Diploma</h2>
                <p className="mt-5 leading-8 text-slate-600">At the end of your training, BellAppTech provides the right document depending on your program type, duration, attendance and assessment.</p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {awards.map((award) => {
                  const Icon = award.icon;
                  return (
                    <div key={award.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                      <Icon className="mb-5 h-10 w-10 text-blue-700" />
                      <h3 className="text-xl font-black">{award.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{award.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-bold text-orange-400">Contact Us</p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">Start your learning journey today</h2>
                <p className="mt-5 text-slate-300">Click WhatsApp to enroll, ask about courses or request a digital product.</p>
              </div>
              <div className="space-y-5">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-green-500 p-5 font-bold text-white hover:bg-green-600">
                  <Phone className="h-6 w-6" />
                  <span>WhatsApp: +237 697 244 606</span>
                </a>
                <a href="tel:+237694234615" className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 hover:bg-white/15">
                  <Phone className="h-6 w-6 text-orange-400" />
                  <span className="font-bold">Call: 694 234 615</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5">
                  <MapPin className="h-6 w-6 text-orange-400" />
                  <span className="font-bold">Ndogbong, Douala, Cameroon</span>
                </div>
                <a href="mailto:info@bellapptech.com" className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 hover:bg-white/15">
                  <Mail className="h-6 w-6 text-orange-400" />
                  <span className="font-bold">info@bellapptech.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-green-500/30 transition hover:bg-green-600">
        WhatsApp
      </a>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} BellAppTech. All rights reserved.</p>
          <p>Learn Skills. Build Careers. Create Opportunities.</p>
        </div>
      </footer>
    </div>
  );
}
