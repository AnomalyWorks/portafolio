function VideoImg(props) {
    return (
        <div className=" flex justify-center mb-12">
            <video className=" w-full rounded-lg overflow-hidden shadow-[0_35px_20px_-15px_rgba(1,1,1,0.6)]" autoPlay loop>
                <source src={props.src}  type="video/webm"/>
            </video>
        </div>
    )
}

export default VideoImg;