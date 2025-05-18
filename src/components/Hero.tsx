
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import Image from "@/components/Image";
import { getAssetPath } from '@/utils/assetUtils';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8">
          <Image 
            src="main_professional_img.jpg" 
            alt="Rishabh Mendiratta" 
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Rishabh Mendiratta</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Software Developer turned Entrepreneur
          <br />
          Leveraging a combined 5 years of corporate and entrepreneurial experience,
          I am seeking Product & Growth roles in the startup ecosystem to drive revenue impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="#contact" className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
          <Link to="#journey" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            My Journey
          </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
