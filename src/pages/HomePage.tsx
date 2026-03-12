import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmitClick = () => {
    navigate('/submit-demo');
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-y-auto bg-background">
      {/* Animated Background Particles - Green Glows Only */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Green glowing orbs */}
        <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-[60%] right-[20%] w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse-glow delay-200" />
        <div className="absolute bottom-[20%] left-[25%] w-36 h-36 bg-primary/25 rounded-full blur-3xl animate-pulse-glow delay-400" />
      </div>

      {/* Background Watercolor Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Bottom-Right Leaf - Static */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-40 rotate-[15deg]">
          <img 
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7bdad8f5-d944-41a1-b991-6f02ed386d6a.jpg" 
            alt="Watercolor Leaf Bottom Right" 
            className="w-full h-full object-contain mix-blend-multiply watercolor-mask"
          />
        </div>

        {/* Floating Accents with green glow */}
        <div className="absolute top-1/4 right-10 w-32 h-32 opacity-30 blur-xl bg-primary/40 rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 opacity-20 blur-2xl bg-primary/30 rounded-full animate-pulse-glow delay-300" />
        <div className="absolute top-1/2 right-[30%] w-24 h-24 opacity-25 blur-xl bg-primary/35 rounded-full animate-pulse-glow delay-500" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-12 py-20">
        <div className="space-y-4">
          <div className="flex flex-col items-center opacity-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-7xl font-thin tracking-[0.2em] text-foreground uppercase mb-2">
              Almighty1 <span className="font-bold">Music</span>
            </h1>
            <div className="h-px w-24 bg-primary/50 mb-4 animate-fade-in-scale delay-200" />
          </div>
          <p className="text-[10px] md:text-xs text-primary font-semibold tracking-[0.4em] uppercase opacity-0 animate-fade-in-up delay-300 max-w-md mx-auto leading-loose">
            In collaboration with <br className="md:hidden" /> Soundwave Music Group
          </p>
        </div>

        <div className="flex justify-center pt-8 opacity-0 animate-fade-in-scale delay-500">
          <Button 
            className="px-10 py-8 text-sm tracking-[0.4em] uppercase rounded-none bg-transparent border-[1.5px] border-foreground text-foreground hover:bg-foreground hover:text-background hover:green-glow-strong transition-all duration-500 ease-in-out group relative overflow-hidden"
            onClick={handleSubmitClick}
          >
            <span className="relative z-10">
              Submit Your Demo
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Button>
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="relative z-10 py-8 text-[10px] tracking-[0.3em] uppercase opacity-40">
        © 2026 Almighty1 Music
      </footer>
    </div>
  );
};

export default HomePage;
