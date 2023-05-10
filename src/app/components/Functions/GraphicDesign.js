import Image from 'next/image';
import graphicDesignChannels from 'src/app/API/graphicDesign.json';
// import webDevelopmentChannels from './webDevelopmentChannels.json';

export default function GraphicDesign() {
  return (
    <>
  
    <div class="d-flex gap-5 flex-wrap  justify-content-center justify-content-md-start">
      {graphicDesignChannels.map((channel) => (
        <div >
          <div class="card" style={{width: 18 + 'rem'}}>
  <img src={channel.img} class="card-img-top img" alt={channel.name}/>
    <div class="card-body">
    <h5 class="card-title">{channel.name}</h5>
    <div className="d-flex align-items-center justify-content-between">
              <span class="badge bg-secondary">Graphic Design</span>
              <a href={channel.url} class="btn btn-primary">Button</a>
    </div>
  </div>
</div>
        
        </div>
          
        ))}
    </div>
   
    </>
  );
}

