import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, Save, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeError {
  line: number;
  message: string;
  type: 'error' | 'warning';
}

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState<CodeError[]>([
    { line: 2, message: "Consider using memoization for better performance", type: 'warning' }
  ]);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput("55\nExecution completed in 12ms");
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
    setOutput("");
    setErrors([{ line: 2, message: "Consider using memoization for better performance", type: 'warning' }]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
      {/* Code Editor */}
      <Card className="p-0 overflow-hidden bg-gradient-card border-border/50">
        <div className="flex items-center justify-between p-4 border-b border-border/50 bg-secondary/30">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <div className="w-3 h-3 rounded-full bg-accent"></div>
            </div>
            <span className="text-sm font-medium text-muted-foreground ml-2">main.js</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              onClick={runCode} 
              disabled={isRunning}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Play className="h-4 w-4 mr-2" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex">
            {/* Line Numbers */}
            <div className="w-12 bg-editor-background/50 text-editor-lineNumbers text-sm p-4 border-r border-border/30 select-none">
              {code.split('\n').map((_, index) => (
                <div key={index} className="leading-6">
                  {index + 1}
                </div>
              ))}
            </div>
            
            {/* Code Area */}
            <div className="flex-1 relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[500px] p-4 bg-editor-background text-foreground font-mono text-sm leading-6 resize-none border-none outline-none"
                style={{ 
                  caretColor: 'hsl(var(--editor-cursor))',
                  tabSize: 2
                }}
                placeholder="Write your code here..."
              />
              
              {/* Error Highlights */}
              {errors.map((error, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute left-4 right-4 h-6 border-l-2 bg-opacity-10 pointer-events-none",
                    error.type === 'error' 
                      ? "border-destructive bg-destructive" 
                      : "border-warning bg-warning"
                  )}
                  style={{ top: `${(error.line - 1) * 24 + 16}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Output & Debug Panel */}
      <div className="space-y-4">
        {/* Output Console */}
        <Card className="flex-1 bg-gradient-card border-border/50">
          <div className="p-4 border-b border-border/50 bg-secondary/30">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              Output Console
            </h3>
          </div>
          <div className="p-4">
            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">
              {output || "Click 'Run' to execute your code..."}
            </pre>
          </div>
        </Card>

        {/* Error & Debug Panel */}
        <Card className="bg-gradient-card border-border/50">
          <div className="p-4 border-b border-border/50 bg-secondary/30">
            <h3 className="text-sm font-medium flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              Issues & Suggestions
              <Badge variant="secondary" className="ml-auto">
                {errors.length}
              </Badge>
            </h3>
          </div>
          <div className="p-4 space-y-3">
            {errors.length > 0 ? (
              errors.map((error, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  {error.type === 'error' ? (
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-warning mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={error.type === 'error' ? 'destructive' : 'secondary'} className="text-xs">
                        Line {error.line}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {error.type === 'error' ? 'Error' : 'Warning'}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{error.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No issues detected! Your code looks good.</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CodeEditor;