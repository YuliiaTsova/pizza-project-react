import ContentLoader from 'react-content-loader';

export const Loader = ({ props }) => (
  <ContentLoader
    speed={2}
    width={340}
    height={450}
    viewBox="0 0 340 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ width: '100%', height: '100%' }}
    {...props}
  >
    <rect x="7" y="260" rx="20" ry="20" width="333" height="123" />
    <rect x="7" y="400" rx="20" ry="20" width="128" height="40" />
    <rect x="155" y="400" rx="20" ry="20" width="176" height="40" />
    <circle cx="171" cy="107" r="104" />
    <rect x="80" y="224" rx="11" ry="11" width="185" height="21" />
  </ContentLoader>
);
