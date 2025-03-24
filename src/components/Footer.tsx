import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 py-12 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-2">Portfolio</h3>
            <p className="text-muted-foreground max-w-md">
              A personal portfolio website showcasing my projects and skills. Feel free to get in touch!
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Connect</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/aalexzhang" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/aalexzhang" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="alexz12398@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
