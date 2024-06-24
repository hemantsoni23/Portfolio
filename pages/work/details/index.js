// /pages/work/details/index.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Static project details object
const projectDetails = {
  ChatViz: {
    title: 'ChatViz',
    paths: ['/chatviz.avif', '/chatviz2.avif'],
    description: 'ChatViz is a project that visualizes chat data.',
    goals: ['Visualize data', 'User-friendly interface'],
    techStack: 'React, D3.js, Node.js',
    deployLink: 'https://chatviz.com',
    codeLink: 'https://github.com/hemantsoni42/ChatViz',
  },
  CelebLook: {
    title: 'CelebLook',
    paths: ['/celeblook1.avif', '/celeblook2.avif'],
    description: 'CelebLook is a project that analyzes celebrity styles.',
    goals: ['Analyze styles', 'Provide fashion insights'],
    techStack: 'Python, TensorFlow, Flask',
    deployLink: null,
    codeLink: 'https://github.com/hemantsoni42/CelebLook',
  },
  // Add other projects here
};

const ProjectDetails = () => {
  const router = useRouter();
  const { title } = router.query;

  const project = projectDetails[title];

  if (!project) {
    return <div className='container mx-auto py-36 px-4'>Project not found.</div>;
  }

  return (
    <div className='container mx-auto py-36 px-4'>
      {/* Project Title */}
      <h1 className='text-4xl font-bold mb-8 text-center'>{project.title}</h1>
      
      {/* Project Images/Videos */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        {project.paths.map((path, index) => (
          <div key={index} className='relative w-full h-64'>
            <Image src={path} alt={`Project image ${index + 1}`} width={200} height={200} className='rounded-lg object-cover w-full h-full' />
          </div>
        ))}
      </div>

      {/* Project Description */}
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Description</h2>
        <p className='text-lg leading-loose'>{project.description}</p>
      </div>

      {/* Project Goals */}
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Goals</h2>
        <ul className='list-disc list-inside'>
          {project.goals.map((goal, index) => (
            <li key={index} className='text-lg leading-loose'>{goal}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
        <p className='text-lg leading-loose'>{project.techStack}</p>
      </div>

      {/* Links */}
      <div className='flex flex-col md:flex-row items-center gap-4'>
        {project.deployLink && (
          <Link href={project.deployLink}>
            <h1 className='bg-blue-600 text-white px-4 py-2 rounded-lg' >View Deployment</h1>
          </Link>
        )}
        {project.codeLink && (
          <Link href={project.codeLink}>
            <h1 className='bg-gray-800 text-white px-4 py-2 rounded-lg' >View Source Code</h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
