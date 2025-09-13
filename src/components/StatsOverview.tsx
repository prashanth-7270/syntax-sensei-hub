import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Target, Clock, TrendingUp, Code, BookOpen, CheckCircle, Star } from "lucide-react";

interface StatCard {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  color: string;
  progress?: number;
}

const StatCard = ({ title, value, change, icon, color, progress }: StatCard) => (
  <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-2 rounded-lg ${color}`}>
        {icon}
      </div>
      <Badge variant="secondary" className="bg-accent/20 text-accent text-xs">
        {change}
      </Badge>
    </div>
    
    <div className="space-y-2">
      <h3 className="text-2xl font-bold text-foreground">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
      {progress !== undefined && (
        <Progress value={progress} className="h-2 mt-3" />
      )}
    </div>
  </Card>
);

const StatsOverview = () => {
  const stats: StatCard[] = [
    {
      title: "Problems Solved",
      value: 127,
      change: "+12 this week",
      icon: <CheckCircle className="h-5 w-5 text-accent" />,
      color: "bg-accent/20",
      progress: 75
    },
    {
      title: "Current Streak",
      value: "23 days",
      change: "Personal best!",
      icon: <TrendingUp className="h-5 w-5 text-warning" />,
      color: "bg-warning/20"
    },
    {
      title: "Study Time",
      value: "47h",
      change: "+8h this week",
      icon: <Clock className="h-5 w-5 text-primary" />,
      color: "bg-primary/20"
    },
    {
      title: "Skill Rating",
      value: 1847,
      change: "+67 points",
      icon: <Star className="h-5 w-5 text-destructive" />,
      color: "bg-destructive/20",
      progress: 85
    }
  ];

  const achievements = [
    { title: "First Steps", description: "Completed first coding exercise", earned: true },
    { title: "Problem Solver", description: "Solved 100 coding problems", earned: true },
    { title: "Speed Demon", description: "Solved a problem in under 5 minutes", earned: true },
    { title: "Consistency King", description: "Maintained 30-day streak", earned: false },
    { title: "Algorithm Master", description: "Mastered all sorting algorithms", earned: false }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Achievements */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Trophy className="h-5 w-5 text-warning" />
            Recent Achievements
          </h3>
          <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">
            3 New
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                achievement.earned
                  ? 'bg-accent/5 border-accent/20 hover:bg-accent/10'
                  : 'bg-muted/20 border-border/30 opacity-60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${
                  achievement.earned 
                    ? 'bg-accent/20' 
                    : 'bg-muted/30'
                }`}>
                  <Trophy className={`h-4 w-4 ${
                    achievement.earned 
                      ? 'text-accent' 
                      : 'text-muted-foreground'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent text-xs mt-2">
                      Earned
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Learning Path Progress */}
      <Card className="p-6 bg-gradient-card border-border/50">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-6">
          <Target className="h-5 w-5 text-primary" />
          Learning Path Progress
        </h3>

        <div className="space-y-4">
          {[
            { name: 'JavaScript Fundamentals', progress: 90, color: 'accent' },
            { name: 'Data Structures', progress: 65, color: 'primary' },
            { name: 'Algorithms', progress: 40, color: 'warning' },
            { name: 'System Design', progress: 15, color: 'destructive' }
          ].map((path, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{path.name}</span>
                <span className="text-sm text-muted-foreground">{path.progress}%</span>
              </div>
              <Progress value={path.progress} className="h-2" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StatsOverview;