// import graphicDesignChannels from '../API/graphicDesign.json';
import webDevelopmentChannels from '/My own projects/LearnForFree/learnforfree/src/app/API/WebDev.json';



export default function WebDevelopmentChannel() {
  return (
    <div>
      {/* <h2>Web Development Channels</h2> */}
      <ul>
        {webDevelopmentChannels.map((channel) => (
          <li key={channel.url}>
            <a href={channel.url}>{channel.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
