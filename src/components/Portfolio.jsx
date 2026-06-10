import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Jacksonville HVAC Pros',
    type: 'Lead Generation Website',
    result: '42% Increase in Quote Requests',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop', // HVAC/Trade photo
    link: '#'
  },
  {
    id: 2,
    name: 'Harbor Legal Associates',
    type: 'Professional Services Platform',
    result: 'Local SEO Ranking: #1 for "Corporate Law"',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop', // Law office photo
    link: '#'
  },
  {
    id: 3,
    name: 'Coastal Roofers (Demo)',
    type: 'High-Converting Landing Page',
    result: 'Designed for 15%+ Conversion Rate',
    image: 'https://images.unsplash.com/photo-1632758925528-76503b41315d?q=80&w=1200&auto=format&fit=crop', // Roofing photo
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="section" style={{ background: '#F4F7FA' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--navy-primary)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Case Studies & Demos
          </span>
          <h2 className="heading-lg" style={{ color: 'var(--navy-primary)' }}>
            We build assets, not just aesthetics.
          </h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>
            Here is a selection of recent projects and high-performance demos built specifically for local service businesses.
          </p>
        </div>

        <div className="grid-3">
          {projects.map((project) => (
            <div key={project.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              
              {/* Image Container */}
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundImage: `url(${project.image})`, 
                  backgroundPosition: 'center', 
                  backgroundSize: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                className="hover-zoom"
                />
              </div>
              
              {/* Content Container */}
              <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--navy-primary)', marginBottom: '0.25rem' }}>
                  {project.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {project.type}
                </p>
                
                {/* Highlighted Result Badge */}
                <div style={{ 
                  background: 'var(--navy-light)', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '6px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  marginTop: 'auto',
                  marginBottom: '1.5rem'
                }}>
                  <TrendingUp size={20} color="var(--accent-cta)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--navy-primary)' }}>
                    {project.result}
                  </span>
                </div>

                <a 
                  href={project.link}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--accent-cta)', 
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
