import React, { useEffect } from 'react';
import resources from './ressurser';
import PageTitle from './PageTitle';

function Resources({ category }) {
  const filteredResources = resources.filter(resource => resource.category === category);

  useEffect(() => {
    document.title = `${category} - Ressursarkiv`;
  }, [category]);

  return (
    <div>
      <PageTitle category={category} />
      <ul>
        {filteredResources.map(resource => (
          <li key={resource.url}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
