import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// Import images
import ahmetImage from "../../assets/ahmet_coskun_kizilkaya.jpeg";
import melihImage from "../../assets/melih_solakoglu.jpeg";
import samuelImage from "../../assets/samuel_evans.jpeg";

const TeamSection = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Ahmet Coşkun Kızılkaya",
      role: "Co-Founder",
      bio: "With over 3 years of industry experience, Ahmet leads the company's strategic vision and operations.",
      image: ahmetImage,
      initials: "ACK",
      socialLinks: {
        linkedin: "https://linkedin.com/in/ahmetcoskunkizilkaya",
        twitter: "https://x.com/ahmetk3436",
        github: "https://github.com/ahmetk3436",
      },
    },
    {
      name: "Melih Solakoğlu",
      role: "Co-Founder",
      bio: "Melih oversees all technical aspects of the company with expertise in AI and cloud solutions.",
      image: melihImage,
      initials: "MS",
      socialLinks: {
        linkedin: "https://linkedin.com/in/melih-solakoğlu",
        twitter: "https://x.com/melih_solakoglu",
        github: "https://github.com/melihsolakoglu",
      },
    },
    {
      name: "Samuel Evans",
      role: "Co-Founder",
      bio: "Talented 2D/3D artist with expertise in creating stunning visuals for games, websites and mobile applications. Specializes in character design, environment art, and UI/UX illustrations.",
      image: samuelImage,
      initials: "SE",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/samuelevans34/",
        twitter: "https://x.com/samuel_sy0",
        github: "https://github.com/samuel-evans",
      },
    },
      {
      name: "Murat Demir",
      role: "Co-Founder",
      bio: "Leads financial planning and business development efforts, aligning growth strategies with operational execution.",
      image: samuelImage,
      initials: "SE",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/samuelevans34/",
        twitter: "https://x.com/samuel_sy0",
        github: "https://github.com/samuel-evans",
      },
    },
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Meet the talented professionals behind StardashTech's innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-border hover:shadow-lg transition-all group"
            >
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-6 flex justify-center">
                <Avatar className="w-32 h-32 border-4 border-background">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4">
                  {Object.entries(member.socialLinks).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      aria-label={`${member.name}'s ${key}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {key === "linkedin" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      )}
                      {key === "twitter" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      )}
                      {key === "github" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      )}
                      {key === "dribbble" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team is growing! We're always looking for talented individuals to join our mission. 
            Check out our <a href="#careers" className="text-primary hover:underline">careers page</a> for open positions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;