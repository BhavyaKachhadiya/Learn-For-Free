import Image from 'next/image';
import graphicDesignChannels from 'src/app/API/graphicDesign.json';
import styles from 'src/app/page.module.css'; 
// import webDevelopmentChannels from './webDevelopmentChannels.json';

export default function GraphicDesign() {
  const mystyle = {
    width: "90px",
    borderRadius: "50%",
    marginTop: "10px"

  };
  return (
    <>
  
    <div class="d-flex gap-5 flex-wrap  justify-content-center justify-content-md-start mb-5">
      {graphicDesignChannels.map((channel) => (
        <div key={channel.id}>
          <div class="card" style={{width: 18 + 'rem' }}>
           <div class={styles.img_img}>
  <Image src={channel.img} style={mystyle} width={90} height={90} class="card-img-top img" alt={channel.name}/>
       </div>
    <div class="card-body">
    <h5 class="card-title"style={{height: "35px"}} >{channel.name}</h5>
    <div className="d-flex align-items-center justify-content-between" style={{marginTop: "20px"}}>
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

