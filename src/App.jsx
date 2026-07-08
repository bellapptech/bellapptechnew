import { useMemo, useState } from "react";
import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarCheck,
  ChevronRight,
  ClipboardCheck,
  Code2,
  CreditCard,
  Gauge,
  GraduationCap,
  Handshake,
  Hotel,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  Plane,
  Scale,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
  WalletCards,
  X,
} from "lucide-react";

const whatsappLink = "https://wa.me/237697244606";
const subscriptionEmail = "bellapptech@outlook.com";

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#education", label: "Education" },
  { href: "#products", label: "Products" },
  { href: "#subscriptions", label: "Subscriptions" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#contact", label: "Contact" },
];

const educationPrograms = [
  "Computer science foundations",
  "Web, mobile and desktop app development",
  "Data science, AI and automation",
  "Cybersecurity and network support",
  "Internship, attestation, certificate and diploma tracks",
];

const buildServices = [
  { icon: Code2, title: "Web Apps", text: "SaaS portals, business dashboards, e-commerce and school systems." },
  { icon: Laptop, title: "Mobile & Desktop", text: "Android, iOS-ready and desktop tools for companies and field teams." },
  { icon: ShieldCheck, title: "Secure Systems", text: "Authentication, payment workflows, roles, audit trails and backups." },
  { icon: ClipboardCheck, title: "Business Automation", text: "POS, inventory, booking, dispatch, reporting and accounting workflows." },
];

const equipmentProducts = [
  {
    icon: Scale,
    name: "Digital Weighing Scales",
    tag: "Retail and industry",
    price: "From XAF 85,000",
    details: "Shop scales, warehouse scales, weighing bridges and calibration support.",
  },
  {
    icon: Gauge,
    name: "Measuring Equipment",
    tag: "Field-ready tools",
    price: "Quote on request",
    details: "Meters, sensors and measurement kits for shops, workshops and schools.",
  },
  {
    icon: PackageCheck,
    name: "Weight + Inventory Software",
    tag: "Subscription",
    price: "Monthly or yearly",
    details: "Connect scales to stock, invoices, sales, reports and product labels.",
  },
];

const subscriptionPlans = [
  {
    name: "Starter",
    monthly: "XAF 15,000",
    yearly: "XAF 150,000",
    audience: "Small shops and service providers",
    features: ["Business profile", "Product and service listings", "WhatsApp leads", "Cash on delivery support"],
  },
  {
    name: "Business",
    monthly: "XAF 45,000",
    yearly: "XAF 450,000",
    audience: "Retailers, hotels, agencies and stations",
    features: ["Online payments", "Orders and bookings", "Inventory tools", "Priority marketplace placement"],
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    yearly: "Custom",
    audience: "Schools, supermarkets and multi-branch companies",
    features: ["Custom web app", "Staff roles", "Reports and integrations", "Training and support"],
  },
];

const marketplaceCategories = [
  { icon: Store, title: "Supermarkets", text: "Order groceries, household items and wholesale stock." },
  { icon: Truck, title: "Drivers & Delivery", text: "Book drivers, delivery riders, car hire and transport services." },
  { icon: Hotel, title: "Hotels", text: "Find rooms, short stays, halls and local hospitality services." },
  { icon: Plane, title: "Flights & Travel", text: "Request flight bookings, travel support and local trip planning." },
  { icon: Building2, title: "Petrol Stations", text: "Discover nearby fuel, lubricant, gas and station services." },
  { icon: ShoppingBag, title: "Retail & Wholesale", text: "Buy from verified retailers, wholesalers and distributors." },
  { icon: Users, title: "Local Services", text: "Connect with technicians, tutors, designers, cleaners and professionals." },
  { icon: GraduationCap, title: "Training", text: "Enroll in tech courses and professional skill programs." },
];

const paymentOptions = [
  "Pay on delivery",
  "Pay on the platform",
  "Mobile money assisted checkout",
  "Invoice and receipt records",
];

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
    >
      {label}
    </a>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{children}</p> : null}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [subscriptionRequest, setSubscriptionRequest] = useState({
    plan: "Business",
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    serviceType: "Marketplace subscription",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const featuredPlan = useMemo(() => subscriptionPlans.find((plan) => plan.featured), []);

  const updateSubscriptionRequest = (field, value) => {
    setSubscriptionRequest((current) => ({ ...current, [field]: value }));
  };

  const choosePlan = (planName) => {
    updateSubscriptionRequest("plan", planName);
    document.getElementById("subscription-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubscriptionSubmit = (event) => {
    event.preventDefault();
    const selectedPlan = subscriptionPlans.find((plan) => plan.name === subscriptionRequest.plan);
    const selectedPrice = selectedPlan ? selectedPlan[billingCycle] : "Not selected";
    const subject = `Subscription request - ${subscriptionRequest.plan} plan`;
    const body = [
      "Hello BellAppTech,",
      "",
      "I want to subscribe for a BellAppTech service.",
      "",
      `Plan: ${subscriptionRequest.plan}`,
      `Billing: ${billingCycle}`,
      `Price shown: ${selectedPrice}`,
      `Service type: ${subscriptionRequest.serviceType}`,
      `Full name: ${subscriptionRequest.fullName}`,
      `Business name: ${subscriptionRequest.businessName || "Not provided"}`,
      `Email: ${subscriptionRequest.email}`,
      `Phone: ${subscriptionRequest.phone}`,
      "",
      "Message:",
      subscriptionRequest.message || "No extra message.",
    ].join("\n");

    window.location.href = `mailto:${subscriptionEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus(`Your subscription email is ready to send to ${subscriptionEmail}.`);
  };

  return (
    <div className="min-h-screen bg-[#f7f9f6] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img
              src="/bellapptechlogonewupdate.png"
              alt="BellAppTech logo"
              className="h-11 w-11 shrink-0 rounded-md object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-lg font-black tracking-tight">BellAppTech</p>
              <p className="truncate text-xs font-semibold text-slate-500">Tech education, software and commerce</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} {...item} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#subscriptions"
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-slate-950"
            >
              View plans
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="rounded-md border border-slate-300 p-2 lg:hidden"
            aria-label="Open navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <NavLink key={item.href} {...item} onClick={() => setMobileOpen(false)} />
              ))}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-md bg-emerald-700 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Start on WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.02fr_.98fr] lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">
                <BadgeCheck className="h-4 w-4" />
                Built for Cameroonian businesses and learners
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                BellAppTech
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                A SaaS web app for computer science education, custom software development, measuring equipment sales,
                subscription software, and a marketplace that connects buyers, sellers and service providers.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#marketplace"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  Explore platform
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-slate-950"
                >
                  Request a demo
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Education", "Software", "Marketplace"].map((item) => (
                  <div key={item} className="border-l-4 border-emerald-700 bg-slate-50 px-4 py-3">
                    <p className="text-sm font-black text-slate-950">{item}</p>
                    <p className="text-xs font-semibold text-slate-500">One connected platform</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-4">
              <div className="border border-slate-200 bg-[#eef5ee] p-4">
                <div className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3">
                  <Search className="h-5 w-5 text-slate-500" />
                  <span className="text-sm font-semibold text-slate-500">Search petrol, hotel, driver, POS software...</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {marketplaceCategories.slice(0, 6).map((category) => {
                    const Icon = category.icon;
                    return (
                      <a key={category.title} href="#marketplace" className="border border-slate-200 bg-white p-4 transition hover:border-emerald-700">
                        <Icon className="h-6 w-6 text-emerald-700" />
                        <p className="mt-3 text-sm font-black">{category.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{category.text}</p>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-slate-200 bg-white p-5">
                  <WalletCards className="h-7 w-7 text-emerald-700" />
                  <p className="mt-3 text-xl font-black">{featuredPlan?.monthly}</p>
                  <p className="text-sm font-semibold text-slate-500">Business plan monthly</p>
                </div>
                <div className="border border-slate-200 bg-white p-5">
                  <Handshake className="h-7 w-7 text-emerald-700" />
                  <p className="mt-3 text-xl font-black">Buyers + sellers</p>
                  <p className="text-sm font-semibold text-slate-500">Orders, services and bookings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading eyebrow="Platform Vision" title="A practical digital operating system for local commerce">
              Users can subscribe, request services, shop online, book travel and hospitality, or connect with trusted
              people who can supply what they need across Cameroon.
            </SectionHeading>

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {[
                { icon: Search, title: "Find", text: "Customers search products, services, locations and providers." },
                { icon: CalendarCheck, title: "Book", text: "Hotels, drivers, flights and service appointments can be requested." },
                { icon: CreditCard, title: "Pay", text: "Choose platform payment, mobile money flow or pay on delivery." },
                { icon: BadgeCheck, title: "Verify", text: "Provider profiles, order history and support improve trust." },
              ].map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="border border-slate-200 bg-white p-6">
                    <Icon className="h-8 w-8 text-emerald-700" />
                    <h3 className="mt-5 text-lg font-black">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 border-y border-slate-200 bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[.9fr_1.1fr]">
            <SectionHeading eyebrow="Computer Science Education" title="Training that connects learning to real jobs">
              BellAppTech can teach students and professionals through hands-on programs, then connect strong learners
              to internships, client projects and local digital service work.
            </SectionHeading>
            <div className="grid gap-3">
              {educationPrograms.map((program) => (
                <div key={program} className="flex items-center gap-3 border border-slate-200 bg-slate-50 p-4">
                  <BookOpenCheck className="h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="font-semibold text-slate-800">{program}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-4 px-4 md:grid-cols-4 md:px-6">
            {buildServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="border border-slate-200 bg-white p-5">
                  <Icon className="h-7 w-7 text-emerald-700" />
                  <h3 className="mt-4 text-lg font-black">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="products" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading eyebrow="Equipment and Software" title="Sell measuring tools, weighing systems and business software">
              This product area gives BellAppTech a clear sales file for measuring equipment, scale systems, software
              licenses and installation support.
            </SectionHeading>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {equipmentProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <article key={product.name} className="border border-slate-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-4">
                      <Icon className="h-9 w-9 text-emerald-700" />
                      <span className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{product.tag}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-black">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.details}</p>
                    <p className="mt-5 text-lg font-black text-emerald-800">{product.price}</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-slate-950">
                      Request quote
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="subscriptions" className="scroll-mt-24 border-y border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading eyebrow="Subscription Product Page" title="Monthly and yearly software plans">
                Customers can subscribe for marketplace tools, business profiles, online ordering, booking and software
                support. Yearly plans help stable businesses save money.
              </SectionHeading>
              <div className="inline-grid w-fit grid-cols-2 border border-slate-300 bg-white p-1">
                {["monthly", "yearly"].map((cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-4 py-2 text-sm font-black capitalize transition ${
                      billingCycle === cycle ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {cycle}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {subscriptionPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`border p-6 ${
                    plan.featured ? "border-emerald-700 bg-emerald-50" : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">{plan.name}</h3>
                      <p className="mt-2 text-sm font-semibold text-slate-600">{plan.audience}</p>
                    </div>
                    {plan.featured ? <span className="rounded-md bg-emerald-700 px-3 py-1 text-xs font-black text-white">Popular</span> : null}
                  </div>
                  <p className="mt-6 text-3xl font-black">{billingCycle === "monthly" ? plan.monthly : plan.yearly}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">/{billingCycle === "monthly" ? "month" : "year"}</p>
                  <div className="mt-6 grid gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                        <p className="text-sm font-semibold text-slate-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => choosePlan(plan.name)}
                    className={`mt-7 inline-flex w-full justify-center rounded-md px-4 py-3 text-sm font-black ${
                      plan.featured ? "bg-emerald-700 text-white hover:bg-emerald-800" : "border border-slate-300 text-slate-950 hover:border-slate-950"
                    }`}
                  >
                    Subscribe
                  </button>
                </article>
              ))}
            </div>

            <div id="subscription-form" className="mt-10 scroll-mt-28 border border-slate-200 bg-[#f7f9f6] p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-700 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black">Subscription request form</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Send your subscription request directly to {subscriptionEmail}. The form prepares an email with
                    your selected plan, billing cycle and contact details.
                  </p>
                  <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-900">
                    Current selection: {subscriptionRequest.plan} / {billingCycle}
                  </div>
                </div>

                <form onSubmit={handleSubscriptionSubmit} className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Plan
                      <select
                        value={subscriptionRequest.plan}
                        onChange={(event) => updateSubscriptionRequest("plan", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                      >
                        {subscriptionPlans.map((plan) => (
                          <option key={plan.name} value={plan.name}>
                            {plan.name}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Service type
                      <select
                        value={subscriptionRequest.serviceType}
                        onChange={(event) => updateSubscriptionRequest("serviceType", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                      >
                        <option>Marketplace subscription</option>
                        <option>Business software subscription</option>
                        <option>Weight and inventory software</option>
                        <option>Education platform access</option>
                        <option>Custom company system</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Full name
                      <input
                        required
                        value={subscriptionRequest.fullName}
                        onChange={(event) => updateSubscriptionRequest("fullName", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Business name
                      <input
                        value={subscriptionRequest.businessName}
                        onChange={(event) => updateSubscriptionRequest("businessName", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                        placeholder="Company or shop name"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Email
                      <input
                        required
                        type="email"
                        value={subscriptionRequest.email}
                        onChange={(event) => updateSubscriptionRequest("email", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                        placeholder="customer@example.com"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-bold text-slate-700">
                      Phone / WhatsApp
                      <input
                        required
                        value={subscriptionRequest.phone}
                        onChange={(event) => updateSubscriptionRequest("phone", event.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                        placeholder="+237 ..."
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-bold text-slate-700">
                    Message
                    <textarea
                      value={subscriptionRequest.message}
                      onChange={(event) => updateSubscriptionRequest("message", event.target.value)}
                      className="min-h-28 rounded-md border border-slate-300 bg-white px-3 py-3 font-semibold text-slate-950 outline-none transition focus:border-emerald-700"
                      placeholder="Tell us what you want to subscribe for..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    <Mail className="h-4 w-4" />
                    Send subscription request
                  </button>

                  {formStatus ? <p className="text-sm font-bold text-emerald-800">{formStatus}</p> : null}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="marketplace" className="scroll-mt-24 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading eyebrow="Marketplace" title="Connect buyers, sellers and service providers">
              The platform can grow into a trusted Cameroonian marketplace where people find what they need, compare
              offers, chat with providers, order, book and pay safely.
            </SectionHeading>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {marketplaceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <article key={category.title} className="border border-slate-200 bg-white p-5">
                    <Icon className="h-7 w-7 text-emerald-700" />
                    <h3 className="mt-4 text-lg font-black">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{category.text}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
              <div className="border border-slate-200 bg-white p-6">
                <h3 className="text-2xl font-black">Payment choices</h3>
                <div className="mt-5 grid gap-3">
                  {paymentOptions.map((option) => (
                    <div key={option} className="flex items-center gap-3 border border-slate-200 bg-slate-50 p-4">
                      <WalletCards className="h-5 w-5 text-emerald-700" />
                      <p className="font-semibold text-slate-800">{option}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-slate-200 bg-slate-950 p-6 text-white">
                <h3 className="text-2xl font-black">First launch modules</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {["User accounts", "Provider profiles", "Listings", "Orders", "Bookings", "Payments", "Reviews", "Admin dashboard"].map((module) => (
                    <div key={module} className="border border-white/10 bg-white/5 p-4">
                      <p className="font-bold">{module}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-slate-200 bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Build with us</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Let us launch the Cameroon version step by step</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Start with education, product subscriptions and verified local providers, then expand into delivery,
                bookings, payments and complete business dashboards.
              </p>
            </div>
            <div className="grid gap-3">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md bg-emerald-700 px-5 py-4 font-black text-white hover:bg-emerald-800">
                <MessageCircle className="h-5 w-5" />
                WhatsApp: +237 697 244 606
              </a>
              <a href="tel:+237694234615" className="flex items-center gap-3 rounded-md border border-slate-300 px-5 py-4 font-black text-slate-950 hover:border-slate-950">
                <Phone className="h-5 w-5 text-emerald-700" />
                Call: +237 694 234 615
              </a>
              <div className="flex items-center gap-3 rounded-md border border-slate-300 px-5 py-4 font-black text-slate-950">
                <MapPin className="h-5 w-5 text-emerald-700" />
                Douala, Cameroon
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7f9f6] py-7">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm font-semibold text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} BellAppTech. Built for learning, software and local commerce.</p>
          <p>Cameroon-first SaaS platform concept.</p>
        </div>
      </footer>
    </div>
  );
}
