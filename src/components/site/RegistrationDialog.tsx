import * as React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitRegistration } from "@/lib/db";
import { useNavigate } from "@tanstack/react-router";

export function RegistrationDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!sessionStorage.getItem("hasSeenRegistrationDialog")) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenRegistrationDialog", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      state: formData.get("state") as string,
      typeOfSms: formData.get("typeOfSms") as string,
    };

    try {
      await submitRegistration({ data });
      
      const whatsappText = `Hello, I want to register for Free 500 Credits!\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phoneNumber}\nState: ${data.state}\nSMS Type: ${data.typeOfSms}`;
      window.open(`https://wa.me/918828223388?text=${encodeURIComponent(whatsappText)}`, "_blank");

      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white">
        <DialogTitle className="sr-only">Get Free 500 Credits On Registration</DialogTitle>
        <DialogDescription className="sr-only">Register to get free credits</DialogDescription>
        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          {/* Left side Image */}
          <div className="hidden md:block md:w-1/2 relative bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80" 
              alt="Person working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right side Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <h2 className="text-4xl font-light text-gray-800 mb-4 leading-tight">
              Get Free 500 Credits On Registration!
            </h2>
            <p className="text-gray-500 mb-8 text-sm">
              We will reply comeback to you within 24 hours.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Input 
                    name="fullName" 
                    placeholder="Full Name" 
                    required 
                    className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    name="phoneNumber" 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Input 
                    name="state" 
                    placeholder="State" 
                    required 
                    className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-blue-600 bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <Select name="typeOfSms" required defaultValue="promotional">
                  <SelectTrigger className="border-0 border-b border-gray-300 rounded-none px-0 focus:ring-0 focus-visible:ring-0 shadow-none bg-transparent h-12 text-gray-900">
                    <SelectValue placeholder="Type Of SMS" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="promotional">Promotional</SelectItem>
                    <SelectItem value="transactional">Transactional</SelectItem>
                    <SelectItem value="otp">OTP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-14 text-lg bg-[#740001] hover:bg-[#9a0001] text-white rounded-none mt-8 transition-colors"
              >
                {loading ? "Sending..." : "Send →"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
