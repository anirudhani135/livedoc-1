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
    <div className="glass-card glass-card-hover rounded-3xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-bold text-lg text-foreground">To-do list</h3>
          <p className="text-base text-muted-foreground">Wednesday, 11 May</p>
        </div>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <ExternalLink className="h-5 w-5" />
        </Button>
      </div>

      {/* Task List */}
      <div className="space-y-6">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-4 group">
            {/* Checkbox */}
            <div className="pt-2">
              <Checkbox
                checked={completedTasks[task.id]}
                onCheckedChange={() => toggleTask(task.id)}
                className="h-6 w-6 data-[state=checked]:bg-success data-[state=checked]:border-success"
                aria-label={task.title}
              />
            </div>

            {/* Task Content */}
            <div className="flex-1 min-w-0">
              <h4 className={`font-semibold text-lg ${completedTasks[task.id] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </h4>
              <p className="text-base text-muted-foreground mb-2">{task.subtitle}</p>
              
              {/* Time and Avatars */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Today {task.time}
                </span>
                <div className="flex -space-x-3">
                  {task.avatars.map((avatar, index) => (
                    <Avatar key={index} className="h-7 w-7 border-2 border-card">
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
      <Button variant="ghost" className="w-full mt-6 text-lg text-muted-foreground hover:text-foreground font-semibold rounded-xl py-3">
        + Add new task
      </Button>
    </div>
  );
}