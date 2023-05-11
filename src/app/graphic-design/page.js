import ChannelList from 'src/app/components/Functions/All';
import graphicDesignChannels from 'src/app/API/graphicDesign.json';

export default function GraphicDesignPage() {
  return (
    <>
    <div class="container">
      <h1 style={{marginBottom: 50 +"px"}}>Graphic Design</h1>
    <ChannelList channels={graphicDesignChannels} category="Graphic Design" />
    </div>
    </>
  );
}
