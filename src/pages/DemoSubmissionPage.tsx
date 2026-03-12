import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DemoFormData {
  track_link: string;
  track_name: string;
  artist_name: string;
  collaborators?: string;
  additional_notes?: string;
}

const DemoSubmissionPage: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<DemoFormData>({
    defaultValues: {
      track_link: '',
      track_name: '',
      artist_name: '',
      collaborators: '',
      additional_notes: '',
    },
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!publicKey || !serviceId || !templateId) {
        toast.error('EmailJS configuration is missing. Please contact the administrator.');
        setIsSubmitting(false);
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      });

      toast.success('Demo submitted successfully! We\'ll be in touch soon.');
      form.reset();
      
      // Navigate back to home after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to submit demo. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-y-auto bg-background px-4 py-12">
      {/* Animated Background Particles - Green Glows Only */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Green glowing orbs */}
        <div className="absolute top-[15%] left-[10%] w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-[50%] right-[15%] w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse-glow delay-300" />
        <div className="absolute bottom-[25%] left-[20%] w-36 h-36 bg-primary/18 rounded-full blur-3xl animate-pulse-glow delay-500" />
      </div>

      {/* Background Watercolor Elements - Subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-20">
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-30 rotate-[15deg]">
          <img 
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_7bdad8f5-d944-41a1-b991-6f02ed386d6a.jpg" 
            alt="" 
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-20 flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground hover:green-glow transition-all duration-300 opacity-0 animate-fade-in-up"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-2xl my-20 opacity-0 animate-fade-in-scale delay-200">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-thin tracking-[0.2em] text-foreground uppercase mb-4">
            Submit Your <span className="font-bold">Demo</span>
          </h1>
          <div className="h-px w-24 bg-primary/50 mx-auto mb-4 animate-fade-in-scale delay-300" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Share your music with us
          </p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-8 bg-background/90 backdrop-blur-sm p-8 md:p-12 border border-border shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden group">
          {/* Green glow effect on form hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          {/* Track Link */}
          <div className="space-y-2 opacity-0 animate-fade-in-up delay-300">
            <Label htmlFor="track_link" className="text-xs tracking-[0.2em] uppercase text-foreground">
              Link to Your Track *
            </Label>
            <Input
              id="track_link"
              name="track_link"
              type="url"
              required
              placeholder="https://soundcloud.com/your-track"
              className="rounded-none border-border focus:border-primary focus:green-glow transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          {/* Track Name */}
          <div className="space-y-2 opacity-0 animate-fade-in-up delay-400">
            <Label htmlFor="track_name" className="text-xs tracking-[0.2em] uppercase text-foreground">
              Track Name *
            </Label>
            <Input
              id="track_name"
              name="track_name"
              type="text"
              required
              placeholder="Enter your track name"
              className="rounded-none border-border focus:border-primary focus:green-glow transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          {/* Artist Name */}
          <div className="space-y-2 opacity-0 animate-fade-in-up delay-500">
            <Label htmlFor="artist_name" className="text-xs tracking-[0.2em] uppercase text-foreground">
              Artist Name *
            </Label>
            <Input
              id="artist_name"
              name="artist_name"
              type="text"
              required
              placeholder="Enter your artist name"
              className="rounded-none border-border focus:border-primary focus:green-glow transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>

          {/* Collaborators */}
          <div className="space-y-2 opacity-0 animate-fade-in-up delay-500">
            <Label htmlFor="collaborators" className="text-xs tracking-[0.2em] uppercase text-foreground">
              Collaborators
            </Label>
            <Input
              id="collaborators"
              name="collaborators"
              type="text"
              placeholder="If more than one, separate with commas"
              className="rounded-none border-border focus:border-primary focus:green-glow transition-all duration-300"
              disabled={isSubmitting}
            />
            <p className="text-[10px] text-muted-foreground tracking-wider">
              Example: John Doe, Jane Smith
            </p>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2 opacity-0 animate-fade-in-up delay-500">
            <Label htmlFor="additional_notes" className="text-xs tracking-[0.2em] uppercase text-foreground">
              Anything Else You'd Like Us to Know?
            </Label>
            <Textarea
              id="additional_notes"
              name="additional_notes"
              rows={5}
              placeholder="Tell us more about your track, your inspiration, or anything else..."
              className="rounded-none border-border focus:border-primary focus:green-glow transition-all duration-300 resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4 opacity-0 animate-fade-in-scale delay-500">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-6 text-sm tracking-[0.4em] uppercase rounded-none bg-transparent border-[1.5px] border-foreground text-foreground hover:bg-foreground hover:text-background hover:green-glow-strong transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10">
                {isSubmitting ? 'Submitting...' : 'Submit Your Demo'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoSubmissionPage;
