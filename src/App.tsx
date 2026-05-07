import heroImg from "./assets/piano.png";
import facadeImg from "./assets/facade.png";
import wineImg from "./assets/wine-cellar.png";
import diningGreenImg from "./assets/dining-green.png";
import boothsImg from "./assets/booths.png";
import diningDayImg from "./assets/dining-day.png";
import buffetImg from "./assets/buffet-area.png";
import kidsImg from "./assets/kids-area.png";
import pizzaImg from "./assets/pizza-real.png";

import {
  Star,
  MapPin,
  Phone,
  Clock,
  Car,
  Users,
  Utensils,
  Baby,
  Award,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6 max-w-4xl text-white">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/40 bg-black/30 backdrop-blur-sm mb-6">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm tracking-wide">
            4,4 · 346 avaliações no TripAdvisor
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05]">
          Panela de Ferro
          <br />
          <span className="italic text-yellow-400">Gourmet</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Sofisticação, tradição e sabor no coração de Chapecó.
          Buffet ao almoço e rodízio de pizzas, massas e carnes à noite.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#mapa"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("mapa")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition"
          >
            Ver localização
          </a>

          <a
            href="https://wa.me/554933235040?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Panela%20de%20Ferro%20Gourmet."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-[var(--shadow-elegant)]"
          >
            Reservar via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase">
            Sobre nós
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Uma experiência gastronômica em cada prato
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Servimos buffet ao meio-dia e rodízio de pizzas à noite.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Um ambiente aconchegante e sofisticado pensado para tornar
            sua visita memorável.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={pizzaImg}
            alt=""
            className="rounded-2xl object-cover w-full aspect-[3/4]"
          />

          <img
            src={wineImg}
            alt=""
            className="rounded-2xl object-cover w-full aspect-[3/4] mt-8"
          />
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const items = [
    {
      icon: Car,
      title: "Estacionamento próprio",
      desc: "Vigiado e amplo, ao lado do restaurante.",
    },
    {
      icon: Users,
      title: "Ambiente familiar",
      desc: "Sofisticado e acolhedor para todas as ocasiões.",
    },
    {
      icon: Baby,
      title: "Espaço para crianças",
      desc: "Área de diversão interna para os pequenos.",
    },
    {
      icon: MapPin,
      title: "Centro de Chapecó",
      desc: "Localização privilegiada e fácil acesso.",
    },
    {
      icon: Utensils,
      title: "Cardápio variado",
      desc: "Pizzas, massas, risotos e carnes grelhadas.",
    },
    {
      icon: Award,
      title: "Tradição e qualidade",
      desc: "Anos servindo o melhor da gastronomia local.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Diferenciais
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Por que nos escolher
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition group"
            >
              <Icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition" />

              <h3 className="text-xl font-semibold mb-2">
                {title}
              </h3>

              <p className="text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const photos = [
    {
      src: facadeImg,
      alt: "Fachada do restaurante",
      title: "Fachada",
    },
    {
      src: diningGreenImg,
      alt: "Salão com jardim vertical",
      title: "Salão Jardim",
    },
    {
      src: buffetImg,
      alt: "Área do buffet",
      title: "Buffet",
    },
    {
      src: boothsImg,
      alt: "Salão reservado",
      title: "Salão Reservado",
    },
    {
      src: diningDayImg,
      alt: "Salão principal",
      title: "Salão Principal",
    },
    {
      src: kidsImg,
      alt: "Espaço kids",
      title: "Parque",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm tracking-[0.3em] uppercase">
          Galeria
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Conheça nosso espaço
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <figure
            key={i}
            className="relative overflow-hidden rounded-2xl group"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="object-cover w-full aspect-square transition-transform duration-500 group-hover:scale-[1.05]"
            />

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent p-4 pt-10 opacity-95 transition-opacity">
              <h3 className="text-white text-lg font-semibold leading-tight">
                {photo.title}
              </h3>

              <span className="block mt-1.5 h-[2px] w-[45%] bg-primary rounded-full" />
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Avaliacoes() {
  const reviews = [
    {
      name: "Patricia S",
      text: "Excelente refeição, atendimento, estrutura e ambiente.",
    },
    {
      name: "Edson M",
      text: "Rodízio variado com muitas opções e atendimento de primeira.",
    },
    {
      name: "Psicóloga K",
      text: "A comida é deliciosa e sempre variada.",
    },
    {
      name: "Viajante Profissional",
      text: "Excelente buffet e decoração agradável.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-primary text-sm tracking-[0.3em] uppercase">
          Avaliações
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">
          O que dizem nossos clientes
        </h2>

        <div className="inline-flex items-center gap-6 p-6 rounded-2xl bg-card border border-border">
          <div className="text-6xl font-bold text-primary">
            4,4
          </div>

          <div className="text-left">
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= 4
                      ? "fill-primary text-primary"
                      : "text-primary"
                  }`}
                />
              ))}
            </div>

            <div className="text-sm text-muted-foreground">
              346 avaliações no TripAdvisor
            </div>

            <div className="text-xs text-muted-foreground">
              N.º 7 de 328 restaurantes em Chapecó
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <blockquote
            key={r.name}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>

            <p className="text-foreground/90 italic mb-4">
              "{r.text}"
            </p>

            <footer className="text-sm text-muted-foreground">
              — {r.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>

      <div>
        <h3 className="font-semibold mb-1">
          {title}
        </h3>

        <div className="text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function InfoLocalizacao() {
  return (
    <section
      id="localizacao"
      className="py-24 px-6 bg-card/40"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Visite-nos
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">
            Informações práticas
          </h2>

          <div className="space-y-6">
            <InfoRow icon={MapPin} title="Endereço">
              Rua Benjamin Constant, 99-D
              <br />
              Centro · Chapecó/SC · 89801-070
            </InfoRow>

            <InfoRow icon={Phone} title="Telefone">
              <a
                href="tel:+554933235040"
                className="hover:text-primary"
              >
                +55 (49) 3323-5040
              </a>
            </InfoRow>

            <InfoRow
              icon={Clock}
              title="Horário de funcionamento"
            >
              Segunda a Sexta: 11h–14h · 18h30–22h30
              <br />
              Sábado: 11h–14h · 18h30–23h
              <br />

              <span className="text-muted-foreground">
                Domingo: fechado
              </span>
            </InfoRow>

            <InfoRow icon={Utensils} title="Refeições">
              Almoço (buffet) · Jantar (rodízio de pizzas)
            </InfoRow>
          </div>
        </div>

        <div
          id="mapa"
          className="rounded-2xl overflow-hidden border border-border bg-secondary min-h-[400px] shadow-[var(--shadow-elegant)]"
        >
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Rua+Benjamin+Constant+99+Chapeco+SC&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-border bg-card/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold">
            Panela de Ferro{" "}
            <span className="italic text-primary">
              Gourmet
            </span>
          </h3>

          <p className="text-muted-foreground mt-2 max-w-md">
            Tradição, sofisticação e sabor no coração de Chapecó.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
          <span>Rua Benjamin Constant, 99-D · Centro</span>
          <span>Chapecó · Santa Catarina</span>
          <span>© {new Date().getFullYear()} Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Diferenciais />
      <Galeria />
      <Avaliacoes />
      <InfoLocalizacao />
      <Footer />
    </main>
  );
}

export default App;