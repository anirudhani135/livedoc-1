import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "lucide-react";

const timeSlots = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "01:00", "02:00"];

const activities = [
  {
    id: 1,
    title: "Project onboarding",
    subtitle: "Google Meeting",
    startTime: "09:00",
    duration: 2,
    color: "bg-accent-green text-accent-green-foreground",
    avatar: "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png",
    teamSize: 3
  },
  {
    id: 2,
    title: "Design research",
    subtitle: "Figma file",
    startTime: "11:00",
    duration: 1.5,
    color: "bg-accent-gray text-accent-gray-foreground",
    avatar: "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png",
    teamSize: 2
  },
  {
    id: 3,
    title: "Coffee break",
    subtitle: "CoffCo Cafe",
    startTime: "01:00",
    duration: 1,
    color: "bg-accent-purple text-accent-purple-foreground",
    avatar: "/lovable-uploads/7cce685d-98d2-4c5b-8925-a8e93f5c3145.png",
    teamSize: 1
  }
];

export function ActivityTimeline() {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <div>
            <h3 className="font-semibold text-foreground">My activity</h3>
            <p className="text-sm text-muted-foreground">What is waiting for you today</p>
          </div>
        </div>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Time Labels */}
        <div className="flex justify-between mb-4 px-2">
          {timeSlots.map((time) => (
            <span key={time} className="text-xs text-muted-foreground font-medium">
              {time}
            </span>
          ))}
        </div>

        {/* Activity Track */}
        <div className="relative h-20 bg-secondary/20 rounded-lg overflow-hidden">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/30" />
          
          {/* Current time indicator */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/50" />
          
          {/* Activity Pills */}
          {activities.map((activity) => {
            const startIndex = timeSlots.indexOf(activity.startTime);
            const left = (startIndex / (timeSlots.length - 1)) * 100;
            const width = (activity.duration / 8) * 100;
            
            return (
              <div
                key={activity.id}
                className={`absolute top-2 h-16 activity-pill ${activity.color} flex items-center space-x-3 px-4`}
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  minWidth: '120px'
                }}
              >
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  {activity.teamSize > 1 && (
                    <span className="text-xs bg-black/20 rounded-full px-2 py-1">
                      +{activity.teamSize - 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  <p className="text-xs opacity-80 truncate">{activity.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}