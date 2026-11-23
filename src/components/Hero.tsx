import { Fragment } from "react";
import { profile } from "../data/profile";
import { QueryStream } from "./QueryStream";

const words = profile.headline.split(" ");

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-glow relative overflow-hidden">
      <div className="page grid min-h-[100svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-28">
        <div>
          <p className="animate-rise text-[15px] font-medium text-haze">
            {profile.role}, {profile.location}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.9rem,7vw,5.6rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-chalk"
          >
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span className="inline-block animate-rise" style={{ animationDelay: `${120 + i * 70}ms` }}>
                    {w}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <p className="mt-8 max-w-[52ch] animate-rise text-lg leading-relaxed text-haze [animation-delay:600ms] md:text-xl">
            {profile.intro}
          </p>

          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:720ms]">
            <a href="#case-studies" className="btn-primary">
              Explore my work
            </a>
            <a href="#contact" className="btn-ghost">
              Let's work together
            </a>
          </div>

          <dl className="mt-12 flex animate-rise flex-wrap gap-x-10 gap-y-5 border-t border-rule pt-6 [animation-delay:840ms]">
            <div>
              <dt className="text-sm text-haze">Louis Stitch</dt>
              <dd className="nums mt-1 text-3xl font-bold tracking-tight text-brass">5x+ ROAS</dd>
            </div>
            <div>
              <dt className="text-sm text-haze">Jaiman Toys</dt>
              <dd className="nums mt-1 text-3xl font-bold tracking-tight text-brass">10x+ ROAS</dd>
            </div>
          </dl>
        </div>

        <div className="animate-rise [animation-delay:400ms]">
          <QueryStream />
        </div>
      </div>
    </section>
  );
}
