import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArtStyle {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

const artStyles: ArtStyle[] = [
  { id: "cyberpunk", name: "Cyberpunk Neon", description: "Futuristic neon-lit aesthetic", emoji: "🌃" },
  { id: "baroque", name: "Baroque Oil Painting", description: "Classical ornate style", emoji: "🎭" },
  { id: "pixar", name: "Pixar Art", description: "3D animated movie style", emoji: "🎬" },
  { id: "cartoon", name: "Cartoon Style", description: "Vibrant cartoon illustration", emoji: "🎨" },
  { id: "gothic", name: "Gothic Noir", description: "Dark dramatic atmosphere", emoji: "🖤" },
  { id: "caricature", name: "Caricature Art", description: "Exaggerated portrait style", emoji: "😄" },
  { id: "surrealist", name: "Surrealist Abstraction", description: "Dream-like abstract art", emoji: "🌀" },
  { id: "manga", name: "Manga and Anime", description: "Japanese comic book style", emoji: "👹" },
  { id: "impressionist", name: "Impressionist Brushwork", description: "Soft painterly technique", emoji: "🌸" },
  { id: "pixel", name: "Pixel Art", description: "Retro 8-bit gaming style", emoji: "👾" },
];

interface ArtStyleSelectorProps {
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
}

export function ArtStyleSelector({ selectedStyle, onStyleSelect }: ArtStyleSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
        Choose Art Style
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {artStyles.map((style) => (
          <Card
            key={style.id}
            className={cn(
              "relative cursor-pointer p-4 transition-all duration-300 border-2 hover:scale-105",
              "hover:shadow-neon bg-gradient-secondary",
              selectedStyle === style.id
                ? "border-primary shadow-neon-strong bg-gradient-primary"
                : "border-border hover:border-primary/50"
            )}
            onClick={() => onStyleSelect(style.id)}
          >
            <div className="text-center space-y-2">
              <div className="text-3xl mb-2">{style.emoji}</div>
              <h4 className="font-medium text-sm leading-tight">{style.name}</h4>
              <p className="text-xs text-muted-foreground">{style.description}</p>
            </div>
            {selectedStyle === style.id && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}