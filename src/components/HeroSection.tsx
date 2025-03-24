"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 flex items-center min-h-[calc(100vh-4rem)]">
      <div className="container">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Alex Zhang!</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A passionate developer and data scientist creating modern AI-powered web experiences
          </p>
          <p className="text-lg text-muted-foreground">
            I specialize in building responsive, user-friendly websites and applications
            that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/#projects">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
