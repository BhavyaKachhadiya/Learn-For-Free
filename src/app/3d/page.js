import ChannelList from 'src/app/components/Functions/All';
import ThreedChannels from 'src/app/API/3d.json';

export default function GraphicDesignPage() {
  return (
    <>
    <div class="container">
      <h1 style={{marginBottom: 50 +"px"}}>Graphic Design</h1>
    <ChannelList channels={ThreedChannels} category="3D" />
    </div>
    </>
  );
}
