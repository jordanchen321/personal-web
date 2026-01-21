"use client";

import Image from "next/image";
import publicationsData from "@/data/publications.json";
import projectsData from "@/data/projects.json";
import rolesData from "@/data/roles.json";
import skillsData from "@/data/skills.json";

const ExternalLinkIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function Home() {
  const { publications } = publicationsData;
  const { projects } = projectsData;
  const { roles } = rolesData;
  const { skills } = skillsData;


  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="w-full max-w-[240px] mx-auto aspect-square relative rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/profile.jpg"
                alt="Jordan Chen"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4 w-full lg:max-w-[240px] lg:mx-auto">
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a
                  href="mailto:Jordanchen321@gmail.com"
                  className="text-white hover:underline"
                >
                  Jordanchen321@gmail.com
                </a>
              </div>

              {/* Links */}
              <div className="space-y-2">
                <a
                  href="/Jordan Chen - Copy.pdf"
                  target="_blank"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <span>CV</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/jordanchen321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <span>GitHub</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/jordanchen321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <span>LinkedIn</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2.5 w-full lg:max-w-[240px] lg:mx-auto pt-4 border-t border-gray-800">
              <h2 className="text-sm font-semibold">Skills</h2>
              
              <div className="space-y-2.5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="space-y-1">
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{category}</h3>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="text-[10px] px-1.5 py-0.5 bg-gray-900 border border-gray-800 text-gray-300 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Name */}
            <h1 className="text-4xl md:text-5xl font-bold">Jordan Chen</h1>

            {/* About Me */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">About Me</h2>
              <div className="space-y-3 text-gray-200 leading-relaxed">
                <p>
                I'm a student at the <strong>University of California San Diego </strong> 
                pursuing a <strong>B.S. in Mathematics Computer Science</strong> with minors 
                in <strong>Data Science</strong> and <strong>Cognitive Science</strong>. 
                GPA: <strong>4.0/4.0</strong>
                </p>
                <p>
                This site showcases my projects and explorations in computing, 
                data analysis, and cognitive modeling, reflecting my 
                passion for turning complex ideas into practical solutions.
                </p>
              </div>
            </div>

            {/* Timeline - Roles */}
            <div className="space-y-8 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-semibold">Experience</h2>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {roles.map((role, index) => (
                    <div key={role.id} className="relative flex items-start">
                      {/* Timeline Dot */}
                      <div className={`absolute left-3 w-3 h-3 rounded-full border-2 border-gray-800 ${
                        role.isCurrent ? 'bg-green-500 border-green-500' : 'bg-gray-700'
                      } z-10`}></div>
                      
                      {/* Content */}
                      <div className="ml-10 space-y-2">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <h3 className="text-xl font-semibold">
                            <strong>{role.title}</strong>
                          </h3>
                          {role.isCurrent && (
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="text-gray-300">
                          <span className="font-medium">{role.organization}</span>
                          {role.location && (
                            <span className="text-gray-400"> · {role.location}</span>
                          )}
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          {role.startDate} - {role.endDate}
                        </div>
                        
                        {role.description && (
                          <p className="text-gray-200 leading-relaxed mt-2">
                            {role.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-8 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-semibold">Projects</h2>

              {projects.map((project) => (
                <div key={project.id} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
                    {/* Project Image/Diagram */}
                    <div className="w-full relative h-auto min-h-[180px] rounded-lg overflow-hidden bg-gray-900 border border-gray-800 self-start">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-gray-500 text-xs p-4">
                            <svg
                              className="w-12 h-12 mx-auto mb-2 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p>Add image at /public/project-placeholder.jpg</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Project Details */}
                    <div className="space-y-3">
                      {project.status && (
                        <div className="text-sm text-gray-400">{project.status}</div>
                      )}
                      <h3 className="text-xl font-semibold">
                        <strong>{project.title}</strong>
                      </h3>
                      <p className="text-gray-200 leading-relaxed">
                        {project.description}
                      </p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>GitHub</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Demo</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Website</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {project.links.documentation && (
                          <a
                            href={project.links.documentation}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Documentation</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Publications */}
            <div className="space-y-8 pt-8 border-t border-gray-800">
              <h2 className="text-2xl font-semibold">Publications</h2>

              {publications.map((pub) => (
                <div key={pub.id} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">
                    {/* Publication Image/Diagram */}
                    <div className="w-full relative h-auto min-h-[180px] rounded-lg overflow-hidden bg-gray-900 border border-gray-800 self-start">
                      {pub.image ? (
                        <Image
                          src={pub.image}
                          alt={pub.title}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-gray-500 text-xs p-4">
                            <svg
                              className="w-12 h-12 mx-auto mb-2 text-gray-700"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p>Add image at /public/publication-placeholder.jpg</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Publication Details */}
                    <div className="space-y-3">
                      <div className="text-sm text-gray-400">
                        {pub.conference} {pub.year}
                      </div>
                      <h3 className="text-xl font-semibold">
                        <strong>{pub.title}</strong>
                      </h3>
                      <p className="text-gray-300">{pub.authors}</p>
                      {pub.description && (
                        <p className="text-gray-200 text-sm italic">{pub.description}</p>
                      )}
                      {pub.status && (
                        <p className="text-gray-400 italic">{pub.status}</p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm">
                        {pub.links.doi && (
                          <a
                            href={pub.links.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>DOI</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {pub.links.paper && (
                          <a
                            href={pub.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Paper</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {pub.links.website && (
                          <a
                            href={pub.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Website</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                        {pub.links.package && (
                          <a
                            href={pub.links.package}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-white hover:underline"
                          >
                            <span>Package</span>
                            <ExternalLinkIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <a
        href="/Jordan Chen - Copy.pdf"
        download="Jordan-Chen-Resume.pdf"
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium border border-gray-700 shadow-lg transition-colors z-50 flex items-center gap-2"
        aria-label="Download Resume PDF"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Resume
      </a>
    </div>
  );
}
