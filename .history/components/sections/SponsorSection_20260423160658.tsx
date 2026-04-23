"use client";

import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuTrophy, LuHandshake, LuTrendingUp } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

const sponsors = [
  { name: "Dimona", subtitle: "Marca", img: "/assets/sponsors/dimona.png" },
  { name: "Solo Deportes", subtitle: "Main Sponsor", img: "/assets/sponsors/solo.png" },
  { name: "Pintureria fiorentino", subtitle: "Marca", img: "/assets/sponsors/pintu.jpg" },
  { name: "Farmacia Palmar", subtitle: "Farmacia", img: "/assets/sponsors/PL.png" },
  { name: "Bingo Merlo", subtitle: "", img: "/assets/sponsors/bingo.png" },

];

const valores = [
  {
    icon: <LuHandshake className="h-8 w-8" />,
    title: "Compromiso",
    desc: "Trabajamos juntos por el crecimiento del club.",
  },
  {
    icon: <LuTrophy className="h-8 w-8" />,
    title: "Pasión",
    desc: "Compartimos la pasión por el fútbol.",
  },
  {
    icon: <FiUsers className="h-8 w-8" />,
    title: "Comunidad",
    desc: "Somos parte de la misma familia.",
  },
  {
    icon: <LuTrendingUp className="h-8 w-8" />,
    title: "Futuro",
    desc: "Construyendo juntos nuevos objetivos.",
  },
];

const VISIBLE = 8;

export function SponsorsSection() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(sponsors.length / VISIBLE);
  const visible = sponsors.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="relative overflow-hidden bg-white"
    >
      {/* ── HEADER BAND ── */}
      <div className="relative overflow-hidden bg-[#f0f5fb] py-16 text-center">
        {/* Brush left */}
        <div
          className="pointer-events-none absolute -left-8 top-0 h-full w-72 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 0% 50%, #00AEEF 0%, transparent 70%)",
          }}
          aria-hidden
        />
        {/* Brush right */}
        <div
          className="pointer-events-none absolute -right-8 top-0 h-full w-72 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 100% 50%, #1a3a6b 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[860px] px-6">
          <p className="font-heading mb-3 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-[#00AEEF]">
            Nuestros Sponsors
          </p>
          <h2
            id="sponsors-title"
            className="font-display text-[clamp(2.8rem,6.5vw,5.2rem)] font-black uppercase leading-[0.9] text-[#0a1e3d]"
          >
            Aliados en{" "}
            <span className="text-[#00AEEF]">cada desafío</span>
          </h2>

          {/* Escudo centrado */}
          <div className="mx-auto my-5 flex h-10 w-10 items-center justify-center">
            <Image
              src="/logo-oficial.png"
              alt="Escudo Club Atlético Argentino de Merlo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>

          <p className="mx-auto max-w-[520px] text-[1rem] leading-relaxed text-[#4a5a74]">
            El apoyo de nuestros sponsors impulsa nuestros sueños y nos ayuda
            <br className="hidden sm:block" />a seguir creciendo dentro y fuera de la cancha.
          </p>
        </div>
      </div>

      {/* ── SPONSORS CAROUSEL ── */}
      <div className="relative border-y border-[#e2eaf4] bg-white py-10">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-10 lg:px-16">
          <div className="relative flex items-center gap-4">
            {/* Prev */}
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Sponsors anteriores"
              className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d0dcea] bg-white text-[#0a1e3d] shadow-sm transition hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>

            {/* Grid of logos */}
            <div className="grid flex-1 grid-cols-4 gap-0 sm:grid-cols-8">
              {visible.map((sponsor, i) => (
                <div
                  key={sponsor.name}
                  className={`flex flex-col items-center justify-center border-r border-[#e8eef6] px-4 py-6 last:border-r-0 ${
                    i >= 4 ? "border-t border-[#e8eef6] sm:border-t-0" : ""
                  }`}
                >
                  <div className="relative mb-2 flex h-12 w-full items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                    <Image
                      src={sponsor.img}
                      alt={sponsor.name}
                      width={120}
                      height={48}
                      className="max-h-12 w-auto max-w-full object-contain"
                    />
                  </div>
                  {/* Reflection effect */}
                  <div
                    className="relative flex h-6 w-full items-start justify-center overflow-hidden opacity-20"
                    aria-hidden
                  >
                    <Image
                      src={sponsor.img}
                      alt=""
                      width={120}
                      height={48}
                      className="max-h-6 w-auto max-w-full -scale-y-100 object-contain blur-[1px]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Sponsors siguientes"
              className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d0dcea] bg-white text-[#0a1e3d] shadow-sm transition hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          {totalPages > 1 && (
            <div className="mt-7 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Página ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page
                      ? "w-6 bg-[#00AEEF]"
                      : "w-2 bg-[#00AEEF]/30 hover:bg-[#00AEEF]/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── VALORES BAR ── */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {valores.map((v, i) => (
              <div
                key={v.title}
                className={`flex items-start gap-4 ${
                  i < valores.length - 1
                    ? "border-r border-[#e2eaf4] pr-8"
                    : ""
                }`}
              >
                <span className="mt-0.5 shrink-0 text-[#00AEEF]">{v.icon}</span>
                <div>
                  <p className="font-heading mb-1 text-[0.75rem] font-black uppercase tracking-[0.1em] text-[#0a1e3d]">
                    {v.title}
                  </p>
                  <p className="text-[0.78rem] leading-snug text-[#4a5a74]">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER DARK BAND ── */}
      <div className="relative overflow-hidden bg-[#071232] py-10 text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "url('/hinchada.jpg') center/cover no-repeat",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7,18,50,0.9) 0%, rgba(7,18,50,0.7) 50%, rgba(7,18,50,0.9) 100%)",
          }}
          aria-hidden
        />
        <div className="relative z-[1] flex justify-center">
          <Image
            src="/logo-oficial.png"
            alt="Club Atlético Argentino de Merlo"
            width={80}
            height={80}
            className="h-20 w-20 object-contain drop-shadow-[0_0_20px_rgba(0,174,239,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}