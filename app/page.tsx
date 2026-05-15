"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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

const PROJECTS_PER_PAGE = 3;

function ProjectSlotPlaceholder() {
  return (
    <div className="space-y-3 pointer-events-none select-none" aria-hidden>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start opacity-30">
        <div className="w-full min-h-[180px] rounded-lg border border-dashed border-gray-700 bg-gray-950/40 self-start" />
        <div className="min-h-[200px] rounded-lg border border-dashed border-gray-700 bg-gray-950/40 md:min-h-[220px]" />
      </div>
    </div>
  );
}

type ProjectLinks = {
  github: string | null;
  demo: string | null;
  website: string | null;
  documentation: string | null;
};

type ProjectCard = {
  id: number;
  title: string;
  bulletPoints?: string[];
  technologies?: string[];
  links: ProjectLinks;
  image: string | null;
  status: string | null;
};

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

function ProjectBulletList({
  project,
  expanded,
  onToggle,
  githubUrl,
  demoUrl,
}: {
  project: ProjectCard;
  expanded: boolean;
  onToggle: () => void;
  githubUrl: string | null;
  demoUrl: string | null;
}) {
  const bullets = project.bulletPoints ?? [];
  if (bullets.length === 0) return null;

  const previewCount = Math.min(2, bullets.length);
  const hasMore = bullets.length > previewCount;
  const previewBullets = bullets.slice(0, previewCount);
  const extraBullets = hasMore ? bullets.slice(previewCount) : [];
  const showLinkRow = Boolean(githubUrl || demoUrl || hasMore);

  return (
    <div className="space-y-2">
      <ul className="text-gray-200 leading-relaxed list-disc list-outside pl-5 space-y-2">
        {previewBullets.map((item, i) => (
          <li key={`${project.id}-p-${i}`}>{item}</li>
        ))}
      </ul>
      {hasMore && (
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="text-gray-200 leading-relaxed list-disc list-outside pl-5 space-y-2 pb-0.5">
              {extraBullets.map((item, i) => (
                <li key={`${project.id}-e-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showLinkRow && (
        <div className="flex items-center justify-between gap-4 pt-1 w-full">
          <div className="min-w-0 flex flex-wrap items-center gap-x-4 gap-y-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white hover:underline shrink-0"
              >
                <span>GitHub</span>
                <ExternalLinkIcon />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-white hover:underline shrink-0"
              >
                <span>Demo</span>
                <ExternalLinkIcon />
              </a>
            )}
          </div>
          <div className="shrink-0">
            {hasMore && (
              <button
                type="button"
                onClick={onToggle}
                className="group flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <span className="border-b border-transparent transition-[border-color] duration-200 group-hover:border-gray-400">
                  {expanded ? "Read less" : "Read more"}
                </span>
                <ChevronDownIcon
                  className={`shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                    expanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { projects } = projectsData;
  const { roles } = rolesData;
  const { skills } = skillsData;
  const [projectExpanded, setProjectExpanded] = useState<Record<number, boolean>>({});
  const [projectPage, setProjectPage] = useState(0);

  const totalProjectPages = Math.max(1, Math.ceil(projects.length / PROJECTS_PER_PAGE));
  const pagedProjects = useMemo(() => {
    const start = projectPage * PROJECTS_PER_PAGE;
    return projects.slice(start, start + PROJECTS_PER_PAGE);
  }, [projects, projectPage]);

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 lg:p-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="w-full max-w-[240px] mx-auto aspect-square relative rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/images/profile.png"
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
                  href="/Jordan Chen.pdf"
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
                  href="https://www.linkedin.com/in/jordanchen321"
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
                  I&apos;m a student at the{" "}
                  <strong>University of California San Diego</strong> (expected{" "}
                  <strong>June 2028</strong>) pursuing a{" "}
                  <strong>B.S. in Mathematics Computer Science</strong> with minors in{" "}
                  <strong>Data Science</strong> and <strong>Cognitive Science</strong>.
                </p>
                <p>
                  I work at the intersection of full stack development, data visualization,
                  and human computer interaction, with interests in AI tooling, computer vision,
                  and statistical modeling.
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
                            <strong>{role.organization}</strong>
                          </h3>
                          {role.isCurrent && (
                            <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="text-gray-300">
                          <span className="font-medium">{role.title}</span>
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

              <div
                key={projectPage}
                className="projects-page-enter flex flex-col gap-8"
              >
                {pagedProjects.map((project) => (
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
                      <ProjectBulletList
                        project={project as ProjectCard}
                        expanded={!!projectExpanded[project.id]}
                        githubUrl={project.links.github}
                        demoUrl={project.links.demo}
                        onToggle={() =>
                          setProjectExpanded((prev) => ({
                            ...prev,
                            [project.id]: !prev[project.id],
                          }))
                        }
                      />
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
                      {(project.links.website || project.links.documentation) && (
                      <div className="flex flex-wrap gap-4 text-sm">
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
                      )}
                    </div>
                  </div>
                </div>
                ))}
                {Array.from({
                  length: Math.max(0, PROJECTS_PER_PAGE - pagedProjects.length),
                }).map((_, i) => (
                  <ProjectSlotPlaceholder key={`slot-${projectPage}-${i}`} />
                ))}
              </div>
              {totalProjectPages > 1 && (
                <nav
                  className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-800"
                  aria-label="Project pages"
                >
                  <button
                    type="button"
                    disabled={projectPage <= 0}
                    onClick={() => setProjectPage((p) => Math.max(0, p - 1))}
                    className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-gray-900 hover:border-gray-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-gray-700"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-400">
                    Page {projectPage + 1} of {totalProjectPages}
                  </span>
                  <button
                    type="button"
                    disabled={projectPage >= totalProjectPages - 1}
                    onClick={() =>
                      setProjectPage((p) =>
                        Math.min(totalProjectPages - 1, p + 1)
                      )
                    }
                    className="rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-gray-900 hover:border-gray-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-gray-700"
                  >
                    Next
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <a
        href="/Jordan Chen.pdf"
        download="Jordan Chen.pdf"
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
