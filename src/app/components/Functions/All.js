import Image from 'next/image';
import styles from 'src/app/page.module.css';

export default function ChannelList({ channels, category }) {
  if (!channels) {
    return <div>Loading...</div>;
  }

  const mystyle = {
    width: "90px",
    borderRadius: "50%",
    marginTop: "10px"
  };

  const badgeColors = {
    "Web Development": "blue",
    "Graphic Design": "red",
    "3D": "green",
  }

  if (channels.length === 0) {
    return <div>No channels found.</div>;
  }

  return (
    <>
      <div className="d-flex gap-5 flex-wrap justify-content-center justify-content-md-start mb-5">
        {channels.map((channel) => (
          <div key={channel.name}>
            <div className="card" style={{ width: 18 + 'rem' }}>
              <div className={styles.img_img}>
                <Image src={channel.img} style={mystyle} width={90} height={90} className="card-img-top img" alt={channel.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ height: "35px" }}>{channel.name}</h5>
                <div className="d-flex align-items-center justify-content-between" style={{ marginTop: "20px" }}>
                  <span className={"badge " + badgeColors[category]}>{category}</span>
                  <a href={channel.url} className="btn btn-primary">Button</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
