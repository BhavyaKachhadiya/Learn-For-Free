import ChannelList from 'src/app/components/Functions/All';
import webDevelopmentChannels from 'src/app/API/WebDev.json';

export default function Home() {
  return (
    <>
    <div class="container">
      <h1 style={{marginBottom: 50 +"px"}}>WebsiteDevelopment</h1>
    <ChannelList channels={webDevelopmentChannels} category="Web Development" />
    </div>
    </>
  );
}
