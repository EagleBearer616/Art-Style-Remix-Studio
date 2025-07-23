import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface ImagePreviewProps {
  originalImage: File | null;
  generatedImage: string | null;
  isGenerating: boolean;
  onDownload: () => void;
}

export function ImagePreview({ originalImage, generatedImage, isGenerating, onDownload }: ImagePreviewProps) {
  if (!originalImage && !generatedImage && !isGenerating) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
        Preview
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Original Image */}
        {originalImage && (
          <Card className="bg-gradient-secondary border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <h4 className="font-medium text-center">Original</h4>
            </div>
            <div className="aspect-square">
              <img
                src={URL.createObjectURL(originalImage)}
                alt="Original"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        )}

        {/* Generated Image or Loading */}
        <Card className="bg-gradient-secondary border-border overflow-hidden">
          <div className="p-4 border-b border-border">
            <h4 className="font-medium text-center">AI Generated</h4>
          </div>
          <div className="aspect-square flex items-center justify-center">
            {isGenerating ? (
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                <div className="space-y-2">
                  <p className="text-sm font-medium">Generating artwork...</p>
                  <p className="text-xs text-muted-foreground">This may take a few moments</p>
                </div>
              </div>
            ) : generatedImage ? (
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Select a style to generate</p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {generatedImage && !isGenerating && (
        <div className="flex justify-center">
          <Button
            onClick={onDownload}
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Artwork
          </Button>
        </div>
      )}
    </div>
  );
}