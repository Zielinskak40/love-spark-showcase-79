import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LogoProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

export const Logo = ({ onLoginClick, onRegisterClick }: LogoProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="relative">
          <Heart 
            className="w-8 h-8 text-white fill-current group-hover:scale-110 transition-transform duration-300" 
            style={{
              filter: 'drop-shadow(0 0 10px hsl(340, 85%, 65%, 0.6))'
            }}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white tracking-tight leading-none">
            flirciara
          </span>
          <span className="text-sm text-white/80 font-light leading-none">
            .com
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 hover:text-white transition-colors duration-300"
          onClick={onLoginClick}
        >
          Logowanie
        </Button>
        <Button 
          className="bg-white/20 text-white border border-white/20 hover:bg-white/30 transition-all duration-300"
          onClick={onRegisterClick}
        >
          Rejestracja
        </Button>
      </div>
    </div>
  );
};