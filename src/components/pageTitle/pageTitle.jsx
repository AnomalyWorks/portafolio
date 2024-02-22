import './pageTitle.css'

function PageTitle(props) {
    return(
        <div id='page-t-container' className=' mt-8 mb-4 flex items-center justify-center w-full'>
            <h1 id='page-t-title' className='text-xl'>{props.titulo}</h1>
        </div>
    );
}

export default PageTitle;