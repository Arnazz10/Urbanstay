"use client";
import { useState } from "react";
import Button from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import Input from "@/components/ui/input";

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([{ role: "assistant", text: "Hi! Tell me your city, budget and must-haves." }]);

  const handleSubmit = (formData: FormData) => {
    const query = formData.get("message")?.toString();
    if (!query) return;
    setMessages(prev => [...prev, { role: "user", text: query }]);
    // Placeholder response
    setMessages(prev => [
      ...prev,
      { role: "user", text: query },
      { role: "assistant", text: "I will search properties matching this soon." }
    ]);
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 shadow-lg"
        size="lg"
        onClick={() => setOpen(true)}
      >
        UrbanStay Assistant
      </Button>
      <Dialog open={open} className="max-w-xl">
        <div className="flex justify-end px-4 pt-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-sm text-slate-500 hover:text-slate-800"
          >
            Close
          </button>
        </div>
        <DialogHeader>UrbanStay Assistant</DialogHeader>
        <DialogContent>
          <div className="flex flex-col gap-3">
            <div className="max-h-64 overflow-y-auto space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    msg.role === "assistant"
                      ? "bg-slate-100 text-slate-800"
                      : "bg-brand-blue/10 text-slate-900"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <form
              action={handleSubmit}
              className="flex items-center gap-2"
            >
              <Input name="message" placeholder="Find me a PG in Koramangala under 15k..." />
              <Button type="submit" size="sm">
                Send
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

