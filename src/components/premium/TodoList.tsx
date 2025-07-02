import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  {
    id: 1,
    title: "Client Review & Feedback",
    subtitle: "Landing page redesign",
    time: "10:00 PM - 11:45 PM",
    completed: true,
    avatars: [
      "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png",
      "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png"
    ]
  },
  {
    id: 2,
    title: "Team Standup Meeting",
    subtitle: "Weekly sync discussion",
    time: "Tomorrow 9:00 AM",
    completed: false,
    avatars: [
      "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png"
    ]
  }
];

export function TodoList() {
  const [completedTasks, setCompletedTasks] = useState(
    tasks.reduce((acc, task) => ({ ...acc, [task.id]: task.completed }), {} as Record<number, boolean>)
  );

  const toggleTask = (taskId: number) => {
    setCompletedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">To-do list</h3>
          <p className="text-sm text-muted-foreground">Wednesday, 11 May</p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-3 group">
            {/* Checkbox */}
            <div className="pt-1">
              <Checkbox
                checked={completedTasks[task.id]}
                onCheckedChange={() => toggleTask(task.id)}
                className="data-[state=checked]:bg-success data-[state=checked]:border-success"
              />
            </div>

            {/* Task Content */}
            <div className="flex-1 min-w-0">
              <h4 className={`font-medium ${completedTasks[task.id] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">{task.subtitle}</p>
              
              {/* Time and Avatars */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Today {task.time}
                </span>
                <div className="flex -space-x-2">
                  {task.avatars.map((avatar, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-card">
                      <AvatarImage src={avatar} />
                      <AvatarFallback>U{index + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-foreground">
        + Add new task
      </Button>
    </div>
  );
}