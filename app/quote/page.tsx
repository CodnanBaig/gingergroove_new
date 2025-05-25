"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Waveform } from "@/components/ui/waveform";

const services = [
  { id: "mixing", label: "Mixing", rate: 300 },
  { id: "mastering", label: "Mastering", rate: 200 },
  { id: "production", label: "Production", rate: 800 },
  { id: "recording", label: "Recording", rate: 500 },
  { id: "lyrics", label: "Lyrics Writing", rate: 250 },
  { id: "composition", label: "Composition", rate: 600 },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  services: z.array(z.string()).nonempty({ message: "Please select at least one service." }),
  projectDetails: z.string().min(20, { message: "Please provide more details about your project." }),
  trackCount: z.string().min(1, { message: "Please enter the number of tracks." }),
  turnaround: z.string({ required_error: "Please select your preferred turnaround time." }),
  additionalInfo: z.string().optional(),
});

export default function QuotePage() {
  const searchParams = useSearchParams();
  const [quote, setQuote] = useState<{ total: number; breakdown: { service: string; cost: number }[] } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      services: [],
      projectDetails: "",
      trackCount: "1",
      turnaround: "standard",
      additionalInfo: "",
    },
  });

  // If service is provided in URL, pre-select it
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const validService = services.find(s => s.id === serviceParam);
      if (validService) {
        form.setValue("services", [serviceParam]);
      }
    }
  }, [searchParams, form]);

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Calculate quote based on selected services and track count
    setTimeout(() => {
      const trackCount = parseInt(values.trackCount, 10);
      const breakdownItems = values.services.map(serviceId => {
        const service = services.find(s => s.id === serviceId);
        const rate = service ? service.rate : 0;
        return {
          service: service ? service.label : serviceId,
          cost: rate * trackCount
        };
      });
      
      // Apply rush fee if expedited turnaround
      let total = breakdownItems.reduce((sum, item) => sum + item.cost, 0);
      if (values.turnaround === "expedited") {
        total = Math.floor(total * 1.5);
        breakdownItems.push({
          service: "Rush Fee (50%)",
          cost: Math.floor(total * 0.5 / 1.5)
        });
      }
      
      setQuote({
        total,
        breakdown: breakdownItems
      });
      
      setIsSubmitting(false);
      toast.success("Quote generated successfully!");
    }, 1500);
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Quote</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to receive a personalized quote for your music project.
          </p>
        </div>
        
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Provide us with information about your project so we can generate an accurate quote.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <div className="mb-2">
                        <FormLabel>Services Required</FormLabel>
                        <FormDescription>
                          Select all services you're interested in.
                        </FormDescription>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        {services.map((service) => (
                          <FormField
                            key={service.id}
                            control={form.control}
                            name="services"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={service.id}
                                  className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, service.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.id
                                              )
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {service.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="trackCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Tracks</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} />
                        </FormControl>
                        <FormDescription>
                          How many songs or tracks need our services?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="turnaround"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Turnaround</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a timeframe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="standard">Standard (2-3 weeks)</SelectItem>
                            <SelectItem value="expedited">Expedited (1 week, +50% fee)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Expedited service includes a rush fee.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="projectDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your project, goals, and any specific requirements."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The more details you provide, the more accurate your quote will be.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any other details that might be helpful..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Waveform className="mr-2 h-4" />
                      Generating Quote...
                    </>
                  ) : (
                    "Generate Quote"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {quote && (
          <Card className="mt-8 border-border/50">
            <CardHeader>
              <CardTitle>Your Estimated Quote</CardTitle>
              <CardDescription>
                Based on the information provided, here's an estimate for your project.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">
                  Total Estimate: ${quote.total.toLocaleString()}
                </h3>
                
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-4 py-2 text-left">Service</th>
                        <th className="px-4 py-2 text-right">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quote.breakdown.map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-3">{item.service}</td>
                          <td className="px-4 py-3 text-right">${item.cost.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-muted p-4 rounded-lg text-sm">
                  <p className="font-medium mb-2">Important Notes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>This is an estimate and may change based on the final project scope.</li>
                    <li>A 50% deposit is required to begin work on your project.</li>
                    <li>The final 50% is due upon project completion before final files are delivered.</li>
                    <li>We'll reach out via email to discuss your project in more detail.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <p className="text-center text-muted-foreground">
                If you'd like to proceed with this quote, please contact us directly or await our follow-up email.
              </p>
              <Button 
                className="w-full"
                onClick={() => {
                  toast.success("Thank you! We'll be in touch soon.");
                }}
              >
                Accept Quote
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}