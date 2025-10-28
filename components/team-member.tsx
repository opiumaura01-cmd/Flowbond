"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  expertise: string[]
  image: string
  linkedin?: string
  email?: string
}

export function TeamMember({ name, role, bio, expertise, image, linkedin, email }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          <div
            className={`absolute inset-0 bg-primary/10 rounded-full transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-primary mb-2 font-[family-name:var(--font-poppins)]">{name}</h3>
          <div
            className={`text-secondary font-medium transition-all duration-300 ${
              isHovered ? "opacity-100 transform translate-y-0" : "opacity-70 transform translate-y-1"
            }`}
          >
            {role}
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{bio}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {expertise.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 bg-secondary/10 rounded-full text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}
