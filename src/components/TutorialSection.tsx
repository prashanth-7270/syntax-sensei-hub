import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, CheckCircle, Clock, BookOpen, ChevronRight } from "lucide-react";

interface TutorialStep {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  current?: boolean;
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  totalDuration: string;
  progress: number;
  steps: TutorialStep[];
}

const currentTutorial: Tutorial = {
  id: '1',
  title: 'JavaScript Fundamentals',
  description: 'Learn the core concepts of JavaScript programming including variables, functions, and control structures.',
  level: 'beginner',
  totalDuration: '2.5 hours',
  progress: 60,
  steps: [
    { id: '1', title: 'Variables and Data Types', duration: '15 min', completed: true },
    { id: '2', title: 'Functions and Scope', duration: '20 min', completed: true },
    { id: '3', title: 'Control Structures', duration: '25 min', completed: true },
    { id: '4', title: 'Objects and Arrays', duration: '30 min', completed: false, current: true },
    { id: '5', title: 'Error Handling', duration: '20 min', completed: false },
    { id: '6', title: 'Async Programming', duration: '30 min', completed: false }
  ]
};

const TutorialSection = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-accent/20 text-accent border-accent/30';
      case 'intermediate': return 'bg-warning/20 text-warning border-warning/30';
      case 'advanced': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 h-[600px] flex flex-col">
      {/* Tutorial Header */}
      <div className="p-6 border-b border-border/50 bg-secondary/30">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <PlayCircle className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Current Tutorial</h2>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{currentTutorial.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{currentTutorial.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Badge variant="outline" className={getLevelColor(currentTutorial.level)}>
            {currentTutorial.level}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {currentTutorial.totalDuration}
          </div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{currentTutorial.progress}%</span>
          </div>
          <Progress value={currentTutorial.progress} className="h-2" />
        </div>
      </div>

      {/* Tutorial Steps */}
      <div className="flex-1 overflow-y-auto p-6">
        <h4 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          Tutorial Steps
        </h4>
        
        <div className="space-y-3">
          {currentTutorial.steps.map((step, index) => (
            <div
              key={step.id}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                step.current
                  ? 'bg-primary/10 border-primary/30 shadow-lg shadow-primary/10'
                  : step.completed
                  ? 'bg-accent/5 border-accent/20'
                  : 'bg-secondary/30 border-border/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium ${
                    step.completed
                      ? 'bg-accent text-accent-foreground'
                      : step.current
                      ? 'bg-primary text-primary-foreground animate-pulse'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-foreground">{step.title}</h5>
                    <p className="text-xs text-muted-foreground">{step.duration}</p>
                  </div>
                </div>
                
                <Button
                  variant={step.current ? "default" : "ghost"}
                  size="sm"
                  className={step.current ? "bg-gradient-primary hover:opacity-90" : ""}
                >
                  {step.completed ? (
                    "Review"
                  ) : step.current ? (
                    "Continue"
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-border/50 bg-secondary/30 space-y-3">
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
          <PlayCircle className="h-4 w-4 mr-2" />
          Continue Learning
        </Button>
        <Button variant="outline" className="w-full">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All Tutorials
        </Button>
      </div>
    </Card>
  );
};

export default TutorialSection;