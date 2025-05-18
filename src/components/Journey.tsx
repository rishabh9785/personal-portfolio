
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Users, GraduationCap } from "lucide-react";

const Journey = () => {
  const professional_experience = [
    {
      icons: [Code, Briefcase],
      title: "Software Developer",
      company: "D. E. Shaw & Co.",
      link: "https://www.deshawindia.com/",
      period: "2019-2022",
      description: "Built trading technology solutions that optimized execution speed and automated workflows for energy markets."
    },
    {
      icons: [Users],
      title: "Co-Founder",
      company: "Foodizen India Pvt. Ltd.",
      link: "https://www.thebakingclub.in/",
      period: "2023-2024",
      description: "Transitioned to entrepreneurship in the F&B sector seeking broader ownership. Exited the venture due to founding team misalignment."
    },
    {
      icons: [Users],
      title: "Founding Strategy Consultant & Mentor",
      company: "Unsaid Talks",
      link: "https://unsaidtalks.com/",
      period: "2024-Present",
      description: "Passion Project: Contributing to the growth of UnsaidTalks in my part-time "
    },

  ];

  const education_and_community_involvement = [
    {
      icons: [ GraduationCap ],
      title: "Product & Growth - Structured Learning Program",
      company: "GrowthX Club, Remote",
      link: "https://growthx.club/",
      period: "2024-Present",
      description: "Completed an immersive learning program at GrowthX Club to expand knowledge of Product & Growth levers."
    },
    {
      icons: [ GraduationCap ],
      title: "Bachelor of Engineering in Electronics & Computer Engineering",
      company: "Thapar Institute of Engineering & Technology, Patiala, Punjab, India",
      link: "https://www.thapar.edu/",
      period: "2015-2019",
      description: "Completed my engineering in Electronics & Computers Engineering from a NAAC A++ accredited prestigious university"
    }
  ];

  return (
    <section id="journey" className="py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Professional Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {professional_experience.map((milestone, index) => (
            <Card key={index} className="border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {milestone.icons.map((Icon, iconIndex) => (<Icon key={iconIndex} className="h-6 w-6 text-primary" />
                  ))}
                </div>
                <CardTitle>{milestone.title}</CardTitle>
                <CardDescription>
                  <a href={milestone.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {milestone.company} </a> | {milestone.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <br/>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education_and_community_involvement.map((milestone, index) => (
            <Card key={index} className="border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {milestone.icons.map((Icon, iconIndex) => (<Icon key={iconIndex} className="h-6 w-6 text-primary" />
                  ))}
                </div>
                <CardTitle>{milestone.title}</CardTitle>
                <CardDescription>
                  <a href={milestone.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {milestone.company} </a> | {milestone.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Journey;
