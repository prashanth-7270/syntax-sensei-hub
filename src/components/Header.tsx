import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, PlayCircle, BookOpen, Trophy, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CodeLearn</h1>
              <p className="text-xs text-muted-foreground">Programming Education Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <PlayCircle className="h-4 w-4" />
              Practice
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Tutorials
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Trophy className="h-4 w-4" />
              Challenges
            </Button>
          </nav>

          {/* User Section */}
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-status-online/20 text-status-online border-status-online/30">
              <div className="w-2 h-2 bg-status-online rounded-full mr-2 animate-pulse-subtle"></div>
              Online
            </Badge>
            <Button variant="outline" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;