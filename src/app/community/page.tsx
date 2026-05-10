import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeIn, StaggerWrap, StaggerItem, TextReveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Insights & Community | FirstDoor Real Estate",
  description: "A curated selection of narratives detailing architectural excellence, investment intelligence, and the evolving landscape of modern living.",
  alternates: {
    canonical: "https://firstdoor.com/community",
  },
};

export default function Community() {
  return (
    <>
      <header className="px-8 max-w-screen-2xl mx-auto mb-20 text-center md:text-left pt-12">
        <FadeIn delay={0.1}>
          <div className="inline-block py-1 px-3 bg-surface-container-high mb-6 rounded-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">Our Perspective</span>
          </div>
          <TextReveal text={
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 font-headline">
              Insights &{" "}
              <span className="text-primary italic font-medium">Community</span>
            </h1>
          } />
          <p className="max-w-2xl text-lg text-secondary leading-relaxed font-light">
            A curated selection of narratives detailing architectural excellence,
            investment intelligence, and the evolving landscape of modern living.
          </p>
        </FadeIn>
      </header>

      {/* Featured Section: Bento Grid */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-32">
        <StaggerWrap className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]">
          {/* Featured Article */}
          <StaggerItem className="md:col-span-8 group relative overflow-hidden bg-surface-container-low flex flex-col justify-end p-12 rounded-2xl">
            <div className="absolute inset-0 z-0">
              <Image
                fill
                alt="Featured Interior"
                className="object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNov2o7AThhULTPqu4Aclj9zEnfPBmmVPMJBKLUQ6qdy2rVtSPpUIIcrTSS6I9IdOBLN23vQIfIgI3JRv7DYDt2IQ1vdZqal2_3y9W6jSrD6i7ruldzW4ZFJUpIoZ00ewGuMpKPw3_F1TwxU5yH8ZU7jxob0TKrZNJ1mK8TeWcsihJy2WV_4uPM5vT1IV9kun3X96FgyKJqndY6nOROfm8MH2C-Whmxh0kxr_eVgVq46Z84u-p_GEf-drgn0qFR_EXzgmj9imHz1Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-1000 group-hover:opacity-80"></div>
            </div>
            <div className="relative z-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-red-300 mb-4 block">Market Insights</span>
              <h2 className="text-4xl font-bold mb-6 max-w-xl leading-tight font-headline">The Evolution of Metropolitan Luxury in 2026</h2>
              <p className="text-white/80 max-w-lg mb-8 font-light line-clamp-2">How shifts in global mobility and architectural preferences are redefining high-end residential demand in central hubs.</p>
              <Link className="inline-flex items-center text-xs font-bold uppercase tracking-widest group/link hover:text-red-300 transition-colors" href="#">
                Read Article 
                <span className="material-symbols-outlined ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>
          </StaggerItem>

          {/* Side Feature */}
          <StaggerItem className="md:col-span-4 bg-white rounded-2xl p-8 flex flex-col justify-between card-shadow border border-surface-container-low group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Investment Tips</span>
              <h3 className="text-2xl font-bold mb-4 leading-snug font-headline text-stone-900 group-hover:text-primary transition-colors">Portfolio Diversification: Real Estate in the Green Era</h3>
              <p className="text-secondary text-sm leading-relaxed mb-6 font-light">Analyzing the long-term ROI of sustainable building certifications in the luxury market.</p>
            </div>
            <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden rounded-xl">
              <Image
                fill
                alt="Investment"
                className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQZV2NuEX9GLKXmYOg4Lp5eqw9uK0Is8Khkd3WiG4mXkspAm0uX-pA1W5wXpRknt_N9pKi2QG4vPIydzs4WaU1A05PALDkGnBQdZOdAR1vluJ6PUSpHIhxVDX6iF3eKiF0NZ_-KA8x6pIngmMn6H2ttW9t57Oexrm7R9cNZn1gmOHGiDeBR3C6tH17hiXrYW7pAOSGDLG5wYp_qjnPwnEXDPuC6iJZH3mvKh9eKZ3itJ0d9Wi2WcAFmSYk41JanRQDS8A1ykqrTo4"
              />
            </div>
          </StaggerItem>
        </StaggerWrap>
      </section>

      {/* Category: Real Estate Guides */}
      <section className="bg-surface-container-low py-32 mb-32 border-y border-surface-container rounded-3xl mx-8">
        <div className="px-8 max-w-screen-2xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <TextReveal text={<h2 className="text-3xl font-bold tracking-tight mb-4 font-headline text-stone-900">Real Estate Guides</h2>} />
              <p className="text-secondary font-light">Comprehensive manuals for navigating the complexities of high-value property acquisition and management.</p>
            </div>
            <Link className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors" href="#">View All Guides</Link>
          </FadeIn>

          <StaggerWrap className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrg2v3yh_-SMF0iaOcaBCjHdPhsdXTWTcbRVeoWQlgk8pzNwEHlYjff-AK_739S-gfGBq-E2Daq81JsFqLD8M827x0NL6KGJpnAxaRMYh418Xq4ZTTUWArk7fLoMn2GcvHyGbDfAYLjrvjtbMtI-VDCR9jAby-gjLX6OZPMgTATsia2Syj6nElp6oSQ15n5JwXFTa7NFIEqmu08dLSilhzL1Z-0h51nJLM1XZ3ujl00KkInwBSZCFU8sD0U8g0ZSD3QnqdYujtI_c",
                tag: "Guide — 12 Min Read",
                title: "The Art of Curated Acquisitions",
                desc: "Navigating off-market listings and building a network in elite circles.",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJFAtKee5asvvk06vvgz8tm1sFRFaWhuxBS90CDr31vXkPvKc9-a3pvpFUTfAeWpdNqcoOsh2_sgTlrABdO-qmSEcMSA5SkO7fjCF-HCh_ByBRFjvrxWCnzcZuXYdY-Sq_S36hygyy_FiGyrBYj_9_a7wyl2jK1Dm54k_crG1sKJQQKn1LsVjFxrROT7UkYdHIrdn0dE95QhC8QRLQIWsXFB7jDCBAQJ4i1ExQxfO3JSaZQlFIqnyN_3Yan5umzjstfJR7E9qvMlQ",
                tag: "Guide — 08 Min Read",
                title: "Tax Efficiency in Global Holdings",
                desc: "Strategic insights into international property tax laws for high-net-worth investors.",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtSdXMgd5GUrE9ekA7PWqtFkV64ajfWpsKd1h0y8nH-qBS_iu9bM3RWble1QUcbIB3EuwQwJI8b_o1rtjTtLGBwv7d2fQ_LllIDoZPYQmiLjFdOb71aqkcUJtej3B2b1NPD1d2x81ZvvY9yl3gpAbvwOdBoxha1GgPugn44esS9Lj6KaTcBP2mZmZHCM4P69CxG0tfzUM2zlWD8Oxa_vfJPElgjmWQYjkkcWlplMbdgEgpCBRomV25U64gU1lZXJ9fYFy34EDooOs",
                tag: "Guide — 15 Min Read",
                title: "Managing Secondary Residences",
                desc: "Optimizing property management services for vacation homes and secondary estates.",
              },
            ].map((guide, i) => (
              <StaggerItem key={i} className="group cursor-pointer block">
                <div className="aspect-[16/10] bg-stone-200 overflow-hidden mb-6 rounded-2xl relative shadow-sm transition-shadow group-hover:shadow-xl">
                  <Image fill alt="Illustration" className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]" src={guide.img} />
                </div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 block">{guide.tag}</span>
                <h4 className="text-lg font-bold mb-3 font-headline text-stone-900 group-hover:text-primary transition-colors">{guide.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{guide.desc}</p>
              </StaggerItem>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* Newsletter / Community CTA */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-20">
        <FadeIn delay={0.2}>
          <div className="bg-stone-950 text-stone-100 p-16 md:p-24 flex flex-col items-center text-center rounded-3xl relative overflow-hidden group">
            {/* Animated subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50 animate-[spin_20s_linear_infinite] group-hover:opacity-70 transition-opacity duration-1000 origin-center scale-[1.5]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight font-headline">Join the Inner Circle</h2>
              <p className="text-stone-400 max-w-xl text-lg mb-12 font-light mx-auto">
                Receive bi-weekly briefings on global market trends and private event invitations before they go public.
              </p>
              <form className="w-full max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <input 
                    className="w-full h-full bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-stone-500 px-5 py-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all text-sm font-light outline-none backdrop-blur-md" 
                    placeholder="Professional Email Address" 
                    type="email" 
                    required 
                  />
                </div>
                <button 
                  className="bg-primary text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors shrink-0 shadow-lg shadow-primary/20 active:scale-95" 
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
