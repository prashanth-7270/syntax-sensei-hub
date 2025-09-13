import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star, ChevronRight, Target } from "lucide-react";

interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  description: string;
  estimatedTime: string;
  completed: boolean;
  rating: number;
}

const exercises: Exercise[] = [
  {
    id: '1',
    title: 'Fibonacci Sequence',
    difficulty: 'beginner',
    category: 'Algorithms',
    description: 'Implement a function to calculate the nth Fibonacci number',
    estimatedTime: '15 min',
    completed: true,
    rating: 4.5
  },
  {
    id: '2',
    title: 'Binary Search',
    difficulty: 'intermediate',
    category: 'Search Algorithms',
    description: 'Implement binary search in a sorted array',
    estimatedTime: '25 min',
    completed: false,
    rating: 4.8
  },
  {
    id: '3',
    title: 'Merge Sort',
    difficulty: 'advanced',
    category: 'Sorting',
    description: 'Implement the merge sort algorithm',
    estimatedTime: '40 min',
    completed: false,
    rating: 4.7
  }
];

const ExercisePanel = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-accent/20 text-accent border-accent/30';
      case 'intermediate': return 'bg-warning/20 text-warning border-warning/30';
      case 'advanced': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const completedCount = exercises.filter(ex => ex.completed).length;
  const progressPercentage = (completedCount / exercises.length) * 100;

  return (
    <Card className="bg-gradient-card border-border/50 h-[600px] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border/50 bg-secondary/30">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Practice Exercises
          </h2>
          <Badge variant="outline" className="bg-accent/20 text-accent border-accent/30">
            {completedCount}/{exercises.length} Complete
          </Badge>
        </div>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="text-foreground font-medium">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* Exercise List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {exercises.map((exercise) => (
          <Card 
            key={exercise.id} 
            className={`p-4 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 cursor-pointer border-border/50 ${
              exercise.completed ? 'bg-accent/5 border-accent/20' : 'bg-secondary/30'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium text-foreground">{exercise.title}</h3>
                  {exercise.completed && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
                      ✓ Completed
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {exercise.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs">
                  <Badge variant="outline" className={getDifficultyColor(exercise.difficulty)}>
                    {exercise.difficulty}
                  </Badge>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <BookOpen className="h-3 w-3" />
                    {exercise.category}
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {exercise.estimatedTime}
                  </div>
                  
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="h-3 w-3 fill-current text-warning" />
                    {exercise.rating}
                  </div>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="ml-4">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border/50 bg-secondary/30">
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All Exercises
        </Button>
      </div>
    </Card>
  );
};

export default ExercisePanel;