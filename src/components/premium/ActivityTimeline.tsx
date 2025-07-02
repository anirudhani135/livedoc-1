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
    <div className="glass-card glass-card-hover rounded-3xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Calendar className="h-6 w-6 text-muted-foreground" />
          <div>
            <h3 className="font-bold text-lg text-foreground">My activity</h3>
            <p className="text-base text-muted-foreground">What is waiting for you today</p>
          </div>
        </div>
        <Calendar className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Time Labels */}
        <div className="flex justify-between mb-6 px-2">
          {timeSlots.map((time) => (
            <span key={time} className="text-sm text-muted-foreground font-semibold">
              {time}
            </span>
          ))}
        </div>

        {/* Activity Track */}
        <div className="relative h-24 bg-secondary/30 rounded-2xl overflow-hidden">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-border/30" />
          
          {/* Current time indicator */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/40 rounded-full" />
          
          {/* Activity Pills */}
          {activities.map((activity) => {
            const startIndex = timeSlots.indexOf(activity.startTime);
            const left = (startIndex / (timeSlots.length - 1)) * 100;
            const width = (activity.duration / 8) * 100;
            
            return (
              <div
                key={activity.id}
                className={`absolute top-3 h-18 activity-pill ${activity.color} flex items-center space-x-4 px-6 shadow-md`}
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  minWidth: '140px'
                }}
              >
                <div className="flex items-center space-x-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={activity.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  {activity.teamSize > 1 && (
                    <span className="text-xs bg-black/10 rounded-full px-3 py-1">
                      +{activity.teamSize - 1}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-semibold truncate">{activity.title}</p>
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