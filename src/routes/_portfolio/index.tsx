import { createFileRoute } from '@tanstack/react-router'

import CountUp from '#/components/react-bits/count-up'
import MainStack from '#/components/routes/index/main-stack'
import Techs from '#/components/routes/index/techs'
import Education from '#/components/sections/education'
import Experience from '#/components/sections/experience'
import Projects from '#/components/sections/projects'
import Contact from '#/components/sections/contact'

import avatar from '@/assets/images/profile_pic.png'

export const Route = createFileRoute('/_portfolio/')({
  component: RouteComponent,
  head: () => ({
    links: [{ rel: 'preload', href: avatar, as: 'image' }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Diego Saravia',
          hasOccupation: {
            '@type': 'Role',
            '@id': new Date().getDate().toString(),
            roleName: 'Senior Fullstack Developer',
            startDate: '2024-03-01',
          },
        }),
      },
    ],
  }),
})

function RouteComponent() {
  const yearsOfExperiencie = new Date().getFullYear() - 2017

  return (
    <>
      <h1 className="text-center text-5xl font-bold uppercase sm:text-6xl lg:text-start xl:text-7xl">
        Ingeniero de <span className="text-chart-4">Software</span>
      </h1>
      <h2 className="mt-4 text-justify text-[1rem] sm:text-[1.25rem] xl:text-start">
        Apasionado por la construcción de excelentes apliaciones web intuitivas
        con experiencia de usuario profesional.
      </h2>
      <div className="mt-5 flex items-center gap-4">
        <span className="text-6xl font-bold sm:text-8xl">
          +<CountUp to={yearsOfExperiencie} delay={0.5} />
        </span>
        <span className="text-[0.9rem] sm:text-2xl">
          años de experiencia desarrollando software profesional.
        </span>
      </div>
      <MainStack />
      <Techs />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
