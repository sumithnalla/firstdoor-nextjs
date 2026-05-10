import Image from "next/image";
import { Metadata } from "next";
import { FadeIn, StaggerWrap, StaggerItem, TextReveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Contact Us | FirstDoor Real Estate",
  description: "Connect with excellence. Whether you are looking to acquire a masterpiece or list a curated estate, our advisors are at your service for a private consultation.",
  alternates: {
    canonical: "https://firstdoor.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-24 pt-12">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <FadeIn delay={0.1} className="w-full md:w-1/2 mt-10">
            <TextReveal text={
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-none font-headline text-on-surface">
                Connect with <br/>
                <span className="text-primary italic font-medium">Excellence.</span>
              </h1>
            } />
            <p className="text-lg text-secondary max-w-md leading-relaxed font-light mt-4">
              Whether you are looking to acquire a masterpiece or list a curated estate, 
              our advisors are at your service for a private consultation.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="w-full md:w-1/2 relative group">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl relative">
              <Image 
                fill 
                className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" 
                alt="Modern architectural detail of a luxury villa" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAexaZca9ML3MJO0QYp12sVoRIipuX6VSvoJ5KJOYefcdsoPFXmXgw3npLddo55g2xFX5a0dU__ZEmUemxCm75x6VL_-jyqqWAH9Tut9XHU8bGH1Kqphi0rVmfy_Wid3kHA5O7oh7haLNXLbyxTNlvk8f-fcblXp0AX-IihrGElCfijTzj1ywGWMn1Rz_Zh0WTWYkqLft6jcropwxLcbZ4diT4-vNZhR1PsgeOgDVUga7f3m0dF71PnCZq3jVVXx8OSHQgrBggB8s4" 
              />
            </div>
            {/* Overlapping element for Editorial feel */}
            <div className="absolute -bottom-8 -left-8 bg-white p-10 card-shadow border border-surface-container rounded-2xl hidden lg:block transition-transform duration-700 group-hover:-translate-y-4">
              <p className="font-headline text-3xl font-extrabold tracking-tight text-stone-900">Personalized <br/>Advisory</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <StaggerWrap className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <StaggerItem className="lg:col-span-4 space-y-12 bg-surface-container-low p-10 rounded-3xl border border-surface-container">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6">General Enquiries</h3>
              <div className="space-y-4">
                <a href="mailto:concierge@firstdoor.com" className="text-2xl font-medium tracking-tight hover:text-primary transition-colors block text-stone-800">concierge@firstdoor.com</a>
                <a href="tel:+1800FIRSTDO" className="text-2xl font-medium tracking-tight hover:text-primary transition-colors block text-stone-800">+1 (800) FIRSTDO</a>
              </div>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6">Media & PR</h3>
              <a href="mailto:press@firstdoor.com" className="text-xl font-medium tracking-tight hover:text-primary transition-colors block text-stone-800">press@firstdoor.com</a>
            </div>
            
            <div className="pt-8 border-t border-stone-200 space-y-8">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">schedule</span>
                <div>
                  <p className="font-bold text-sm text-stone-900">Mon — Fri</p>
                  <p className="text-secondary text-sm">09:00 AM - 06:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-2xl" aria-hidden="true">public</span>
                <div>
                  <p className="font-bold text-sm text-stone-900">Global Operations</p>
                  <p className="text-secondary text-sm">New York • London • Dubai</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Form Side */}
          <StaggerItem className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-16 card-shadow border border-stone-100 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold font-headline mb-10 text-stone-900">Send an Enquiry</h2>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 transition-colors group-focus-within:text-primary">Your Full Name</label>
                  <input className="w-full bg-stone-50 border-none rounded-lg px-4 py-3.5 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="Johnathan Doe" type="text" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 group-focus-within:w-full group-focus-within:opacity-100 rounded-b-lg"></div>
                </div>
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 transition-colors group-focus-within:text-primary">Email Address</label>
                  <input className="w-full bg-stone-50 border-none rounded-lg px-4 py-3.5 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="email@example.com" type="email" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 group-focus-within:w-full group-focus-within:opacity-100 rounded-b-lg"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 transition-colors group-focus-within:text-primary">Phone Number</label>
                  <input className="w-full bg-stone-50 border-none rounded-lg px-4 py-3.5 focus:bg-white focus:ring-0 transition-all outline-none" placeholder="+1 (000) 000-0000" type="tel" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 group-focus-within:w-full group-focus-within:opacity-100 rounded-b-lg"></div>
                </div>
                <div className="relative group">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 transition-colors group-focus-within:text-primary">Interest Area</label>
                  <select className="w-full bg-stone-50 border-none rounded-lg px-4 py-3.5 focus:bg-white focus:ring-0 transition-all outline-none appearance-none hover:bg-stone-100 cursor-pointer">
                    <option>Residential Acquisition</option>
                    <option>Commercial Portfolio</option>
                    <option>Asset Management</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>
              
              <div className="relative group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 block mb-2 transition-colors group-focus-within:text-primary">Message</label>
                <textarea className="w-full bg-stone-50 border-none rounded-lg px-4 py-3.5 focus:bg-white focus:ring-0 transition-all outline-none resize-none" placeholder="How may we assist you?" rows={4}></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 group-focus-within:w-full group-focus-within:opacity-100 rounded-b-lg"></div>
              </div>
              
              <button className="w-full md:w-auto bg-primary text-white rounded-xl px-12 py-4 text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/30 hover:shadow-xl transition-all active:scale-95 hover:bg-red-800" type="submit">
                Send Message
              </button>
            </form>
          </StaggerItem>
        </StaggerWrap>
      </section>

      {/* Locations Section */}
      <section className="bg-stone-50 py-32 px-8 border-y border-stone-100">
        <div className="max-w-screen-2xl mx-auto">
          <FadeIn className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-4 font-headline text-stone-900">Global Studios</h2>
            <p className="text-stone-500 text-lg font-light">Visit us at one of our primary office locations worldwide.</p>
          </FadeIn>
          
          <StaggerWrap className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "New York",
                address: ["725 Fifth Avenue, 24th Floor", "New York, NY 10022"],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLdRRSOWxRlRovlTdP3BHzcBMpoyyWuXDj1O5NFYnwOpQlfFOolbOjReFq498klxqTy00Up_c9zibBoQJGvCSPzCKDkSXZT1fTAxl7XteCLfMC-yoXcDqvZBhiQx6cnYBBnZoYqgExceJJX2WYH4xgen-BKSzJZiRS-m3xwRUe-STexAlqhXYVzWR3P0I1bvToUCvEtPhVquD_st_qt7_jh-VVKE9tw5osdR8PGWPPlWTIbx0npk0gH_c6mxp60FLL06fsreCnB5U"
              },
              {
                city: "London",
                address: ["12 Berkeley Square, Mayfair", "London W1J 6BQ"],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkHfgo5bXLONJ64G75FrJvrXV6op0r2MzrJS916hWL32swQ_BNoZ5oLrjgGZ1SIcZmMo-iLPPtmMCAHXANSD_iPPytx74RFgu4zUfZEHcZB1KtS05MrdQGqixxwPeb2vNWF6mxB2X1aelssKAKhiH4RQuVtFF-seio7-Phzlom3ZBjOofexr4aLvpFQ6R7IZasBY63ki4k2NmN3Z3EOVWOuTDMsojhLO0dihWPTZg1zI30dJDmuWBug4PnLpl0WsHURCpsT7XuYgA"
              },
              {
                city: "Dubai",
                address: ["Burj Daman, Level 10, DIFC", "Dubai, United Arab Emirates"],
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWr7aZBfKs1mQROJNlGXm71snIzXiWMsWXZUL9quSPqTXwPAWey_Q65C3VI7p0G87cjtqWze00uWz2ONPy_vowBB5V5ae4pHtLAnVODvaXs3SHeCQh5t3tFXC58RoGBP7oCM18d9tlaEZnn7HVy1YrGRMvGTSu6M7AEynQyUB9ouJGHKio-vPECvgFXLwB9c5M9QVYKSDTLkJ9CKBIVonLte-BDQSgwNVCYQ-H9H1vlxSC-ZuvN1iX98HnFcd2otNd5irulGsecIY"
              }
            ].map((office, i) => (
              <StaggerItem key={i} className="group bg-white p-6 rounded-2xl border border-stone-100 card-shadow hover:shadow-xl transition-shadow cursor-pointer">
                <div className="aspect-[4/3] bg-stone-200 mb-6 overflow-hidden rounded-xl relative">
                  <Image fill className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" alt={`${office.city} Office`} src={office.img} />
                </div>
                <h4 className="text-2xl font-bold mb-2 font-headline text-stone-900 group-hover:text-primary transition-colors">{office.city}</h4>
                <div className="text-sm text-stone-500 leading-relaxed mb-6">
                  {office.address.map((line, j) => <p key={j}>{line}</p>)}
                </div>
                <span className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Get Directions <span className="material-symbols-outlined !text-sm" aria-hidden="true">east</span>
                </span>
              </StaggerItem>
            ))}
          </StaggerWrap>
        </div>
      </section>
    </>
  );
}
