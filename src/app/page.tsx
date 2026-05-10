import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeIn, StaggerWrap, StaggerItem, TextReveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Home | FirstDoor Real Estate",
  description: "Find your dream home with FirstDoor Real Estate. Curated living spaces that define architectural excellence and modern sophistication.",
  alternates: {
    canonical: "https://firstdoor.com/",
  },
};

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0 scale-105 animate-[zoomOut_1.5s_cubic-bezier(0.22,1,0.36,1)_forwards]">
          <Image
            fill
            className="object-cover"
            alt="luxury modern mansion with clean lines large glass windows and minimalist landscaping"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjRyuaYyIVTXVn8BPIwz2DDDJ0lXHq12OO49oswrLQ4t7KEXhYBpFt2N6SsrdrF8n46TUxsC9ExUScafR5HVEJwJejoxsyal_2sYtD34oaLm8n9hhCQzvwXvhyziwtWndyGk6dM-yBRvI3NgdXysGGEhrWqDwZjzzLoiSdAY0OeIBvwvq4l37DOG0tdXKOLSr518T5stBSUdBgn7HCCSKReVl_K1mvvAB9_MW8VI1Fy6-K0TFWVSq8NWZGBsjUM3simJEByPz8VMk"
            priority
          />
          <div className="absolute inset-0 bg-stone-950/30"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl px-8 mt-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6 font-headline overflow-hidden">
              <TextReveal text="Find Your Dream Home" delay={0.2} />
            </h1>
            <FadeIn delay={0.4}>
              <p className="text-white/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                Curated living spaces that define architectural excellence and modern sophistication.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.6} className="bg-surface-container-lowest p-2 md:p-3 editorial-shadow max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-2">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-surface-container">
              <div className="px-6 py-4 flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-1">Location</label>
                <input className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium placeholder:text-stone-400 focus:outline-none" placeholder="Where are you looking?" type="text" />
              </div>
              <div className="px-6 py-4 flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-1">Budget</label>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium appearance-none focus:outline-none cursor-pointer">
                  <option>$500k - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M - $20M</option>
                  <option>$20M+</option>
                </select>
              </div>
              <div className="px-6 py-4 flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-1">Property Type</label>
                <select className="bg-transparent border-none p-0 focus:ring-0 text-on-surface font-medium appearance-none focus:outline-none cursor-pointer">
                  <option>Luxury Villa</option>
                  <option>Penthouse</option>
                  <option>Modern Estate</option>
                  <option>Coastal Retreat</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all hover:opacity-90 active:scale-95">
              Search
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <FadeIn className="flex justify-between items-end mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Curated Selection</span>
            <TextReveal text={<h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4">Featured Projects</h2>} />
          </div>
          <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hidden md:block hover:opacity-75 transition-opacity">
            View All Projects
          </Link>
        </FadeIn>
        
        <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "The Azure Residences", loc: "Cap Ferrat, France", beds: 4, sqft: 4200, price: "$12.45 M", date: "Aug 2025", stamp: "Villas", color: "bg-blue-100 text-blue-800", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMxBRP71S_JIgQrT9OsEdmeaSxRf3KpXkdPo2YTd2LICDVzxcsT0ctvOoJxzFeCSlgeOzV2i7OMpcoD7F4JqrUafgnJSO_BJGwTW8yS4vQ5QJBLGRF2nscuMn-4Z9C56orxcAWF_GIXzXvvjwlwwJQ_JJbFzoyGCW7NHfvwkLh_RC1ho3t4XK8IFZ1wk17jHKdirGebahMh2VHiQwXjhySP68CUepwOp7EtnojVU0tSJJw4hnSPN_-e-wbxDEz_XwPGNBNb9XsKk", href: "/projects/avenue-premier-1" },
            { title: "Aspen Heights Peak", loc: "Aspen, Colorado", beds: 5, sqft: 5800, price: "$8.90 M", date: "Dec 2026", stamp: "New Launch", color: "bg-orange-100 text-orange-800", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbei8iJcPY89H3QkR_efy1ax3Szt7VhhwvzRJUo1Opo9rdGV6_upa5YwrtA6XAdfba6U56bJrXZXuWwciWFZoLpArkMFl7UC71Vl9DDBqD4pDvm0qXGuq-k0MwsPHsMqTdj42Vq5BFTYbXtKRajhRTdlWalFH9piWe7p4xzM-q80q_W0xsMllu7bdy_K9p-QJY4JeAIkVAyzJOqQkzit-HJ0QQ3l7hh_HZjCk-nnGWTll7z5lAzwvsznJpJzUjJI2aOQPqW5ZJjE0", href: "/projects/avenue-premier-2" },
            { title: "Skyline Pavilion", loc: "Manhattan, NY", beds: 3, sqft: 3100, price: "$24.00 M", date: "Ready", stamp: "Penthouse", color: "bg-green-100 text-green-800", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeDpU3TGMDBiqoDXvMcZOEI6vXARWcOpyXNFwyBfRNWr2ZwOTgyQxaE7laFkxmWTMIcVkmqxZBTqD6szZDCHnfjC8Gb92tOByFVsCaUM-zyqT9AcbFnZYHzjK0CYDxfBOzkXmmpLwVArNcslvuSYQntkGGRIZBDzQ4GdEwntus6rev_cYyMfB2SIRiAlBoUqhg7Ff4jROhj1irzO54-XILK5DlTgOkQwYUbx31cJzJZSLLoJJ0Eh9wdO_SLm8evdhRQobcORBLvUk", href: "/projects/refined" }
          ].map((proj, i) => (
            <StaggerItem key={i}>
              <Link href={proj.href} className="bg-white rounded-[8px] overflow-hidden card-shadow group border border-stone-100 block transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" alt={proj.title} src={proj.img} />
                  <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${proj.color}`}>{proj.stamp}</div>
                  <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors" aria-label="Favorite">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">favorite</span>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight mb-2 text-stone-900">{proj.title}</h3>
                  <div className="flex items-center text-secondary mb-4">
                    <span className="material-symbols-outlined text-base mr-1" aria-hidden="true">location_on</span>
                    <span className="text-xs font-medium">{proj.loc}</span>
                  </div>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg text-stone-400" aria-hidden="true">bed</span>
                      <span className="text-sm font-semibold text-stone-700">{proj.beds} BHK</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg text-stone-400" aria-hidden="true">square_foot</span>
                      <span className="text-sm font-semibold text-stone-700">{proj.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-end border-t border-stone-50 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Starting Price</p>
                      <p className="text-primary font-extrabold text-lg leading-none">{proj.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Possession</p>
                      <p className="text-stone-900 font-bold text-sm">{proj.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerWrap>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface-container-low py-32 rounded-3xl mx-8 mb-32">
        <div className="max-w-screen-2xl mx-auto px-8">
          <FadeIn className="text-center mb-24">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The FirstDoor Edge</span>
            <TextReveal text={<h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-4">Redefining Real Estate Excellence</h2>} />
          </FadeIn>
          
          <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: "verified", title: "Verified Listings", desc: "Every property in our portfolio undergoes a rigorous 50-point quality and legal audit." },
              { icon: "architecture", title: "Expert Guidance", desc: "Navigate complex transactions with our bespoke advisory team of industry veterans." },
              { icon: "no_accounts", title: "No Brokerage", desc: "Direct-to-owner transparency ensuring the most competitive pricing without middleman fees." },
              { icon: "support_agent", title: "Personalized Support", desc: "From initial viewing to key handover, our concierges cater to every detail." }
            ].map((feature, i) => (
              <StaggerItem key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="material-symbols-outlined text-4xl" aria-hidden="true">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-bold tracking-tight mb-3">{feature.title}</h4>
                <p className="text-secondary text-sm leading-relaxed max-w-[240px]">{feature.desc}</p>
              </StaggerItem>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-extrabold tracking-tighter mb-16">Browse by Lifestyle</h2>
        </FadeIn>
        
        <StaggerWrap className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
          <StaggerItem className="md:col-span-8 md:row-span-1 min-h-[300px] md:min-h-0">
            <Link href="/projects" className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl block">
              <Image fill className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" alt="Apartments" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkOsUMEr038Rtj5smqde1V1ZEQ5tTR5y_b-cmzY2L7xzY9w7HgCQ93vByNL9ER-uy8aQ_o4NTLZGfwGqnw1yYzo90eFkKkdAJA7iUrX8397jrvSYDlrn_jr6i0vxIYUG4g5v9gEqbbmnjWohO2M0x2vb_pm297DH3cMbE-zn3QBetdyXocqYGqgOVLdh9V7l-obfnvRtrjzThWOcOof1mIXA8VtiNLjJ0EjoU5dxLBr9oEKTuthVQ4-UKH6aG9m7QDt3eeWlLleYU" />
              <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-10 transition-colors duration-500 group-hover:bg-stone-900/30">
                <h3 className="text-3xl font-bold text-white tracking-tight">Apartments</h3>
                <p className="text-white/80 uppercase text-[10px] font-bold tracking-[0.2em] mt-2">124 Properties</p>
              </div>
            </Link>
          </StaggerItem>
          
          <StaggerItem className="md:col-span-4 md:row-span-2 min-h-[300px] md:min-h-0">
            <Link href="/projects" className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl block">
              <Image fill className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" alt="Villas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7DW-KC8JW3Hmj2Jw8756IrXxuPWQ2nCWVJqThvDOlgba291yRdNqj75Dp92wn1nX7ue-QTKfHAs2LBYa9HP8jfKV027jfSlmNQn7-4vdSaTKfIde9uOzipEgByLsXSsj3VCWx8s6LFzBW6FnDUP09csOQMwp90hGJCb-v66wjv41ZPycsfMWOOaYwSX6WaxAt-I_09_8FOvOEz7yydTh0rulzblrkn3P_GdxHAKS3S1UYTYNGK6pPUbMD--NLHs09vMFL9scCL2w" />
              <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-10 transition-colors duration-500 group-hover:bg-stone-900/30">
                <h3 className="text-3xl font-bold text-white tracking-tight">Villas</h3>
                <p className="text-white/80 uppercase text-[10px] font-bold tracking-[0.2em] mt-2">86 Properties</p>
              </div>
            </Link>
          </StaggerItem>
          
          <StaggerItem className="md:col-span-4 md:row-span-1 min-h-[300px] md:min-h-0">
            <Link href="/projects" className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl block">
              <Image fill className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" alt="Luxury Homes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl16KSderPTXZh5x7VD7AhaonNVrJ7wvMbqzq5kWLOdpOJEdes7q6GiQMKsVXyPP6LWh19w3ZEQz4bXhnlI4d-8Vwtw5-9XUbVsM6FfpTbbbs63VbyOfhPyViMiPk73arQ8B1OQDxjd3uyqc-qOuSnCJJUbGVv8giSXlRr-a0Z9ZU-nPbLlICxvGoLlHZeaiHdXhajHK0pO1WVzuk-evjNnKwS9Hsmh776xf7VT6eXz72GiDeTPvjUxdZ7ulp6V5laVAvZza6kv4U" />
              <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-10 transition-colors duration-500 group-hover:bg-stone-900/30">
                <h3 className="text-2xl font-bold text-white tracking-tight">Luxury Homes</h3>
                <p className="text-white/80 uppercase text-[10px] font-bold tracking-[0.2em] mt-2">42 Properties</p>
              </div>
            </Link>
          </StaggerItem>
          
          <StaggerItem className="md:col-span-4 md:row-span-1 min-h-[300px] md:min-h-0">
            <Link href="/projects" className="w-full h-full relative group cursor-pointer overflow-hidden rounded-2xl block">
              <Image fill className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" alt="Plots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KHiwYqDuhwQCh4ktrfTID647wOK1Fcprb4kWuCjUQskbhRcT-BKKU7jr9APH2LEJJPEHSg1A1bU4ZDTHFdateM1XtVUe2IZK-pYUKlw9_GATqRy1PttnIweGRJwsr46kIP9rPE6siBCnR-byhuY7Y0ej8Tdy0zIDlPbNMtO5bDCEJkm35yy46WyiLbWJoHztp7vStAehxnohTzXN711sAvUUXtzkvI5J1NifD_Ogm4WEGOuCLh-XUNzveTV-lroTA26xLnm6bZw" />
              <div className="absolute inset-0 bg-stone-900/40 flex flex-col justify-end p-10 transition-colors duration-500 group-hover:bg-stone-900/30">
                <h3 className="text-2xl font-bold text-white tracking-tight">Plots</h3>
                <p className="text-white/80 uppercase text-[10px] font-bold tracking-[0.2em] mt-2">18 Properties</p>
              </div>
            </Link>
          </StaggerItem>
        </StaggerWrap>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8 max-w-4xl mx-auto text-center">
        <FadeIn>
          <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40" aria-hidden="true">format_quote</span>
          <div className="relative">
            <p className="text-2xl md:text-3xl font-light italic text-on-surface leading-relaxed mb-12 px-4 border-l-4 border-primary/20">
              "Finding our home with FirstDoor was an experience in pure professionalism. Their eye for detail and understanding of modern aesthetics is unparalleled in the market."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden relative">
                <Image fill className="object-cover" alt="Jameson Sterling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt-aaaNKhEoNI86NeyAPrnH9Z8DkGPH6XRNpwmsfewTQoqEJJToG8JVeyZs6rBk4ksyysFTs6ZcfBWg63dMM1ps0rfK8D8TzKkTjLQMyKjB5Lsy3jzSaJrTvEqGNyn7vBht33DYzpc_HEtqftFpYwu1fqA26yCF0xfqhaDq1Z7aCtDq0CJGMeSDj5OB6BK1WZmQONfuNBTVOM2QSCg46OJQQpMEDzFBTLMoE7TqBN8um95zO9wtNcDwVOFKa8Z8ADZSVk9prvvq_w" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm uppercase tracking-widest">Jameson Sterling</p>
                <p className="text-secondary text-xs uppercase tracking-[0.2em]">CFO, Global Ventures</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-16">
              <div className="w-2 h-2 rounded-full bg-primary transition-transform hover:scale-150 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-stone-300 transition-transform hover:scale-150 cursor-pointer"></div>
              <div className="w-2 h-2 rounded-full bg-stone-300 transition-transform hover:scale-150 cursor-pointer"></div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Lead Form CTA */}
      <section className="py-32 px-8">
        <FadeIn className="max-w-6xl mx-auto bg-surface-container-lowest editorial-shadow grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl group">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">Expertise at Your Service</h2>
            <p className="text-secondary mb-10 leading-relaxed">Request a private consultation with our portfolio curators to find exclusive listings not available on the open market.</p>
            <form className="space-y-6">
              <div className="relative overflow-hidden rounded-lg">
                <input className="w-full bg-surface-container border-none p-4 focus:bg-stone-50 focus:ring-0 text-sm transition-all placeholder:text-stone-400 outline-none" placeholder="Full Name" type="text" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 form-indicator focus-within:w-full focus-within:opacity-100"></div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <input className="w-full bg-surface-container border-none p-4 focus:bg-stone-50 focus:ring-0 text-sm transition-all placeholder:text-stone-400 outline-none" placeholder="Email Address" type="email" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 form-indicator focus-within:w-full focus-within:opacity-100"></div>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <textarea className="w-full bg-surface-container border-none p-4 focus:bg-stone-50 focus:ring-0 text-sm transition-all placeholder:text-stone-400 outline-none resize-none" placeholder="Tell us what you're looking for..." rows={4}></textarea>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 opacity-0 form-indicator focus-within:w-full focus-within:opacity-100"></div>
              </div>
              <button className="bg-primary text-white w-full py-5 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-stone-900 transition-colors shadow-lg active:scale-95">Submit Inquiry</button>
            </form>
          </div>
          <div className="hidden md:block relative h-full min-h-[400px] overflow-hidden">
            <Image fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" alt="office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCFBTDkrcHrx7erypBH-sl5el5jTAIL70M5qSVlQZT3IIjsmhAmHUx6EDneqfjbta3fil-0J3ox8sXCRXEXqjlQR1kG56irM-bcEz0Alg62X8931yA-9jPj2Rhxm_7sATBpwkcMDsAel6Nf-O8BURDzcsjbIRG-K0MHg3dHiDYkMF3t3lF-SWnJjhprOYTVUTBFTbYW8qRnAPkgfuyHcRQ4HNgiolcU9pt_BpCl43yCmPj2YNXSYAwJW9d0jsla1k6Xiy4SsvNE08" />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
