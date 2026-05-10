import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { FadeIn, StaggerWrap, StaggerItem, TextReveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Projects | FirstDoor Real Estate",
  description: "Browse our exclusive luxury properties and find your next investment or dream home.",
  alternates: {
    canonical: "https://firstdoor.com/projects",
  },
};

const projects = [
  { title: "The Obsidian Sky", loc: "West Chelsea, NY", beds: 4, sqft: 3200, price: "$4.2M+", date: "Dec 2026", stamp: "Villas", href: "/projects/avenue-premier-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlk5WVRNcy0pWqKkGx7ZuR_2A5tmmKuKZGOqLAHwLDJdKfgI9FOCUMjWtwNyoyBSuFz1z9OlDM4lbmuSBHPWamy6ZIiQXsSX78NCMlvJIjBbG8zt9nI0ZbVmGJV1J3lXA9jfvc4XNiPxQsWS_0LLc7W-iu0tlwrRdp9-BgG9EhAum_Hskslop8t5wyK7KJywGLc6yAuaniRHSs4bFdFcSvP_TB293BW6KrTW1WYILSCIpeiCX48JAbaIswCJfine63Y-Bcyw2a1jA" },
  { title: "Luminaire Residences", loc: "Upper East Side, NY", beds: 5, sqft: 4500, price: "$6.8M+", date: "May 2027", stamp: "Apartments", href: "/projects/avenue-premier-2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnlIlfbw09-37XJFjZ7940-IoimrrWFML_9DaDCkPqP3M_CrubqvzYa14PLLOm4wgcWGGJ7yJMQlpO-ldOAC4gQJI8n-K-ZmlvPbIkgX9ggn-pgFrjbs-PcKIAixx5BmYhm2frbG96rWg0kQJ1xDpOWmL280CxVdAedB2OSe0hLp0-rfCHc7GP-Wz7Aaf40yTWIihavxVqZ1SHX6erIPCh79IplZ2VR70BI0lVkza2dILLTVjWZWVniz-ySzrHNXTGknaFL3JEWtw" },
  { title: "The Marquee Loft", loc: "Tribeca, NY", beds: 3, sqft: 2800, price: "$2.9M+", date: "Ready", stamp: "Lofts", href: "/projects/refined", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5K-wrCqWMQtbAk7_FGusxkLwlVdD_yo_FHet7OHIJx78LNe1RG02ItxawlI397Pw6Sh5Y5uoEYVkRzPRCE0py7tpQZXEoeLyHqXcXT1KSEwPE_XdR-VUsWG41Ed7YBIO98q26AxuwqF2l0azZ4vI9wTrxBsLAB_4chl5Xyp7ZnWR-02SsUYNIJZcijpu2XSUPv8zA5NvjNkFFwf3hR5rlw9gmS6uZijxj-2BYRDykwMBsYFWjDQm4QJfu7QkEhOrLYAuTGKeKTw4" },
  { title: "Harbor Point", loc: "Brooklyn Heights, NY", beds: 4, sqft: 3450, price: "$5.1M+", date: "Sold Out", stamp: "Penthouses", href: "/projects/avenue-premier-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgGbeoEnjz6XTSQlLIBnhsy5z_f8cdzPojBC5PxtSJg9xpOADPW5bggAzj9BHEaJ2xDe8u-5ULYoobd9gQ1bw3PgAbbyAeURdO4wNuD0OX0YnXsNDBtA-Id6vMBzrV3h9glyhlEkS9ssCzPmGGN0wbNPWSGqhOoL6biHHwpzGZHXFM3kAOfOvkVy7SNF35YMlX436AgGtEBzv-TJ4kwDC3Yc_qVkGAwZVf7jQI0Q4j1uqcTx6-mYgi5zSDsOkgSgBv6VNWXUr8qgU" },
  { title: "The Emerald Grove", loc: "Greenwich Village, NY", beds: 6, sqft: 5200, price: "$7.4M+", date: "Nov 2028", stamp: "Estates", href: "/projects/avenue-premier-2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWmRFzbFivIu5mEbHlIV5P9o3zJgaVNP1bKRi8DfoI9bCQ8iu-9iRVtJjioisrVg2G1qzaU8bM5gp87APoUhAs5sKCxxYkX7MlXrPRpRD9MSPXcORXOCofKnkwpAxQflgs5nFIT2l_w8j1aqyT8qz0CSX4BEWHVzUpcKxaKIUwBEIyK73O6g6XvSIiMN_k6LTHhepHQQvl0w8cj4yJQF_-vE-EHf9d4hzI3hmfS6iIJYf6weSwlLGj-8Pe5_NEhaLIk0TNPnYjmyk" },
  { title: "Azure Bay View", loc: "Miami Beach, FL", beds: 4, sqft: 3800, price: "$4.8M+", date: "Jan 2026", stamp: "Beachfront", href: "/projects/refined", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl7j1g4ecBfAsaW2oGhc8sh1xYrQUmEVE9jRpHiSDFpb10q-ekm-IQAxI_2GAFdFT159GSByqftjKhB4gbi8lk7qz3jDPYhVbZ25Lzi1iadRN67c3oYRkRoKTEwAaRvCJDPm-cSU3nIvQEAC-6pwwvGfZt55WyPuevsrKopbkaudK-P2kBcvIzG2lk6Rs0Pgv7kyYydoQgo_n__mqOW8tksIWOx0UKVgTvcAjDRUGK_UokPmIxTbG2PJb13QWtQh45APGLZGv2kSQ" },
  { title: "Bronze & Cedar", loc: "SOHO, NY", beds: 3, sqft: 2400, price: "$3.5M+", date: "June 2027", stamp: "Townhouses", href: "/projects/avenue-premier-1", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZbt4Myf4xpQL16hsNxaSPI9ToEpajA12XQqnT438Zqp7DzYvd0bMcQqkVPXerB1SNdNtNuvbMvBMtHZDz7tMbF7QBfMoENnr1bjV9wCsc977poYT7GkXgl1gyTi-HUX1M87YRUSARzuVdBYcVxI1is7VhShCiCjdXglbaKGjWG1ZYmNrc7VLbQVIllJLdmWp1vwglr3MrZYNw5IYONOfpFB_NKIZRhCnl00KIs4SG-BZaMCNF9rxV-ISgoz_mC8hC7KkN1347Ff0" },
  { title: "The Atrium Plaza", loc: "Central Park South, NY", beds: 4, sqft: 4100, price: "$5.5M+", date: "May 2030", stamp: "Apartments", href: "/projects/avenue-premier-2", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOHfJrgWDre6DRm7HetHuzl2xSF9lWOj661euTmiuobq2eSrVtMLEraOt4F2Qx-iPt5VKv5jJjdntKeTQdhyi3YEz-lWrUyl245_eJb3acBW8Ku4eUDoXseuRGyXZhTZXguiVb4bJGRR8u6il2g7rVZp1ys67YEzegFS6tjKsLiB01uO-YY1xlcrUHYfaFq-l0mvxyJCpQDbGJnLZwaDqM2Sm1XFBb7f_BjFcxrjfgehbA--WvFnwUy4yGwHhfcBu5KbYw1DD2aRo" },
];

export default function Projects() {
  return (
    <>
      <FadeIn delay={0.1}>
        <header className="px-8 pt-12 pb-8 max-w-screen-2xl mx-auto">
          <nav className="flex mb-4 text-[10px] uppercase tracking-[0.2em] font-label text-on-surface-variant/60">
            <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-on-surface-variant">Properties</span>
          </nav>
          <TextReveal text={<h1 className="text-5xl font-extrabold tracking-tighter font-headline text-on-surface">Featured Projects</h1>} />
        </header>

        {/* Sticky Filter Bar */}
        <section className="sticky top-20 z-40 px-8 py-4 bg-surface/90 backdrop-blur-md border-y border-surface-container-highest/30 shadow-sm transition-shadow">
          <div className="max-w-screen-2xl mx-auto flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[160px]">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-1 text-on-surface-variant/70">Location</label>
              <div className="relative">
                <select className="w-full bg-surface-container border-none text-sm py-2.5 pl-3 pr-10 focus:ring-0 focus:border-primary border-b-2 border-transparent focus:border-b-primary rounded-sm transition-all appearance-none outline-none hover:bg-stone-200 cursor-pointer">
                  <option>All Locations</option>
                  <option>Upper East Side</option>
                  <option>West Chelsea</option>
                  <option>Tribeca</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden="true">expand_more</span>
              </div>
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-1 text-on-surface-variant/70">Price Range</label>
              <div className="relative">
                <select className="w-full bg-surface-container border-none text-sm py-2.5 pl-3 pr-10 focus:ring-0 focus:border-primary border-b-2 border-transparent focus:border-b-primary rounded-sm transition-all appearance-none outline-none hover:bg-stone-200 cursor-pointer">
                  <option>Any Price</option>
                  <option>$2M - $5M</option>
                  <option>$5M - $10M</option>
                  <option>$10M+</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden="true">expand_more</span>
              </div>
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-1 text-on-surface-variant/70">Property Type</label>
              <div className="relative">
                <select className="w-full bg-surface-container border-none text-sm py-2.5 pl-3 pr-10 focus:ring-0 focus:border-primary border-b-2 border-transparent focus:border-b-primary rounded-sm transition-all appearance-none outline-none hover:bg-stone-200 cursor-pointer">
                  <option>All Types</option>
                  <option>Penthouse</option>
                  <option>Townhouse</option>
                  <option>Loft</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden="true">expand_more</span>
              </div>
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-[10px] uppercase tracking-wider font-semibold mb-1 text-on-surface-variant/70">Status</label>
              <div className="relative">
                <select className="w-full bg-surface-container border-none text-sm py-2.5 pl-3 pr-10 focus:ring-0 focus:border-primary border-b-2 border-transparent focus:border-b-primary rounded-sm transition-all appearance-none outline-none hover:bg-stone-200 cursor-pointer">
                  <option>All Status</option>
                  <option>Pre-Construction</option>
                  <option>Move-in Ready</option>
                  <option>Under Renovation</option>
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" aria-hidden="true">expand_more</span>
              </div>
            </div>
            <button className="mt-5 bg-on-surface text-surface-container-lowest px-8 py-2.5 text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-primary transition-colors flex items-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">tune</span> Filter
            </button>
          </div>
        </section>
      </FadeIn>

      {/* Project Grid */}
      <section className="px-8 py-16 max-w-screen-2xl mx-auto">
        <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-8">
          {projects.map((proj, i) => (
            <StaggerItem key={i}>
              <Link href={proj.href} className="group flex flex-col bg-white rounded-xl border border-surface-container p-4 hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-6">
                  <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" alt={proj.title} src={proj.img} />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">{proj.stamp}</div>
                  <button className="absolute top-3 right-3 text-white hover:text-primary transition-colors hover:scale-110 active:scale-90" aria-label="Favorite">
                    <span className="material-symbols-outlined drop-shadow-md" aria-hidden="true">favorite</span>
                  </button>
                </div>
                <div className="flex flex-col space-y-4 relative z-10">
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-xl font-bold font-headline text-stone-900 group-hover:text-primary transition-colors">{proj.title}</h3>
                    <div className="flex items-center text-stone-500 text-sm">
                      <span className="material-symbols-outlined text-[18px] mr-1" aria-hidden="true">location_on</span>
                      {proj.loc}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-stone-400" aria-hidden="true">bed</span> {proj.beds} BHK
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-stone-400" aria-hidden="true">square_foot</span> {proj.sqft} SQFT
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Starting Price</span>
                      <span className="text-lg font-bold text-stone-900">{proj.price}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Possession</span>
                      <span className="text-sm font-semibold text-stone-600">{proj.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerWrap>
      </section>

      {/* Pagination */}
      <FadeIn delay={0.2} className="flex justify-center items-center gap-4 py-12 px-8">
        <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-colors" aria-label="Previous">
          <span className="material-symbols-outlined" aria-hidden="true">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-primary text-white font-bold hover:opacity-90 transition-opacity">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors font-bold">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors font-bold">3</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-sm bg-surface-container-high text-on-surface hover:bg-primary hover:text-white transition-colors" aria-label="Next">
          <span className="material-symbols-outlined" aria-hidden="true">chevron_right</span>
        </button>
      </FadeIn>
    </>
  );
}
