import './titleWork.css'

function TitleWork({ titulo }) {
    return(
        <div id='t-work-container' className='flex justify-center'>
            <h1 id='t-work-title' className='text-xl'>{titulo}</h1>
        </div>
    );
}

export default TitleWork;