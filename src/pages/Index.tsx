import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import ExercisePanel from "@/components/ExercisePanel";
import TutorialSection from "@/components/TutorialSection";
import StatsOverview from "@/components/StatsOverview";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, BookOpen, Target, BarChart3, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome to CodeLearn</h1>
              <p className="text-muted-foreground">Master programming through interactive learning and practice</p>
            </div>
            <div className="ml-auto hidden md:block">
              <Badge variant="outline" className="bg-gradient-success text-accent-foreground border-accent/30 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Pro Member
              </Badge>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="code" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Code Editor
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Practice
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="code" className="space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <CodeEditor />
              </div>
              <div>
                <ExercisePanel />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TutorialSection />
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Available Courses
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'JavaScript Fundamentals', lessons: 12, duration: '3h 45m', difficulty: 'Beginner' },
                    { title: 'React Development', lessons: 18, duration: '6h 20m', difficulty: 'Intermediate' },
                    { title: 'Node.js Backend', lessons: 15, duration: '5h 10m', difficulty: 'Intermediate' },
                    { title: 'Advanced Algorithms', lessons: 24, duration: '8h 30m', difficulty: 'Advanced' }
                  ].map((course, index) => (
                    <Card key={index} className="p-4 bg-secondary/30 border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground">{course.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {course.difficulty}
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{course.lessons} lessons</span>
                        <span>{course.duration}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExercisePanel />
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Daily Challenges
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Two Sum Problem', points: 50, difficulty: 'Easy', timeLeft: '23h 45m' },
                    { title: 'Reverse Linked List', points: 100, difficulty: 'Medium', timeLeft: '23h 45m' },
                    { title: 'Binary Tree Traversal', points: 150, difficulty: 'Hard', timeLeft: '23h 45m' }
                  ].map((challenge, index) => (
                    <Card key={index} className="p-4 bg-secondary/30 border-border/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-foreground">{challenge.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {challenge.points} pts
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{challenge.difficulty}</span>
                        <span className="text-xs text-warning">⏰ {challenge.timeLeft}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <StatsOverview />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
