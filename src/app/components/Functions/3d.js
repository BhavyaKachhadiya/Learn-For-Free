import Three_dChannels from 'src/app/API/3d.json';
// import webDevelopmentChannels from './webDevelopmentChannels.json';

export default function Threed() {
  return (
    <div>
      {/* <h2>Graphic Design Channels</h2> */}
      <ul>
        {Three_dChannels.map((channel) => (
          <li key={channel.url}>
            <a href={channel.url}>{channel.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

