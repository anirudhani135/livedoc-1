import { useState } from "react";
import { Smile, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ChatAssistant() {
  const [message, setMessage] = useState("");

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-8 h-fit shadow-lg">
      {/* Assistant Avatar */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-accent-purple text-accent-purple-foreground text-lg">AI</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-card" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground">My activity</h3>
          <p className="text-base text-muted-foreground">What is waiting for you today</p>
        </div>
      </div>

      {/* Assistant Message */}
      <div className="bg-secondary/40 rounded-2xl p-5 mb-6">
        <p className="text-base text-foreground mb-2">
          Hi there! I'm a virtual assistant.
        </p>
        <p className="text-base text-foreground">
          How can I help you today?
        </p>
        <span className="text-xs text-muted-foreground mt-2 block">9:32</span>
      </div>

      {/* Input Area */}
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Input
            placeholder="Write a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pr-24 rounded-2xl border-border/50 bg-secondary/30 text-base"
            aria-label="Write a message"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex space-x-2">
            <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Attach file">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Emoji">
              <Smile className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button size="icon" className="rounded-2xl h-11 w-11 floating-button" aria-label="Send message">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}