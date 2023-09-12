import Image from "next/image";
import Link from "next/link";
import { MapPin, Briefcase, Banknote } from "lucide-react";
import testimonials from "@/data/testimonials.json";
import jobs from "@/data/jobs.json";

export default function CareerPage() {
  return (
    <main>
      <section className="min-h-[calc(100vh-64px)] supports-[min-height:100dvh]:min-h-[calc(100dvh-64px)] grid place-content-center relative isolate bg-hero-carrer bg-no-repeat bg-cover bg-center after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-full after:bg-black/80 after:z-[-1]">
        <div className="container px-4 max-w-3xl text-center space-y-6">
          <h1 className="text-5xl text-slate-100 font-extrabold leading-tight">
            Come Work <span className="inline-block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">With Us</span>
          </h1>
          <p className="text-slate-200 text-xl font-medium">Find Your Dream Job in Betr Beta!</p>
          <Link
            href="#current-openings"
            className="inline-flex items-center justify-center h-11 py-2 px-4 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600"
          >
            View open roles
          </Link>
        </div>
      </section>

      <section className="pt-24 pb-14">
        <div className="container px-4 grid lg:grid-cols-2 items-center gap-14">
          <div className="order-2 lg:order-1">
            <Image
              src="/images/working.jpg"
              width={500}
              height={250}
              quality={100}
              alt="Bainstorming over paper"
              className="w-[500px] mx-auto rounded-md shadow-[20px_20px_0_0_#0ea5e9,-20px_-20px_0_#0ea5e9]"
            />
          </div>
          <div className="text-center order-1 lg:order-2 lg:text-left">
            <h2 className="text-4xl text-slate-900 font-extrabold pb-3">Our Mission</h2>
            <hr className="w-14 h-[6px] border-0 bg-sky-500 rounded-xl mx-auto lg:mx-0" />
            <p className="text-slate-700 mt-5 leading-relaxed">
              Our mission at Betr Beta is to enhance the efficiency and satisfaction of adopting of software upgrades. We aim to make the upgrade
              process smoother and more convenient for individuals and businesses. We achieve this by delivering innovative tools that identify
              relevant updates and generate tailored release notes that help busineses strengthen client relationships ‌ We are committed to making
              software upgrades a hassle-free and informed process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4">
          <h2 className="text-4xl text-slate-900 font-extrabold text-center pb-3">Where we are</h2>
          <hr className="w-14 h-[6px] border-0 bg-sky-500 rounded-xl mx-auto" />
          <p className="text-slate-700 font-medium text-center mt-5">Remote first, internationally Distributed Team</p>
          <div className="relative w-full aspect-[3/2] lg:aspect-video mt-4 lg:mt-8">
            <Image src="/images/map.png" fill className="object-contain select-none lg:object-cover" alt="World map blue dots" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4">
          <h2 className="text-4xl text-slate-900 font-extrabold leading-snug text-center pb-3">What do they say about Betr Beta?</h2>
          <hr className="w-14 h-[6px] border-0 bg-sky-500 rounded-xl mx-auto" />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {testimonials.map((employe, idx) => (
              <li key={idx}>
                <figure className="bg-slate-50 p-6 rounded-lg shadow-sm">
                  <figcaption className="flex items-center gap-4">
                    <Image
                      src={employe.image}
                      width={50}
                      height={50}
                      alt={`Photo of ${employe.name}`}
                      className="flex-none w-14 h-14 rounded-full object-cover outline outline-2 outline-offset-2 outline-sky-500"
                    />
                    <div className="flex-auto">
                      <span className="text-base text-slate-900 font-semibold">{employe.name}</span>
                      <div className="text-sm text-slate-700 mt-0.5">{employe.occupation}</div>
                    </div>
                  </figcaption>
                  <blockquote className="mt-6 text-sm text-slate-700 leading-relaxed">{employe.caption}</blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 scroll-mt-6" id="current-openings">
        <div className="container px-4">
          <h2 className="text-4xl text-slate-900 font-extrabold leading-snug text-center pb-3">Open roles</h2>
          <hr className="w-14 h-[6px] border-0 bg-sky-500 rounded-xl mx-auto" />
          <p className="text-slate-700 font-medium text-center mt-5">Join our Talent Community</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.08)_0px_1px_4px,_rgba(0,_0,_0,_0.08)_0px_2px_12px]">
                <h3 className="text-lg text-slate-900 font-bold">{job.position}</h3>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-3 text-slate-700">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-sm">{job.contract}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Banknote className="w-5 h-5" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-full h-10 py-2 px-4 bg-sky-500 text-white text-sm font-medium rounded-md hover:bg-sky-600 mt-8"
                >
                  See Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
