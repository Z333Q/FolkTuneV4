import {
  BookOpen,
  Mic2,
  Music2,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Interactive Learning",
    description: "Step-by-step guidance with real-time feedback on pitch and rhythm.",
    icon: BookOpen,
  },
  {
    name: "AI-Powered Practice",
    description: "Advanced feedback and harmonization powered by Fugatto technology.",
    icon: Sparkles,
  },
  {
    name: "Global Song Collection",
    description: "Access folk songs from cultures around the world.",
    icon: Music2,
  },
  {
    name: "Professional Recording",
    description: "Record and enhance your performances with AI harmonization.",
    icon: Mic2,
  },
  {
    name: "Community Features",
    description: "Connect with fellow enthusiasts and share your journey.",
    icon: Users,
  },
  {
    name: "Secure Storage",
    description: "Store and share your recordings with blockchain technology.",
    icon: Share2,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Learn Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to master folk songs
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive platform combines traditional learning methods with cutting-edge technology to provide an immersive learning experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}