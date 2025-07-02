import { useState } from "react";
import { Smile, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatAssistant() {
  const [message, setMessage] = useState("");

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 h-fit">
      {/* Assistant Avatar */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="relative">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-accent-purple text-accent-purple-foreground">AI</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">My activity</h3>
          <p className="text-sm text-muted-foreground">What is waiting for you today</p>
        </div>
      </div>

      {/* Assistant Message */}
      <div className="bg-secondary/30 rounded-xl p-4 mb-4">
        <p className="text-sm text-foreground mb-2">
          Hi there! I'm a virtual assistant.
        </p>
        <p className="text-sm text-foreground">
          How can I help you today?
        </p>
        <span className="text-xs text-muted-foreground mt-2 block">9:32</span>
      </div>

      {/* Input Area */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <Input
            placeholder="Write a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pr-20 rounded-xl border-border/50 bg-secondary/20"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Paperclip className="h-3 w-3" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Smile className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <Button size="icon" className="rounded-xl h-9 w-9 floating-button">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}